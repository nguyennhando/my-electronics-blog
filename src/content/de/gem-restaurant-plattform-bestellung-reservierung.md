---
id: gem-restaurant-plattform-bestellung-reservierung
slug: gem-restaurant-plattform-bestellung-reservierung
translation_id: gem-restaurant-platform
language: de
content_type: project
title: GEM Restaurant – Selbst gehostete Plattform für Online-Bestellung und Reservierung
category: Web, Software
image_url: /my-electronics-blog/images/posts/gem-restaurant-home-desktop.webp
image_gallery:
- /my-electronics-blog/images/posts/gem-restaurant-order-desktop.webp
- /my-electronics-blog/images/posts/gem-restaurant-admin-dashboard.webp
- /my-electronics-blog/images/posts/gem-restaurant-home-mobile.webp
- /my-electronics-blog/images/posts/gem-restaurant-order-mobile.webp
excerpt: Eine selbst gehostete PHP-Anwendung für Restaurants: Gästewebsite in drei Sprachen, Abholbestellungen, Tischreservierung sowie ein Admin-Bereich mit Küchen- und Theken-Display, E-Mail- und Push-Benachrichtigungen. Betrieben wird sie mit Docker.
tags:
- PHP
- MySQL
- Docker
- Web Push
- Restaurant
- Mehrsprachigkeit
read_time: 10 Min.
published: true
created_at: '2026-11-10T20:30:00.000Z'
external_link: 
project_status: in_progress
sort_order: 17
---

# GEM Restaurant
### Selbst gehostete Plattform für Online-Bestellung und Reservierung

**Eine Website und ein Betriebssystem in einer Anwendung: Gäste bestellen und reservieren, das Personal bearbeitet alles live in Küche und Theke.**

**Technik:** PHP 8.2, MySQL 8, Apache in Docker  
**Sprachen:** Deutsch, Englisch, Vietnamesisch  
**Funktionen:** Abholbestellung, Reservierung, Küchen- und Theken-Display, E-Mail und Web-Push  
**Aktuelle Version:** 2026.11.10-staffpush  
**Projektstatus:** in aktiver Entwicklung und im laufenden Betrieb mit regelmäßigen Releases

---

## 1. Projektübersicht

### Was ist GEM Restaurant?

GEM Restaurant ist eine **selbst gehostete Webanwendung für kleine und mittlere Restaurants**. Sie ersetzt keine einzelne Funktion, sondern verbindet zwei Seiten, die sonst oft getrennt sind:

- die **Gästewebsite** mit Speisekarte, Online-Bestellung zur Abholung und Tischreservierung,
- den **Admin-Bereich**, in dem das Personal Bestellungen und Reservierungen bearbeitet und Inhalte pflegt.

Alles läuft in einer Anwendung, die sich auf einem eigenen Server oder VPS betreiben lässt. Es gibt keine Abhängigkeit von einer fremden Bestellplattform und keine Provision pro Bestellung.

### Grundidee

**Ein Restaurant soll seine Gäste, seine Speisekarte und seine Daten selbst in der Hand behalten und das Tagesgeschäft in Küche und Theke ohne Papier abwickeln können.**

Die Bilder auf dieser Seite zeigen die Demo-Installation mit Testdaten. Es sind keine echten Gäste- oder Bestelldaten zu sehen.

---

## 2. Funktionen für Gäste

- Responsive Startseite mit konfigurierbaren Texten und Bildern.
- Oberfläche in **Deutsch, Englisch und Vietnamesisch**.
- Speisekarte nach Kategorien, Produktinfos und Varianten.
- **Online-Bestellung zur Abholung** mit Warenkorb und Checkout.
- **Tracking-Link** nach der Bestellung, damit Gäste den Status verfolgen können.
- Optionale **Push-Benachrichtigung** auf dem Gäste-Gerät zum Stand der Bestellung.
- Tischreservierung mit Bestätigungs- und Stornoablauf.
- E-Mails an Gäste in **ihrer eigenen Sprache** (Bestellung und Reservierung).
- Rechtliche Seiten wie Impressum und Datenschutz.

---

## 3. Funktionen für das Personal

### Tägliches Arbeiten

- **Dashboard** mit den wichtigsten Zahlen: neue, in Bearbeitung, fertige und abgeholte Bestellungen sowie neue Reservierungen.
- **Bestellverwaltung** vom Eingang bis zur Abholung mit Schnellaktionen für mehrere Bestellungen.
- **Küchen-Display** und **Theken-Display** für den laufenden Service, auch auf Tablet und Smartphone, mit hellem und dunklem Design.
- **Akustisches Signal** bei neuen Bestellungen.
- **Push-Benachrichtigung** für neue Bestellungen auf Admin-Geräten. Sie ist pro Gerät freiwillig und enthält keine Kundendaten.
- Rückmeldung zum **E-Mail-Versand**: Das Personal sieht, ob die Statusmail gesendet wurde, fehlgeschlagen ist oder keine Adresse vorlag.
- **Reservierungen** bestätigen oder ablehnen.

### Inhalte und Einstellungen

- Editoren für **Speisekarte, Startseite, Öffnungszeiten, Hintergrundbild und rechtliche Seiten**.
- WebP-Bild-Upload für Gerichte und Website.
- Kundenexport und **Statistik** zu Umsatz und Bestellungen.
- **Audit-Log** für wichtige Admin-Aktionen.
- Mehrere Admin-Benutzer mit **Berechtigungen**.
- Optional: **Küchenbon-Druck** über eine HTTP-Druckbrücke und eine **Kassen-Schnittstelle** über einen API-Schlüssel.

---

## 4. Technik und Aufbau

- **Backend:** PHP 8.2 mit Composer und PSR-4-Autoloading, PDO-Zugriff auf MySQL 8.
- **Frontend:** serverseitig gerendertes PHP mit CSS und JavaScript, ohne schweres Framework.
- **Betrieb:** Docker Compose mit getrennten Volumes für Datenbank, Uploads und Speicher.
- **E-Mail:** PHPMailer über SMTP.
- **Push:** Web-Push mit eigenem Service Worker, Schlüssel werden beim ersten Gebrauch automatisch erzeugt.
- **Installation:** Installationsassistent unter `/install/`, SQL-Migrationen und Startdaten.
- **Konfiguration:** über `.env`, ohne Geheimnisse im Repository.

### Aufbau des Codes

Die Seiten in `public/` und `admin/` bleiben dünne Controller. Die Fachlogik liegt in `app/` und ist in Module aufgeteilt: Menü, Bestellungen, Reservierungen, Mail, Push, Tracking, Lieferung, Sicherheit, Einstellungen und Homepage-Inhalte. So bleibt sie testbar und lässt sich schrittweise aus großen Seitendateien herauslösen.

---

## 5. Sicherheit und Datenschutz

- Sicherer Admin-Login mit Sitzungsverwaltung, CSRF-Schutz und **Rate-Limiting**.
- **Sicherheits-Header** und Prüfung von Pfaden und Client-IP, auch hinter einem Reverse-Proxy.
- API-Schlüssel werden nur als **Hash** gespeichert.
- Push-Nachrichten enthalten **keine Kundendaten** und gehen nur an Geräte, die sich selbst angemeldet haben.
- Der Push-Dienst darf nur freigegebene Endpunkte ansprechen, um Missbrauch zu verhindern.
- Ein Produktionsschutz verhindert gefährliche Aktionen auf dem Live-System.
- Geheimnisse, Kundendaten, Uploads und Backups gehören nicht ins Repository.

---

## 6. Betrieb und Updates

Für den Alltag auf einem Server gibt es eigene Werkzeuge:

- **Release-Prüfung:** Ein Skript prüft vor jeder Auslieferung, ob das Paket bereit ist. Es blockiert, wenn Migrationen fehlen oder Code ohne passende Migration ausgeliefert würde.
- **Update-Skript:** Es bricht ab, wenn die Konfiguration unvollständig ist, bevor ein Docker-Befehl läuft.
- **Backups** mit Prüfsumme und Hinweis, wenn das letzte Backup zu alt ist.
- **Statusbefehl** für Gesundheit, Backup-Alter und Speicherplatz. Er ist nur lesend und sicher im Live-Betrieb.
- **Rollback:** Alte Code-Stände lassen sich wiederherstellen, auch wenn der neue Code bereits Daten angelegt hat.

---

## 7. Was ich dabei gelernt habe

### Uploads gehören auf ein dauerhaftes Volume

Bilder der Startseite wurden anfangs im Release-Verzeichnis abgelegt. Bei einem Update gingen sie verloren. Seitdem schreiben Uploads in ein **dauerhaftes Upload-Volume**, ältere Pfade lösen weiterhin auf. Der Nachweis läuft auf dem echten Server: Drei hochgeladene Bilder überstehen ein Neuerstellen des Containers unverändert.

### Ein Ausfall des Mailservers darf das Personal nicht aufhalten

Messungen mit einem toten Mailserver zeigten: Jede Statusänderung wartete 15 Sekunden, ein Sammelvorgang mit vier Bestellungen sogar 60 Sekunden. Jetzt gibt der Mailer nach 5 Sekunden auf und versucht es 60 Sekunden lang nicht erneut. Die erste Aktion dauert etwa 5 Sekunden, die folgenden nur noch Millisekunden. Die Daten wurden zu keinem Zeitpunkt verloren.

### Audits finden stille Fehler

Eine systematische Prüfung der E-Mails zeigte, dass der Code für die Reservierungsbestätigung in einem unerreichbaren zweiten POST-Handler stand. Er wurde repariert. Außerdem gab es nie eine Mail direkt nach dem Checkout, nur Statusmails. Solche Lücken fallen nur auf, wenn man den Ablauf von vorn bis hinten prüft.

### Gleichzeitige Aktionen brauchen atomare Entscheidungen

Eine Reservierung, die der Gast bereits storniert hat, darf nicht mehr bestätigt werden können. Bestätigen und Ablehnen sind deshalb ein atomarer Vergleich-und-Setze-Vorgang.

### Große Speisekarten per Skript abgleichen

Für eine umfangreiche Speisekarte gibt es ein Synchronisationsskript. Es arbeitet **idempotent**, löscht nie etwas, legt vorher ein Backup an, bietet einen Probelauf und bricht bei mehrdeutigen Treffern ab.

---

## 8. Tests und Qualität

Der letzte geprüfte Release-Kandidat bestand **389 von 389 Integrationstests** und **83 von 84 Browsertests**. Der verbleibende Test ist als bekannter Sonderfall dokumentiert (ein Zeitproblem bei einem Checkbox-Label).

Für Web-Push gibt es 13 Browser-Szenarien mit echtem Service Worker und einem simulierten Push-Dienst. **Tests auf echten Geräten sind noch offen.**

---

## 9. Aktueller Stand und nächste Schritte

- Die Plattform ist funktionsfähig und wird laufend in kleinen, dokumentierten Releases erweitert.
- Web-Push ist umgesetzt und automatisiert getestet, wurde aber noch nicht auf einer Matrix echter Geräte bestätigt.
- Offen sind unter anderem weitere Geräteprüfungen, der weitere Ausbau der Admin-Oberfläche und eine Aufteilung großer Seitendateien in Module.
- Eine Lizenz ist nicht vergeben, der Code ist proprietär.

---

## Fazit

GEM Restaurant zeigt, wie viel Betrieb in einer „einfachen“ Bestell- und Reservierungsseite steckt: Mehrsprachigkeit, Live-Anzeigen für die Küche, verlässliche E-Mails, Push-Nachrichten, Sicherheit, Backups und sichere Updates. Der Schwerpunkt liegt darauf, dass das Tagesgeschäft verlässlich läuft und Fehler sichtbar werden, statt unbemerkt zu bleiben.

---

### GEM Restaurant

**Entwickelt von Nguyen Nhan Do**

Die Bilder zeigen eine Demo-Installation mit Testdaten. Proprietäres Projekt, alle Rechte vorbehalten.
