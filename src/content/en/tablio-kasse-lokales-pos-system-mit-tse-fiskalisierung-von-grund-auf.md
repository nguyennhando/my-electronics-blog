---
id: tablio-kasse-lokales-pos-system-mit-tse-fiskalisierung-von-grund-auf
slug: tablio-kasse-lokales-pos-system-mit-tse-fiskalisierung-von-grund-auf
translation_id: tablio-kasse-lokales-pos-system-mit-tse-fiskalisierung-von-grund-auf
language: en
content_type: project
title: TABLIO Kasse: A POS System That Takes German Fiscal Law Seriously
category: Softwareentwicklung
image_url: /my-electronics-blog/images/posts/1785878544700-screenshot-2026-08-04-231005.png
image_gallery:
- /my-electronics-blog/images/posts/1785878562041-screenshot-2026-08-04-230901.png
- /my-electronics-blog/images/posts/1785878568627-screenshot-2026-08-04-230914.png
- /my-electronics-blog/images/posts/1785878575589-screenshot-2026-08-04-230927.png
- /my-electronics-blog/images/posts/1785878581909-screenshot-2026-08-04-230955.png
excerpt: A local-first POS system for German restaurants with TSE fiscal signing and DSFinV-K export built into its core architecture from day one — no cloud required.
tags:
[]
read_time: 5 Min.
published: true
created_at: '2026-08-04T21:03:35.667Z'
external_link: https://github.com/nguyennhando/Tablio-Android-APK/releases/tag/v0.3.19
project_status: done
sort_order: 100
---

# TABLIO Kasse — A POS System That Takes German Fiscal Law Seriously

**A local-first point-of-sale system for restaurants, built for the German
market — where the legal requirements for cash registers rank among the
strictest in Europe.**

Table plan · Ordering · Real-time kitchen display · Payments · Cashbook ·
Reports · Gift voucher system

---

## The starting point

In Germany, the **Kassensicherungsverordnung (KassenSichV)** requires every
cash-register-relevant transaction to be signed by a certified **Technical
Security Device (TSE)**, stored in a tamper-evident way, and exportable at
any time in the **DSFinV-K** format for the tax authority. Many self-built or
generic POS solutions ignore this requirement entirely, or treat it as an
afterthought.

In TABLIO Kasse, the fiscal foundation isn't an add-on — it's the starting
point of the entire architecture. Every payment, every cancellation, every
refund runs through the same transactional layer that atomically ties
together the TSE signature, the receipt number, and the DSFinV-K export.

## Feature set

**Restaurant operations**
- Visual table plan with zones, free positioning, multiple table shapes, and
  live status (free / occupied / awaiting payment)
- Dine-in and takeaway ordering in one unified workflow
- Menu with categories, modifiers/extras, discounts, and void reasons
- Kitchen display with real-time status (New → Preparing → Ready → Served)
  over WebSockets

**Payments & fiscal compliance**
- Cash, card, and split payments with idempotent receipt finalization
- TSE integration through a provider architecture (mock for development, a
  ready slot for certified USB TSE devices)
- DSFinV-K export, X/Z reports, cashbook with cash movements
- **Gift voucher system**: issuance, sale as its own cash-register/TSE
  business event, redemption, refunds, block/unblock, manual balance
  correction — every movement independently auditable

**Management**
- Shift closing, reports (revenue, VAT, products, waiters, payment methods)
- Role- and permission-based access (Admin, Manager, Waiter, Kitchen) with
  granular per-user permission overrides
- Reservations, customer management, staff scheduling
- Three languages (German, English, Vietnamese), switchable in the app

## Architecture

```mermaid
flowchart TB
    subgraph Devices[Restaurant devices]
      Desktop[Windows till]
      Tablet[Tablet]
      Phone[Phone]
      Kitchen[Kitchen screen]
    end

    Desktop & Tablet & Phone & Kitchen -->|Local Wi-Fi| Web[React + Vite SPA]
    Web -->|REST + Socket.IO| API[NestJS API]
    API --> DB[(PostgreSQL + Prisma)]
    API --> Printer[ESC/POS printer layer]
    API --> TSE[TSE provider layer]
