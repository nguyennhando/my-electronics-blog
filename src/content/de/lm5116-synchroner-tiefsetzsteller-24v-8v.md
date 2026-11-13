---
id: lm5116-synchroner-tiefsetzsteller-24v-8v
slug: lm5116-synchroner-tiefsetzsteller-24v-8v
translation_id: lm5116-buck-converter-24v-8v
language: de
content_type: project
title: LM5116 – Synchroner Tiefsetzsteller 24 V auf 8 V / 3 A (KiCad, Prototyp Rev A)
category: Power, PCB
image_url: /my-electronics-blog/images/posts/lm5116-buck-3d-iso.webp
image_gallery:
- /my-electronics-blog/images/posts/lm5116-buck-block-diagram.webp
- /my-electronics-blog/images/posts/lm5116-buck-schematic.webp
- /my-electronics-blog/images/posts/lm5116-buck-placement.webp
- /my-electronics-blog/images/posts/lm5116-buck-copper-layers.webp
- /my-electronics-blog/images/posts/lm5116-buck-sim-vin-sweep.webp
- /my-electronics-blog/images/posts/lm5116-buck-sim-load-transient.webp
excerpt: Ein vierlagiger, nicht isolierter synchroner Tiefsetzsteller mit dem TI LM5116, 24 V Eingang, 8 V und 3 A Ausgang. Vollständig in KiCad 10 entworfen, mit eingefrorenen Fertigungsdaten, Prüfberichten, LTspice-Simulationen und einem Plan für die Inbetriebnahme. Der Prototyp ist noch nicht gefertigt, und alle Messungen stehen aus.
tags:
- LM5116
- KiCad
- Buck-Wandler
- 4 Lagen
- LTspice
- Leistungselektronik
read_time: 12 Min.
published: true
created_at: '2026-11-10T23:00:00.000Z'
external_link: 
pdf_url: /my-electronics-blog/documents/steckbrief/lm5116-de.pdf
project_status: in_progress
sort_order: 40
---

# LM5116 Tiefsetzsteller
### 24 V auf 8 V / 3 A, synchron, vierlagig, Prototyp Rev A

**Ein Netzteil-Entwurf von der Auswahl der Bauteile bis zu den Fertigungsdaten, mit klar getrennten Aussagen darüber, was berechnet, was simuliert und was noch nicht gemessen ist.**

**Controller:** Texas Instruments LM5116  
**Eingang:** 24 V nominal, 18 bis 28 V im Betrieb  
**Ausgang:** 8 V, 3 A (24 W), nicht isoliert  
**Schaltfrequenz:** etwa 251 kHz  
**Leiterplatte:** 4 Lagen, 85 × 50 mm, 1,6 mm FR-4, ENIG  
**Werkzeuge:** KiCad 10, LTspice  
**Stand:** Hardware eingefroren, Prototyp noch nicht bestellt und nicht gemessen

---

## 1. Projektübersicht

### Worum geht es?

Der Entwurf ist ein synchroner Abwärtswandler für ein 24-V-Gleichstromnetz, wie man es in der Industrie und in Maschinen häufig findet. Er soll daraus 8 V mit bis zu 3 A erzeugen. Das Projekt ist als vollständige Entwicklungsarbeit angelegt: Schaltplan, Leiterplatte, Fertigungsdaten, Prüfberichte, Simulation und ein Prüfplan für die spätere Messung.

### Warum so genau dokumentiert?

Ein Netzteil ist erst dann gut, wenn man weiß, **wie gut** es ist. Deshalb trennt das Projekt streng nach Art des Nachweises:

- **Berechnet:** aus Datenblatt und Formeln, mit genannten Annahmen
- **Offiziell simuliert:** Ergebnis einer geprüften Simulationskampagne, aber weiterhin ein Modell
- **Modellcharakterisierung:** Verhalten oder Grenze des Modells, kein Nachweis an Hardware
- **Gemessen:** hierzu gibt es **noch nichts**

Wichtig ist mir, dass eine Simulation nie als Messung ausgegeben wird.

### Der ehrliche Stand

- Die **Hardware ist eingefroren** (Version `v1.0.0-prototype-rev-a`), samt Fertigungsdaten.
- Der Prototyp ist **noch nicht bestellt und nicht gefertigt**.
- Alle 17 vorgesehenen Messungen (T00 bis T16) sind **noch nicht ausgeführt**.
- Es gibt keine Qualifizierung für die Serie, keine Zertifizierung und keine EMV-Aussage.

---

## 2. Technische Daten

- **Topologie:** nicht isolierter, synchroner Tiefsetzsteller mit Strommodus-Regelung
- **Eingang:** 24 V DC nominal. Im laufenden Betrieb sind 18 bis 28 V vorgesehen. Ein Kaltstart genau bei 18 V ist nicht garantiert, weil die Unterspannungsschwelle des Controllers streut.
- **Ausgang:** 8 V bei bis zu 3 A. Der berechnete Sollwert liegt bei 8,05 V (Referenz 1,215 V, Teiler 6,81 kΩ zu 1,21 kΩ).
- **Schaltfrequenz:** etwa 251 kHz, berechnet 251,8 kHz
- **Leistungsstufe:** zwei N-Kanal-MOSFETs für 60 V (SI7850DP), Speicherdrossel 22 µH (XAL1510-223MED), Messwiderstand 18 mΩ mit Kelvin-Abgriff
- **Ausgangskapazität:** 3 × 47 µF Keramik, in der Analyse mit etwa 57 µF wirksam bei 8 V und 50 °C, gerechnet mit dem Gleichspannungsverlust der Keramik
- **Regelung:** Typ-II-Kompensation (9,76 kΩ, 3,3 nF, 100 pF) und Rampennetzwerk

---

## 3. Schaltungsentwurf

### Eingangsschutz

Der Eingang ist mehrfach geschützt, in dieser Reihenfolge:

1. **Sicherung** F1, träge, 3,15 A
2. **Verpolschutz** mit einem P-Kanal-MOSFET, dessen Gate mit 12 V begrenzt ist
3. **TVS-Diode** SMAJ28A gegen Überspannungsspitzen
4. **Eingangskondensatoren:** 4 × 10 µF Keramik und ein 100-µF-Polymer-Elko

Dazu kommen im Controller die Unterspannungsabschaltung, der Sanftanlauf und die zyklusweise Strombegrenzung.

### Leistungsstufe und Regelung

Der LM5116 steuert die beiden Schalter direkt an. Die Strommessung erfolgt am Widerstand RS1 mit 18 mΩ, der über eigene Messpunkte (Kelvin) abgegriffen wird. Das Rückführungsnetz, die Kompensation und die künstliche Rampe schließen die Regelschleife. Alle Teile sind auf einem Schaltplan in Blöcke gegliedert: Eingang und Schutz, Eingangskondensatoren, Controller, Treiber, Ausgangsfilter, Strommessung und Rückführung.

---

## 4. Leiterplatte

Die Leiterplatte ist mit KiCad 10 entworfen und in Bauweise und Lagenaufbau auf Schalten mit hohen Strömen und schnellen Flanken ausgelegt:

- **4 Lagen**, 85 × 50 mm, **alle Bauteile auf der Oberseite**
- **Durchgehende Massefläche** auf der zweiten Lage als Rückleiter und Schirmung
- **Kleine Schleife** aus Eingangskondensator, MOSFET und Messwiderstand, um Störungen und Überschwinger klein zu halten
- **Kleine Schaltknotenfläche**, damit wenig Störung abgestrahlt wird
- **Netzklassen** für Hochstrom, Gate-Ansteuerung, empfindliche Analogleitungen und Kelvin-Leitungen, dazu eine eigene Abstandsregel am Controller
- **Wärmeableitung am Controller:** 15 thermische Durchkontaktierungen unter dem freiliegenden Pad und ein eigenes Lotpastenmuster aus acht Fenstern mit 70 % Flächendeckung, das beim Aktualisieren der Bibliothek erhalten bleiben muss

---

## 5. Fertigungsdaten und Prüfung

Das Fertigungspaket ist eingefroren und geprüft. Es enthält Gerber- und Bohrdateien für JLCPCB, Stückliste mit Herstellernummern, Bestückungsliste (41 SMD-Teile, insgesamt 45 Bauteile), Bestückungsplan, Schablonenschicht, Schaltplan als PDF, Bohrpläne, 3D-Bilder und eine Prüfsummenliste (SHA-256) aller 40 Dateien.

**Prüfergebnisse:**

- **ERC (Schaltplan):** 0 Verstöße
- **DRC (Leiterplatte, Flächen neu gefüllt):** 0 Fehler, 0 nicht verbundene Elemente
- **Abgleich Schaltplan und Leiterplatte:** 0 Abweichungen
- **Gerber- und Bohrprüfung:** 37 von 37 Prüfungen bestanden
- **Abgleich Stückliste, Bestückungsliste und Leiterplatte:** 18 von 18 bestanden
- **Prüfsummenliste:** 40 von 40 Dateien stimmen

Die Leiterplattendatei wird mit ungefüllten Flächen gespeichert. Eine DRC der Datei im gespeicherten Zustand zeigt deshalb scheinbar nicht verbundene Elemente, und die Ergebnisse oben stammen von einer Kopie mit neu gefüllten Flächen.

### Offene Punkte vor einer Bestellung

- Bei der Prüfung waren C_BULK1, RS1, F1 und L1 beim Bestücker nicht oder nicht ausreichend lieferbar. Das ist zum Bestellzeitpunkt neu zu prüfen, und es gibt keine freigegebenen Ersatzteile.
- Q1 und Q2 sind als **SI7850DP-T1-GE3** zu bestellen, der Schaltplan trägt noch die Textangabe -T1-E3.
- Die 3D-Darstellung zeigt die Sicherung F1 ohne Gehäuse, weil dafür kein Modell vorlag. In der Schaltung ist F1 vorhanden.
- Als Erstes sind **fünf unbestückte Leiterplatten** vorgesehen, keine Bestückung und keine Schablone.

---

## 6. Simulation

Mit LTspice und dem TI-Modell des LM5116 wurde eine geprüfte Kampagne gefahren (Eingangsspannung von 18 bis 28 V, Anlauf, Abschalten, Welligkeit, Lastsprung, Leitungssprung, Bode-Diagramm). Beispiele der Ergebnisse, alle **simuliert und nicht gemessen**:

- **Ausgangswelligkeit:** etwa 7 bis 10 mV Spitze-Spitze
- **Regelschleife:** Durchtrittsfrequenz 19 bis 24,5 kHz bei 53 bis 56 Grad Phasenreserve
- **Lastsprung von 1,5 auf 3 A** in 1 µs: Einbruch und Überschwinger der Ausgangsspannung von jeweils etwa 170 mV mit schneller Ausregelung
- **Schaltfrequenz:** über den ganzen Eingangsbereich etwa 250,7 kHz

### Grenzen des Modells

Die Simulation ist nur so gut wie ihr Modell, und das Projekt benennt die Abweichungen ausdrücklich:

- Die **Unterspannungsschwelle** im TI-Modell weicht vom Datenblatt ab. Läufe bei 18 V sind deshalb Betriebssimulationen und kein Beleg für den Kaltstart.
- Die **Strommessverstärkung** im Modell weicht deutlich vom Datenblatt ab. Die Vorhersage der Strombegrenzung und Teile der Schleifenanalyse sind dadurch eingeschränkt.
- Der **Gate-Treiberpegel** im Modell ist kein Nachweis für die echte Ansteuerung.
- Ein Anlaufproblem bei sehr kleiner Last in der Simulation ist eine Grenze des Lösers und kein Hinweis auf einen Hardwarefehler.

---

## 7. Der Prüfplan

Für die Inbetriebnahme gibt es eine Anleitung auf Deutsch, Englisch und Vietnamesisch, einen Prüfplan mit Anforderungsmatrix und ein Prüfprotokoll. Die 17 geplanten Messungen sind:

- **T00 bis T02:** Sichtprüfung, Widerstands- und Diodenprüfung ohne Spannung, gestufter erster Einschaltvorgang
- **T03 bis T04:** Unterspannungsschwelle, Betrieb ohne und mit kleiner Last
- **T05 bis T08:** Lastkennlinie und Wirkungsgrad, Netz- und Lastregelung, Ausgangswelligkeit
- **T09 bis T10:** Schaltknoten und Gate-Ansteuerung
- **T11:** Temperaturverhalten
- **T12 bis T13:** Lastsprung, Anlauf und Abschalten
- **T14 bis T15:** Schutz und Verpolung, Strombegrenzung
- **T16:** Stabilität der Regelschleife

Jeder Test steht auf „nicht getestet“, bis er wirklich durchgeführt ist. Ein positives Ergebnis wird erst nach einer Messung eingetragen.

---

## 8. Was ich daraus mitnehme

Bei diesem Projekt ging es mir weniger um das Netzteil an sich als um die Arbeitsweise: Entwurf und Fertigungsdaten einfrieren, jede Aussage mit der Art ihres Nachweises kennzeichnen, die Grenzen der Werkzeuge offenlegen und erst messen, wenn ein Plan steht. Das ist die Art, wie ich Hardware in einem Betrieb übergeben würde.

---

## 9. Quellen und Rechte

Die Entwurfsdateien (KiCad-Projekt, Fertigungsdaten, Simulationen, Berichte und der Prüfplan) sind nicht öffentlich. Wer meine Arbeitsweise beurteilen möchte, kann sie **auf Anfrage** einsehen, auch die Konstruktionsberichte in drei Sprachen: [donguyennhan.de@gmail.com](mailto:donguyennhan.de@gmail.com)

Der Entwurf ist nicht physisch erprobt, nicht für die Serie qualifiziert, nicht zertifiziert und nicht auf EMV-Konformität geprüft. Alle Rechte vorbehalten, © 2026 Nguyen Nhan Do.
