---
id: finora-portfolio-tracker-desktop
slug: finora-portfolio-tracker-desktop
translation_id: finora-portfolio-tracker
language: en
content_type: project
title: Finora – Windows App for Managing Your Own Investment Portfolio
category: Software
image_url: /my-electronics-blog/images/posts/finora-overview.webp
image_gallery:
- /my-electronics-blog/images/posts/finora-portfolio.webp
- /my-electronics-blog/images/posts/finora-allocation.webp
- /my-electronics-blog/images/posts/finora-articles.webp
excerpt: A desktop app for Windows that evaluates stocks and cryptocurrencies from your own transactions: portfolio value, profit and loss, history, cash and allocation. All data stays local, prices come from Binance, Deutsche Börse and Twelve Data, exchange rates from the ECB. Built with Rust, Tauri and React.
tags:
- Rust
- Tauri
- React
- TypeScript
- SQLite
- Windows
read_time: 11 Min.
published: true
created_at: '2026-11-10T22:30:00.000Z'
external_link: 
pdf_url: /my-electronics-blog/documents/steckbrief/finora-en.pdf
project_status: in_progress
sort_order: 46
---

# Finora
### Windows app for managing your own investment portfolio

**A calm, precise tool that works out from your own buys and sells how your portfolio really stands, without an account and without any data leaving your computer.**

**Technology:** Rust, Tauri 2, React 19, TypeScript, SQLite, Apache ECharts  
**Platform:** Windows 10 and 11 (64-bit)  
**Interface languages:** German, English, Vietnamese  
**Version:** 1.0.3 (Limited Beta)  
**Installer:** on request by e-mail, see below

---

## 1. Project overview

### What is Finora?

Finora is a desktop application for tracking your personal investment portfolio: US stocks, German and European stocks, and cryptocurrencies. You enter buys, sells and cash movements, or import them from broker files. Finora calculates position value, profit and loss and the history over time from them.

### What Finora is not

Finora is not a broker and not a trading platform. It places no orders and provides no real-time prices for trading. Prices refresh about every 15 minutes, which is enough for following your own holdings. ECB exchange rates are reference rates and not tradable prices, and the app says so.

### Core idea

**Every number comes from traceable transactions and real market data. Where data is missing, it says so explicitly instead of making something up.**

---

## 2. Features

### Overview

- **Total portfolio** in the base currency (euro or US dollar), plus unrealised and realised profit and loss.
- **Totals per original currency:** a position in euros and one in dollars are never simply added. Only a real ECB exchange rate turns them into one common figure.
- **Portfolio value history** over 1 day, 1 week, 1 month, 3 months, 1 year and maximum, with investment performance that factors out deposits and withdrawals.
- **Allocation** by asset class and by position, concentration of the largest positions, each position's contribution to profit and loss, and currency exposure.
- **Cash analysis** with balance, cash flow, and income and costs.

### Portfolio

- Positions with quantity, average purchase price, current price, value, profit and loss and a small price chart.
- **Buy and sell** directly on each position, in a dialog of their own.
- Separate tabs for **crypto** and **cash**.
- **Several portfolios** per installation, including pure simulations.
- **Export** of positions as CSV.

### Watchlist

Follow assets you do not own, with price and freshness at a glance. An embedded chart window is for viewing only and never feeds into the portfolio valuation.

### Import from broker files

Transactions can be taken from a file instead of typing every row by hand: CSV from Scalable Capital, PDF documents from Trade Republic, and a **generic CSV with freely mappable columns** and saved profiles. Everything goes through the same checks: preview, duplicate detection, matching to assets, validation of the booking order and one single atomic posting. There is no second, parallel booking path. The Scalable Capital and Trade Republic imports are marked as experimental.

### Advisory

A local workflow for investment proposals: a proposal consists of buy and sell lines with a rationale. It is recorded as an immutable version with a **SHA-256 checksum**. Advisor and client confirm exactly this version **independently of each other**. Only when both have confirmed the same version is it considered agreed. Declines and earlier versions stay in the history, and there is no delete function. Afterwards the actual execution at the broker can be recorded. Nothing is sent to a broker and nothing is signed electronically.

### Articles

A window of its own for reading and managing articles and documentation, with search and categories.

### Backup and export

Backup and restore of the whole database with an integrity check, plus CSV export, all through the normal Windows dialogs.

---

## 3. How Finora calculates

### Accounting

- **Weighted-average price** as cost basis, realised and unrealised profit and loss per transaction and per position.
- **Oversell protection:** you cannot sell more than you own.
- **Intermediate values are never rounded.** Rounding happens exactly once, when displaying: euro and dollar to 2 decimals, quantities to 8 for crypto and 4 for stocks. The rules are in the documentation.

### History without invented data

The portfolio value of earlier days is **reconstructed** from the transactions and the stored prices. If prices are missing for a period, the history is marked **incomplete**, with a "coverage details" section showing what is missing. There is no sample data. Simulated prices are excluded from the real evaluation.

### Exchange rates

Euro and dollar are combined using the official **ECB reference rates**. The fetch follows the publication time (around 16:30 Berlin time) and the TARGET non-working days, with a wait after failures and a single shared request when several views ask at once.

### Price sources

- **Crypto:** public market data from the Binance Spot interface, with a complete trading pair such as BTCEUR.
- **German and European stocks:** the Deutsche Börse's official free service for delayed data (Xetra), by ISIN. Prices are about 15 minutes delayed and labelled as such.
- **US stocks:** Twelve Data, with your own API key that you enter yourself in the settings.

Current prices and historical candles are cached separately, so a latest quote is never confused with a candle. "Delayed" and "stale" are two different states. If a fetch fails, the last values stay visible and are labelled with their freshness.

---

## 4. Technology

### Structure

- **UI:** React 19, TypeScript (strict) and Vite, charts with Apache ECharts, styling with Tailwind CSS 4 and design tokens
- **Desktop shell and logic:** Tauri 2 with Rust. All network requests run in the Rust part, never in the UI
- **Database:** SQLite, local, via rusqlite, with versioned migrations (currently schema 27)
- **Credentials:** the Twelve Data key is kept in the Windows credential store, never in the database and never in the program package
- **Languages:** i18next with German, English and Vietnamese, switchable without a restart

The layers are separate: price sources behind a common interface, a pure calculation layer for the portfolio with no dependency on the UI, and a data access layer that the UI uses as its only way into the Rust part.

### Optional cloud

There is an **optional** server called Finora Cloud (Rust with Axum and PostgreSQL, behind a Cloudflare tunnel). It manages accounts and the advisory processes, with passwords stored as Argon2id and sessions as random tokens of which only the SHA-256 checksum is kept. A portfolio is synchronised **only after an explicit click** and only per portfolio, with conflict handling ("keep local" or "use cloud"). The server is not yet in production. The app works fully without it.

### Quality

- **Calculation tests** with Vitest for portfolio, formatting, backup, exchange rates and import
- **Rust tests** for migrations, data access, backup and constraints
- **Performance tests** with synthetic data of up to **100,000 transactions**, 50,000 cash events and 20 restarts in a row. This found one real defect: every posting re-checked the whole history without a suitable index. A new index (schema 27) brings adding a transaction at 100,000 entries down to about 7 milliseconds.

### What is still open

This version is a **Limited Beta**. Broker imports are experimental and not yet checked against real files, the cloud is not in production, and a multi-hour soak test is still to come. The release notes say so too.

---

## 5. Installation and data

The installer (NSIS) sets Finora up **only for your own Windows user account**, without administrator rights. Because it is not signed with a certificate, Windows SmartScreen may show a warning on first launch. There you choose "More info" and "Run anyway".

The data lives in a single database file on your own computer and is **empty** on first launch, with no sample or demo data. When uninstalling, database, logs and backups are kept by default.

The images above come from a development build with example values and show the overview, portfolio, allocation and the articles window.

---

## 6. Installer and source code

I pass on the **installer** on request. Send me a short note about what you would like to use Finora for: [donguyennhan.de@gmail.com](mailto:donguyennhan.de@gmail.com)

The source code is not public. If you want to assess how I work, you can see it **on request** at the same address.

Finora is a tool for overview and not investment advice. All information without guarantee.
