---
id: tablio-kasse-lokales-pos-system-mit-tse-fiskalisierung-von-grund-auf
slug: tablio-kasse-lokales-pos-system-mit-tse-fiskalisierung-von-grund-auf
translation_id: tablio-kasse-lokales-pos-system-mit-tse-fiskalisierung-von-grund-auf
language: de
content_type: project
title: TABLIO Kasse – Lokales Restaurant-Kassensystem mit Fiskal-Architektur von Grund auf
category: Software, POS
image_url: /my-electronics-blog/images/posts/1785878544700-screenshot-2026-08-04-231005.png
image_gallery:
- /my-electronics-blog/images/posts/tablio-devices-concept.webp
- /my-electronics-blog/images/posts/1785878562041-screenshot-2026-08-04-230901.png
- /my-electronics-blog/images/posts/1785878568627-screenshot-2026-08-04-230914.png
- /my-electronics-blog/images/posts/1785878575589-screenshot-2026-08-04-230927.png
- /my-electronics-blog/images/posts/tablio-kitchen-display.webp
- /my-electronics-blog/images/posts/tablio-tables-mobile.webp
- /my-electronics-blog/images/posts/1785878581909-screenshot-2026-08-04-230955.png
excerpt: Ein lokal betriebenes Kassensystem für die deutsche Gastronomie mit Tischplan, Küchenmonitor in Echtzeit, Zahlungen, Kassenbuch und Berichten. Die Fiskal-Architektur mit TSE-Schicht und DSFinV-K ist von Anfang an eingebaut, die Zertifizierung steht noch aus.
tags:
- POS
- Kassensystem
- NestJS
- React
- PostgreSQL
- TSE
read_time: 11 Min.
published: true
created_at: '2026-08-04T21:03:35.667Z'
external_link: 
project_status: in_progress
sort_order: 50
---

# TABLIO Kasse
### Ein Kassensystem, das deutsches Kassenrecht ernst nimmt

**Ein lokal betriebenes Point-of-Sale-System für die Gastronomie: Tischplan, Bestellungen, Küchenmonitor, Zahlungen, Kassenbuch und Berichte, alles im Restaurant-WLAN und ohne Cloud.**

**Technik:** React 19, NestJS 11, PostgreSQL 16, TypeScript  
**Sprachen:** Deutsch, Englisch, Vietnamesisch  
**Betrieb:** Windows-Installer, Linux-Gerät, Docker für die Entwicklung  
**Projektstatus:** funktionsfähig und in Weiterentwicklung, **Fiskal-Zertifizierung noch ausstehend**

---

## 1. Projektübersicht

### Was ist TABLIO Kasse?

TABLIO Kasse ist ein **Kassensystem für Restaurants**, das ich seit Juli 2026 entwickle. Es läuft auf einem PC im Restaurant, die Geräte des Teams verbinden sich über das lokale WLAN: die Hauptkasse am Tresen, Tablets und Smartphones der Kellner und der Bildschirm in der Küche.

Alle Daten bleiben im Haus. Es gibt keinen Zwang zu einem Cloud-Konto, keinen Abo-Server und keinen Ausfall, wenn das Internet wegbricht.

### Grundidee

**Das fiskalische Fundament ist kein Zusatz, sondern der Ausgangspunkt der Architektur.**

In Deutschland gelten für Registrierkassen einige der strengsten Regeln Europas. Viele selbstgebaute oder allgemeine Kassenlösungen behandeln sie als Nachrüstung. TABLIO ist von Beginn an so gebaut, dass jede Zahlung, jede Stornierung und jede Rückerstattung durch dieselbe transaktionale Schicht läuft.

> ⚠️ **Wichtig:** Das Projekt ist so, wie es ausgeliefert wird, **noch nicht für rechtskonforme Verkäufe in Deutschland freigegeben**. Die Standard-TSE ist ein Entwicklungsmodul. Details stehen in Abschnitt 6.

---

## 2. Das Problem

Die **Kassensicherungsverordnung (KassenSichV)** verlangt, dass jede kassenrelevante Transaktion von einer zertifizierten **Technischen Sicherheitseinrichtung (TSE)** signiert wird. Sie muss manipulationssicher gespeichert und jederzeit im **DSFinV-K**-Format für die Finanzverwaltung exportierbar sein. Dazu kommen die Grundsätze der ordnungsmäßigen Buchführung (GoBD), etwa lückenlose Belegnummern und unveränderliche Belege.

Für ein Restaurant kommt der Alltag dazu: Stoßzeiten, mehrere Geräte gleichzeitig, wechselnde Mitarbeitende, Teilzahlungen, Trinkgeld, Bestellungen außer Haus. Eine Kasse muss in dieser Hektik fehlerfrei bleiben.

---

## 3. Funktionen

### Restaurantbetrieb

- **Tischplan** mit Zonen, frei platzierbaren Tischen, quadratischen, runden, U- und L-förmigen Formen und Live-Status. Nach der Zahlung wird der Tisch automatisch frei.
- **Bestellungen am Tisch und außer Haus** in einem gemeinsamen Ablauf.
- **Speisekarte** mit Gruppen, Kategorien, Produkten, Optionen und Extras, Steuersätzen, Rabatten und Stornogründen.
- **Gänge:** Positionen lassen sich in nummerierte Gänge einteilen, und jeder Gang kann einzeln an die Küche gehen.
- **Küchenmonitor** in Echtzeit über WebSockets: Neu → In Zubereitung → Fertig → Serviert.
- **Tischwechsel, Zusammenführen von Bestellungen und Rechnungsteilung** direkt an der Bestellung.

### Zahlungen und Belege

- Bar-, Karten- und **geteilte Zahlungen** mit idempotenter Beleg-Finalisierung.
- Belege lassen sich erneut drucken. Ein Druckerfehler verwirft nie einen fertigen Beleg.
- **Stornierung und Rückerstattung** als eigene, protokollierte Vorgänge. Bezahlte Bestellungen bleiben unveränderlich.
- **Gutscheinsystem:** Ausgabe, Verkauf, Einlösung, Rückerstattung, Sperren und Entsperren sowie manuelle Guthabenkorrektur, jede Bewegung einzeln nachvollziehbar.
- Drucken über ESC/POS-Schichten für Netzwerk- und USB-Drucker, auch für Küchenbons.

### Verwaltung

- **Schichten und Kassenbuch:** Anfangsbestand, Bar-Bewegungen, Schichtabschluss, X/Z-Berichte und Prüfprotokoll.
- **Berichte** zu Umsatz, Mehrwertsteuer, Produkten, Kategorien, Kellnern, Zahlarten und Stornos.
- **Rollen und Rechte:** Admin, Manager, Kellner und Küche, dazu Einzelrechte pro Benutzer.
- Zeiterfassung, Dienstplan mit Urlaub, Kundenverwaltung und Reservierungen.
- Drei Sprachen, umschaltbar in der App.

---

## 4. Architektur

Der Datenfluss von den Geräten bis zur Datenbank:

1. **Geräte im Restaurant:** Windows-Kasse, Tablet, Smartphone und Küchenbildschirm
2. **Lokales WLAN** verbindet sie mit dem Kassen-PC
3. **Oberfläche:** React und Vite
4. **REST und Socket.IO** transportieren Anfragen und Live-Updates
5. **NestJS API** mit der gesamten Geschäftslogik
6. **Darunter drei Bausteine:** PostgreSQL mit Prisma, die ESC/POS-Druckerschicht und die TSE-Provider-Schicht

- **Frontend:** React 19, Vite, TypeScript, Tailwind CSS, Zustand und TanStack Query.
- **Backend:** NestJS 11 mit REST, Socket.IO, JWT und rollenbasierten Rechten.
- **Daten:** PostgreSQL 16 mit Prisma und transaktionaler Geschäftslogik.
- **Gemeinsames Paket:** Typen, Rechte, Enums und Mehrwertsteuer-Logik werden einmal definiert und von Backend und Frontend genutzt.
- **Entwicklung:** npm Workspaces, Docker Compose, Jest, Vitest und Playwright.

### Vom Tisch zum Beleg

1. Tisch oder Außer-Haus-Bestellung öffnen
2. Positionen hinzufügen
3. An die Küche senden
4. Zubereiten und servieren
5. Bar, Karte oder geteilt bezahlen
6. Beleg finalisieren
7. Der Tisch wird frei

Das Finalisieren läuft in **einer Datenbanktransaktion**. Preis und Mehrwertsteuer werden an der Position und am Beleg festgehalten, damit alte Belege sich nie nachträglich ändern. Ein Idempotenzschlüssel pro Versuch verhindert, dass ein Doppelklick oder eine Wiederverbindung eine zweite Zahlung erzeugt.

---

## 5. Betrieb im Restaurant

- **Windows-Installer:** Beim Start öffnet sich TABLIO als Desktop-Anwendung. Ein Dienst startet Datenbank, API und Oberfläche. Smartphones und Tablets im selben WLAN scannen einen **QR-Code** und sind verbunden, ohne Konfiguration oder Firewall-Eingriffe.
- **Linux-Gerät:** Ein Installationspaket für ein Mini-PC-Gerät ohne Docker, vom Betriebssystem als Dienst verwaltet.
- **Autostart:** Der Server startet nach der Anmeldung automatisch. Ein ausgeschalteter Bildschirm unterbricht ihn nicht.
- **Sicherung:** Eine automatische nächtliche Sicherung samt Wiederherstellungsanleitung.
- **Lizenz offline:** Jede Installation hat eine 30-Tage-Testphase. Lizenzschlüssel sind signiert, an den Rechner gebunden und werden lokal geprüft, **ohne Lizenzserver**.
- **Sauberer Auslieferungsstand:** Das Installationspaket enthält nur Demodaten. Keine echten Bestellungen, Kunden, Zugangsdaten oder Protokolle.

### Online-Bestellungen

Optional holt die Kasse Abholbestellungen und Reservierungsanfragen von einer Online-Bestellseite, zum Beispiel der [Restaurant-Plattform](https://nguyennhando.github.io/my-electronics-blog/?post=gem-restaurant-platform) aus meinem anderen Projekt. Die Kasse **fragt von sich aus nach**, statt eine Verbindung aus dem Internet zuzulassen. So bleibt sie vom Netz aus unerreichbar. Das Personal bestätigt jede Bestellung mit einer Abholzeit, erst dann geht sie in die Küche.

---

## 6. Fiskalischer Stand, ehrlich

Dieser Abschnitt ist mir der wichtigste.

- **TSE-Signatur:** Es gibt eine Anbieter-Schicht für TSE-Geräte und ein Entwicklungsmodul, das ausdrücklich als nicht zertifiziert gekennzeichnet ist. Für den echten Betrieb sind **zertifizierte TSE-Hardware oder ein zertifizierter Dienst** und eine geprüfte Anbindung nötig.
- **Produktionsschutz:** Im Produktionsmodus **verweigert das Backend das Finalisieren fiskalischer Belege**, solange kein Anbieter meldet, dass er zertifiziert ist. Die Attrappe kann also nicht versehentlich als rechtskonform durchgehen.
- **DSFinV-K:** Der Export liefert die Pipeline (Auftrag, CSV und ZIP) in vereinfachter Form. Er muss noch gegen die aktuelle offizielle Taxonomie geprüft werden.
- **Drucker:** Es gibt eine Attrappe sowie Netzwerk- und USB-Anbindungen als Ausgangspunkt. Jede Drucker- und Treiberkombination muss geprüft werden.
- **Vor echten Zahlungen:** zertifizierte TSE einbinden, den DSFinV-K-Export prüfen und die gesamte Installation von einer Steuerberaterin oder einem Steuerberater abnehmen lassen.

Für Vorführungen gibt es einen ausdrücklichen Demo-Schalter. Er darf nie in einem Stand für echte Kundschaft stehen.

---

## 7. Weitere Varianten

### Android-Version (Forschungs- und Demostand)

Eine Cordova-Hülle um dieselbe Oberfläche, mit einem eingebetteten Node-Server, der ohne Internet läuft. Sie dient für Demos und betreute Kundentests und ist **nicht das fertige Produkt**. Die TSE-Schicht ist hier ein Angebot mit zwei Modi: ein sichtbar nicht zertifiziertes Testmodul und eine Hardware-Anbindung, die **geschlossen scheitert**, solange das offizielle Hersteller-SDK und die echten Hardware-Tests fehlen. Sie fällt nie stillschweigend auf die Attrappe zurück.

### iPhone-App ohne Internet (PWA)

Eine eigenständige Web-App für das iPhone, die nach der Installation ohne Internet läuft und alle Daten in der Datenbank des Browsers speichert. Sie deckt Tische, Bestellungen, Küche, Zahlungen, Kassenbuch, Berichte und einen DSFinV-K-Kernexport in 16 Ausbaustufen ab.

---

## 8. Was ich dabei gelernt habe

### Gleichzeitigkeit zeigt sich nur an einer echten Datenbank

Eine Prüfung mit echter Datenbank zeigte: Wenn zwei Geräte dieselbe Bestellung gleichzeitig abschließen, entstanden zwei Zahlungen, zwei Belege und zwei signierte Fiskalvorgänge für einen Verkauf. Zwei gleichzeitige Klicks auf „Schicht öffnen“ erzeugten zwei offene Schichten. Solche Fehler bleiben in Unit-Tests mit nachgebauter Datenbank unsichtbar. Die Lösung sind bedingte Updates und serialisierbare Transaktionen mit Wiederholung, belegt durch einen Test, der viele wirklich gleichzeitige Aufrufe abfeuert.

### Mehrwertsteuer muss je Steuersatz aufgehen, nicht je Zeile

Wurde jede Zeile einzeln gerundet, wich die gedruckte Steueraufteilung eines rabattierten Belegs um bis zu zwei Cent von der Gesamtsumme ab, ein echter Fehler bei der Belegintegrität. Jetzt wird je Steuersatz zuerst summiert, dann einmal gerundet, und der größte Block nimmt den Restcent auf. Die Aufteilung geht damit rechnerisch immer auf.

### Eine Stornierung ist ein neuer Vorgang, kein Schalter

Zuerst setzte das Stornieren nur ein Kennzeichen am Beleg, der Umsatz blieb überall gezählt. Heute entsteht ein gegenläufiger Beleg mit umgekehrten Summen und umgekehrter Steueraufteilung, samt eigener signierter Fiskalbuchung. Auch die Berichte rechnen Rückerstattungen und Stornos in jede Summe ein.

### Scheitern, statt zu raten

Das gleiche Prinzip gilt überall: Ein Zusammenführen von Bestellungen mit unterschiedlichem Rabatt wird abgelehnt, statt eine Seite stillschweigend zu wählen. Eine nicht bereite TSE blockiert den Abschluss. Eine Lizenzprüfung ist tolerant gegenüber einem kurzen Lesefehler, sperrt aber, wenn die Maschinenkennung dauerhaft unlesbar bleibt.

### Lokal zuerst heißt: keine Tür nach außen

Die Kasse bleibt bewusst nur im lokalen Netz erreichbar. Anbindungen an das Internet laufen daher als ausgehende Abfragen. Das Ergebnis ist eine kleine Angriffsfläche, bezahlt mit einer Verzögerung von wenigen Sekunden, die bei Abholbestellungen keine Rolle spielt.

---

## 9. Qualität

- Über **70 Testdateien** mit Jest, Vitest und Playwright.
- Ein eigener Test gegen eine **echte PostgreSQL-Datenbank** für alle Pfade mit Geld und Fiskalbezug.
- Das Installationspaket wird nach dem Bau automatisch geprüft. Es darf nur die bereinigten Demodaten enthalten.
- Die Entscheidungen des Projekts sind in einem Protokoll mit Begründung festgehalten.

---

## 10. Aktueller Stand und nächste Schritte

- Die Kasse ist funktionsfähig und wird laufend erweitert (Windows-Installer in Version 0.2.x).
- **Offen für den rechtskonformen Echtbetrieb:** Anbindung einer zertifizierten TSE, Prüfung des DSFinV-K-Exports und die Abnahme durch einen Steuerberater.
- Für die Android-Version fehlt das offizielle Hersteller-SDK samt echten Hardware-Tests.
- Es gibt keine öffentliche Lizenz. Das Projekt ist proprietär.

---

## Fazit

TABLIO Kasse zeigt, wie viel Sorgfalt in einem scheinbar einfachen Kassensystem steckt: Gleichzeitigkeit, Rundung, Unveränderlichkeit und ein Fiskalmodell, das lieber scheitert, als zu raten. Der entscheidende nächste Schritt ist die Anbindung einer zertifizierten TSE, damit aus einer sorgfältig gebauten Architektur ein zugelassenes Produkt wird.

---

## Quellcode

Der Quellcode dieses Projekts liegt auf GitHub, wird aber nicht öffentlich geteilt. Wenn Sie sich dafür interessieren, schreiben Sie mir gern eine E-Mail an donguyennhan.de@gmail.com, dann teile ich ihn mit Ihnen.

---

### TABLIO Kasse

**Entwickelt von Nguyen Nhan Do**

Die Bilder zeigen Demodaten. Das Geräte-Bild ganz vorn ist eine Konzeptillustration.
