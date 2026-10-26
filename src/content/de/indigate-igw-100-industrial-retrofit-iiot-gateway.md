---
id: indigate-igw-100-industrial-retrofit-iiot-gateway
slug: indigate-igw-100-industrial-retrofit-iiot-gateway
translation_id: indigate-igw-100-industrial-retrofit-iiot-gateway
language: de
content_type: project
title: INDIGATE IGW-100 Industrial Retrofit & IIoT Gateway
category: IoT, PCB
image_url: /my-electronics-blog/images/posts/1793034606935-screenshot-2026-10-25-233453.png
image_gallery:
- /my-electronics-blog/images/posts/1793034652491-screenshot-2026-10-25-232347.png
- /my-electronics-blog/images/posts/1793034662507-screenshot-2026-10-25-232414.png
- /my-electronics-blog/images/posts/1793034671708-screenshot-2026-10-25-232740.png
- /my-electronics-blog/images/posts/1793034678020-screenshot-2026-10-25-232725.png
- /my-electronics-blog/images/posts/1793034684538-screenshot-2026-10-25-233244.png
- /my-electronics-blog/images/posts/1793034689868-screenshot-2026-10-25-233230.png
- /my-electronics-blog/images/posts/1793034694960-screenshot-2026-10-25-233308.png
excerpt: Ein industrielles Kommunikations- und Datenerfassungsgateway zur Digitalisierung bestehender Maschinen und Anlagen.
tags:
[]
read_time: 5 Min.
published: true
created_at: '2026-10-26T17:01:57.523Z'
external_link: 
project_status: done
sort_order: 100
---

# INDIGATE IGW-100
### Industrial Retrofit & IIoT Gateway

**Ein industrielles Kommunikations- und Datenerfassungsgateway zur Digitalisierung bestehender Maschinen und Anlagen.**

**Hardware:** IGW100-HW-REV-A  
**Plattform:** STM32H573  
**Entwicklung:** KiCad 10.0  
**Projektstatus:** Hardwareentwicklung abgeschlossen, Prototypenfertigung und Validierung ausstehend

[English](README.md) | **Deutsch** | [Tiếng Việt](README.vi.md)

---

## 1. Projektübersicht

### Was ist INDIGATE IGW-100?

Der **INDIGATE IGW-100** ist ein selbst entwickeltes industrielles Gateway, das bestehende Maschinen, Sensoren und Steuerungssysteme mit modernen digitalen Kommunikations- und Datenerfassungssystemen verbinden soll.

In vielen Industrieanlagen sind Maschinen über Jahre oder Jahrzehnte im Einsatz. Sie funktionieren zuverlässig, verfügen jedoch häufig nicht über moderne Netzwerkschnittstellen oder Möglichkeiten zur zentralen Datenerfassung.

Eine vollständige Modernisierung solcher Anlagen ist oft mit hohen Kosten verbunden.

Genau hier setzt INDIGATE IGW-100 an.

Das Gerät soll als **Schnittstelle zwischen vorhandener Industriehardware und modernen IT- beziehungsweise IIoT-Systemen** eingesetzt werden.

Dabei können unterschiedliche industrielle Signale und Kommunikationsschnittstellen über eine gemeinsame Hardwareplattform erfasst und verarbeitet werden.

Der Schwerpunkt liegt auf der Nachrüstung bestehender Anlagen, ohne deren komplette Steuerungstechnik ersetzen zu müssen.

### Grundidee

**Bestehende Maschinen weiterverwenden, vorhandene Daten zugänglich machen und industrielle Systeme besser miteinander vernetzen.**

Der IGW-100 soll dafür eine kompakte, robuste und flexibel einsetzbare Hardwareplattform bereitstellen.

---

## 2. Welches Problem soll das Projekt lösen?

In industriellen Anlagen existieren häufig verschiedene Generationen von Maschinen und Steuerungen nebeneinander.

Typische Herausforderungen sind:

- Ältere Maschinen besitzen keine Ethernet-Schnittstelle.
- Sensoren liefern ausschließlich analoge oder digitale Signale.
- Unterschiedliche Steuerungen verwenden verschiedene Kommunikationsschnittstellen.
- Betriebszustände und Prozessdaten sind nicht zentral verfügbar.
- Eine vollständige Modernisierung der Steuerungstechnik ist wirtschaftlich nicht immer sinnvoll.
- Die Integration vorhandener Anlagen in übergeordnete Systeme ist aufwendig.

Der IGW-100 wurde entwickelt, um eine gemeinsame Hardwarebasis für diese Aufgaben bereitzustellen.

### Beispiel aus der Praxis

Eine ältere Produktionsmaschine besitzt mehrere Sensoren und eine Steuerung mit RS-485-Schnittstelle.

Die Maschine arbeitet zuverlässig, ihre Betriebsdaten können jedoch nicht ohne Weiteres über ein Ethernet-Netzwerk bereitgestellt werden.

Ein industrielles Gateway kann hier als Verbindung zwischen der vorhandenen Maschine und einer modernen Netzwerkumgebung dienen.

Der IGW-100 stellt dafür die erforderlichen Hardware-Schnittstellen bereit:

1. Digitale Eingänge zur Erfassung von Maschinensignalen.
2. Analoge Eingänge zur Erfassung von Prozesswerten.
3. RS-485 zur Kommunikation mit vorhandenen Geräten.
4. CAN-FD zur Anbindung entsprechender Steuerungs- und Kommunikationssysteme.
5. Ethernet als Netzwerkschnittstelle.
6. Digitale Ausgänge zur Ansteuerung geeigneter externer Lasten.

Die spätere Firmware soll festlegen, wie Daten verarbeitet, übertragen und für konkrete Anwendungen bereitgestellt werden.

**Wichtig:** Die Hardware ist entworfen, die Firmwareentwicklung hat jedoch noch nicht begonnen. Die beschriebenen Anwendungen sind daher vorgesehene Einsatzmöglichkeiten und noch keine nachgewiesenen Gerätefunktionen.

---

## 3. Projektziele

Das Hauptziel besteht darin, eine eigenständige industrielle Gateway-Hardware zu entwickeln, die verschiedene Kommunikations- und Ein-/Ausgabeschnittstellen auf einer gemeinsamen Plattform vereint.

### Industrielle Nachrüstung

Bestehende Maschinen und Anlagen sollen um zusätzliche Möglichkeiten zur Datenerfassung und Kommunikation erweitert werden können.

### Zentrale Datenerfassung

Digitale und analoge Signale sollen über eine gemeinsame Mikrocontrollerplattform verarbeitet werden können.

### Verbindung unterschiedlicher Schnittstellen

Ethernet, RS-485 und CAN-FD sollen auf einer Hardwareplattform zur Verfügung stehen.

### Robuste Hardwarearchitektur

Die Schaltung ist für eine industrielle 24-VDC-Versorgung ausgelegt.

Schutzschaltungen, galvanisch getrennte Schnittstellen und ein unabhängiger Hardware-Watchdog sind Bestandteil des Entwurfs.

### Erweiterbarkeit

Die Hardware soll als Grundlage für zukünftige Firmwarefunktionen und industrielle Anwendungen dienen.

---

## 4. Systemarchitektur

Das Herzstück des IGW-100 ist der Mikrocontroller **STM32H573ZIT6** von STMicroelectronics.

Er übernimmt in der vorgesehenen Systemarchitektur die zentrale Verarbeitung und Steuerung der angeschlossenen Schnittstellen.

Die Hardware besteht aus mehreren Funktionsgruppen.

### Zentrale Verarbeitungseinheit

**STM32H573ZIT6**

Der Mikrocontroller stellt die notwendigen Peripheriefunktionen für die Kommunikation mit den verschiedenen Hardwaremodulen bereit.

Dazu gehören:

- Ethernet-MAC
- FDCAN
- USART
- SPI
- I²C
- GPIO
- ADC-Funktionen
- USB
- SD/MMC
- SWD-Debug-Schnittstelle

### Kommunikationsschnittstellen

**Ethernet**

Über den Ethernet-PHY DP83825I wird eine 10/100BASE-T-Netzwerkschnittstelle bereitgestellt.

Diese bildet die Hardwaregrundlage für eine spätere Kommunikation über Ethernet.

**RS-485**

Zwei galvanisch getrennte RS-485-Kanäle ermöglichen die Anbindung entsprechender industrieller Kommunikationsgeräte.

Als Transceiver wird der ISO3082 verwendet.

**CAN-FD**

Eine galvanisch getrennte CAN-FD-Schnittstelle auf Basis des ISO1042 ermöglicht die Anbindung von CAN-basierten Geräten.

**USB-C**

Eine USB-2.0-Full-Speed-Schnittstelle ist für Service-, Diagnose- und Firmwarefunktionen vorgesehen.

### Industrielle Ein- und Ausgänge

**Digitale Eingänge**

Acht digitale 24-V-Eingänge dienen zur Erfassung industrieller Schaltsignale.

Beispiele möglicher Signalquellen:

- Endschalter
- Näherungssensoren
- Betriebszustandsmeldungen
- Störmeldungen
- Freigabesignale

**Digitale Ausgänge**

Vier digitale 24-V-High-Side-Ausgänge sind für die Ansteuerung geeigneter externer Lasten vorgesehen.

Der technische Zielwert beträgt 0,25 A Dauerstrom pro Kanal.

**Analoge Eingänge**

Zwei analoge Eingangskanäle sind für industrielle Standardsignale vorgesehen:

- 0–10 V
- 4–20 mA

Damit können beispielsweise Prozesswerte geeigneter Sensoren erfasst werden.

---

## 5. Technische Spezifikation

| Funktion | Spezifikation |
|---|---|
| Mikrocontroller | STM32H573ZIT6 |
| Versorgungsspannung | 24 VDC nominal |
| Versorgungsspannungsbereich | 18–30 VDC |
| Ethernet | 1 × 10/100BASE-T |
| Ethernet-PHY | DP83825I |
| RS-485 | 2 × galvanisch getrennt |
| RS-485-Transceiver | ISO3082 |
| CAN-FD | 1 × galvanisch getrennt |
| CAN-Transceiver | ISO1042 |
| Digitale Eingänge | 8 × 24 V |
| Digitale Ausgänge | 4 × 24 V High-Side |
| Ausgangsstrom | 0,25 A pro Kanal (Entwurfsziel) |
| Analoge Eingänge | 2 × 0–10 V / 4–20 mA |
| Analog-Frontend | ADS8684 |
| USB | USB-C, Full Speed |
| Externer Speicher | NOR-Flash |
| Zusätzlicher Speicher | microSD |
| Echtzeituhr | RV-3028-C7 |
| Hardware-Watchdog | TPS3851H33E |
| Debugging | SWD / SWO / UART |
| Leiterplatte | 6 Lagen |
| Leiterplattendicke | 1,6 mm |
| Leiterplattengröße | 146 × 184 mm |
| Entwicklungssoftware | KiCad 10.0 |
| Schaltungssimulation | LTspice |

Die Angaben beschreiben den aktuellen Hardwareentwurf. Die elektrische Funktion muss nach der Fertigung durch Messungen bestätigt werden.

---

## 6. Spannungsversorgung und Schutzkonzept

Industrielle Geräte müssen unter unterschiedlichen elektrischen Betriebsbedingungen zuverlässig funktionieren.

Deshalb wurde bei der Entwicklung des IGW-100 besonderer Wert auf die Spannungsversorgung und die Trennung der verschiedenen Funktionsbereiche gelegt.

### 24-VDC-Versorgung

Das Gerät ist für eine nominale Versorgungsspannung von 24 VDC ausgelegt.

Der vorgesehene dauerhafte Eingangsspannungsbereich beträgt 18 bis 30 VDC.

### Eingangsschutz

Der TPS26600 wird als elektronische Sicherung (eFuse) eingesetzt.

Er ist Bestandteil des Schutzkonzepts der Eingangsstufe.

### Spannungswandlung

Ein LT8640S erzeugt die interne 5-V-Versorgung.

Weitere Versorgungsstufen stellen die benötigten Spannungen für die Logik und die verschiedenen Hardwaremodule bereit.

### Galvanische Trennung

Mehrere Schnittstellen sind galvanisch getrennt ausgeführt.

Dazu gehören:

- Zwei RS-485-Kanäle
- CAN-FD
- Digitale Eingangsgruppe
- Digitale Ausgangsgruppe

Die galvanische Trennung soll die verschiedenen elektrischen Bereiche voneinander entkoppeln.

### Hardware-Watchdog

Ein unabhängiger Watchdog vom Typ TPS3851H33E ist Bestandteil der Systemarchitektur.

Er soll die Überwachung des Mikrocontrollers unterstützen.

### Sicherheit und EMV

Bei der Leiterplattenentwicklung wurden Isolationsbereiche und elektrische Abstände berücksichtigt.

Die Entwurfsregeln enthalten Abstandsklassen von 8 mm und 4 mm.

Diese Prüfungen ersetzen jedoch keine vollständige Bewertung nach den relevanten Sicherheits- und EMV-Normen.

Eine entsprechende Zertifizierung liegt nicht vor.

---

## 7. Leiterplattenentwicklung

Die gesamte Hardware wurde als sechslagige Leiterplatte in **KiCad 10.0** entwickelt.

Das Design umfasst die Spannungsversorgung, den Mikrocontroller, die Kommunikationsschnittstellen, die industriellen Ein- und Ausgänge sowie zusätzliche Speicher- und Überwachungsfunktionen.

### Leiterplattendaten

| Eigenschaft | Wert |
|---|---|
| PCB-Revision | IGW100-HW-REV-A |
| Anzahl der Kupferlagen | 6 |
| Abmessungen | 146 × 184 mm |
| Leiterplattendicke | 1,6 mm |
| Kupferdicke | 35 µm |
| Oberfläche | ENIG |
| Lötstoppmaske | Dunkelblau |
| Bestückungsdruck | Weiß |
| Footprints | 423 |
| Elektrische Netze | 275 |
| Vias | 884 |
| Minimale Leiterbahnbreite | 0,15 mm |
| Minimaler Kupferabstand | 0,127 mm |
| Minimale Via-Bohrung | 0,3 mm |

### Entwicklungsschwerpunkte

Bei der Leiterplattenentwicklung standen folgende Aspekte im Vordergrund:

- Trennung der unterschiedlichen Spannungs- und Massebereiche
- Berücksichtigung galvanischer Isolationsbarrieren
- Routing der Ethernet-RMII-Signale
- Integration mehrerer industrieller Schnittstellen
- Stromversorgung der digitalen Ausgänge
- Zugänglichkeit der Debug-Schnittstellen
- Fertigbarkeit der sechslagigen Leiterplatte
- Vorbereitung der Fertigungsunterlagen

### Design Rule Check

Die aktuelle Leiterplattenversion wurde mit dem KiCad Design Rule Checker geprüft.

**Ergebnis:**

| Prüfung | Ergebnis |
|---|---|
| DRC-Fehler | 0 |
| DRC-Warnungen | 0 |
| Nicht verbundene Netze | 0 |
| Schaltplan-Paritätsfehler | 0 |

Zusätzlich wurden Isolationsabstände und ausgewählte Fertigungsdaten unabhängig überprüft.

**Diese Ergebnisse bestätigen ausschließlich die durchgeführten Entwurfsprüfungen. Sie sind kein Nachweis für die Funktion einer gefertigten Leiterplatte.**

---

## 8. Schaltungsentwicklung und Simulation

Die Hardwareentwicklung umfasst sowohl die Erstellung der Schaltpläne als auch die Analyse ausgewählter elektrischer Funktionsbereiche.

### KiCad

Die Schaltungsentwicklung wurde mit KiCad durchgeführt.

Das Schaltplanprojekt umfasst 17 hierarchische Blätter.

Die verschiedenen Funktionsgruppen wurden getrennt entwickelt und anschließend in die Gesamtschaltung integriert.

### LTspice

LTspice wurde für die Analyse der Spannungsversorgungsarchitektur verwendet.

Die Simulationsdateien befinden sich im Verzeichnis:

`hardware/power/`

Der Hauptschaltplan lautet:

`hardware/power/g2_power.asc`

### Simulation öffnen

Unter Windows kann die Datei

`OPEN_LTSPICE.bat`

im Hauptverzeichnis des Repositorys ausgeführt werden.

Das Skript sucht nach einer vorhandenen LTspice-Installation und öffnet den entsprechenden Schaltplan.

Die Simulation wird dabei nicht automatisch gestartet.

LTspice muss zuvor installiert sein.

[LTspice herunterladen](https://www.analog.com/en/resources/design-tools-and-calculators/ltspice-simulator.html)

---

## 9. Entwicklungsprozess

Das Projekt wurde schrittweise von der Anforderungsdefinition bis zur Vorbereitung der Prototypenfertigung entwickelt.

### Phase 1 — Anforderungen

Definition der grundlegenden Anforderungen:

- Industrielle 24-VDC-Versorgung
- Mikrocontrollerplattform
- Ethernet-Kommunikation
- RS-485 und CAN-FD
- Digitale und analoge Ein-/Ausgänge
- Galvanische Trennung
- Debug- und Servicezugang

### Phase 2 — Hardwarearchitektur

Festlegung der Funktionsgruppen und Auswahl der wesentlichen Bauteile.

### Phase 3 — Schaltungsentwicklung

Erstellung der hierarchischen Schaltpläne und Prüfung der elektrischen Verbindungen.

### Phase 4 — PCB-Layout

Entwicklung der sechslagigen Leiterplatte einschließlich Bauteilplatzierung, Routing und Kupferflächen.

### Phase 5 — Designprüfung

Durchführung von:

- Electrical Rule Check (ERC)
- Design Rule Check (DRC)
- Isolationsabstandsprüfungen
- Footprint-Prüfungen
- Fertigungsdatenprüfungen

### Phase 6 — Fertigungsvorbereitung

Erstellung des Fertigungspakets mit Gerber- und Bohrdaten.

Die aktuelle Fertigungsfreigabe ist **Release 3**.

### Phase 7 — Prototypenfertigung und Validierung

Diese Phase steht noch aus.

---

## 10. Aktueller Projektstatus

**Hardware-Revision: IGW100-HW-REV-A**

Der aktuelle Entwicklungsstand ist die Vorbereitung der ersten Prototypenfertigung.

Die Schaltplan- und Leiterplattenentwicklung ist abgeschlossen.

Das Fertigungspaket wurde erstellt und auf Entwurfsebene geprüft.

Eine physische Leiterplatte wurde bisher nicht gefertigt.

### Statusübersicht

| Entwicklungsbereich | Status |
|---|---|
| Anforderungsdefinition | Abgeschlossen |
| Systemarchitektur | Abgeschlossen |
| Bauteilauswahl | Abgeschlossen |
| Schaltplanentwicklung | Abgeschlossen |
| PCB-Layout | Abgeschlossen |
| Design Rule Check | Bestanden |
| Fertigungsdaten | Erstellt |
| Prototypenbestellung | Ausstehend |
| Leiterplattenbestückung | Ausstehend |
| Hardware-Inbetriebnahme | Ausstehend |
| Elektrische Messungen | Ausstehend |
| Firmwareentwicklung | Nicht begonnen |
| EMV-Prüfung | Ausstehend |
| Sicherheitsbewertung | Ausstehend |

### Noch offene technische Punkte

Vor der Fertigung und Inbetriebnahme müssen insbesondere folgende Punkte berücksichtigt werden:

- Bestätigung der erforderlichen Kupferdicke durch den Leiterplattenhersteller
- Fertigungsfreigabe für gefüllte und überkappte Vias
- Prüfung der Fertigungsanforderungen für den Bestückungsdruck
- Überprüfung der Oszillator-Bauteilnummer Y701 vor der Stücklistenausgabe
- Messung des Ethernet-RMII-Timings am realen Prototyp
- Elektrische Prüfung der Spannungsversorgung
- Validierung der galvanisch getrennten Schnittstellen
- Prüfung der digitalen und analogen Ein-/Ausgänge

Weitere technische Einzelheiten sind in den Projektberichten dokumentiert.

---

## 11. Geplante Weiterentwicklung

Nach Abschluss der Hardwareentwicklung folgen die Fertigung und die praktische Validierung.

### Hardware

- [x] Systemanforderungen definieren
- [x] Hardwarearchitektur entwickeln
- [x] Bauteile auswählen
- [x] Schaltpläne erstellen
- [x] Sechslagiges PCB entwickeln
- [x] Design Rule Check durchführen
- [x] Fertigungsdaten vorbereiten
- [ ] Leiterplatten bestellen
- [ ] Bauteile bestücken
- [ ] Hardware in Betrieb nehmen
- [ ] Spannungsversorgung überprüfen
- [ ] Ethernet-Schnittstelle testen
- [ ] RS-485-Schnittstellen testen
- [ ] CAN-FD-Schnittstelle testen
- [ ] Digitale Ein- und Ausgänge überprüfen
- [ ] Analoge Eingänge kalibrieren und validieren
- [ ] EMV- und Sicherheitsvorprüfungen planen

### Firmware

Die Firmwareentwicklung ist für eine spätere Projektphase vorgesehen.

Geplante Entwicklungsbereiche sind:

- Initialisierung des STM32H573
- Ethernet-Kommunikation
- RS-485-Kommunikation
- CAN-FD-Kommunikation
- USB-Servicefunktionen
- Digitale Ein- und Ausgangssteuerung
- Analoge Datenerfassung
- Speicherverwaltung
- Fehlerüberwachung
- Sichere Firmwareaktualisierung

Konkrete Anwendungsprotokolle und die spätere Softwarearchitektur müssen im Rahmen der Firmwareentwicklung festgelegt und implementiert werden.

---

## 12. Projektstruktur

```text
INDIGATE-IGW100/
│
├── README.md
├── README.de.md
├── README.vi.md
│
├── OPEN_LTSPICE.bat
│
├── hardware/
│   │
│   ├── pcb/
│   │   ├── igw100/
│   │   ├── footprints/
│   │   └── picture/
│   │
│   ├── kicad/
│   │   └── igw100/
│   │
│   ├── power/
│   │
│   └── bom/
│
├── fabrication/
│
├── docs/
│
├── agent_reports/
│
├── references/
│
├── firmware/
│
├── assets/
│
├── PROJECT.md
├── AGENTS.md
│
└── LICENSE
```

---

## 13. Projekt in KiCad öffnen

Für die Bearbeitung wird **KiCad 10.0** benötigt.

Das Projekt wurde zuletzt mit KiCad 10.0.4 gespeichert.

### Leiterplattenprojekt

```text
hardware/pcb/igw100/igw100.kicad_pro
```

### Schaltplanprojekt

```text
hardware/kicad/igw100/igw100.kicad_pro
```

Die projektspezifischen Symbol- und Footprint-Bibliotheken befinden sich innerhalb des Repositorys.

Die Bibliothekspfade verwenden `${KIPRJMOD}` und sind relativ zum jeweiligen Projektverzeichnis definiert.

Dadurch kann das Projekt nach dem Klonen des Repositorys mit den vorhandenen Projektbibliotheken geöffnet werden.

---

## 14. Dokumentation

Weitere technische Informationen befinden sich in den folgenden Dateien und Verzeichnissen:

| Datei / Verzeichnis | Inhalt |
|---|---|
| [`PROJECT.md`](PROJECT.md) | Aktueller Projektstand |
| [`AGENTS.md`](AGENTS.md) | Technische Entwicklungsregeln |
| [`docs/README.md`](docs/README.md) | Dokumentationsübersicht |
| [`docs/hardware/power.md`](docs/hardware/power.md) | Spannungsversorgungsarchitektur |
| [`agent_reports/`](agent_reports/) | Technische Prüfberichte |
| [`references/INDEX.md`](references/INDEX.md) | Datenblätter und Referenzen |
| [`fabrication/README.md`](fabrication/README.md) | Fertigungsunterlagen |
| [`firmware/`](firmware/) | Zukünftige Firmwareentwicklung |

---

## 15. Zusammenfassung

Der **INDIGATE IGW-100** ist ein eigenständig entwickeltes industrielles Hardwareprojekt mit dem Ziel, bestehende Maschinen und Anlagen einfacher in moderne Datenerfassungs- und Kommunikationssysteme integrieren zu können.

Das Projekt kombiniert einen leistungsfähigen STM32H573-Mikrocontroller mit Ethernet, galvanisch getrenntem RS-485 und CAN-FD sowie industriellen digitalen und analogen Ein-/Ausgängen.

Besonderes Augenmerk wurde auf eine robuste 24-VDC-Spannungsversorgung, galvanische Trennung, elektrische Schutzmaßnahmen und eine nachvollziehbare Hardwareentwicklung gelegt.

Die sechslagige Leiterplatte wurde vollständig in KiCad entwickelt. Die Schaltpläne, das PCB-Layout und die Fertigungsunterlagen liegen vor.

**Der aktuelle Projektstand ist ein abgeschlossener Hardwareentwurf mit vorbereitetem Fertigungspaket. Die Herstellung des ersten Prototyps, die elektrische Validierung und die Firmwareentwicklung stehen noch aus.**

Langfristig soll der IGW-100 als flexible Hardwareplattform für industrielle Nachrüstung, Maschinendatenerfassung und IIoT-Anwendungen dienen.

---

### INDIGATE IGW-100

**Industrial Retrofit & IIoT Gateway**

Hardware Revision A — Prototypenentwicklung

Proprietäres Hardwareprojekt. Alle Rechte vorbehalten.

Siehe [LICENSE](LICENSE).
