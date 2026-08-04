---
id: tablio-kasse-lokales-pos-system-mit-tse-fiskalisierung-von-grund-auf
slug: tablio-kasse-lokales-pos-system-mit-tse-fiskalisierung-von-grund-auf
translation_id: tablio-kasse-lokales-pos-system-mit-tse-fiskalisierung-von-grund-auf
language: de
content_type: project
title: TABLIO Kasse — Lokales POS-System mit TSE-Fiskalisierung von Grund auf
category: Softwareentwicklung
image_url: /my-electronics-blog/images/posts/1785878544700-screenshot-2026-08-04-231005.png
image_gallery:
- /my-electronics-blog/images/posts/1785878562041-screenshot-2026-08-04-230901.png
- /my-electronics-blog/images/posts/1785878568627-screenshot-2026-08-04-230914.png
- /my-electronics-blog/images/posts/1785878575589-screenshot-2026-08-04-230927.png
- /my-electronics-blog/images/posts/1785878581909-screenshot-2026-08-04-230955.png
excerpt: Lokales Kassensystem für deutsche Gastronomie — mit TSE-Fiskalisierung und DSFinV-K als Kernarchitektur, nicht als Nachrüstung.
tags:
[]
read_time: 5 Min.
published: true
created_at: '2026-08-04T21:03:35.667Z'
external_link: https://github.com/nguyennhando/Tablio-Android-APK/releases/tag/v0.3.19
project_status: done
sort_order: 100
---

# Neuer Beitrag

# TABLIO Kasse — Ein Kassensystem, das deutsches Kassenrecht ernst nimmt

**Ein lokal betriebenes Point-of-Sale-System für die Gastronomie, entwickelt für
den deutschen Markt — dort, wo die Anforderungen an Registrierkassen zu den
strengsten in Europa zählen.**

Tischplan · Bestellungen · Küchenmonitor in Echtzeit · Zahlungen · Kassenbuch ·
Berichte · Gutscheinsystem

---

## Der Ausgangspunkt

In Deutschland verlangt die **Kassensicherungsverordnung (KassenSichV)**, dass
jede kassenrelevante Transaktion durch eine zertifizierte **Technische
Sicherheitseinrichtung (TSE)** signiert wird, manipulationssicher gespeichert
bleibt und jederzeit im **DSFinV-K**-Format für die Finanzverwaltung exportierbar
ist. Viele selbstgebaute oder generische POS-Lösungen ignorieren diese
Anforderung komplett oder behandeln sie als nachträgliches Add-on.

Bei TABLIO Kasse ist das fiskalische Fundament kein Zusatz, sondern der
Ausgangspunkt der gesamten Architektur: Jede Zahlung, jede Stornierung, jede
Rückerstattung läuft durch dieselbe transaktionale Schicht, die TSE-Signatur,
Belegnummer und DSFinV-K-Export atomar zusammenhält.

## Funktionsumfang

**Restaurantbetrieb**
- Visueller Tischplan mit Zonen, freier Positionierung, verschiedenen
  Tischformen und Live-Status (frei / belegt / wartet auf Zahlung)
- Bestellungen für Tisch- und Außer-Haus-Verkauf in einem gemeinsamen Workflow
- Speisekarte mit Kategorien, Optionen/Extras, Rabatten und
  Storno-Begründungen
- Küchenmonitor mit Echtzeit-Status (Neu → In Zubereitung → Fertig → Serviert)
  über WebSockets

**Zahlungen & Fiskalisierung**
- Bar-, Karten- und Split-Zahlungen mit idempotenter Beleg-Finalisierung
- TSE-Anbindung über eine Provider-Architektur (Mock für Entwicklung,
  Steckplatz für zertifizierte USB-TSE-Geräte)
- DSFinV-K-Export, X/Z-Berichte, Kassenbuch mit Bar-Bewegungen
- **Gutscheinsystem**: Ausgabe, Verkauf mit eigenem Kassen-/TSE-Geschäftsvorfall,
  Einlösung, Rückerstattung, Sperren/Entsperren, manuelle Guthabenkorrektur —
  jede Bewegung eigenständig auditierbar

**Verwaltung**
- Schichtabschluss, Berichte (Umsatz, MwSt., Produkte, Kellner, Zahlarten)
- Rollen- und Rechtesystem (Admin, Manager, Kellner, Küche) mit granularen
  Einzelrechten pro Benutzer
- Reservierungen, Kundenverwaltung, Dienstplan
- Drei Sprachen (Deutsch, Englisch, Vietnamesisch), umschaltbar in der App

## Architektur

```mermaid
flowchart TB
    subgraph Geraete[Geräte im Restaurant]
      Kasse[Windows-Kasse]
      Tablet[Tablet]
      Handy[Smartphone]
      Kueche[Küchenbildschirm]
    end

    Kasse & Tablet & Handy & Kueche -->|Lokales WLAN| Web[React + Vite SPA]
    Web -->|REST + Socket.IO| API[NestJS API]
    API --> DB[(PostgreSQL + Prisma)]
    API --> Drucker[ESC/POS-Druckerschicht]
    API --> TSE[TSE-Provider-Schicht]
