const state = { skills: [], query: "", category: "All skills", visible: 36 };
const grid = document.querySelector("#skill-grid");
const count = document.querySelector("#result-count");
const categoryList = document.querySelector("#categories");
const search = document.querySelector("#skill-search");
const clear = document.querySelector("#clear-search");
const loadMore = document.querySelector("#load-more");
const empty = document.querySelector("#empty-state");

function matches(skill) {
  const term = state.query.trim().toLowerCase();
  return (state.category === "All skills" || skill.category === state.category) && (!term || `${skill.title} ${skill.description} ${skill.category}`.toLowerCase().includes(term));
}

function renderCategories() {
  const categoryCounts = new Map();
  state.skills.forEach((skill) => categoryCounts.set(skill.category, (categoryCounts.get(skill.category) || 0) + 1));
  const categories = [["All skills", state.skills.length], ...[...categoryCounts].sort((a, b) => b[1] - a[1])];
  categoryList.innerHTML = categories.map(([name, total]) => `<button class="${state.category === name ? "active" : ""}" data-category="${name}">${name === "All skills" ? "All" : name} <span>${total}</span></button>`).join("");
  document.querySelector("#category-total").textContent = categoryCounts.size;
}

function render() {
  const filtered = state.skills.filter(matches);
  count.textContent = `${filtered.length} ${filtered.length === 1 ? "skill" : "skills"} found`;
  grid.innerHTML = filtered.slice(0, state.visible).map((skill) => `<article class="skill-card"><div class="card-topline"><span class="category-tag">${skill.category}</span><span>${skill.pack}</span></div><h3>${skill.title}</h3><p>${skill.description}</p><div class="card-actions"><a class="download-button" href="${skill.download}" download><span>↓</span> Download ZIP</a><a class="source-link" href="${skill.source}" target="_blank" rel="noreferrer">View source</a></div></article>`).join("");
  grid.hidden = filtered.length === 0;
  empty.hidden = filtered.length !== 0;
  loadMore.hidden = state.visible >= filtered.length;
  clear.hidden = !state.query;
  renderCategories();
}

categoryList.addEventListener("click", (event) => { const button = event.target.closest("button[data-category]"); if (!button) return; state.category = button.dataset.category; state.visible = 36; render(); });
search.addEventListener("input", () => { state.query = search.value; state.visible = 36; render(); });
clear.addEventListener("click", () => { search.value = ""; state.query = ""; render(); search.focus(); });
loadMore.addEventListener("click", () => { state.visible += 36; render(); });
document.querySelector("#reset-filters").addEventListener("click", () => { search.value = ""; state.query = ""; state.category = "All skills"; render(); });

fetch("skills-data.json").then((response) => response.json()).then((skills) => { state.skills = skills; document.querySelector("#skill-total").textContent = skills.length; render(); }).catch(() => { count.textContent = "The skill list could not be loaded."; });
