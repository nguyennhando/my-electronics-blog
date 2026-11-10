---
id: tablio-kasse-lokales-pos-system-mit-tse-fiskalisierung-von-grund-auf
slug: tablio-kasse-lokales-pos-system-mit-tse-fiskalisierung-von-grund-auf
translation_id: tablio-kasse-lokales-pos-system-mit-tse-fiskalisierung-von-grund-auf
language: en
content_type: project
title: TABLIO Kasse – A Local-First Restaurant POS Built Around German Fiscal Rules
category: Software, POS
image_url: /my-electronics-blog/images/posts/1785878544700-screenshot-2026-08-04-231005.png
image_gallery:
- /my-electronics-blog/images/posts/tablio-devices-concept.webp
- /my-electronics-blog/images/posts/1785878562041-screenshot-2026-08-04-230901.png
- /my-electronics-blog/images/posts/1785878568627-screenshot-2026-08-04-230914.png
- /my-electronics-blog/images/posts/1785878575589-screenshot-2026-08-04-230927.png
- /my-electronics-blog/images/posts/tablio-kitchen-display.webp
- /my-electronics-blog/images/posts/tablio-tables-mobile.webp
- /my-electronics-blog/images/posts/1785878581909-screenshot-2026-08-04-230955.png
excerpt: A local-first point-of-sale system for German restaurants with a floor plan, a real-time kitchen display, payments, a cashbook and reports. The fiscal architecture with a TSE layer and DSFinV-K is built in from day one, while certification is still pending.
tags:
- POS
- Cash register
- NestJS
- React
- PostgreSQL
- TSE
read_time: 11 min
published: true
created_at: '2026-08-04T21:03:35.667Z'
external_link: 
project_status: in_progress
sort_order: 50
---

# TABLIO Kasse
### A POS system that takes German fiscal law seriously

**A locally operated point-of-sale system for restaurants: floor plan, orders, kitchen display, payments, cashbook and reports, all on the restaurant Wi-Fi and without the cloud.**

**Technology:** React 19, NestJS 11, PostgreSQL 16, TypeScript  
**Languages:** German, English, Vietnamese  
**Deployment:** Windows installer, Linux appliance, Docker for development  
**Project status:** working and under further development, **fiscal certification still pending**

---

## 1. Project Overview

### What is TABLIO Kasse?

TABLIO Kasse is a **restaurant point-of-sale system** that I have been developing since July 2026. It runs on a PC in the restaurant, and the team's devices connect over the local Wi-Fi: the main till at the counter, the waiters' tablets and phones, and the screen in the kitchen.

All data stays on the premises. There is no need for a cloud account, no subscription server and no outage when the internet drops.

### Basic idea

**The fiscal foundation is not an add-on but the starting point of the architecture.**

Germany has some of the strictest cash register rules in Europe. Many home-built or generic POS solutions treat them as a retrofit. TABLIO is built from the start so that every payment, every cancellation and every refund runs through the same transactional layer.

> ⚠️ **Important:** As shipped, the project is **not yet cleared for legally compliant sales in Germany**. The default TSE is a development module. Details are in section 6.

---

## 2. The Problem

The German **Cash Register Security Ordinance (KassenSichV)** requires every relevant transaction to be signed by a certified **Technical Security Device (TSE)**. It must be stored in a tamper-evident way and be exportable at any time in the **DSFinV-K** format for the tax authorities. On top of that come the principles of proper bookkeeping (GoBD), such as gap-free receipt numbers and immutable receipts.

For a restaurant, daily reality adds to this: rush hours, several devices at once, changing staff, split payments, tips, takeaway orders. A till has to stay error-free in all that chaos.

---

## 3. Features

### Restaurant operations

- **Floor plan** with zones, freely placed tables, square, round, U-shaped and L-shaped layouts and live status. After payment, the table is released automatically.
- **Dine-in and takeaway orders** in one shared workflow.
- **Menu** with groups, categories, products, options and extras, tax rates, discounts and void reasons.
- **Courses:** items can be grouped into numbered courses, and each course can be sent to the kitchen on its own.
- **Kitchen display** in real time over WebSockets: New → Preparing → Ready → Served.
- **Table transfer, merging of orders and bill splitting** right at the order.

### Payments and receipts

- Cash, card and **split payments** with idempotent receipt finalization.
- Receipts can be reprinted. A printer failure never discards a finalized receipt.
- **Cancellation and refund** as separate, logged operations. Paid orders stay immutable.
- **Voucher system:** issuing, selling, redeeming, refunding, blocking and unblocking, and manual balance correction, with every movement traceable on its own.
- Printing through ESC/POS layers for network and USB printers, including kitchen tickets.

### Administration

- **Shifts and cashbook:** opening balance, cash movements, shift closing, X/Z reports and an audit log.
- **Reports** on revenue, VAT, products, categories, waiters, payment methods and cancellations.
- **Roles and permissions:** Admin, Manager, Waiter and Kitchen, plus individual permissions per user.
- Time tracking, a staff schedule with leave, customer management and reservations.
- Three languages, switchable in the app.

---

## 4. Architecture

The data flow from the devices to the database:

1. **Restaurant devices:** Windows till, tablet, phone and kitchen screen
2. **Local Wi-Fi** connects them to the till PC
3. **Interface:** React and Vite
4. **REST and Socket.IO** carry requests and live updates
5. **NestJS API** with all the business logic
6. **Three building blocks underneath:** PostgreSQL with Prisma, the ESC/POS printer layer and the TSE provider layer

- **Frontend:** React 19, Vite, TypeScript, Tailwind CSS, Zustand and TanStack Query.
- **Backend:** NestJS 11 with REST, Socket.IO, JWT and role-based permissions.
- **Data:** PostgreSQL 16 with Prisma and transactional business logic.
- **Shared package:** types, permissions, enums and VAT logic are defined once and used by both backend and frontend.
- **Tooling:** npm workspaces, Docker Compose, Jest, Vitest and Playwright.

### From table to receipt

1. Open a table or a takeaway order
2. Add items
3. Send to the kitchen
4. Prepare and serve
5. Pay by cash, card or split
6. Finalize the receipt
7. The table becomes free

Finalization runs in **one database transaction**. Price and VAT are recorded on the item and on the receipt, so historical receipts never change afterwards. A per-attempt idempotency key prevents a double click or a reconnect from creating a second payment.

---

## 5. Running It in the Restaurant

- **Windows installer:** on start, TABLIO opens as a desktop application. A service starts the database, the API and the interface. Phones and tablets on the same Wi-Fi scan a **QR code** and are connected, with no configuration and no firewall tweaks.
- **Linux appliance:** an installation package for a mini-PC without Docker, managed by the operating system as a service.
- **Autostart:** the server starts automatically after sign-in. A switched-off display does not interrupt it.
- **Backup:** an automatic nightly backup, with a restore guide.
- **Offline licensing:** every installation has a 30-day trial. License keys are signed, bound to the machine and verified locally, **without a license server**.
- **Clean delivery state:** the installer contains only demo data. No real orders, customers, credentials or logs.

### Online orders

Optionally, the till pulls pickup orders and reservation requests from an online ordering website, for example the [restaurant platform](https://nguyennhando.github.io/my-electronics-blog/?post=gem-restaurant-platform) from my other project. The till **asks for them itself** instead of accepting a connection from the internet, so it stays unreachable from outside. Staff confirm each order with a pickup time, and only then does it go to the kitchen.

---

## 6. The Fiscal Status, Honestly

This section matters most to me.

- **TSE signing:** there is a provider layer for TSE devices and a development module that is explicitly marked as not certified. Real operation needs **certified TSE hardware or a certified service** and a validated integration.
- **Production guard:** in production mode, the **backend refuses to finalize fiscal receipts** as long as no provider reports that it is certified. The dummy therefore cannot slip through as compliant by accident.
- **DSFinV-K:** the export delivers the pipeline (job, CSV and ZIP) in simplified form. It still has to be validated against the current official taxonomy.
- **Printers:** there is a dummy plus network and USB connections as a starting point. Each printer and driver combination has to be tested.
- **Before real payments:** integrate a certified TSE, validate the DSFinV-K export and have the entire installation reviewed by a tax advisor.

For demonstrations there is an explicit demo switch. It must never be set in a build handed to real customers.

---

## 7. Other Variants

### Android version (research and demo build)

A Cordova shell around the same interface, with an embedded Node server that runs without internet. It serves demos and supervised customer trials and is **not the finished product**. Its TSE layer offers two modes: a visibly non-certified test module, and a hardware connection that **fails closed** as long as the official vendor SDK and real hardware tests are missing. It never silently falls back to the dummy.

### iPhone app without internet (PWA)

A stand-alone web app for the iPhone that runs without internet after installation and keeps all data in the browser's database. In 16 development stages it covers tables, orders, kitchen, payments, cashbook, reports and a DSFinV-K core export.

---

## 8. What I Learned

### Concurrency only shows up on a real database

A check with a real database showed that when two devices finalize the same order at once, two payments, two receipts and two signed fiscal transactions were created for one sale. Two simultaneous clicks on "open shift" created two open shifts. Bugs like these stay invisible in unit tests with a mocked database. The fix is conditional updates and serializable transactions with retry, proven by a test that fires many genuinely concurrent calls.

### VAT must reconcile per tax rate, not per line

When each line was rounded separately, the printed tax breakdown of a discounted receipt drifted by up to two cents from the total, a real receipt-integrity defect. Now amounts are summed per tax rate first and rounded once, and the largest block absorbs the residual cent. The breakdown therefore always adds up.

### A cancellation is a new operation, not a switch

At first, cancelling only set a flag on the receipt, and the revenue was still counted everywhere. Today a compensating receipt is created with negated totals and a sign-flipped tax breakdown, together with its own signed fiscal record. The reports also net refunds and cancellations into every total.

### Fail instead of guessing

The same principle applies everywhere: merging orders with different discounts is rejected instead of silently picking one side. A TSE that is not ready blocks finalization. The license check tolerates a short read glitch but locks when the machine ID stays unreadable.

### Local-first means no door to the outside

The till is deliberately reachable only on the local network. Connections to the internet therefore run as outgoing requests. The result is a small attack surface, paid for with a delay of a few seconds that does not matter for pickup orders.

---

## 9. Quality

- More than **70 test files** with Jest, Vitest and Playwright.
- A dedicated test against a **real PostgreSQL database** for all paths involving money and fiscal data.
- The installer is verified automatically after the build. It may contain only the sanitized demo data.
- The project's decisions are recorded in a log together with their reasons.

---

## 10. Current Status and Next Steps

- The till is working and continuously extended (Windows installer at version 0.2.x).
- **Still open for legally compliant live use:** integrating a certified TSE, validating the DSFinV-K export and sign-off by a tax advisor.
- For the Android version, the official vendor SDK and real hardware tests are missing.
- There is no public license. The project is proprietary.

---

## Conclusion

TABLIO Kasse shows how much care goes into a seemingly simple cash register: concurrency, rounding, immutability and a fiscal model that would rather fail than guess. The decisive next step is integrating a certified TSE, so that a carefully built architecture becomes an approved product.

---

## Source code

The source code of this project is on GitHub but is not shared publicly. If you are interested, please contact me at donguyennhan.de@gmail.com and I will share it with you.

---

### TABLIO Kasse

**Developed by Nguyen Nhan Do**

The images show demo data. The device image at the very front is a concept illustration.
