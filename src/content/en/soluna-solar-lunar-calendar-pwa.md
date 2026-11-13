---
id: soluna-solar-lunar-calendar-pwa
slug: soluna-solar-lunar-calendar-pwa
translation_id: soluna-calendar-pwa
language: en
content_type: project
title: SOLUNA – Solar and Lunar Calendar as a Progressive Web App
category: Web, Software
image_url: /my-electronics-blog/images/posts/soluna-today-desktop.webp
image_gallery:
- /my-electronics-blog/images/posts/soluna-month-desktop.webp
- /my-electronics-blog/images/posts/soluna-month-mobile.webp
- /my-electronics-blog/images/posts/soluna-month-dark.webp
- /my-electronics-blog/images/posts/soluna-converter-mobile.webp
- /my-electronics-blog/images/posts/soluna-today-mobile.webp
- /my-electronics-blog/images/posts/soluna-settings.webp
excerpt: An installable calendar app that shows the Gregorian calendar and the astronomically calculated lunar calendar side by side. It runs on iPhone, Android and in the browser, also offline, and needs neither an account nor a server.
tags:
- PWA
- React
- TypeScript
- Lunar Calendar
- Vite
- Testing
read_time: 9 min
published: true
created_at: '2026-11-10T21:30:00.000Z'
external_link: 
pdf_url: /my-electronics-blog/documents/steckbrief/soluna-en.pdf
project_status: in_progress
sort_order: 140
---

# SOLUNA
### Solar and Lunar Calendar as a Progressive Web App

**A calendar for people who live with two ways of counting time: the Gregorian calendar and the lunar calendar.**

**Technology:** React 19, TypeScript, Vite, PWA  
**Calendars:** Vietnamese, Chinese and Korean (astronomically calculated)  
**Languages:** Vietnamese, English, German, Chinese, Japanese, Korean, Thai  
**Version:** 0.1.0  
**Project status:** under development, core features work and are tested

---

## 1. Project Overview

### What is SOLUNA?

SOLUNA is a **Progressive Web App**: it opens in the browser and can be installed to the home screen of an iPhone or Android phone. After the first load it also works without internet.

For each day, the app shows the date in the Gregorian calendar and the matching **lunar calendar date**. On top of that come month, week and day views, a converter in both directions, public holidays, school holidays and reminders.

### Basic idea

**A calendar that takes the lunar calendar seriously: with real astronomy instead of a lookup table.**

Many calendar apps show the lunar date only roughly or incorrectly. SOLUNA calculates it itself, from the positions of the sun and the moon, and verifies the result with tests for every single day from 1900 to 2100.

---

## 2. Features

### Today

- A large date panel with the Gregorian and the lunar date.
- A card for the lunar day: the day in the lunar month, the length of the month (29 or 30 days) and whether it is a regular or a leap month.
- A hint for the **next day off** and for today's reminder.

### Calendar

- **Month, week and day** in one view, with quick navigation.
- Each cell shows the lunar day. The first day of a lunar month is marked like "1/10", and the full-moon day (15) is underlined.
- Weekends are red, and public holidays have a coloured circle.
- Tapping a day opens a detail window.

### Converter

A tool for **solar → lunar and lunar → solar**. It knows leap months and reports invalid input, for example a 30th day in a month that has 29 days.

### Holidays and school holidays

- Public holidays for all **16 German states**, including regional special rules (for example for Augsburg or parts of Saxony and Thuringia).
- **School holidays** per state, loaded from the OpenHolidays API and cached locally.
- Names in all seven interface languages.

### Reminders

For each day, a reminder with a title and an optional time can be created, edited and deleted. They stay on the device. At the chosen time, the app shows a notification.

### Settings

- Theme: light, dark or follow the system.
- Interface language, start of the week (Monday or Sunday).
- Time zone for "today": device time or Vietnamese time.
- A custom **background image** for the home page from the photo library. It is downsized on the device and stored there.

---

## 3. The Lunar Calendar

The core is a custom calculation in pure TypeScript, without an external library.

### How it is calculated

1. The date is converted to a Julian day number.
2. The nearest **astronomical new moon** is estimated and bracketed using Meeus-style methods.
3. The new moon is assigned to the calendar day on which it falls in the fixed time zone.
4. From the Sun's longitude, the app determines which **solar term** is currently running.
5. Month 11 is the month that contains the winter solstice.
6. In a year with 13 months, the first month without a principal solar term becomes the **leap month**.
7. The reverse direction reconstructs month 11 and the start of the month.

### Three calendars, one astronomy

The Vietnamese, Chinese and Korean calendar traditions use the same astronomy but different reference time zones: **UTC+7, UTC+8 and UTC+9**. The calculation takes the time zone as a parameter. In the interface, the language selects the calendar: Chinese shows the Chinese calendar, Korean shows the Korean one, and all other languages show the Vietnamese calendar.

### A limit that is stated honestly

The guaranteed range is **1 January 1900 to 31 December 2100**. Outside it, the app shows a dash and does not invent values. For the time before 1976, the Vietnamese results are modern back-calculations and not historical legal calendars.

---

## 4. Technology and Structure

- **Frontend:** React 19 and TypeScript 5.7, built with Vite 6.
- **Routing:** React Router with hash routes, so the app also works without server configuration.
- **PWA:** service worker through vite-plugin-pwa. Updates are offered, not installed secretly.
- **Design:** CSS variables for colours and spacing, light and dark theme, respect for reduced motion.
- **Layout:** sidebar on the desktop, bottom navigation on the smartphone.

### Separating logic from the interface

The code is organized in layers:

- `core/dates`: a custom date type without time and time zone, so that no shifts from daylight saving time occur.
- `core/calendar`: building the month grid.
- `core/lunar`: the lunar calendar calculation.
- `features`: the pages Today, Calendar, Converter, Holidays, Reminders and Settings.
- `shared`: building blocks, design and translations.

The interface contains no astronomy. This means the calculation can be tested independently and later reused in a worker or export tool.

---

## 5. Tests and Quality

- **308 tests in 22 test files** pass.
- The lunar calendar calculation is checked for **all 73,414 days** of the range, for each of the three calendars: conversion back and forth, unambiguous mapping, correct month lengths and leap months.
- Reference data from published sources checks, among other things, the Tết dates and especially delicate cases, such as a boundary in the year 2054 that only the exhaustive test found.
- One test changes the system time zone and checks that the results stay the same.
- Playwright checks the flow at two screen sizes, saving of settings and the **offline cache** of the production app, plus **accessibility** with axe.
- The code runs with zero ESLint warnings, with Prettier and with a minimum coverage of 80 percent.

---

## 6. Privacy

- **No account, no server, no tracking.**
- Settings, reminders and the background image stay in the browser's storage on the device.
- The only network request of the app goes to the OpenHolidays API for school holidays. The result is stored locally.

---

## 7. Limits

- Reminders appear only while the app is open, because there is no server for push messages.
- A real **iPhone widget** is not possible with a PWA. A native app would be required.
- There is no synchronization between devices.
- The Chinese and Korean reference data are deliberately smaller and were cross-checked less broadly than the Vietnamese ones.
- Not yet implemented are Can Chi (the animal and element cycles), auspicious hours, export as `.ics` and synchronization.

---

## 8. Current Status and Next Steps

- The core features are implemented and tested.
- The app is currently at version 0.1.0.
- Sensible next steps would be: Can Chi and auspicious hours, an `.ics` export and further checks of the Chinese and Korean reference data.
- No license is assigned.

---

## Conclusion

SOLUNA shows that even a seemingly simple tool like a calendar can be built cleanly: with a traceable calculation, complete tests for the whole data range and an interface that works offline and keeps the data on the device.

---

### SOLUNA

**Developed by Nguyen Nhan Do**

All images are screenshots of the running app.
