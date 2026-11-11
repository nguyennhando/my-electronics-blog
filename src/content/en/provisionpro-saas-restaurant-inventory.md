---
id: provisionpro-saas-restaurant-inventory
slug: provisionpro-saas-restaurant-inventory
translation_id: provisionpro-saas-restaurant-inventory
language: en
content_type: project
title: ProvisionPro – Restaurant Inventory Management as a Web App (SaaS)
category: Web, Software
image_url: /my-electronics-blog/images/posts/provisionpro-reports-1.webp
image_gallery:
- /my-electronics-blog/images/posts/provisionpro-reports-2.webp
- /my-electronics-blog/images/posts/provisionpro-reports-3.webp
- /my-electronics-blog/images/posts/provisionpro-reports-4.webp
excerpt: A multi-tenant web application for restaurants: ingredients, recipes with costing, stock batches by FIFO and FEFO, purchasing with orders and goods receipts, reorder suggestions and mobile scanning by barcode or QR code. It runs in the browser, with a trial period and licensing, in German, English, Vietnamese and Chinese.
tags:
- SaaS
- React
- TypeScript
- Fastify
- PostgreSQL
- Docker
read_time: 10 Min.
published: true
created_at: '2026-11-10T22:00:00.000Z'
external_link: https://provisionpro.tavrion.de/
pdf_url: /my-electronics-blog/documents/steckbrief/provisionpro-en.pdf
project_status: done
sort_order: 45
---

# ProvisionPro
### Restaurant inventory management as a web app (SaaS)

**A program that shows what is in stock, what a dish really costs and what has to be reordered, without spreadsheets and without paper slips.**

**Technology:** React, TypeScript, Node.js, Fastify, PostgreSQL, Docker  
**Delivery:** web application as a service (SaaS), multi-tenant, installable on a phone  
**Interface languages:** German, English, Vietnamese, Chinese  
**Version:** 1.0.0  
**Demo:** online, see the "Open project" button at the end of the page

---

## 1. Project overview

### What is ProvisionPro?

ProvisionPro is an inventory system for restaurants, especially for kitchens with many ingredients and recipes, such as sushi and Asian restaurants. It answers the questions that come up every day:

- What is in stock right now, and what is about to expire?
- What does a dish cost to make when purchase prices change?
- What do I need to reorder, and from which supplier?
- Does the stock on the shelf match the stock in the system?

### Origin

The application is a complete rebuild of my earlier desktop software for Windows. The proven business rules, namely recipe costing, FIFO batches and the atomic stock posting when a dish is sold, were carried over and re-implemented as a web service. Everything now runs in the browser, on any device and without installation.

### Core idea

**Every stock change is traceable, and no scan posts anything without explicit confirmation.**

---

## 2. Features

### Master data

- **Ingredients** with unit, purchase price, category, minimum and maximum stock, and several barcodes per ingredient.
- **Categories** and **suppliers** with contact details and per-supplier analysis.
- **Recipes** with ingredient list, selling price and **versions**. Costing shows the cost of goods for each dish, and old versions are kept.

### Stock

- **Batches** with quantity, purchase price, storage location and best-before date. Stock is taken by **FIFO** (first in, first used) or **FEFO** (first expiring, first used).
- **Storage locations** and **transfers** between them.
- **Inventory counts** with counting sessions and differences.
- **Waste** and manual adjustments with a reason.
- A list of **batches about to expire**, so nothing gets forgotten in the cold room.

### Purchasing

- **Purchase orders** in the stages ordered, partially received and fully received.
- **Goods receipt**, also in partial deliveries. Posting creates the receipt, batch, stock movement and new balance in a single step. Submitting twice does not post twice.
- **Purchase invoices**, optionally linked to the order and goods receipt, to compare ordered, received and invoiced side by side.
- **Replenishment:** the application suggests quantities from minimum and maximum stock, minus what is already on its way, rounded to whole packages. You change supplier, quantity and price and create draft orders from them. **It never orders automatically.**
- **Purchasing analytics:** delivery completeness, punctuality, quantity and price variance, price history per ingredient and open orders.

### Scanning and stock on the phone

The "Scan & Stock" page is meant for the phone in the storeroom. It recognises barcodes (EAN-13, UPC-A, Code 128) and QR labels for batches and storage locations, and leads straight on to goods receipt, transfer, inventory count or waste.

- The camera is **requested only after tapping "Start camera"**.
- If the camera does not work or is not allowed, **manual entry** is always available.
- An unknown code **never** creates an order line automatically.
- QR labels contain only a random public identifier, no quantities, no prices and no credentials.

### Sales, vouchers and closing

- **Sales:** a dish is recorded, stock is deducted automatically by FIFO or FEFO, and the cost of goods is calculated.
- **Vouchers:** single-purpose and multi-purpose vouchers: issue, redeem, refund and adjust, with a history.
- **Daily closing:** the daily totals of the external cash register are entered by VAT rate.
- **Tax:** a monthly VAT estimate from the daily closings and the voucher transactions, minus input tax.
- **Reports:** revenue, costs, stock, waste and suppliers, by day, week or month.

### Action center and log

The **action center** collects what needs attention: expired batches, stock below the minimum, orders, trial period and licence. Messages do not appear twice. The **activity log** records who changed what and when.

---

## 3. The SaaS model

### Tenants and roles

Each restaurant is its own **tenant** with separate data. A restaurant never sees another one's data, not even through barcodes: a code is unique only within one restaurant and may be reused in another. There are three roles: super admin, restaurant owner and staff.

### Trial and licence

New restaurants start with a **Premium trial**. After that, a licence key unlocks the **Plus** or **Premium** plan, for **one year or without time limit**. The keys are signed with **Ed25519** and verified by the server. When the trial ends, the action center reports it and the application shows the status clearly.

### Backup

There are tools for **backup and restore**. Barcode assignments are preserved. Internal batch identifiers are reissued on restore so that backups do not collide.

---

## 4. Technology

### Structure

- **Server:** Node.js 22 with TypeScript, Fastify and Zod for input validation
- **Database:** PostgreSQL with Prisma, about 28 tables
- **UI:** React, TypeScript, Vite, Tailwind CSS and shadcn/ui (Radix), data fetching with TanStack Query
- **Languages:** react-i18next, four language files with a consistency check
- **Sign-in:** JWT in an httpOnly cookie, passwords hashed with bcrypt
- **Operations:** Docker Compose and Nginx on a Linux server, with health checks, structured logs, request IDs and an operations runbook

The project is a workspace with two parts: server and web interface.

### Quality

- **Unit tests** with coverage and a **security audit** of the dependencies
- **Integration tests** against a purpose-built PostgreSQL database that is deleted afterwards
- **End-to-end tests** with Playwright for desktop and phone, plus accessibility tests
- **Load tests** with k6
- **Stock reconciliation:** a read-only tool that checks whether each ingredient's stock matches its batches and movements

### What I learned

Anyone building an inventory system quickly finds that the difficulty is not the picture on the screen but the rules behind it: postings must never half-happen, double clicks must never post twice, and every number must be traceable back to its source.

---

## 5. Demo

A demo with sample data from a sushi restaurant runs online: [provisionpro.tavrion.de](https://provisionpro.tavrion.de/). Demo login:

- **E-mail:** `tan@tavrion.de`
- **Password:** `Tan123.,` (with a period and a comma at the end)

The demo's trial period may have expired. The application then shows this, and some functions are limited.

The images above show the application's reports with sample data from a sushi restaurant: revenue and best-selling dishes, cost-of-goods ratio, profitability per dish, stock value by category, expiry risk, waste, spending by supplier and revenue by weekday. (The interface is shown in German.)

---

## 6. Source code

The source code is not public. If you want to assess how I work, you can see it **on request**: [donguyennhan.de@gmail.com](mailto:donguyennhan.de@gmail.com)
