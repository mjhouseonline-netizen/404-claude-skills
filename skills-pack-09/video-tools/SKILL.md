---
name: video-tools
description: "Processes video files using ffmpeg — extract audio, generate subtitles, trim, compress, convert, and add watermarks. Use this skill whenever the user wants to edit or process a video file, extract audio from a video, create subtitles or captions, compress a video for web/social, convert between formats (mp4, webm, gif, etc.), trim or cut a video, or add text overlays. Trigger for requests like 'compress this video', 'extract the audio', 'add subtitles', or 'cut this clip'."
---

# Video Tools

Processes video files using ffmpeg. All operations are non-destructive by default — originals are never overwritten.

> **Requires**: ffmpeg installed and available in PATH.
> See `references/ffmpeg-install.md` for installation instructions.

---

## Workflow

1. **Check ffmpeg is available** — run `ffmpeg -version`, if it fails read `references/ffmpeg-install.md`
2. **Understand the task** — get the input file path and what the user wants
3. **Choose the right script** — see operations below
4. **Run and verify** — show output file path and size after completion

---

## Operations

### 1. Extract audio
Use `scripts/extract_audio.py` — pulls audio track from any video file.

Output formats: mp3, wav, aac, flac (default: mp3)

### 2. Generate subtitles
Use `scripts/subtitles.py` — transcribes video audio to SRT subtitle file using OpenAI Whisper (local, free).

Requires: `pip install openai-whisper`

Can also burn subtitles directly into the video (hardcoded) or produce a separate .srt file.

### 3. Trim / cut video
Use `scripts/trim.py` — cuts a section from a video by start/end time.

Supports: single clip, multiple clips (outputs separate files), remove a section.

### 4. Compress video
Use `scripts/compress.py` — reduces file size while maintaining quality.

Presets: web (good quality, small file), social (optimised for uploads), archive (best quality).

### 5. Convert format
Use `scripts/convert.py` — converts between video formats.

Supported: mp4, webm, mov, avi, mkv, gif (animated), mp3/wav (audio extract).

### 6. Add watermark / text overlay
Use `scripts/watermark.py` — adds text or image watermark to a video.

Options: position (corners, centre), opacity, font size, colour.

---

## Quick ffmpeg one-liners

For simple tasks Claude can run ffmpeg directly without a script:

```bash
# Get video info
ffmpeg -i input.mp4

# Quick compress
ffmpeg -i input.mp4 -crf 28 output.mp4

# Extract audio
ffmpeg -i input.mp4 -q:a 0 -map a output.mp3

# Trim (start at 0:30, duration 60 seconds)
ffmpeg -i input.mp4 -ss 00:00:30 -t 60 -c copy output.mp4

# Convert to gif
ffmpeg -i input.mp4 -vf "fps=10,scale=480:-1" output.gif
```

Read `references/ffmpeg-cheatsheet.md` for more one-liners.
