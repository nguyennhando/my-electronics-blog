---
id: smps-ctrl
slug: smps-ctrl
translation_id: smps-ctrl
language: de
content_type: knowledge
title: SMPS-CTRL – Modulares DC-Labornetzteil mit STM32
category: Power
image_url: /my-electronics-blog/images/posts/smps-ctrl-cover.webp
excerpt: Ein Forschungs- und Entwurfsprojekt für ein modulares Labornetzteil mit vier Ausgängen und zentraler Überwachung per STM32.
tags:
- SMPS
- STM32
- DC-DC
read_time: 2 Min.
published: true
created_at: '2026-11-13T12:00:00.000Z'
project_status: in_progress
sort_order: 2
---

Ich arbeite derzeit die technische Auslegung von **SMPS-CTRL** aus. Das Konzept sieht ein kompaktes Tischnetzteil vor, das eine galvanisch getrennte **24-V-DC-Versorgung** auf vier unabhängige Ausgänge verteilt. Drei Kanäle liefern **12 V, 5 V und 3,3 V**. Für den vierten Kanal sind **1,8 bis 12 V** und eine einstellbare Strombegrenzung vorgesehen.

Der STM32 soll Spannung, Strom und Temperatur überwachen und Fehler melden. Die Projektübersicht erläutert die Systemarchitektur, die Schutzfunktionen und den Prüfplan. Version **0.1** dokumentiert den Entwurfsstand. Der Aufbau und die Messungen am Prototyp stehen noch aus.

## Projektübersicht als PDF lesen

- [Deutsch (PDF)](/my-electronics-blog/documents/steckbrief/SMPS-CTRL_Project_Overview_DE.pdf)
- [English (PDF)](/my-electronics-blog/documents/steckbrief/SMPS-CTRL_Project_Overview_EN.pdf)
- [Tiếng Việt (PDF)](/my-electronics-blog/documents/steckbrief/SMPS-CTRL_Project_Overview_VI.pdf)
