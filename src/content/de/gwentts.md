---
id: gwentts
slug: gwentts
translation_id: gwentts
language: de
content_type: project
title: GwenTTS – Ein lokales Sprachstudio für Windows
category: Software, KI
image_url: /my-electronics-blog/images/posts/gwentts-logo.png
excerpt: Vom Skript zur Audiodatei. GwenTTS erzeugt Sprechertexte und Dialoge in sieben Sprachen direkt auf dem Windows-PC.
tags:
- Text-to-Speech
- Windows
- Tauri
- Python
read_time: 3 Min.
published: true
created_at: '2026-11-13T12:00:00.000Z'
project_status: done
---

> **Ein Skript, zwei Stimmen, eine fertige Audiodatei.** GwenTTS bringt mehrsprachige KI-Sprachsynthese auf den eigenen Windows-PC.

**Plattform** · Windows\
**Ausgabe** · WAV und MP3\
**Technik** · Tauri 2, Rust, React, TypeScript und Python

## Hörprobe

GwenTTS ist fertiggestellt. [Hörprobe öffnen](https://investing.tavrion.de/articles/cd97180b-dfdb-470e-8aac-9e0473addca6) und im Audioplayer auf **Play** drücken.

## 1. Die Idee

Ein Video braucht einen Sprechertext, ein Sprachkurs eine Hörübung, ein Podcast-Entwurf zwei unterschiedliche Stimmen. GwenTTS bündelt diese Aufgaben in einem Studio. Dort lassen sich Texte vertonen, Ergebnisse anhören und Audiodateien für die Weiterverarbeitung exportieren.

Die Sprachsynthese läuft lokal, sobald das passende Modell eingerichtet ist. Skripte und Referenzaufnahmen bleiben während der Verarbeitung auf dem Gerät.

## 2. Vom Text zum Ton

1. **Text vorbereiten.** Den Sprechertext ins Studio einfügen. Für einen Dialog die Redebeiträge den beiden Stimmen zuordnen.
2. **Stimmen auswählen.** Eine vorhandene Stimme wählen oder aus einer Referenzaufnahme mit entsprechender Einwilligung ein wiederverwendbares Stimmprofil erstellen.
3. **Anhören und exportieren.** Das Ergebnis im Studio prüfen, im Verlauf wiederfinden und als WAV oder MP3 ausgeben. Für MP3 verwendet die App FFmpeg.

Im Dialogmodus erzeugt GwenTTS die einzelnen Redebeiträge und setzt sie zu einer gemeinsamen Audiodatei zusammen. Kurze Reaktionen wie „Mhm“ lassen sich gezielt einfügen, damit ein Gespräch lebendiger klingt.

## 3. Sieben Sprachen, zwei integrierte Engines

| Engine | Sprachen |
| --- | --- |
| **VieNeu** | Vietnamesisch |
| **Pocket TTS** | Deutsch, Englisch, Französisch, Spanisch, Italienisch und Portugiesisch |

## 4. Technischer Aufbau

React und TypeScript bilden die Oberfläche. Tauri verbindet sie über einen lokalen JSON-Datenstrom mit dem Python-Backend, das Stimmen, Generierung und Verlauf verwaltet. Die beiden integrierten Engines laufen in getrennten Python-Umgebungen. Über ein dokumentiertes Protokoll kann GwenTTS weitere lokal installierte Sprach-Engines als eigene Prozesse anbinden.
