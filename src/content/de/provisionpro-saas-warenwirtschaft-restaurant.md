---
id: provisionpro-saas-warenwirtschaft-restaurant
slug: provisionpro-saas-warenwirtschaft-restaurant
translation_id: provisionpro-saas-restaurant-inventory
language: de
content_type: project
title: ProvisionPro – Warenwirtschaft für Restaurants als Web-App (SaaS)
category: Web, Software
image_url: /my-electronics-blog/images/posts/provisionpro-reports-1.webp
image_gallery:
- /my-electronics-blog/images/posts/provisionpro-reports-2.webp
- /my-electronics-blog/images/posts/provisionpro-reports-3.webp
- /my-electronics-blog/images/posts/provisionpro-reports-4.webp
excerpt: Eine mandantenfähige Web-Anwendung für Restaurants: Zutaten, Rezepte mit Kalkulation, Lagerchargen nach FIFO und FEFO, Einkauf mit Bestellungen und Wareneingang, Nachbestellvorschläge und mobiles Scannen per Barcode oder QR-Code. Läuft im Browser, mit Testphase und Lizenzmodell, in Deutsch, Englisch, Vietnamesisch und Chinesisch.
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
project_status: done
sort_order: 45
---

# ProvisionPro
### Warenwirtschaft für Restaurants als Web-App (SaaS)

**Ein Programm, das zeigt, was im Lager liegt, was ein Gericht wirklich kostet und was nachbestellt werden muss, ohne Tabellenkalkulation und ohne Zettel.**

**Technik:** React, TypeScript, Node.js, Fastify, PostgreSQL, Docker  
**Betriebsform:** Web-Anwendung als Dienst (SaaS), mandantenfähig, installierbar auf dem Telefon  
**Sprachen der Oberfläche:** Deutsch, Englisch, Vietnamesisch, Chinesisch  
**Version:** 1.0.0  
**Demo:** online, siehe Schaltfläche „Zum Projekt“ am Ende der Seite

---

## 1. Projektübersicht

### Was ist ProvisionPro?

ProvisionPro ist eine Warenwirtschaft für Restaurants, besonders für Küchen mit vielen Zutaten und Rezepten, wie Sushi- und asiatische Restaurants. Sie beantwortet die Fragen, die im Alltag täglich auftauchen:

- Was ist gerade im Lager, und was läuft bald ab?
- Was kostet ein Gericht in der Herstellung, wenn die Einkaufspreise schwanken?
- Was muss ich bei welchem Lieferanten nachbestellen?
- Stimmt der Bestand im Regal mit dem im System überein?

### Entstehung

Die Anwendung ist ein vollständiger Neubau meiner früheren Desktop-Software für Windows. Die bewährten Geschäftsregeln, also Rezeptkalkulation, Chargen nach FIFO und die atomare Bestandsbuchung beim Verkauf eines Gerichts, wurden übernommen und als Webdienst neu umgesetzt. Seitdem läuft alles im Browser, auf jedem Gerät und ohne Installation.

### Grundidee

**Jede Bestandsänderung ist nachvollziehbar, und kein Scan bucht etwas ohne ausdrückliche Bestätigung.**

---

## 2. Funktionen

### Stammdaten

- **Zutaten** mit Einheit, Einkaufspreis, Kategorie, Mindest- und Höchstbestand sowie mehreren Barcodes je Zutat.
- **Kategorien** und **Lieferanten** mit Kontaktdaten und Auswertung je Lieferant.
- **Rezepte** mit Zutatenliste, Verkaufspreis und **Versionen**. Die Kalkulation zeigt den Wareneinsatz jedes Gerichts, und alte Versionen bleiben erhalten.

### Lager

- **Chargen** mit Menge, Einkaufspreis, Lagerort und Mindesthaltbarkeit. Entnommen wird nach **FIFO** (zuerst eingelagert, zuerst verbraucht) oder **FEFO** (zuerst ablaufend, zuerst verbraucht).
- **Lagerorte** und **Umbuchungen** zwischen ihnen.
- **Inventur** mit Zählsitzungen und Differenzen.
- **Schwund** und manuelle Korrekturen mit Begründung.
- Eine Liste **bald ablaufender Chargen**, damit nichts im Kühlhaus vergessen wird.

### Einkauf

- **Bestellungen** in den Stufen bestellt, teilweise geliefert und vollständig geliefert.
- **Wareneingang** auch in Teillieferungen. Beim Buchen entstehen Wareneingang, Charge, Lagerbewegung und neuer Bestand in einem einzigen Schritt. Doppeltes Absenden bucht nichts doppelt.
- **Eingangsrechnungen**, wahlweise mit Bestellung und Wareneingang verknüpft, um bestellt, geliefert und berechnet nebeneinander zu sehen.
- **Nachbestellung:** Die Anwendung schlägt Mengen vor, aus Mindest- und Höchstbestand, abzüglich dessen, was schon unterwegs ist, gerundet auf ganze Verpackungseinheiten. Du änderst Lieferant, Menge und Preis und erzeugst daraus Bestellentwürfe. **Es wird nie automatisch bestellt.**
- **Einkaufsanalyse:** Liefertreue, Pünktlichkeit, Mengen- und Preisabweichung, Preisverlauf je Zutat und offene Bestellungen.

### Scannen und Lager am Telefon

Die Seite „Scan & Lager“ ist für das Telefon im Lager gedacht. Sie erkennt Barcodes (EAN-13, UPC-A, Code 128) und QR-Etiketten für Chargen und Lagerorte und führt direkt weiter zu Wareneingang, Umbuchung, Inventur oder Schwund.

- Die Kamera wird **erst nach dem Tippen auf „Kamera starten“** angefragt.
- Funktioniert die Kamera nicht oder ist sie nicht erlaubt, gibt es immer die **manuelle Eingabe**.
- Ein unbekannter Code legt **nie** automatisch eine Bestellposition an.
- QR-Etiketten enthalten nur eine zufällige öffentliche Kennung, keine Mengen, keine Preise und keine Zugangsdaten.

### Verkauf, Gutscheine und Abschluss

- **Verkauf:** Ein Gericht wird verbucht, der Bestand wird automatisch nach FIFO oder FEFO abgezogen, und der Wareneinsatz wird berechnet.
- **Gutscheine:** Einzweck- und Mehrzweckgutscheine, ausstellen, einlösen, erstatten und korrigieren, mit Verlauf.
- **Tagesabschluss:** Die Tagessummen der externen Kasse werden nach Mehrwertsteuersatz erfasst.
- **Steuer:** monatliche Schätzung der Umsatzsteuer aus den Tagesabschlüssen und den Gutscheinvorgängen, abzüglich Vorsteuer.
- **Berichte:** Umsatz, Kosten, Bestand, Schwund und Lieferanten, nach Tag, Woche oder Monat.

### Aktionszentrum und Protokoll

Das **Aktionszentrum** sammelt, was Handlung braucht: abgelaufene Chargen, Bestand unter dem Mindestwert, Bestellungen, Testphase und Lizenz. Meldungen erscheinen nicht doppelt. Das **Aktivitätsprotokoll** hält fest, wer wann was geändert hat.

---

## 3. Das SaaS-Modell

### Mandanten und Rollen

Jedes Restaurant ist ein eigener **Mandant** mit getrennten Daten. Ein Restaurant sieht nie die Daten eines anderen, auch nicht über Barcodes: Ein Code ist nur innerhalb eines Restaurants eindeutig und kann in einem anderen wieder vergeben werden. Es gibt drei Rollen: Super-Admin, Restaurantinhaber und Mitarbeiter.

### Testphase und Lizenz

Neue Restaurants starten mit einer **Premium-Testphase**. Danach schaltet ein Lizenzschlüssel die Pläne **Plus** oder **Premium** frei, für **ein Jahr oder unbefristet**. Die Schlüssel sind mit **Ed25519** signiert und werden vom Server geprüft. Läuft die Testphase ab, meldet das das Aktionszentrum, und die Anwendung zeigt den Status klar an.

### Sicherung

Es gibt Werkzeuge für **Sicherung und Wiederherstellung**. Barcode-Zuordnungen bleiben dabei erhalten. Die internen Chargenkennungen werden beim Wiederherstellen neu vergeben, damit Sicherungen sich nicht überschneiden.

---

## 4. Technik

### Aufbau

- **Server:** Node.js 22 mit TypeScript, Fastify und Zod für die Eingabeprüfung
- **Datenbank:** PostgreSQL mit Prisma, rund 28 Tabellen
- **Oberfläche:** React, TypeScript, Vite, Tailwind CSS und shadcn/ui (Radix), Datenabruf mit TanStack Query
- **Sprachen:** react-i18next, vier Sprachdateien mit Konsistenzprüfung
- **Anmeldung:** JWT im httpOnly-Cookie, Passwörter mit bcrypt
- **Betrieb:** Docker Compose und Nginx auf einem Linux-Server, mit Gesundheitsprüfungen, strukturierten Logs, Anfrage-Kennungen und Betriebshandbuch

Das Projekt liegt als Arbeitsbereich mit zwei Teilen vor: Server und Weboberfläche.

### Qualität

- **Modultests** mit Abdeckung und eine **Sicherheitsprüfung** der Abhängigkeiten
- **Integrationstests** gegen eine eigens angelegte und danach wieder gelöschte PostgreSQL-Datenbank
- **End-to-End-Tests** mit Playwright für Desktop und Telefon, dazu Tests auf Barrierefreiheit
- **Lasttests** mit k6
- **Bestandsabgleich:** ein Werkzeug, das nur liest und prüft, ob die Bestände jeder Zutat zu den Chargen und Bewegungen passen

### Was ich daraus gelernt habe

Wer eine Warenwirtschaft baut, merkt schnell, dass die Schwierigkeit nicht im Bild auf dem Bildschirm liegt, sondern in den Regeln dahinter: Buchungen dürfen nie halb passieren, doppelte Klicks dürfen nichts doppelt buchen, und jede Zahl muss sich bis zur Quelle zurückverfolgen lassen.

---

## 5. Demo

Eine Demo mit Beispieldaten eines Sushi-Restaurants läuft online: [provisionpro.tavrion.de](https://provisionpro.tavrion.de/). Zugangsdaten für die Demo:

- **E-Mail:** `tan@tavrion.de`
- **Passwort:** `Tan123.,` (mit Punkt und Komma am Ende)

Die Testphase der Demo kann abgelaufen sein. Dann zeigt die Anwendung das an, und einzelne Funktionen sind eingeschränkt.

Die Bilder oben zeigen die Berichte der Anwendung mit Beispieldaten eines Sushi-Restaurants: Umsatz und meistverkaufte Gerichte, Wareneinsatzquote, Rentabilität je Gericht, Lagerwert nach Kategorie, Ablaufrisiko, Schwund, Ausgaben nach Lieferant und Umsatz nach Wochentag.

---

## 6. Quellcode

Der Quellcode ist nicht öffentlich. Wer meine Arbeitsweise beurteilen möchte, kann ihn **auf Anfrage** einsehen: [donguyennhan.de@gmail.com](mailto:donguyennhan.de@gmail.com)
