---
id: amp-d50-v2-lite-class-d-verstaerker
slug: amp-d50-v2-lite-class-d-verstaerker
translation_id: amp-d50-v2-lite-class-d
language: de
content_type: project
title: AMP-D50-V2-LITE – TPA3255-Class-D-Verstärker mit USB-C-Audio
category: Audio, PCB
image_url: /my-electronics-blog/images/posts/amp-d50-v2-lite-3d-iso.webp
image_gallery:
- /my-electronics-blog/images/posts/amp-d50-v2-lite-real-top.webp
- /my-electronics-blog/images/posts/amp-d50-v2-lite-real-bottom.webp
- /my-electronics-blog/images/posts/amp-d50-v2-lite-3d-top.webp
- /my-electronics-blog/images/posts/amp-d50-v2-lite-pcb-top.webp
- /my-electronics-blog/images/posts/amp-d50-v2-lite-pcb-bottom.webp
- /my-electronics-blog/images/posts/amp-d50-v2-lite-3d-bottom.webp
- /my-electronics-blog/images/posts/amp-d50-v2-lite-placement.webp
- /my-electronics-blog/images/posts/amp-d50-v2-lite-heatsink-fit.webp
- /my-electronics-blog/images/posts/amp-d50-v2-lite-simulation.webp
excerpt: Ein kompakter Stereo-Class-D-Verstärker mit TPA3255, USB-C-Audioeingang und getrennter 24-V-Versorgung, entwickelt in KiCad. Das Design ist vollständig, die unbestückte Leiterplatte ist gefertigt, bestückt und gemessen wurde noch nichts.
tags:
- Class-D
- TPA3255
- USB-Audio
- PCM2704C
- KiCad
- PCB-Design
read_time: 9 Min.
published: true
created_at: '2026-11-10T19:30:00.000Z'
external_link: 
project_status: in_progress
sort_order: 30
---

# AMP-D50-V2-LITE
### TPA3255-Class-D-Verstärker mit USB-C-Audio

**Ein Stereo-Verstärker in KiCad: Der Rechner liefert digitales Audio per USB-C, ein eigenes 24-V-Netzteil versorgt die Endstufe.**

**Endstufe:** Texas Instruments TPA3255 (2 × BTL)  
**USB-DAC:** Texas Instruments PCM2704C  
**Versorgung:** 24 V DC, getrennt vom USB-Weg  
**Leiterplatte:** 2 Lagen, 2 oz Kupfer, 182,1 × 145,6 mm  
**Entwicklung:** KiCad 10, LTspice  
**Projektstatus:** Design abgeschlossen, unbestückte Leiterplatte gefertigt, noch nicht bestückt und nicht gemessen

---

## 1. Projektübersicht

### Was ist AMP-D50-V2-LITE?

AMP-D50-V2-LITE ist der Hardwareentwurf eines kompakten **Stereo-Leistungsverstärkers**. Ein Computer sendet digitales Audio über USB-C an einen USB-Audio-DAC vom Typ PCM2704C. Eine kleine Analogstufe steuert danach die **TPA3255**-Class-D-Endstufe an. Sie läuft aus einem separaten 24-V-Netzteil und liefert pro Lautsprecher einen Brückenausgang (BTL).

### Abgrenzung zum AMP-D50-V1

Die V2-LITE ist eine **einfachere Variante** der AMP-D50-Familie. Statt eines 4-Lagen-Boards mit XMOS-Controller nutzt sie eine **2-Lagen-Platine mit 2 oz Kupfer**, einen einfachen USB-DAC ohne Firmware und überwiegend **bedrahtete Bauteile**, die sich von Hand löten lassen.

### Ziel

**Ein vollständiger, fertigbarer KiCad-Entwurf: 11 Schaltplanblätter, eine Leiterplatte mit eigenen Routing-Regeln, ein Kühlkörper auf der Endstufe und ein dokumentiertes Fertigungspaket.**

---

## 2. Wichtigste Merkmale

- **Endstufe:** TPA3255 mit zwei BTL-Kanälen.
- **Digitaler Eingang:** USB-C-Buchse, USB 2.0 Full-Speed, der DAC wird aus dem USB-Bus versorgt.
- **Kabelkompatibilität:** ausgelegt für USB-A-auf-USB-C und USB-C-auf-USB-C (Designerwartung, nicht verifiziert).
- **Leistungseingang:** Hohlstecker 5,5 × 2,5 mm, Plus innen, 24 V DC.
- **Ausgänge:** Stereo-BTL mit vier unabhängigen Schraubklemmen.
- **Schutz:** 10-A-Sicherung, Verpolschutz mit P-MOSFET, 30-V-TVS-Diode, eFuse TPS26633 sowie Mute- und Reset-Überwachung.
- **Kühlung:** Kühlkörper oben auf dem TPA3255.

Es werden **keine Leistungs-, Klirr- oder Rauschwerte** behauptet. Gemessen wurde nichts.

---

## 3. Systemarchitektur

Der 24-V-Weg und der USB-Weg sind voneinander unabhängig. USB versorgt ausschließlich den DAC. Die Analogstufe und die Gate-Treiber laufen an einer 12-V-Hilfsspannung, die aus der geschützten 24-V-Schiene abgeleitet wird.

### USB-Audioweg

**USB-C-Buchse → ESD-Schutz → PCM2704C**

- Die Buchse J401 hat an CC1 und CC2 je einen eigenen 5,1-kΩ-Widerstand (Rd). Dadurch versorgt ein normgerechtes USB-A-auf-C-Kabel den DAC.
- Der ESD-Baustein USBLC6-2SC6 schützt die Datenleitungen.
- Der PCM2704C ist ein USB-Audio-Gerät mit 16 Bit Stereo bei 32, 44,1 und 48 kHz. Laut Datenblatt braucht es keinen eigenen Treiber.

### Analogstufe

**AC-Kopplung → 2 × NE5532 → TPA3255**

Zwei NE5532 treiben die Endstufe differenziell. Sie laufen an der 12-V-Hilfsspannung.

### Endstufe und Ausgangsfilter

Der **TPA3255** arbeitet in Brückenschaltung. Jeder Ausgang hat ein LC-Filter mit vier Coilcraft-Drosseln MA5172-AE (10 µH), 1-µF-Folienkondensatoren und Zobel-Gliedern. Die Lautsprecher hängen an zwei Phoenix-Klemmen J1001 und J1002.

### Überwachung

Eine Logik aus LM339, TL431 und TPS3802K33 hält den Verstärker im Reset und stumm, bis die 24-V-Schiene und die USB-5-V-Schiene gültig sind und eine Freigabeverzögerung abgelaufen ist.

---

## 4. Stromversorgung und Schutz

- **Eingang:** 24 V DC am Hohlstecker, **Plus innen**.
- **Netzteil:** mindestens 5 A. Die Leerlaufspannung darf 25,2 V nicht überschreiten, denn die Eingangs-TVS hat 25,6 V Arbeitsspannung. Gerechnet und simuliert wurde mit einem Mean Well GST120A24-P1M. Ein Netzteil ist noch nicht ausgewählt oder getestet.
- **Strombudget:** 5 bis 5,25 A, Spitzen um 6 A für bis zu 25 ms (berechnet, nicht gemessen).

### Eingangsschutz

1. **Sicherung F1** mit 10 A.
2. **Verpolschutz** mit P-MOSFET IRF4905.
3. **TVS-Diode** 1.5KE30A gegen Spannungsspitzen.
4. **eFuse TPS26633** für Einschaltstrom und Strombegrenzung.
5. **Pufferkondensatoren:** 2 × 3300 µF, 50 V.

### Hilfsspannung

Ein Wandler RECOM R-78HB12-0.5 erzeugt die 12-V-Hilfsspannung für die Analogstufe, die Gate-Treiber und die Überwachung.

**Sicherheit:** Verwenden Sie ein geschlossenes, schutzisoliertes Netzteil mit CE-Zeichen. Prüfen Sie Polarität und Leerlaufspannung vor dem Anstecken mit einem Multimeter. Die Eingangsschutzkette senkt das Risiko, ersetzt diese Prüfung aber nicht.

---

## 5. Leiterplatte

- **Größe:** 182,1 × 145,6 mm
- **Lagen:** 2, Kupfer 2 oz (70 µm) auf beiden Seiten, 1,6 mm
- **Bauteile:** 209 Footprints, alle auf der Oberseite, davon 150 bedrahtet
- **Regeln:** 14 Netzklassen mit eigenen DRC-Regeln, 0,6 mm Abstand für 24-V-, Schaltknoten-, Bootstrap- und Lautsprechernetze
- **Leiterbahnbreiten:** 24-V-Hauptpfad 1,4 mm, Lautsprecher- und Schaltknotennetze 0,8 mm
- **Prüfung (KiCad-DRC, 18. Oktober 2026):** 0 Fehler, 0 nicht verbundene Netze, Schaltplan-Parität 0, 4 bewusst akzeptierte Warnungen

Die **ersten beiden Bilder der Galerie sind Fotos der gefertigten, noch unbestückten Leiterplatte**. Alle übrigen Bilder sind **CAD-Darstellungen aus dem KiCad-Projekt**.

### Leistungsrouting

- Die vier OUT-Knoten nutzen 1,0 mm breite Leiterbahnen mit Verbindungen auf der Unterseite und parallelen Vias.
- Die Bootstrap-Kondensatoren sitzen so nah am TPA3255, wie der Kühlkörper es zulässt.
- Kupferflächen auf der Oberseite speisen die PVDD-Pins, ergänzt durch Flächen und Via-Felder auf der Unterseite.

### Kühlung

Beim TPA3255 im DDV-Gehäuse liegt das PowerPAD **oben**. Unter dem Chip gibt es daher keine Wärmefläche. Der Kühlkörper ATS-TI1OP-519-C1-R3 liegt auf dem Gehäuse und wird mit zwei M3-Schrauben im Abstand von 36,8 mm befestigt. Das Wärmeleitmaterial und der tatsächliche Kontaktspalt sind **noch nicht festgelegt**.

---

## 6. Wichtige Bauteile

- **U4:** TI TPA3255 (HTSSOP-44), Class-D-Endstufe
- **U401:** TI PCM2704C (SSOP-28), USB-Audio-DAC
- **J401:** Amphenol 12401610E4#2A, USB-C-Buchse (nur USB 2.0)
- **U5, U6:** NE5532 (DIP-8), Analogstufe
- **U201:** TI TPS26633, eFuse
- **Q101:** IRF4905, Verpolschutz
- **U2:** RECOM R-78HB12-0.5, 12-V-Hilfsversorgung
- **U701, U702, U7:** LM339, TL431, TPS3802K33, Überwachung
- **L2 bis L5:** Coilcraft MA5172-AE, 10 µH
- **C201, C202:** 3300 µF, 50 V
- **J101:** Gleichspannungsbuchse Same Sky PJ-102BH
- **J1001, J1002:** Phoenix MKDS 3/2-5,08, Lautsprecherklemmen

Viele Typen der passiven Bauteile sind im Entwurf noch mit „TBD“ markiert.

---

## 7. Lautsprecher anschließen

Der TPA3255 treibt jeden Lautsprecher in **Brückenschaltung (BTL)**. Jeder Kanal hat einen positiven und einen negativen Ausgang: J1001 für links, J1002 für rechts.

**Warnung: Die negativen Klemmen (L−, R−) dürfen NICHT mit Masse, miteinander oder mit dem Minus eines anderen Kanals verbunden werden.** Beide Klemmen jedes Lautsprechers sind aktive Ausgänge. Erdet man eine davon, kann der Verstärker zerstört werden. Auf der Platine steht deshalb „BTL OUTPUTS, L−/R− NOT GND“.

Verwenden Sie vier einzelne isolierte Leitungen, eine pro Klemme.

---

## 8. Simulation und Fertigung

### LTspice

Das Projekt enthält einen vollständig verdrahteten LTspice-Schaltplan der gesamten Platine mit 206 Bauteilen. Er wurde mit der KiCad-Netzliste verglichen, ohne Abweichungen. Simuliert wurden Gleichspannungsbetrieb, 1-kHz-Sinus, Übersteuerung, Frequenzgang und Einschalten.

Alle ICs sind **Verhaltensmodelle und keine Herstellermodelle**. Die Ergebnisse sind daher keine Messungen an Hardware.

### Fertigungspaket

Für JLCPCB liegen vor: Gerber-Dateien, BOM und CPL für 43 SMD-Teile sowie eine Liste der **150 bedrahteten Teile**, die von Hand gelötet werden. Optional kann nur der TPA3255 bestückt werden.

Die **unbestückte Leiterplatte wurde inzwischen gefertigt** (siehe Fotos in der Galerie). Für die SMD-Bestückung müssen Teilenummern und Lagerbestand noch bestätigt werden.

---

## 9. Aufbauanleitung (Empfehlung)

Die unbestückte Leiterplatte liegt vor, bestückt wurde noch nichts.

1. Leiterplatte (2 Lagen, 2 oz, 1,6 mm) auf Fertigungsfehler prüfen.
2. Zuerst die SMD-Teile bestücken (TPA3255, TPS26633, PCM2704C, TPS3802, ESD-Baustein, MOSFETs, Quarz, USB-C-Buchse, Kondensatoren).
3. Den TPA3255 sorgfältig löten (HTSSOP-44, 0,635 mm Raster, feuchteempfindlich) und auf Brücken prüfen.
4. Danach die bedrahteten Teile: flache zuerst, dann Fassungen, Elkos, Drosseln, Steckverbinder und Sicherung.
5. Als Letztes den Kühlkörper mit zwei M3-Schrauben montieren.
6. Ein geeignetes Wärmeleitmaterial wählen und prüfen.
7. Vor dem Einschalten auf Lötbrücken und die Polarität der Elkos und Dioden prüfen und den Widerstand zwischen 24 V und Masse sowie zwischen 12 V und Masse messen.
8. Die erste Inbetriebnahme erfolgt mit einem **strombegrenzten Labornetzteil und ohne Lautsprecher**. Erst nach Kontrolle der 12-V-Schiene und der Mute-Logik folgen Last oder Lautsprecher.

---

## 10. Aktueller Status und Einschränkungen

**Wichtig:** Die Leiterplatte ist **gefertigt, aber noch nicht bestückt**. Es gibt **keine Messung**.

- Schaltplan und Leiterplatte sind fertig und bestehen den KiCad-DRC.
- Die unbestückte Leiterplatte wurde gefertigt (Fotos in der Galerie).
- **USB:** Erkennung und Wiedergabe sind nicht verifiziert. Beim Standby oder Aufwachen des PCs ist ein Knacken möglich, weil das Suspend-Signal des DACs nicht mit der Mute-Logik verbunden ist.
- **Netzteil:** Es ist kein Netzteil ausgewählt, der Start mit einem echten Netzteil ist ungetestet. Hot-Plug und Einschalten stammen aus Näherungsmodellen.
- **Kühlkörper:** Der Hersteller nennt keine Lagetoleranz und der Kontaktspalt ist unbekannt. Der Abstand zwischen GVDD-Kupfer und Kühlkörperfuß beträgt 0,7 mm und lässt wenig Reserve.
- **Stückliste:** Viele Widerstands- und Kondensatortypen stehen auf „TBD“.
- **Bestückung:** Teilenummern, Lagerbestand und Drehung für die SMD-Bestückung sind nicht verifiziert.
- **Leistung:** Es gibt keine Messung von Leistung, Klirrfaktor, Rauschen, Wärme oder EMV.
- Es wird keine Zertifizierung behauptet. Für das Repository wurde noch keine Lizenz vergeben.

---

## 11. Nächste Schritte

1. Bauteile beschaffen und Teilenummern bestätigen.
2. Platine bestücken und löten.
3. Kontrollierte Inbetriebnahme mit Strombegrenzung, ohne Lautsprecher.
4. USB-Erkennung und Wiedergabe an Windows, macOS und Linux testen.
5. Wärmeleitmaterial wählen und das thermische Verhalten messen.
6. Leistung, Klirrfaktor und Rauschen messen.
7. Die Dokumentation mit echten Messwerten aktualisieren.

---

## Fazit

AMP-D50-V2-LITE ist ein vollständig dokumentierter Verstärkerentwurf mit einem Schwerpunkt auf Fertigbarkeit: eine 2-Lagen-Platine, von Hand lötbare Bauteile, klare Schutzkette und eine nachvollziehbare Fertigungsunterlage. Der entscheidende nächste Schritt ist der Aufbau der ersten Platine und die erste Messung.

---

### AMP-D50-V2-LITE

**Entworfen von Nguyen Nhan Do**

Zwei Fotos zeigen die gefertigte, unbestückte Leiterplatte, alle anderen Bilder sind CAD-Darstellungen. Die Hardware ist noch nicht bestückt oder getestet.
