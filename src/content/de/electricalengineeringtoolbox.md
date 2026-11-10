---
id: electricalengineeringtoolbox
slug: electricalengineeringtoolbox
translation_id: electrical-engineering-toolbox-privacy-policy
language: de
content_type: project
title: Electrical Engineering Toolbox – Offline-Rechner und Projektwerkzeug für die Elektroplanung
category: Software
image_url: /my-electronics-blog/images/posts/EEToolbox-main-1.webp
image_gallery:
- /my-electronics-blog/images/posts/EEToolbox-main-2.webp
- /my-electronics-blog/images/posts/EEToolbox-main-3.webp
- /my-electronics-blog/images/posts/EEToolbox-main-4.webp
excerpt: Eine Windows-Anwendung für Elektroplaner, Techniker und Studierende. Rechner für Spannungsfall, Kabelquerschnitt, Schutzorgan, Motorstrom und Transformator, dazu Lastlisten mit Kabelliste und PDF-Bericht. Alles läuft offline, ohne Konto und ohne Telemetrie. Im Microsoft Store erhältlich.
tags:
- C++
- Qt 6
- Windows
- Offline
- SQLite
- Microsoft Store
read_time: 8 Min.
published: true
created_at: '2026-06-19T06:29:08.495Z'
external_link: https://apps.microsoft.com/detail/9P368QBV3S27?hl=neutral&gl=DE&ocid=pdpshare
project_status: done
sort_order: 110
---

# Electrical Engineering Toolbox
### Offline-Rechner und Projektwerkzeug für die Elektroplanung

**Eine Windows-Anwendung, die die täglichen Rechenaufgaben der Elektroplanung an einem Ort bündelt, schnell, nachvollziehbar und ohne Cloud.**

**Technik:** C++17, Qt 6 (Widgets), SQLite, CMake  
**Plattform:** Windows 10 und 11 (64 Bit)  
**Sprachen der Oberfläche:** Deutsch, Englisch, Vietnamesisch, Chinesisch (vereinfacht)  
**Version:** 1.0.0  
**Verfügbar:** im Microsoft Store (Schaltfläche „Zum Projekt“ am Ende der Seite)

---

## 1. Projektübersicht

### Was ist die Toolbox?

Die Electrical Engineering Toolbox ist ein Desktop-Programm für **Elektroplaner, Techniker, Handwerker und Studierende**. Sie ersetzt die Sammlung aus Excel-Tabellen, Taschenrechner-Formeln und Notizzetteln, mit denen man sonst Kabel, Schutzorgane und Spannungsfall abschätzt.

Das Programm läuft vollständig auf dem eigenen Rechner. Es braucht **kein Konto, keine Internetverbindung und kein Abonnement**, zeigt keine Werbung und sendet keine Nutzungsdaten.

### Grundidee

**Ein Werkzeug, das beim Entwurf Zeit spart und jedes Ergebnis mit Formel und Eingaben nachvollziehbar macht.**

Die Ergebnisse sind Rechenhilfen für den Vorentwurf. Die endgültige Auslegung bleibt Sache der Fachkraft, nach den geltenden Normen.

---

## 2. Funktionen

### Rechner

- **Ohmsches Gesetz** mit wählbarer Zielgröße: Spannung, Strom, Widerstand oder Leistung.
- **Leistungsrechner** für Gleich- und Wechselstrom, mit Wirk-, Blind- und Scheinleistung.
- **Spannungsfall** für einphasige und dreiphasige Leitungen, mit Prozentwert und Spannung am Verbraucher.
- **Kabelquerschnitt** nach Strom, Verlegeart, Umgebungstemperatur und zulässigem Spannungsfall, mit Alternativen daneben.
- **Schutzorgan:** Auswahl der nächsten Normgröße von 6 A bis 630 A.
- **Motorstrom** bei Volllast.
- **Transformator:** Übersetzung und Scheinleistung.
- **Einheitenumrechner** für die gängigen elektrischen Größen.

Jeder Rechner zeigt neben dem Ergebnis die **verwendete Formel** und einen kurzen Hinweis zu den Annahmen.

### Projektbereich

Für größere Anlagen gibt es einen eigenen Arbeitsbereich:

1. Projektdaten festlegen: Spannung, Phasensystem, Gleichzeitigkeitsfaktor.
2. Verbraucher von Hand eintragen oder aus **CSV oder Excel importieren**. Die Spaltenzuordnung erfolgt in einer Vorschau, doppelte Namen werden auf Wunsch umbenannt.
3. Mit einem Klick eine **Kabelliste** erzeugen: Für jede Last werden Strom, Kabelquerschnitt, Spannungsfall und Schutzorgan berechnet und mit Status (in Ordnung, Warnung, Fehler) versehen.
4. Kabelliste als CSV oder den kompletten **Bericht als PDF** exportieren.

Die Lastliste ist für große Projekte ausgelegt und bleibt auch bei einigen hundert Einträgen flüssig.

### IEC-Kurzreferenz

Eine Nachschlagehilfe, die ohne Internet funktioniert: Schutzarten (IP), Spannungsebenen, Kabelquerschnitte, Schutzorgan-Reihen, Transformatorleistungen, Leistungsfaktor, Motorwirkungsgrad, Frequenz sowie Formelzeichen und Einheiten. Die Werte liegen lokal im Programm und sind allgemeine Richtwerte, keine Kopie von Normtexten.

### Intelligenter Assistent

Ein regelbasierter Assistent gibt Hinweise zu Lasten, Kabeln und Schutzorganen, zum Beispiel wenn der Spannungsfall zu hoch ist oder das Schutzorgan größer als das Kabel. Er arbeitet **ohne KI-Dienst im Netz**, nur mit festen, prüfbaren Regeln.

### Verlauf

Jede Berechnung lässt sich speichern. Der Verlauf kann gefiltert, als CSV oder PDF exportiert und mehrfach gelöscht werden.

### Oberfläche

Dunkles und helles Design, vier Sprachen mit mehr als 1000 übersetzten Texten, umschaltbar zur Laufzeit.

---

## 3. So rechnet das Programm

### Kabelauswahl

Die Kabelauswahl folgt einer einfachen, überprüfbaren Logik:

1. Aus Leistung, Spannung, Phasensystem und Leistungsfaktor wird der **Laststrom** bestimmt.
2. Die Strombelastbarkeit aus einer Referenztabelle nach IEC 60364 wird mit Verlegeart und Umgebungstemperatur **abgemindert**.
3. Gewählt wird der kleinste Querschnitt, dessen abgeminderte Belastbarkeit den Laststrom erreicht **und** dessen Spannungsfall unter dem erlaubten Wert bleibt (Voreinstellung 3 %).
4. Zusätzlich werden der nächstgrößere Querschnitt und die Sicherheitsreserve in Prozent angezeigt.

Der Spannungsfall wird einphasig mit **ΔU = 2 · I · L · R · cos φ** und dreiphasig mit **ΔU = √3 · I · L · R · cos φ** berechnet.

### Schutzorgan

1. Der Laststrom wird mit einem Faktor je Lasttyp multipliziert (Motoren und Transformatoren 1,25, andere Lasten 1,0).
2. Gewählt wird die **kleinste Normgröße**, die den Wert erreicht. Beispiel: 28 A Motorstrom ergeben 35 A und damit ein 40-A-Schutzorgan.
3. Liegt eine Kabelauswahl vor, wird die **Koordination** geprüft: Das Schutzorgan darf nicht größer sein als die Belastbarkeit des Kabels.

### Grenzen, ehrlich benannt

- Gleichstromlasten werden von der Wechselstrom-Kabelauswahl nicht bewertet.
- Das Anlaufverhalten von Motoren ist nicht im Detail abgebildet.
- Alle Ergebnisse sind Schätzwerte für den Vorentwurf und müssen nach den geltenden Vorschriften geprüft werden.

---

## 4. Technik

### Aufbau

- **Sprache und Oberfläche:** C++17 mit Qt 6 (Widgets, SVG, SQL, Übersetzungswerkzeuge)
- **Build:** CMake 3.16 oder neuer, MSVC 2022
- **Speicher:** SQLite, lokal, für den Berechnungsverlauf
- **Installer:** Inno Setup und MSIX für den Microsoft Store

Der Quelltext ist in vier Schichten gegliedert:

- **Kern:** Rechenmodule, Projektmodell, Validierung
- **Dienste:** Import, Export, Berichte, Sprachen, Verlauf
- **Oberfläche:** Seiten, Widgets, Abläufe
- **Daten:** Datenbank sowie Stile, Symbole und Referenztabellen als Ressourcen

### Qualität

Die Anwendung hat eine automatische Testsuite mit **66 Tests**: Einheiten-, Integrations-, Oberflächen- und Simulationstests. Die Rechenmodule sind so getrennt von der Oberfläche, dass sie ohne Fenster geprüft werden können.

---

## 5. Systemanforderungen

- **System:** Windows 10 oder Windows 11 (64 Bit)
- **Bildschirm:** mindestens 1366 × 768, empfohlen 1920 × 1080
- **Speicher:** etwa 150 MB
- **Netzwerk:** nicht erforderlich

---

## 6. Datenschutz

**Stand:** 18. Juni 2026 · **Version:** 1.0.0  
**Verantwortlich:** Nguyen Nhan Do  
**Kontakt für Datenschutz und Support:** [nguyennhan.do@outlook.com](mailto:nguyennhan.do@outlook.com)

Diese Seite dient zugleich als Datenschutzerklärung der App für den Microsoft Store.

### Kurz gesagt

- Die App ist ein **Offline-Programm**. Im normalen Betrieb werden **keine personenbezogenen Daten erhoben, verkauft oder übertragen**.
- Es gibt **keine Analyse, keine Telemetrie, keine Werbung und keine Cloud-Synchronisierung**.
- Es gibt kein Konto und keine In-App-Käufe.
- Verlauf, Einstellungen und Projektdateien liegen **nur auf deinem Gerät**.

### Was lokal gespeichert wird

- **Berechnungsverlauf** in einer lokalen Datenbank unter `%LOCALAPPDATA%\ElectricalEngineeringToolbox\`
- **Einstellungen** wie Sprache und Design am selben Ort
- **Projektdateien** (`.eetproject`) und **exportierte CSV- und PDF-Dateien** in Ordnern, die du selbst wählst
- **Diagnoseprotokoll** (`logs\app.log`), nur lokal, wird nicht hochgeladen

Der Entwickler erhält diese Daten nicht. Exportierte Dateien bleiben unter deiner Kontrolle.

### Was nicht erhoben wird

Name, E-Mail-Adresse, Standort, Gerätekennungen für Werbung, Nutzungsstatistiken, Absturzberichte, Berechnungsdaten, Projektdaten, Fotos, Kontakte, Kalender oder Mikrofon.

### E-Mail-Kontakt

Schreibst du mir, verarbeite ich deine E-Mail-Adresse, den Inhalt der Nachricht und mitgeschickte Anhänge, um deine Anfrage zu beantworten (Art. 6 Abs. 1 lit. b oder f DSGVO). Die Daten werden gelöscht, sobald sie dafür nicht mehr nötig sind. Für Werbung nutze ich sie nicht.

### Deine Rechte

Im EWR, in Großbritannien und in der Schweiz hast du das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Datenübertragbarkeit sowie auf Beschwerde bei der zuständigen Aufsichtsbehörde. Wende dich dafür an die oben genannte Adresse.

### Deine Kontrolle

Du kannst den Verlauf in der App löschen, Projektdateien selbst entfernen und mit der Deinstallation samt Löschen des Ordners `%LOCALAPPDATA%\ElectricalEngineeringToolbox\` alle App-Daten entfernen.

### Kinder

Die App ist ein allgemeines Ingenieurwerkzeug und richtet sich nicht an Kinder unter 13 Jahren. Es werden keine Daten von Kindern erhoben.

### Änderungen

Wird diese Erklärung geändert, ändert sich das Datum „Stand“ oben auf dieser Seite.

---

## 7. Hinweise

### Technischer Hinweis

Alle Ergebnisse, Kabellisten, Schutzorgan-Empfehlungen, Referenzwerte und Assistentenhinweise sind **Rechenhilfen** und keine fachliche, rechtliche oder sicherheitstechnische Beratung. Auslegung, Auswahl, Installation, Schutzkoordination und Freigabe müssen durch **qualifiziertes Personal** nach den geltenden Normen und Herstellerangaben erfolgen (zum Beispiel IEC, DIN, VDE, EN, NEC). Die Verantwortung für die Prüfung der Ergebnisse liegt beim Anwender.

### Nutzung

Die Software wird „wie besehen“ bereitgestellt, soweit gesetzlich zulässig ohne Gewährleistung. Für Schäden aus der Nutzung, etwa durch Planungsfehler, Verzögerungen oder Datenverlust, wird im gesetzlich zulässigen Umfang nicht gehaftet. Rückbau, Dekompilierung und Weitergabe über die gesetzlichen Rechte hinaus bedürfen der schriftlichen Zustimmung des Entwicklers.

### Quellcode

Der Quellcode ist nicht öffentlich. Wer meine Arbeitsweise beurteilen möchte, kann ihn **auf Anfrage** einsehen: [donguyennhan.de@gmail.com](mailto:donguyennhan.de@gmail.com)

---

© 2026 Nguyen Nhan Do. Alle Rechte vorbehalten.
