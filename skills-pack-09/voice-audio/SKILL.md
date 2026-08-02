---
name: voice-audio
description: "Processes audio using Python — text-to-speech, transcribe audio files, noise removal, format conversion, and audio editing. Use this skill whenever the user wants to convert text to speech, transcribe a voice recording or audio file, remove background noise, convert audio formats, trim or merge audio clips, or adjust volume/speed. Trigger for requests like 'read this text aloud', 'transcribe this recording', 'remove the background noise', 'convert this to mp3', or 'speed up this audio'."
---

# Voice & Audio

Text-to-speech, transcription, noise removal, and audio editing — all running locally.

---

## Operations

### 1. Text to speech
Use `scripts/tts.py` — converts text to natural-sounding speech.

Engines (in order of quality):
- **edge-tts** (best free option) — Microsoft Edge voices, 300+ voices, many languages. `pip install edge-tts`
- **pyttsx3** (offline fallback) — uses OS voices, no internet needed. `pip install pyttsx3`

Key details:
- Text or text file to speak
- Voice/language selection
- Output format (mp3, wav)
- Speed adjustment

### 2. Transcribe audio
Use `scripts/transcribe.py` — converts speech to text using OpenAI Whisper (local, free).

Requires: `pip install openai-whisper` and ffmpeg in PATH.

Supports: mp3, wav, m4a, ogg, flac, mp4, and most audio/video formats.

Output: plain text, timestamped text, or SRT subtitle format.

### 3. Remove background noise
Use `scripts/denoise.py` — reduces background noise from audio recordings.

Requires: `pip install noisereduce soundfile numpy scipy`

Best for: voice recordings with consistent background noise (fans, AC, hum).

### 4. Convert audio format
Use `scripts/convert_audio.py` — converts between audio formats and adjusts quality.

Formats: mp3, wav, flac, aac, ogg, m4a.

### 5. Edit audio
Use `scripts/edit_audio.py` — trim, merge, adjust volume, change speed/pitch.

Requires: `pip install pydub` and ffmpeg in PATH.

---

## Quick reference

| Task | Script | Key dependency |
|------|--------|----------------|
| Text to speech | tts.py | edge-tts |
| Transcribe audio | transcribe.py | openai-whisper |
| Remove noise | denoise.py | noisereduce |
| Convert format | convert_audio.py | ffmpeg |
| Edit audio | edit_audio.py | pydub |

---

## Install all dependencies

```bash
pip install edge-tts pyttsx3 openai-whisper noisereduce soundfile numpy scipy pydub
```

Also requires ffmpeg — see `references/setup.md`.
