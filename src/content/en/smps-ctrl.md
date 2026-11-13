---
id: smps-ctrl
slug: smps-ctrl
translation_id: smps-ctrl
language: en
content_type: knowledge
title: SMPS-CTRL – Modular DC bench power supply with STM32
category: Power
excerpt: An ongoing research and design project for a four-output bench power supply with centralized STM32 monitoring.
tags:
- SMPS
- STM32
- DC-DC
read_time: 2 min
published: true
created_at: '2026-11-13T12:00:00.000Z'
project_status: in_progress
sort_order: 2
---

I am refining the technical design of **SMPS-CTRL**, a compact bench power supply that uses an isolated **24 V DC source** to feed four independent outputs. Three channels are specified at **12 V, 5 V, and 3.3 V**. The proposed fourth channel is adjustable from **1.8 to 12 V** with current limiting.

The STM32 is intended to monitor voltage, current, and temperature and report faults. The project overview describes the system architecture, protection functions, and test plan. Version **0.1** captures the design proposal. Building and testing a prototype are still ahead.

## Read the project overview as a PDF

- [English (PDF)](/my-electronics-blog/documents/steckbrief/SMPS-CTRL_Project_Overview_EN.pdf)
- [Deutsch (PDF)](/my-electronics-blog/documents/steckbrief/SMPS-CTRL_Project_Overview_DE.pdf)
- [Tiếng Việt (PDF)](/my-electronics-blog/documents/steckbrief/SMPS-CTRL_Project_Overview_VI.pdf)
