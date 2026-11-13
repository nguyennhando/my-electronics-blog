---
id: finora-portfolio-tracker-desktop
slug: finora-portfolio-tracker-desktop
translation_id: finora-portfolio-tracker
language: de
content_type: project
title: Finora – Windows-App zur Verwaltung des eigenen Anlageportfolios
category: Software
image_url: /my-electronics-blog/images/posts/finora-overview.webp
image_gallery:
- /my-electronics-blog/images/posts/finora-portfolio.webp
- /my-electronics-blog/images/posts/finora-allocation.webp
- /my-electronics-blog/images/posts/finora-articles.webp
excerpt: Eine Desktop-App für Windows, die Aktien und Kryptowährungen aus den eigenen Transaktionen auswertet: Depotwert, Gewinn und Verlust, Verlauf, Bargeld und Verteilung. Alle Daten bleiben lokal, Kurse kommen von Binance, der Deutschen Börse und Twelve Data, Wechselkurse von der EZB. Gebaut mit Rust, Tauri und React.
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
pdf_url: /my-electronics-blog/documents/steckbrief/finora-de.pdf
project_status: in_progress
sort_order: 90
---

# Finora
### Windows-App zur Verwaltung des eigenen Anlageportfolios

**Ein ruhiges, genaues Werkzeug, das aus den eigenen Käufen und Verkäufen berechnet, wie das Depot wirklich dasteht, ohne Konto und ohne dass Daten den eigenen Rechner verlassen.**

**Technik:** Rust, Tauri 2, React 19, TypeScript, SQLite, Apache ECharts  
**Plattform:** Windows 10 und 11 (64 Bit)  
**Sprachen der Oberfläche:** Deutsch, Englisch, Vietnamesisch  
**Version:** 1.0.3 (Limited Beta)  
**Installationsdatei:** auf Anfrage per E-Mail, siehe unten

---

## 1. Projektübersicht

### Was ist Finora?

Finora ist eine Desktop-Anwendung, mit der man sein persönliches Anlageportfolio verfolgt: US-Aktien, deutsche und europäische Aktien und Kryptowährungen. Man trägt Käufe, Verkäufe und Bargeldbewegungen ein oder importiert sie aus Brokerdateien. Finora berechnet daraus Positionswert, Gewinn und Verlust und den Verlauf über die Zeit.

### Was Finora nicht ist

Finora ist kein Broker und keine Handelsplattform. Es führt keine Orders aus und liefert keine Echtzeitkurse für den Handel. Die Kurse werden etwa alle 15 Minuten aktualisiert, das reicht zum Verfolgen des eigenen Bestands. Wechselkurse der EZB sind Referenzkurse und keine handelbaren Preise, und die App sagt das auch so.

### Grundidee

**Jede Zahl stammt aus nachvollziehbaren Transaktionen und echten Marktdaten. Wo Daten fehlen, steht das ausdrücklich da, statt etwas zu erfinden.**

---

## 2. Funktionen

### Übersicht

- **Gesamtportfolio** in der Basiswährung (Euro oder US-Dollar), dazu nicht realisierter und realisierter Gewinn und Verlust.
- **Summen je Originalwährung:** Eine Position in Euro und eine in Dollar werden nie einfach addiert. Erst ein echter Wechselkurs der EZB macht daraus eine gemeinsame Zahl.
- **Portfoliowert-Verlauf** über 1 Tag, 1 Woche, 1 Monat, 3 Monate, 1 Jahr und maximal, mit Anlageperformance, die Ein- und Auszahlungen herausrechnet.
- **Verteilung** nach Anlageklasse und nach Position, Konzentration der größten Positionen, Beitrag jeder Position zum Gewinn und Verlust und Währungsexposure.
- **Bargeldanalyse** mit Bestand, Cashflow sowie Erträgen und Kosten.

### Portfolio

- Positionen mit Menge, durchschnittlichem Kaufpreis, aktuellem Kurs, Wert, Gewinn und Verlust und kleinem Kursverlauf.
- **Kauf und Verkauf** direkt an jeder Position, in einem eigenen Dialog.
- Eigene Reiter für **Krypto** und **Bargeld**.
- **Mehrere Portfolios** je Installation, auch als reine Simulation.
- **Export** der Positionen als CSV.

### Beobachtungsliste

Werte verfolgen, die man nicht besitzt, mit Kurs und Aktualität auf einen Blick. Ein eingebettetes Chartfenster dient nur der Ansicht und fließt nie in die Bewertung des Portfolios ein.

### Import aus Brokerdateien

Transaktionen lassen sich aus einer Datei übernehmen, statt jede Zeile von Hand zu tippen: CSV von Scalable Capital, PDF-Dokumente von Trade Republic und eine **allgemeine CSV mit frei zuordenbaren Spalten** und gespeicherten Profilen. Alles läuft durch dieselbe Prüfung: Vorschau, Erkennung von Duplikaten, Zuordnung zu Werten, Prüfung der Buchungsfolge und eine einzige atomare Buchung. Es gibt keinen zweiten, parallelen Buchungsweg. Die Importe von Scalable Capital und Trade Republic sind als experimentell gekennzeichnet.

### Beratung

Ein lokaler Ablauf für Anlagevorschläge: Ein Vorschlag besteht aus Kauf- und Verkaufszeilen mit Begründung. Er wird als unveränderliche Version mit **SHA-256-Prüfsumme** festgehalten. Berater und Kunde bestätigen **unabhängig voneinander** genau diese Version. Erst wenn beide dieselbe Version bestätigt haben, gilt sie als vereinbart. Ablehnungen und frühere Versionen bleiben im Verlauf erhalten, und es gibt keine Löschfunktion. Danach lässt sich die tatsächliche Ausführung beim Broker festhalten. Es wird nichts an einen Broker gesendet und nichts elektronisch signiert.

### Artikel

Ein eigenes Fenster zum Lesen und Verwalten von Artikeln und Dokumentationen, mit Suche und Kategorien.

### Sicherung und Export

Sicherung und Wiederherstellung der gesamten Datenbank mit Integritätsprüfung, dazu CSV-Export, jeweils über die normalen Windows-Dialoge.

---

## 3. So rechnet Finora

### Buchhaltung

- **Gleitender Durchschnittspreis** als Einstandswert, realisierter und nicht realisierter Gewinn je Transaktion und je Position.
- **Verkaufsschutz:** Man kann nicht mehr verkaufen, als man besitzt.
- **Zwischenwerte werden nie gerundet.** Gerundet wird genau einmal, beim Anzeigen: Euro und Dollar auf 2 Nachkommastellen, Mengen bei Krypto auf 8 und bei Aktien auf 4. Die Regeln stehen in der Dokumentation.

### Verlauf ohne erfundene Daten

Der Portfoliowert früherer Tage wird aus den Transaktionen und den gespeicherten Kursen **rekonstruiert**. Fehlen für einen Zeitraum Kurse, wird der Verlauf als **unvollständig** gekennzeichnet, mit einem Bereich „Abdeckungsdetails“, der zeigt, woran es liegt. Musterdaten gibt es nicht. Simulierte Preise bleiben von der echten Auswertung ausgeschlossen.

### Wechselkurse

Euro und Dollar werden mit den offiziellen **Referenzkursen der EZB** zusammengeführt. Der Abruf richtet sich nach dem Veröffentlichungszeitpunkt (gegen 16:30 Uhr Berliner Zeit) und den arbeitsfreien Tagen im TARGET-System, mit einer Wartezeit nach Fehlern und einer einzigen gemeinsamen Anfrage bei mehreren gleichzeitigen Ansichten.

### Kursquellen

- **Krypto:** öffentliche Marktdaten der Binance-Spot-Schnittstelle, mit vollständigem Handelspaar wie BTCEUR.
- **Deutsche und europäische Aktien:** der offizielle, kostenlose Dienst der Deutschen Börse für verzögerte Daten (Xetra), mit ISIN. Die Kurse sind etwa 15 Minuten verzögert und so gekennzeichnet.
- **US-Aktien:** Twelve Data, mit einem eigenen API-Schlüssel, den man selbst in den Einstellungen einträgt.

Aktuelle Kurse und historische Kerzen werden getrennt zwischengespeichert, damit ein Tageskurs nie mit einer Kerze verwechselt wird. „Verzögert“ und „veraltet“ sind zwei verschiedene Zustände. Schlägt ein Abruf fehl, bleiben die letzten Werte sichtbar und sind mit ihrer Aktualität beschriftet.

---

## 4. Technik

### Aufbau

- **Oberfläche:** React 19, TypeScript (streng) und Vite, Diagramme mit Apache ECharts, Gestaltung mit Tailwind CSS 4 und Design-Variablen
- **Desktop-Hülle und Logik:** Tauri 2 mit Rust. Alle Netzwerkabrufe laufen im Rust-Teil, nie in der Oberfläche
- **Datenbank:** SQLite, lokal, über rusqlite, mit versionierten Migrationen (derzeit Schema 27)
- **Zugangsdaten:** Der Twelve-Data-Schlüssel liegt im Windows-Anmeldeinformationsspeicher, nie in der Datenbank und nie im Programmpaket
- **Sprachen:** i18next mit Deutsch, Englisch und Vietnamesisch, umschaltbar ohne Neustart

Die Schichten sind getrennt: Kursquellen hinter einer gemeinsamen Schnittstelle, eine reine Rechenschicht für das Portfolio ohne Abhängigkeit von der Oberfläche, und ein Datenbankzugriff, über den die Oberfläche als Einziges in den Rust-Teil ruft.

### Optionale Cloud

Es gibt einen **optionalen** Server namens Finora Cloud (Rust mit Axum und PostgreSQL, hinter einem Cloudflare-Tunnel). Er verwaltet Konten und die Beratungsvorgänge, Kennwörter als Argon2id, Sitzungen als zufällige Token, von denen nur die SHA-256-Prüfsumme gespeichert wird. Ein Portfolio wird **nur nach ausdrücklichem Klick** und nur je Portfolio synchronisiert, mit Behandlung von Konflikten („lokal behalten“ oder „Cloud übernehmen“). Der Server ist noch nicht im Produktivbetrieb. Die App funktioniert ohne ihn vollständig.

### Qualität

- **Rechentests** mit Vitest für Portfolio, Formatierung, Sicherung, Wechselkurse und Import
- **Rust-Tests** für Migrationen, Datenzugriff, Sicherung und Randbedingungen
- **Leistungstests** mit künstlichen Datenmengen bis **100.000 Transaktionen**, 50.000 Bargeldereignissen und 20 Neustarts hintereinander. Dabei fand sich ein echter Fehler: Jede Buchung prüfte die ganze Historie ohne passenden Index. Ein neuer Index (Schema 27) senkt das Hinzufügen einer Transaktion bei 100.000 Einträgen auf etwa 7 Millisekunden.

### Was noch offen ist

Die Version ist eine **Limited Beta**. Brokerimporte sind experimentell und noch nicht mit echten Dateien geprüft, die Cloud ist nicht produktiv, und ein mehrstündiger Dauertest steht noch aus. Das steht auch so in den Versionshinweisen.

---

## 5. Installation und Daten

Der Installer (NSIS) richtet Finora **nur für das eigene Windows-Benutzerkonto** ein, ohne Administratorrechte. Da er nicht mit einem Zertifikat signiert ist, zeigt Windows SmartScreen beim ersten Start unter Umständen eine Warnung. Dort wählt man „Weitere Informationen“ und „Trotzdem ausführen“.

Die Daten liegen in einer einzigen Datenbankdatei auf dem eigenen Rechner und sind beim ersten Start **leer**, ohne Muster- oder Demodaten. Beim Deinstallieren bleiben Datenbank, Protokolle und Sicherungen standardmäßig erhalten.

Die Bilder oben stammen aus einer Entwicklungsversion mit Beispielwerten und zeigen Übersicht, Portfolio, Verteilung und das Artikelfenster.

---

## 6. Installationsdatei und Quellcode

Die **Installationsdatei** gebe ich auf Anfrage weiter. Schreib mir kurz, wofür du Finora nutzen möchtest: [donguyennhan.de@gmail.com](mailto:donguyennhan.de@gmail.com)

Der Quellcode ist nicht öffentlich. Wer meine Arbeitsweise beurteilen möchte, kann ihn über dieselbe Adresse **auf Anfrage** einsehen.

Finora ist ein Werkzeug zur Übersicht und keine Anlageberatung. Alle Angaben ohne Gewähr.
