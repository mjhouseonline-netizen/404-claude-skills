---
name: social-media
description: "Generates social media posts, resizes images per platform specs, and schedules content via Buffer API. Use this skill whenever the user wants to write posts for Twitter/X, Instagram, LinkedIn, Facebook, or TikTok, resize or crop images for social platforms, batch generate content for multiple platforms at once, or schedule posts. Trigger for requests like 'write me a tweet about...', 'create a LinkedIn post', 'resize this image for Instagram', or 'schedule this post'."
---

# Social Media

Generates platform-optimised posts, resizes images to correct dimensions, and schedules via Buffer API.

## Workflow

1. **Understand the content** — what's the topic, tone, and target platform(s)?
2. **Generate posts** — use `scripts/generate_posts.py` or write directly with Claude
3. **Resize images** — use `scripts/resize_images.py` with platform presets
4. **Schedule (optional)** — use `scripts/schedule_buffer.py` if Buffer API key is available
5. **Review and deliver** — show all variants, let user pick or refine

---

## Operations

### 1. Generate posts
Use `scripts/generate_posts.py` — calls Claude API to generate platform-specific posts from a topic or source content.

Key details to confirm:
- Topic or source text to base the post on
- Target platform(s): twitter, instagram, linkedin, facebook, tiktok
- Tone: professional, casual, humorous, inspirational, educational
- Number of variants to generate (default 3)
- Include hashtags? (yes/no per platform)

### 2. Resize images
Use `scripts/resize_images.py` — resizes and crops images to exact platform specs.

Reads `references/platform-specs.md` for current dimension requirements.

Key details:
- Input image path
- Target platform(s) or specific format (e.g. instagram-square, twitter-header)
- Output folder

### 3. Schedule via Buffer
Use `scripts/schedule_buffer.py` — posts content to Buffer queue via API.

Requires: Buffer API token (free plan supports 3 channels, 10 scheduled posts).
Get token at: https://buffer.com/developers/api

---

## Platform character limits

| Platform | Post limit | Notes |
|----------|-----------|-------|
| Twitter/X | 280 chars | Threads for longer content |
| Instagram | 2,200 chars | First 125 chars show before "more" |
| LinkedIn | 3,000 chars | Long-form performs well |
| Facebook | 63,206 chars | Keep under 500 for engagement |
| TikTok | 2,200 chars | Caption + hashtags |

---

## Templates

See `templates/` for post structure templates per platform.
Read `references/platform-specs.md` for image dimensions and format requirements.
