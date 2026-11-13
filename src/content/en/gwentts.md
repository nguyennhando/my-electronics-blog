---
id: gwentts
slug: gwentts
translation_id: gwentts
language: en
content_type: project
title: GwenTTS – A local voice studio for Windows
category: Software, AI
image_url: /my-electronics-blog/images/posts/gwentts-logo.png
image_gallery:
[]
excerpt: From script to audio. GwenTTS creates narration and dialogue in seven languages directly on your Windows PC.
tags:
- Text-to-Speech
- Windows
- Tauri
- Python
read_time: 3 min
published: true
created_at: '2026-11-13T12:00:00.000Z'
external_link: https://investing.tavrion.de/articles/cd97180b-dfdb-470e-8aac-9e0473addca6
pdf_url: 
project_status: done
sort_order: 110
---

> **One script, two voices, one finished audio file.** GwenTTS brings multilingual AI speech generation to your Windows PC.

GwenTTS is complete. [▶ Open the audio sample](https://investing.tavrion.de/articles/cd97180b-dfdb-470e-8aac-9e0473addca6) and press **Play** on that page.

**Platform** · Windows\
**Export** · WAV and MP3\
**Built with** · Tauri 2, Rust, React, TypeScript, and Python

## 1. The idea

A video needs a voice-over, a language lesson needs a listening exercise, and a podcast draft needs two distinct voices. GwenTTS brings those jobs into one studio, where you can generate speech, listen to the result, and export audio for editing or sharing.

Once the appropriate model is set up, speech generation runs locally. Scripts and reference recordings stay on the device during synthesis.

## 2. From text to audio

1. **Prepare the script.** Paste your narration into Studio. For a dialogue, label each turn so GwenTTS knows which of the two voices should speak.
2. **Choose the voices.** Pick an existing voice or create a reusable profile from a reference recording you have permission to use.
3. **Listen and export.** Review the audio in Studio, find it again in History, and export it as WAV or MP3. The app uses FFmpeg for MP3 export.

In dialogue mode, GwenTTS generates each speaker’s turns and combines them into one audio file. You can place short listener reactions like “Mm-hm” within a turn to give the conversation a more natural rhythm.

## 3. Seven languages, two built-in engines

| Engine | Languages |
| --- | --- |
| **VieNeu** | Vietnamese |
| **Pocket TTS** | English, German, French, Spanish, Italian, and Portuguese |

## 4. Under the hood

The interface uses React and TypeScript. Tauri connects it to a Python backend over a local JSON stream. The backend manages voices, speech generation, and history, while the two built-in engines run in separate Python environments. A documented protocol lets GwenTTS connect to other locally installed speech engines as separate processes.
