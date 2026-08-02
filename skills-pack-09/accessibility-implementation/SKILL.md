---
title: Web Accessibility Implementation Guide
description: Master ARIA patterns, keyboard navigation, screen reader testing, focus management, and compliance
author: Claude Skills 360
date: 2026-03-17
category: Frontend
tags: [Accessibility, ARIA, A11y, Compliance, Testing]
skill_level: Intermediate
estimated_time: 50 minutes
---

# Web Accessibility Implementation Guide

## ARIA Fundamentals

### ARIA Roles, States, and Properties
Add semantic meaning to custom components:

```html
<!-- Button with custom markup -->
<div role="button" tabindex="0" aria-pressed="false" @keydown="handleKeydown">
  Toggle Feature
</div>

<!-- Live region for dynamic updates -->
<div role="status" aria-live="polite" aria-atomic="true" id="alert-region">
  Item added to cart
</div>

<!-- Dialog/Modal -->
<div role="dialog" aria-labelledby="dialog-title" aria-modal="true">
  <h2 id="dialog-title">Confirm Action</h2>
  <p>Are you sure?</p>
</div>

<!-- Tabs -->
<div role="tablist">
  <button
    role="tab"
    aria-selected="true"
    aria-controls="panel-1"
    id="tab-1"
  >
    Tab 1
  </button>
  <button
    role="tab"
    aria-selected="false"
    aria-controls="panel-2"
    id="tab-2"
  >
    Tab 2
  </button>
</div>

<div role="tabpanel" id="panel-1" aria-labelledby="tab-1">
  Content 1
</div>

<div role="tabpanel" id="panel-2" aria-labelledby="tab-2" hidden>
  Content 2
</div>

<!-- Combobox -->
<div role="combobox" aria-expanded="false" aria-owns="listbox-id">
  <input type="text" aria-autocomplete="list" />
</div>

<ul role="listbox" id="listbox-id">
  <li role="option">Option 1</li>
  <li role="option" aria-selected="true">Option 2</li>
</ul>
```

### Common ARIA Attributes
```html
<!-- aria-label: Accessible name -->
<button aria-label="Close menu">×</button>

<!-- aria-labelledby: Link label to heading -->
<h2 id="section-title">Important Section</h2>
<div aria-labelledby="section-title">Content</div>

<!-- aria-describedby: Additional description -->
<input type="password" aria-describedby="pwd-hint" />
<span id="pwd-hint">Min 8 characters, includes number</span>

<!-- aria-hidden: Hide from screen readers -->
<span aria-hidden="true">→</span>

<!-- aria-live: Announce dynamic updates -->
<div aria-live="assertive" aria-atomic="true">
  Error: Invalid email
</div>

<!-- aria-expanded: Toggle expand/collapse state -->
<button aria-expanded="false" aria-controls="menu-id">
  Menu
</button>

<!-- aria-disabled: Disabled state -->
<button aria-disabled="true">Disabled Button</button>

<!-- aria-current: Mark current page in navigation -->
<a href="/" aria-current="page">Home</a>
<a href="/about">About</a>
```

## Keyboard Navigation

### Focusable Elements
Ensure keyboard navigation works:

```html
<!-- Use native elements when possible (inherently focusable) -->
<button>Native Button</button>
<a href="/">Native Link</a>
<input type="text" />
<select></select>

<!-- Custom button needs tabindex and keyboard handling -->
<div
  role="button"
  tabindex="0"
  @keydown="handleKeydown"
  @click="handleClick"
>
  Custom Button
</div>

<!-- Skip link for keyboard users -->
<a href="#main-content" class="skip-link">
  Skip to main content
</a>

<!-- Logical tab order -->
<form>
  <input type="text" placeholder="First" />
  <!-- tabindex should rarely be used; use natural DOM order -->
  <input type="email" placeholder="Email" />
  <textarea placeholder="Message"></textarea>
  <button type="submit">Submit</button>
</form>

<!-- Avoid positive tabindex -->
<!-- tabindex="0" is good (natural order) -->
<!-- tabindex="-1" is good (programmatically focusable, not in tab order) -->
<!-- tabindex="5" is bad (creates unnatural tab order) -->
```

### Keyboard Event Handling
Handle keyboard interactions correctly:

```javascript
// Custom button keyboard handling
const customButton = document.querySelector('[role="button"]');

customButton.addEventListener('keydown', (event) => {
  // Handle Enter and Space
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    customButton.click();
  }
});

// Tab panel keyboard navigation
const tabs = document.querySelectorAll('[role="tab"]');
const tablist = document.querySelector('[role="tablist"]');

tablist.addEventListener('keydown', (event) => {
  let tabToFocus;

  switch (event.key) {
    case 'ArrowLeft':
      event.preventDefault();
      tabToFocus = event.target.previousElementSibling;
      if (!tabToFocus) {
        tabToFocus = tabs[tabs.length - 1];
      }
      break;

    case 'ArrowRight':
      event.preventDefault();
      tabToFocus = event.target.nextElementSibling;
      if (!tabToFocus) {
        tabToFocus = tabs[0];
      }
      break;

    case 'Home':
      event.preventDefault();
      tabToFocus = tabs[0];
      break;

    case 'End':
      event.preventDefault();
      tabToFocus = tabs[tabs.length - 1];
      break;
  }

  if (tabToFocus) {
    tabToFocus.focus();
    selectTab(tabToFocus);
  }
});

// Modal keyboard trapping
function createModalKeyTrap(modal) {
  const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  modal.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab') return;

    if (event.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  });
}
```

## Focus Management

### Focus Visibility
Ensure focus indicators are visible:

```css
/* Strong focus indicator */
button:focus,
a:focus,
input:focus {
  outline: 3px solid #4A90E2;
  outline-offset: 2px;
}

/* Remove default outline only when providing custom one */
button:focus-visible {
  outline: 3px solid #4A90E2;
  outline-offset: 2px;
}

/* Don't remove focus when NOT using mouse */
button:focus-visible {
  outline: 3px solid #4A90E2;
}

button:focus:not(:focus-visible) {
  outline: none;
}

/* High contrast mode support */
@media (prefers-contrast: more) {
  button:focus {
    outline: 4px solid currentColor;
    outline-offset: 4px;
  }
}

/* Focus within for form groups */
.form-group:has(input:focus-visible) {
  background: #f5f5f5;
  border: 2px solid #4A90E2;
}
```

### Programmatic Focus Management
Move focus when appropriate:

```javascript
// Set focus after navigation
function openDialog(dialogElement) {
  dialogElement.setAttribute('open', '');

  // Find first focusable element
  const firstButton = dialogElement.querySelector('button');
  if (firstButton) {
    firstButton.focus();
  }
}

function closeDialog(dialogElement) {
  dialogElement.removeAttribute('open');

  // Return focus to trigger element
  const trigger = document.activeElement?.dataset.dialogTrigger;
  if (trigger) {
    document.querySelector(`[data-dialog="${trigger}"]`)?.focus();
  }
}

// Focus management in single-page apps
function navigateToPage(url) {
  // Update content
  fetchAndRender(url);

  // Move focus to main content
  const main = document.querySelector('main');
  if (main) {
    main.setAttribute('tabindex', '-1');
    main.focus();

    // Announce navigation to screen readers
    const heading = main.querySelector('h1');
    if (heading) {
      announceToScreenReader(`Navigated to ${heading.textContent}`);
    }
  }
}

// Skip link functionality
function handleSkipLink(event) {
  event.preventDefault();
  const target = document.querySelector('#main-content');
  if (target) {
    target.setAttribute('tabindex', '-1');
    target.focus();
  }
}
```

## Screen Reader Testing

### Semantic HTML
Use semantic elements for better screen reader support:

```html
<!-- Good: Semantic HTML -->
<header>
  <nav>
    <h1>Site Title</h1>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Article Title</h1>
    <p>Content</p>
  </article>
</main>

<footer>
  <p>Copyright 2024</p>
</footer>

<!-- Avoid: Non-semantic markup -->
<div class="header">
  <div class="nav">
    <div class="title">Site Title</div>
    <div>
      <div><span onclick="navigate('/')">Home</span></div>
    </div>
  </div>
</div>
```

### Headings Hierarchy
Structure content with proper heading levels:

```html
<!-- Good: Proper heading hierarchy -->
<h1>Page Title</h1>

<h2>Section One</h2>
<p>Content</p>

<h3>Subsection</h3>
<p>More content</p>

<h2>Section Two</h2>
<p>Content</p>

<!-- Avoid: Skipping levels -->
<!-- ✗ Don't jump from h1 to h3 -->
<!-- ✗ Don't use h1 multiple times -->
<!-- ✗ Don't use heading for styling -->
```

### Image Alternatives
Provide meaningful alt text:

```html
<!-- Descriptive alt text -->
<img src="/hero.jpg" alt="Team meeting in modern office space" />

<!-- Decorative images -->
<img src="/spacer.gif" alt="" aria-hidden="true" />

<!-- Complex images need detailed description -->
<figure>
  <img src="/chart.png" alt="Sales growth chart" />
  <figcaption>
    Sales increased 25% from Q1 to Q2, with the highest growth in digital
    products.
  </figcaption>
</figure>

<!-- Icons with labels -->
<button>
  <svg aria-hidden="true">
    <!-- SVG content -->
  </svg>
  <span>Download</span>
</button>
```

## Color Contrast & Visual Design

### Sufficient Color Contrast
Meet WCAG standards for readability:

```css
/* WCAG AA: 4.5:1 for normal text, 3:1 for large text */
/* WCAG AAA: 7:1 for normal text, 4.5:1 for large text */

body {
  color: #333333; /* Dark gray on white = 12.6:1 */
  background: #ffffff;
}

/* Low contrast (bad) */
.disabled {
  color: #cccccc; /* Light gray on white = 1.1:1 - FAIL */
  background: #ffffff;
}

/* Better contrast */
.disabled {
  color: #666666; /* 5.74:1 - PASS AA */
  background: #ffffff;
  opacity: 0.6;
}

/* Links must be distinguishable */
a {
  color: #0056b3; /* Blue on white = 8.6:1 */
  text-decoration: underline; /* Not just color */
}

/* Focus states */
button:focus {
  outline: 3px solid #0056b3;
  outline-offset: 2px;
  background: #e7f1ff;
}
```

### Test Color Combinations
```javascript
// Calculate contrast ratio (simplified)
function getContrastRatio(rgb1, rgb2) {
  const l1 = getRelativeLuminance(rgb1);
  const l2 = getRelativeLuminance(rgb2);

  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);

  return (lighter + 0.05) / (darker + 0.05);
}

function getRelativeLuminance(rgb) {
  const [r, g, b] = rgb.map(val => {
    const v = val / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
```

## Testing & Validation

### Automated Testing
Use tools to catch common issues:

```javascript
// Jest test for accessibility
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('button is accessible', async () => {
  const { container } = render(<button>Click me</button>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test('form has proper labels', async () => {
  const { container } = render(
    <form>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" />
    </form>
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### Manual Testing Checklist
```
Keyboard Navigation:
- [ ] All interactive elements are reachable via Tab
- [ ] Tab order is logical and predictable
- [ ] Focus is visible on all elements
- [ ] Escape key closes modals/menus
- [ ] Arrow keys work for custom widgets

Screen Reader Testing:
- [ ] Page structure is clear (landmarks, headings)
- [ ] Form labels are associated correctly
- [ ] Images have meaningful alt text
- [ ] Dynamic content updates are announced
- [ ] Hidden content is marked aria-hidden

Visual Testing:
- [ ] Sufficient color contrast (4.5:1)
- [ ] Text can be resized without breaking layout
- [ ] No content is lost with high zoom (200%)
- [ ] Focus indicators are visible

Mobile/Touch:
- [ ] Touch targets are at least 44x44px
- [ ] Pinch-to-zoom is not disabled
- [ ] Portrait and landscape work
```

## Best Practices Summary

1. **Use Semantic HTML First** — Avoid custom components when native elements work
2. **Test with Real Tools** — Screen readers, keyboard, browser extensions
3. **Maintain Focus Management** — Move focus intentionally, show visible indicators
4. **Provide Multiple Ways** — Keyboard, mouse, voice, touch all supported
5. **Contrast Matters** — Aim for WCAG AA minimum (4.5:1)
6. **Test with Users** — People with disabilities provide best feedback
7. **Automate What You Can** — axe, Lighthouse, ESLint plugins catch basics
8. **Document Patterns** — Share accessible components across team

