---
id: gem-restaurant-online-ordering-platform
slug: gem-restaurant-online-ordering-platform
translation_id: gem-restaurant-platform
language: en
content_type: project
title: Sao Mai Mainz – Online Ordering and Reservations for a Restaurant
category: Web, Software
image_url: /my-electronics-blog/images/posts/sao-mai-home-desktop.webp
image_gallery:
- /my-electronics-blog/images/posts/sao-mai-order-page.webp
- /my-electronics-blog/images/posts/sao-mai-product-dialog.webp
- /my-electronics-blog/images/posts/sao-mai-home-mobile.webp
- /my-electronics-blog/images/posts/sao-mai-reservation.webp
- /my-electronics-blog/images/posts/sao-mai-admin-dashboard.webp
- /my-electronics-blog/images/posts/sao-mai-admin-orders.webp
- /my-electronics-blog/images/posts/sao-mai-admin-menu.webp
excerpt: A self-developed, self-hosted platform for the Vietnamese restaurant Sao Mai in Mainz: a guest website in three languages, pickup orders, table reservations, kitchen and counter displays, e-mail and web push. It is live in production.
tags:
- PHP
- MySQL
- Docker
- Web Push
- Restaurant
- Multilingual
read_time: 10 min
published: true
created_at: '2026-11-10T20:30:00.000Z'
external_link: https://online.tavrion.de/
project_status: in_progress
sort_order: 70
---

# Sao Mai Mainz
### Online Ordering and Reservations with the GEM Restaurant Platform

**A website and an operations system in one application: guests order and reserve, and the staff handle everything live in the kitchen and at the counter.**

**Technology:** PHP 8.2, MySQL 8, Apache in Docker  
**Languages:** German, English, Vietnamese  
**Features:** pickup orders, reservations, kitchen and counter displays, e-mail and web push  
**Current version:** 2026.11.10-staffpush  
**Project status:** live in production for the restaurant Sao Mai in Mainz, under active development  
**See it live:** [online.tavrion.de](https://online.tavrion.de/)

---

## 1. Project Overview

### What is GEM Restaurant?

GEM Restaurant is a **self-hosted web application for small and medium-sized restaurants**. It does not replace a single function. Instead, it connects two sides that are otherwise often separate:

- the **guest website** with the menu, online ordering for pickup and table reservations,
- the **admin area**, where the staff process orders and reservations and maintain content.

Everything runs in one application that can be operated on your own server or VPS. There is no dependency on a third-party ordering platform and no commission per order.

### In use at Sao Mai

The platform runs live for the **restaurant Sao Mai in Mainz** (Vietnamese cuisine and sushi). Guests order online for pickup and reserve tables, while the staff work in the admin area. You can look at the system directly: [online.tavrion.de](https://online.tavrion.de/).

### Basic idea

**A restaurant should keep its guests, its menu and its data in its own hands, and be able to run day-to-day service in the kitchen and at the counter without paper.**

The images on this page show the live system of Sao Mai Mainz. Guest contact details have been blurred out.

---

## 2. Features for Guests

- Responsive home page with configurable text and images.
- Interface in **German, English and Vietnamese**.
- Menu by category, with product info and variants.
- **Online ordering for pickup** with a cart and checkout.
- **Tracking link** after the order so guests can follow the status.
- Optional **push notification** on the guest's device about the state of the order.
- Table reservation with confirmation and cancellation flow.
- E-mails to guests in **their own language** (orders and reservations).
- Legal pages such as imprint and privacy policy.

---

## 3. Features for Staff

### Daily work

- **Dashboard** with the key numbers: new, in-progress, ready and picked-up orders, plus new reservations.
- **Order management** from arrival to pickup, with quick actions for several orders at once.
- **Kitchen display** and **counter display** for live service, also on tablets and smartphones, with light and dark themes.
- **Sound alert** for new orders.
- **Push notifications** for new orders on admin devices. This is opt-in per device and contains no customer data.
- Feedback on **e-mail delivery**: staff see whether the status mail was sent, failed, or had no address.
- **Reservations** can be confirmed or declined.

### Content and settings

- Editors for the **menu, home page, opening hours, background image and legal pages**.
- WebP image upload for dishes and the website.
- Customer export and **statistics** on revenue and orders.
- **Audit log** for important admin actions.
- Several admin users with **permissions**.
- Optional: **kitchen ticket printing** through an HTTP print bridge and a **POS interface** through an API key.

---

## 4. Technology and Structure

- **Backend:** PHP 8.2 with Composer and PSR-4 autoloading, PDO access to MySQL 8.
- **Frontend:** server-rendered PHP with CSS and JavaScript, without a heavy framework.
- **Operation:** Docker Compose with separate volumes for the database, uploads and storage.
- **E-mail:** PHPMailer over SMTP.
- **Push:** web push with its own service worker; keys are created automatically on first use.
- **Installation:** installation wizard at `/install/`, SQL migrations and seed data.
- **Configuration:** through `.env`, with no secrets in the repository.

### Code structure

The pages in `public/` and `admin/` stay thin controllers. The business logic lives in `app/` and is split into modules: menu, orders, reservations, mail, push, tracking, delivery, security, settings and home page content. This keeps it testable and allows it to be gradually extracted from large page files.

---

## 5. Security and Privacy

- Secure admin login with session handling, CSRF protection and **rate limiting**.
- **Security headers** and validation of paths and client IP, also behind a reverse proxy.
- API keys are stored only as a **hash**.
- Push messages contain **no customer data** and go only to devices that registered themselves.
- The push sender may contact only approved endpoints, to prevent abuse.
- A production guard prevents dangerous actions on the live system.
- Secrets, customer data, uploads and backups do not belong in the repository.

---

## 6. Operation and Updates

There are dedicated tools for everyday use on a server:

- **Release check:** a script verifies before every delivery that the package is ready. It blocks if migrations are missing or if code would ship without its migration.
- **Update script:** it aborts if the configuration is incomplete, before any Docker command runs.
- **Backups** with a checksum and a warning when the latest backup is too old.
- **Status command** for health, backup age and disk space. It is read-only and safe on a live system.
- **Rollback:** earlier code versions can be restored, even if the new code has already created data.

---

## 7. What I Learned

### Uploads belong on a persistent volume

Home page images were initially stored in the release directory. They were lost on an update. Since then, uploads are written to a **persistent upload volume**, and older paths still resolve. The proof runs on the real server: three uploaded images survive a container recreation unchanged.

### A mail server outage must not hold up the staff

Measurements with a dead mail server showed that every status change waited 15 seconds, and a bulk action on four orders even 60 seconds. Now the mailer gives up after 5 seconds and does not retry for 60 seconds. The first action takes about 5 seconds, the following ones only milliseconds. Data was never lost at any point.

### Audits find silent bugs

A systematic review of the e-mails showed that the reservation confirmation code sat in an unreachable second POST handler. It was repaired. In addition, there had never been an e-mail directly after checkout, only status mails. Gaps like these only show up when you check the flow from start to finish.

### Concurrent actions need atomic decisions

A reservation that the guest has already cancelled must no longer be confirmable. Confirm and decline are therefore an atomic compare-and-set operation.

### Reconcile large menus with a script

For a large menu there is a synchronization script. It is **idempotent**, never deletes anything, creates a backup first, offers a dry run and aborts on ambiguous matches.

---

## 8. Tests and Quality

The most recently checked release candidate passed **389 of 389 integration tests** and **83 of 84 browser tests**. The remaining test is documented as a known special case (a timing issue with a checkbox label).

For web push there are 13 browser scenarios with a real service worker and a simulated push service. **In production on real devices, web push works reliably.**

---

## 9. Current Status and Next Steps

- The platform is live at Sao Mai and is continuously extended in small, documented releases.
- Web push is implemented, automatically tested and works reliably in production.
- Still open are, among other things, further development of the admin interface and splitting large page files into modules.
- No license is assigned; the code is proprietary.

---

## Conclusion

GEM Restaurant shows how much operation is hidden in a "simple" ordering and reservation page: multilingual content, live displays for the kitchen, reliable e-mails, push messages, security, backups and safe updates. The focus is on making sure day-to-day service runs reliably and that errors become visible instead of going unnoticed.

---

### GEM Restaurant

**Developed by Nguyen Nhan Do**

The images show the live system of Sao Mai Mainz, with guest contact details blurred out. Proprietary project, all rights reserved.
