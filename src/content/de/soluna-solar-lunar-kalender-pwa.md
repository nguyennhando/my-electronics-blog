---
id: soluna-solar-lunar-kalender-pwa
slug: soluna-solar-lunar-kalender-pwa
translation_id: soluna-calendar-pwa
language: de
content_type: project
title: SOLUNA – Sonnen- und Mondkalender als Progressive Web App
category: Web, Software
image_url: /my-electronics-blog/images/posts/soluna-today-desktop.webp
image_gallery:
- /my-electronics-blog/images/posts/soluna-month-desktop.webp
- /my-electronics-blog/images/posts/soluna-month-mobile.webp
- /my-electronics-blog/images/posts/soluna-month-dark.webp
- /my-electronics-blog/images/posts/soluna-converter-mobile.webp
- /my-electronics-blog/images/posts/soluna-today-mobile.webp
- /my-electronics-blog/images/posts/soluna-settings.webp
excerpt: Eine installierbare Kalender-App, die den gregorianischen Kalender und den astronomisch berechneten Mondkalender nebeneinander zeigt. Sie läuft auf iPhone, Android und im Browser, auch offline, und kommt ohne Konto und ohne Server aus.
tags:
- PWA
- React
- TypeScript
- Mondkalender
- Vite
- Testing
read_time: 9 Min.
published: true
created_at: '2026-11-10T21:30:00.000Z'
external_link: 
project_status: done
sort_order: 100
---

# SOLUNA
### Sonnen- und Mondkalender als Progressive Web App

**Ein Kalender für Menschen, die mit zwei Zeitrechnungen leben: dem gregorianischen Kalender und dem Mondkalender.**

**Technik:** React 19, TypeScript, Vite, PWA  
**Kalender:** vietnamesisch, chinesisch und koreanisch (astronomisch berechnet)  
**Sprachen:** Vietnamesisch, Englisch, Deutsch, Chinesisch, Japanisch, Koreanisch, Thai  
**Version:** 0.1.0  
**Projektstatus:** in Entwicklung, Kernfunktionen laufen und sind getestet

---

## 1. Projektübersicht

### Was ist SOLUNA?

SOLUNA ist eine **Progressive Web App**: Sie wird im Browser geöffnet und lässt sich auf dem Startbildschirm von iPhone oder Android installieren. Nach dem ersten Laden funktioniert sie auch ohne Internet.

Die App zeigt zu jedem Tag das Datum im gregorianischen Kalender und das passende **Mondkalender-Datum**. Dazu kommen Monats-, Wochen- und Tagesansicht, ein Umrechner in beide Richtungen, Feiertage, Schulferien und Erinnerungen.

### Grundidee

**Ein Kalender, der den Mondkalender ernst nimmt: mit echter Astronomie statt einer Nachschlagetabelle.**

Viele Kalender-Apps zeigen das Mondkalender-Datum nur grob oder fehlerhaft an. SOLUNA berechnet es selbst, aus der Position von Sonne und Mond, und prüft das Ergebnis mit Tests für jeden einzelnen Tag von 1900 bis 2100.

---

## 2. Funktionen

### Heute

- Großes Datumsfeld mit dem gregorianischen und dem Mondkalender-Datum.
- Karte zum Mondtag: Tag im Mondmonat, Länge des Monats (29 oder 30 Tage) und ob es ein regulärer oder ein Schaltmonat ist.
- Hinweis auf den **nächsten freien Tag** und auf die heutige Erinnerung.

### Kalender

- **Monat, Woche und Tag** in einer Ansicht mit schneller Navigation.
- In jeder Zelle steht der Mondtag. Der erste Tag eines Mondmonats ist als „1/10“ markiert, der Vollmondtag (15) unterstrichen.
- Wochenenden sind rot, Feiertage haben einen farbigen Kreis.
- Tippt man auf einen Tag, öffnet sich ein Detailfenster.

### Umrechner

Ein Werkzeug für **Sonne → Mond und Mond → Sonne**. Es kennt Schaltmonate und meldet ungültige Eingaben, zum Beispiel einen 30. Tag in einem Monat mit 29 Tagen.

### Feiertage und Schulferien

- Gesetzliche Feiertage für alle **16 Bundesländer**, samt regionaler Sonderregeln (zum Beispiel für Augsburg oder Teile von Sachsen und Thüringen).
- **Schulferien** je Bundesland, geladen von der OpenHolidays-API und lokal zwischengespeichert.
- Namen in allen sieben Sprachen der Oberfläche.

### Erinnerungen

Pro Tag lässt sich eine Erinnerung mit Titel und optionaler Uhrzeit anlegen, ändern und löschen. Sie bleiben auf dem Gerät. Zur gewählten Zeit zeigt die App eine Benachrichtigung an.

### Einstellungen

- Design: hell, dunkel oder nach System.
- Sprache der Oberfläche, Wochenstart (Montag oder Sonntag).
- Zeitzone für „heute“: Gerätezeit oder vietnamesische Zeit.
- Eigenes **Hintergrundbild** für die Startseite aus der Fotomediathek. Es wird auf dem Gerät verkleinert und gespeichert.

---

## 3. Der Mondkalender

Das Herzstück ist eine eigene Berechnung in reinem TypeScript, ohne externe Bibliothek.

### So wird gerechnet

1. Das Datum wird in eine Julianische Tageszahl umgewandelt.
2. Der nächste **astronomische Neumond** wird nach den Verfahren von Meeus geschätzt und eingegrenzt.
3. Der Neumond wird dem Kalendertag zugeordnet, an dem er in der festgelegten Zeitzone stattfindet.
4. Aus der Länge der Sonne wird bestimmt, welche **Sonnenperiode** gerade läuft.
5. Der Monat 11 ist der Monat, der die Wintersonnenwende enthält.
6. In einem Jahr mit 13 Monaten wird der erste Monat ohne Sonnenperiode zum **Schaltmonat**.
7. Die Rückrichtung rekonstruiert den Monat 11 und den Monatsbeginn.

### Drei Kalender, eine Astronomie

Die vietnamesische, chinesische und koreanische Zeitrechnung nutzen dieselbe Astronomie, aber unterschiedliche Referenzzeitzonen: **UTC+7, UTC+8 und UTC+9**. Die Berechnung bekommt die Zeitzone als Parameter. In der Oberfläche wählt die Sprache den Kalender: Chinesisch zeigt den chinesischen, Koreanisch den koreanischen, alle anderen den vietnamesischen Kalender.

### Eine Grenze, die ehrlich benannt ist

Garantiert ist der Bereich **1. Januar 1900 bis 31. Dezember 2100**. Außerhalb zeigt die App einen Strich und erfindet keine Werte. Für die Zeit vor 1976 sind die vietnamesischen Ergebnisse moderne Rückrechnungen und keine historischen Rechtskalender.

---

## 4. Technik und Aufbau

- **Frontend:** React 19 und TypeScript 5.7, gebaut mit Vite 6.
- **Routing:** React Router mit Hash-Routen, damit die App auch ohne Serverkonfiguration läuft.
- **PWA:** Service Worker über vite-plugin-pwa. Updates werden angeboten und nicht heimlich eingespielt.
- **Design:** CSS-Variablen für Farben und Abstände, helles und dunkles Design, Rücksicht auf reduzierte Bewegung.
- **Layout:** Seitenleiste am Desktop, untere Navigation auf dem Smartphone.

### Trennung von Logik und Oberfläche

Der Code ist in Schichten gegliedert:

- `core/dates`: ein eigener Datumstyp ohne Uhrzeit und Zeitzone, damit keine Verschiebungen durch Sommerzeit entstehen.
- `core/calendar`: der Aufbau des Monatsrasters.
- `core/lunar`: die Mondkalender-Berechnung.
- `features`: die Seiten Heute, Kalender, Umrechner, Feiertage, Erinnerungen und Einstellungen.
- `shared`: Bausteine, Design und Übersetzungen.

Die Oberfläche enthält keine Astronomie. Dadurch lässt sich die Berechnung unabhängig testen und später auch in einem Worker oder Exportwerkzeug verwenden.

---

## 5. Tests und Qualität

- **308 Tests in 22 Testdateien** laufen durch.
- Die Mondkalender-Berechnung wird für **alle 73.414 Tage** des Bereichs geprüft, für jeden der drei Kalender: Umrechnung hin und zurück, eindeutige Zuordnung, richtige Monatslängen und Schaltmonate.
- Referenzdaten aus veröffentlichten Quellen prüfen unter anderem die Tết-Termine und besonders heikle Fälle, etwa eine Grenze im Jahr 2054, die erst der vollständige Test gefunden hat.
- Ein Test wechselt die Zeitzone des Systems und prüft, dass die Ergebnisse gleich bleiben.
- Playwright prüft den Ablauf in zwei Bildschirmgrößen, das Speichern der Einstellungen und den **Offline-Cache** der fertigen App, dazu **Barrierefreiheit** mit axe.
- Der Code läuft ohne ESLint-Warnungen, mit Prettier und mit Mindestabdeckung von 80 Prozent.

---

## 6. Datenschutz

- **Kein Konto, kein Server, kein Tracking.**
- Einstellungen, Erinnerungen und das Hintergrundbild bleiben im Speicher des Browsers auf dem Gerät.
- Die einzige Netzwerkanfrage der App geht an die OpenHolidays-API für Schulferien. Das Ergebnis wird lokal gespeichert.

---

## 7. Grenzen

- Erinnerungen erscheinen nur, solange die App geöffnet ist, denn es gibt keinen Server für Push-Nachrichten.
- Ein echtes **iPhone-Widget** ist mit einer PWA nicht möglich. Dafür wäre eine native App nötig.
- Es gibt keine Synchronisierung zwischen Geräten.
- Die chinesischen und koreanischen Referenzdaten sind bewusst kleiner und wurden weniger breit gegengeprüft als die vietnamesischen.
- Noch nicht umgesetzt sind Can Chi (die Tier- und Elementzyklen), günstige Stunden, Export als `.ics` und eine Synchronisierung.

---

## 8. Aktueller Stand und nächste Schritte

- Die Kernfunktionen sind umgesetzt und getestet.
- Die App ist derzeit in Version 0.1.0.
- Als Nächstes wären sinnvoll: Can Chi und günstige Stunden, ein `.ics`-Export und weitere Prüfungen der chinesischen und koreanischen Referenzdaten.
- Eine Lizenz ist nicht vergeben.

---

## Fazit

SOLUNA zeigt, dass sich auch ein scheinbar einfaches Werkzeug wie ein Kalender sauber bauen lässt: mit einer nachvollziehbaren Berechnung, vollständigen Tests für den ganzen Datenbereich und einer Oberfläche, die offline funktioniert und die Daten auf dem Gerät lässt.

---

### SOLUNA

**Entwickelt von Nguyen Nhan Do**

Alle Bilder sind Bildschirmfotos der laufenden App.
