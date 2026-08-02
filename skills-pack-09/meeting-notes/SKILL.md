---
name: meeting-notes
description: "Transcribes audio/video recordings of meetings, extracts action items and decisions, formats into structured notes, and optionally emails them to attendees. Use this skill whenever the user wants to process a meeting recording, generate meeting notes or minutes, extract action items from a transcript, format notes into a Word doc or Notion page, or send notes to attendees. Trigger for requests like 'transcribe this meeting', 'get the action items from this recording', 'write up the meeting notes', or 'send the minutes to the team'."
---

# Meeting Notes

Full pipeline: audio/video → transcript → structured notes → Word doc / Markdown / Notion → email.

## Workflow

1. **Transcribe** — use `scripts/transcribe.py` to convert audio/video to text (Whisper, local)
2. **Extract & structure** — use `scripts/extract.py` to pull action items, decisions, and summary via Claude API
3. **Format output** — use `scripts/format_notes.py` to produce Markdown, Word doc, or both
4. **Send (optional)** — use `scripts/send_notes.py` to email notes to attendees

Run the full pipeline in one command:
```bash
python scripts/pipeline.py meeting.mp3 --attendees "a@co.com,b@co.com" --title "Weekly Sync"
```

---

## Operations

### 1. Transcribe audio/video
`scripts/transcribe.py` — converts audio/video to timestamped transcript using Whisper.

Key details:
- Input: any audio/video file (mp3, mp4, wav, m4a, mov, etc.)
- Model: `base` (fast), `small` (better), `medium` (best — needs ~5GB RAM)
- Output: raw transcript text + timestamped `.srt`

### 2. Extract structure from transcript
`scripts/extract.py` — sends transcript to Claude API and extracts:
- **Summary** — 3-5 sentence overview of the meeting
- **Key decisions** — what was decided
- **Action items** — who does what by when
- **Topics discussed** — main agenda items covered
- **Open questions** — unresolved items

### 3. Format notes
`scripts/format_notes.py` — renders structured data into:
- **Markdown** (`.md`) — clean, portable
- **Word document** (`.docx`) — professional, shareable
- **Both** — default

### 4. Send notes by email
`scripts/send_notes.py` — emails the notes to attendees.
Uses SMTP (configure in `.env`). Attaches the `.docx` and includes Markdown in the email body.

### 5. Full pipeline
`scripts/pipeline.py` — runs all steps in sequence with one command.

---

## Templates

See `templates/meeting-notes-template.md` for the notes structure.

---

## Dependencies

```bash
pip install openai-whisper python-dotenv
npm install -g docx        # for Word doc output
```

Also requires ffmpeg for audio processing.
Set `ANTHROPIC_API_KEY` in `.env` for extraction step.
