---
id: electricalengineeringtoolbox
slug: electricalengineeringtoolbox
translation_id: electrical-engineering-toolbox-privacy-policy
language: en
content_type: project
title: Electrical Engineering Toolbox – Offline Calculators and Project Tool for Electrical Design
category: Software
image_url: /my-electronics-blog/images/posts/EEToolbox-main-1.webp
image_gallery:
- /my-electronics-blog/images/posts/EEToolbox-main-2.webp
- /my-electronics-blog/images/posts/EEToolbox-main-3.webp
- /my-electronics-blog/images/posts/EEToolbox-main-4.webp
excerpt: A Windows application for electrical designers, technicians and students. Calculators for voltage drop, cable size, protective device, motor current and transformers, plus load lists with cable schedules and PDF reports. Everything runs offline, with no account and no telemetry. Available in the Microsoft Store.
tags:
- C++
- Qt 6
- Windows
- Offline
- SQLite
- Microsoft Store
read_time: 8 Min.
published: true
created_at: '2026-06-19T06:29:08.495Z'
external_link: https://apps.microsoft.com/detail/9P368QBV3S27?hl=neutral&gl=DE&ocid=pdpshare
project_status: done
sort_order: 50
---

# Electrical Engineering Toolbox
### Offline calculators and project tool for electrical design

**A Windows application that gathers the everyday calculations of electrical design in one place: fast, traceable and without the cloud.**

**Technology:** C++17, Qt 6 (Widgets), SQLite, CMake  
**Platform:** Windows 10 and 11 (64-bit)  
**Interface languages:** German, English, Vietnamese, Chinese (Simplified)  
**Version:** 1.0.0  
**Available:** in the Microsoft Store (see the "Open project" button at the end of the page)

---

## 1. Project overview

### What is the Toolbox?

The Electrical Engineering Toolbox is a desktop program for **electrical designers, technicians, installers and students**. It replaces the collection of spreadsheets, calculator formulas and scribbled notes people otherwise use to estimate cables, protective devices and voltage drop.

The program runs entirely on your own computer. It needs **no account, no internet connection and no subscription**, shows no advertising and sends no usage data.

### Core idea

**A tool that saves time during design and makes every result traceable through its formula and inputs.**

The results are calculation aids for preliminary design. Final sizing remains the job of a qualified person, according to the applicable standards.

---

## 2. Features

### Calculators

- **Ohm's law** with a selectable target: voltage, current, resistance or power.
- **Power calculator** for DC and AC, with active, reactive and apparent power.
- **Voltage drop** for single-phase and three-phase lines, as a percentage and as the voltage at the load.
- **Cable sizing** from current, installation method, ambient temperature and permitted voltage drop, with alternatives shown alongside.
- **Protective device:** picks the next standard rating from 6 A to 630 A.
- **Motor current** at full load.
- **Transformer:** ratio and apparent power.
- **Unit converter** for the common electrical quantities.

Next to the result, every calculator shows the **formula used** and a short note on the assumptions.

### Project workspace

Larger installations get a workspace of their own:

1. Set the project data: voltage, phase system, diversity factor.
2. Enter loads by hand or **import them from CSV or Excel**. Columns are mapped in a preview, and duplicate names can be renamed on request.
3. Generate a **cable schedule** in one click: for each load the current, cable size, voltage drop and protective device are calculated and given a status (OK, warning, fail).
4. Export the cable schedule as CSV, or the full **report as a PDF**.

The load list is built for large projects and stays smooth with several hundred entries.

### IEC quick reference

A lookup aid that works without internet: ingress protection (IP) ratings, voltage levels, cable sizes, breaker series, transformer ratings, power factor, motor efficiency, frequency, and symbols and units. The values ship inside the program and are general guide values, not copies of standard texts.

### Smart assistant

A rule-based assistant gives hints on loads, cables and protective devices, for example when the voltage drop is too high or the protective device is larger than the cable. It works **without any online AI service**, using fixed rules you can check.

### History

Every calculation can be saved. The history can be filtered, exported as CSV or PDF, and cleaned up with multi-select delete.

### Interface

Dark and light theme, four languages with more than 1,000 translated strings, switchable at runtime.

---

## 3. How the program calculates

### Cable selection

Cable selection follows simple logic that you can verify:

1. The **load current** is determined from power, voltage, phase system and power factor.
2. The current-carrying capacity from an IEC 60364 reference table is **derated** for installation method and ambient temperature.
3. The smallest cross-section is chosen whose derated capacity reaches the load current **and** whose voltage drop stays below the allowed value (3 % by default).
4. The next larger size and the safety margin in percent are shown as well.

Voltage drop is calculated as **ΔV = 2 · I · L · R · cos φ** for single-phase and **ΔV = √3 · I · L · R · cos φ** for three-phase.

### Protective device

1. The load current is multiplied by a factor for the load type (1.25 for motors and transformers, 1.0 for other loads).
2. The **smallest standard rating** that reaches the value is chosen. Example: 28 A motor current gives 35 A, and so a 40 A device.
3. If a cable has been selected, **coordination** is checked: the protective device must not be larger than the cable's capacity.

### Limits, stated honestly

- DC loads are not evaluated by the AC cable selection.
- Motor starting behaviour is not modelled in detail.
- All results are estimates for preliminary design and must be checked against the applicable regulations.

---

## 4. Technology

### Structure

- **Language and UI:** C++17 with Qt 6 (Widgets, SVG, SQL, translation tools)
- **Build:** CMake 3.16 or newer, MSVC 2022
- **Storage:** SQLite, local, for the calculation history
- **Installer:** Inno Setup, and MSIX for the Microsoft Store

The source code is organised into four layers:

- **Core:** calculation modules, project model, validation
- **Services:** import, export, reports, languages, history
- **UI:** pages, widgets, workflows
- **Data:** database, plus styles, icons and reference tables as resources

### Quality

The application has an automated test suite of **66 tests**: unit, integration, UI and simulation tests. The calculation modules are kept apart from the UI so they can be tested without a window.

---

## 5. System requirements

- **System:** Windows 10 or Windows 11 (64-bit)
- **Display:** at least 1366 × 768, 1920 × 1080 recommended
- **Storage:** about 150 MB
- **Network:** not required

---

## 6. Privacy

**Effective:** June 18, 2026 · **Version:** 1.0.0  
**Controller:** Nguyen Nhan Do  
**Contact for privacy and support:** [nguyennhan.do@outlook.com](mailto:nguyennhan.do@outlook.com)

This page also serves as the app's privacy policy for the Microsoft Store.

### In short

- The app is an **offline program**. In normal use it **does not collect, sell or transmit personal data**.
- There is **no analytics, no telemetry, no advertising and no cloud sync**.
- There is no account and there are no in-app purchases.
- History, settings and project files are stored **only on your device**.

### What is stored locally

- **Calculation history** in a local database under `%LOCALAPPDATA%\ElectricalEngineeringToolbox\`
- **Settings** such as language and theme in the same place
- **Project files** (`.eetproject`) and **exported CSV and PDF files** in folders you choose yourself
- **Diagnostic log** (`logs\app.log`), local only and never uploaded

The developer does not receive this data. Exported files stay under your control.

### What is not collected

Name, e-mail address, location, device identifiers for advertising, usage statistics, crash reports, calculation data, project data, photos, contacts, calendar or microphone.

### E-mail contact

If you write to me, I process your e-mail address, the content of the message and any attachments you send, in order to answer your request (Art. 6(1)(b) or (f) GDPR). The data is deleted once it is no longer needed for that purpose. I do not use it for marketing.

### Your rights

In the EEA, the UK and Switzerland you have the right of access, rectification, erasure, restriction, objection and data portability, and the right to complain to your supervisory authority. Contact the address above.

### Your control

You can clear the history in the app, delete project files yourself, and remove all app data by uninstalling and deleting the folder `%LOCALAPPDATA%\ElectricalEngineeringToolbox\`.

### Children

The app is a general-purpose engineering tool and is not directed at children under 13. No data is collected from children.

### Changes

If this policy changes, the "Effective" date at the top of this page changes.

---

## 7. Notices

### Engineering notice

All results, cable schedules, protective-device recommendations, reference values and assistant hints are **calculation aids** and not professional, legal or safety advice. Sizing, selection, installation, protection coordination and approval must be done by **qualified personnel** according to the applicable standards and manufacturer data (for example IEC, DIN, VDE, EN, NEC). Verifying the results is the user's responsibility.

### Use

The software is provided "as is" and, as far as the law allows, without warranty. To the extent permitted by law, no liability is accepted for damage arising from its use, such as planning errors, delays or data loss. Reverse engineering, decompilation and redistribution beyond statutory rights require the developer's written consent.

### Source code

The source code is not public. If you want to assess how I work, you can see it **on request**: [donguyennhan.de@gmail.com](mailto:donguyennhan.de@gmail.com)

---

© 2026 Nguyen Nhan Do. All rights reserved.
