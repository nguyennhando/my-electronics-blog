---
translation_id: local-post-1779957810945
language: en
slug: financial-management-with-data-analysis
title: Financial Management with Data Analysis
category: Softwareentwicklung
image_url: /my-electronics-blog/images/posts/finanzmanager-main.webp
image_gallery:
- /my-electronics-blog/images/posts/finanzmanager-1.webp
- /my-electronics-blog/images/posts/finanzmanager-2.webp
- /my-electronics-blog/images/posts/finanzmanager-3.webp
excerpt: Personal income and expense management with CSV import and export, real-time data analysis and a modern graphical interface. The complete source code is available through the project link.
tags:
- C++
- Qt 6.9
read_time: 5 Min.
published: true
created_at: '2026-05-28T08:43:30.945Z'
external_link: https://github.com/nguyennhando/finanzmanager
project_status: done
sort_order: 30
---

# Financial Management with Data Analysis

## GeldPilot - Personal Finance Management

GeldPilot is a modern desktop application for managing personal finances, developed with C++, Qt 6 and SQLite. It supports income and expense tracking, CSV import and export, and real-time data analysis through a modern graphical interface.

The `Open project` button at the end of the page provides access to the complete source code.

## Overview

GeldPilot is a user-friendly application for managing income and expenses. Its intuitive interface makes it possible to manage transactions, organize categories and create comprehensive financial reports.

## Main Features

- **Transaction management:** Add, edit and delete income and expenses
- **Categories:** Use predefined and custom categories
- **Period filters:** Filter flexibly by date and category
- **Financial overview:** Automatically calculate income, expenses and balance
- **Visualization:** Display finances with interactive bar charts
- **Import and export:** Exchange data through CSV files
- **Printing:** Generate professional reports with a company logo

## System Requirements

### Minimum Requirements

- Operating system: Windows 10 or 11, macOS 10.15+, or Linux Ubuntu 20.04+
- Memory: 4 GB RAM
- Disk space: 100 MB
- Screen resolution: 1024 x 768

### Recommended Requirements

- Memory: 8 GB RAM or more
- Screen resolution: 1920 x 1080 or higher

## Installation

### Precompiled Windows Version

1. Download the latest version from the Releases page.
2. Extract the archive to a folder of your choice.
3. Start `GeldPilot.exe`.

### Build from Source

Requirements:

- Qt 6.9 or newer
- CMake 3.16 or newer
- A C++17-compatible compiler:
  - Windows: MinGW-w64 or MSVC 2019+
  - macOS: Xcode 12+
  - Linux: GCC 9+ or Clang 10+

Build steps:

```bash
git clone https://github.com/username/geldpilot.git
cd geldpilot
mkdir build
cd build
cmake .. -DCMAKE_BUILD_TYPE=Release
cmake --build . --config Release
```

Start the application:

```bash
# Windows
./Release/GeldPilot.exe

# Linux or macOS
./GeldPilot
```

## Getting Started

### Add Your First Transaction

1. Start GeldPilot.
2. Enter the date, amount and description.
3. Select a category, such as `Salary`.
4. Select the type: `Income` or `Expense`.
5. Click `New Transaction`.

### Filter Data

- Use the category dropdown menus.
- Set a start date and end date for a time-period filter.
- Click `Filter` to update the view.

### Create Reports

- Click `Chart` for a visual representation.
- Use `Print` for a professional report.
- Export data as CSV for further analysis.

## User Guide

### Transaction Management

To add a transaction, fill in all required fields:

- Date: transaction date
- Amount: monetary amount, always entered as a positive value
- Description: short description of the transaction
- Category: assigned category
- Type: `Income` or `Expense`

To edit a transaction:

1. Select a row in the table.
2. The data appears automatically in the input fields.
3. Make the required changes.
4. Click `Save`.

To delete transactions:

- Single transaction: select a row and click `Delete`.
- Multiple transactions: select several rows with `Ctrl + Click` and click `Delete`.

### Categories

Predefined categories:

- Leisure
- Salary
- Health
- Groceries
- Rent
- Other
- Transport
- Insurance
- Investment
- Communication
- Housing

### Filtering and Search

Filter by category:

- Select `All Categories` for an unfiltered view.
- Select a specific category for a filtered view.

Filter by time period:

1. Set the start date and end date.
2. Click `Filter`.

### Import and Export

CSV import:

1. Prepare a CSV file with the columns `ID`, `Date`, `Amount`, `Description`, `Category` and `Type`.
2. Click `Import`.
3. Select the CSV file.

CSV export:

1. Click `Export`.
2. Select a location and filename.
3. The current table view is exported.

### Charts and Reports

To display the financial chart, click `Chart`. The bar chart shows categories, total income, total expenses and balance with interactive color coding.

To print a report:

1. Open the chart.
2. Click `Print`.
3. Select the printer and settings.
4. The application creates a professional printout with a logo.

## Technical Details

### Architecture

- GUI framework: Qt 6.9
- Database: SQLite local file
- Charts: Qt Charts
- Build system: CMake
- Compiler on Windows: MinGW-w64

### Database Schema

Transactions table:

```sql
CREATE TABLE transaktionen (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    datum DATE NOT NULL,
    betrag REAL NOT NULL,
    beschreibung TEXT,
    kategorie TEXT NOT NULL,
    typ TEXT NOT NULL CHECK (typ IN ('Einnahme', 'Ausgabe'))
);
```

Categories table:

```sql
CREATE TABLE kategorien (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE NOT NULL
);
```

### Project Structure

```text
geldpilot/
  src/
    main.cpp                 Application entry point
    mainwindow.cpp/h         Main window
    chartwindow.cpp/h        Chart window
    datenbankmanager.cpp/h   Database logic
    centerdelegate.h         UI styling
  ui/
    mainwindow.ui            Main-window UI
    chartwindow.ui           Chart UI
  resources/
    icons/                   Application icons
  CMakeLists.txt             Build configuration
  README.md                  Documentation
```

## Development

Code style:

- C++17 standard
- Qt conventions
- Descriptive German variable names
- Extensive comments

To contribute:

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test thoroughly.
5. Create a pull request.

Known topics:

- Multiple selection for deletion is implemented.
- Database indexing for performance is implemented.
- Backup functionality is planned.

## Support

Need help?

- Documentation: read the complete README.
- Issues: report bugs on GitHub.
- E-mail: `support@geldpilot.de`

Frequently asked questions:

- **The database cannot be opened:** Make sure the application has write permission in the installation directory.
- **The chart is not displayed:** Check whether Qt Charts is installed.
- **Import fails:** Check the CSV format. It must be semicolon-separated.

## License

Copyright 2025 Nguyen Nhan Do. All rights reserved.  
Version: 1.0.0  
Developer: Nguyen Nhan Do  
Build: Qt 6.9, MinGW-w64, CMake

Use GeldPilot to keep track of your finances and shape your financial future with confidence.
