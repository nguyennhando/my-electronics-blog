---
id: amp-d50-v1-stereo-class-d-verstaerker
slug: amp-d50-v1-stereo-class-d-verstaerker
translation_id: amp-d50-v1-stereo-class-d
language: de
content_type: project
title: AMP-D50-V1 – Stereo-Class-D-Verstärker mit USB-Audio
category: Audio, PCB
image_url: /my-electronics-blog/images/posts/amp-d50-v1-3d-iso.webp
image_gallery:
- /my-electronics-blog/images/posts/amp-d50-v1-pcb-top.webp
- /my-electronics-blog/images/posts/amp-d50-v1-3d-top.webp
- /my-electronics-blog/images/posts/amp-d50-v1-block-diagram-de.webp
- /my-electronics-blog/images/posts/amp-d50-v1-audio-signal-flow-de.webp
- /my-electronics-blog/images/posts/amp-d50-v1-power-distribution-de.webp
- /my-electronics-blog/images/posts/amp-d50-v1-connector-location-de.webp
- /my-electronics-blog/images/posts/amp-d50-v1-pcb-bottom.webp
excerpt: Ein selbst entwickelter Stereo-Class-D-Verstärker mit TPA3255, USB-C-Audio und analogen RCA-Eingängen. Ziel sind 2 × 50 W an 4 Ω aus einem 28-V-Netzteil. Schaltplan und Leiterplatte sind fertig, gebaut und gemessen wurde noch nichts.
tags:
- Class-D
- TPA3255
- USB-Audio
- XMOS
- KiCad
- PCB-Design
read_time: 9 Min.
published: true
created_at: '2026-11-10T18:00:00.000Z'
external_link: 
project_status: in_progress
sort_order: 15
---

# AMP-D50-V1
### Stereo-Class-D-Verstärker mit USB-Audio

**Ein kompakter Verstärker für kritisches Musikhören: USB-C oder Cinch hinein, zwei Regallautsprecher hinaus.**

**Endstufe:** Texas Instruments TPA3255  
**Designziel:** 2 × 50 W an 4 Ω aus 28 V Gleichspannung  
**Eingänge:** USB-C (XMOS XU316 + PCM5122) und 2 × RCA  
**Entwicklung:** KiCad, LTspice  
**Projektstatus:** Schaltplan V1.0 freigegeben, Leiterplatte geroutet, noch nicht gefertigt und nicht gemessen

---

## 1. Projektübersicht

### Was ist AMP-D50-V1?

AMP-D50-V1 ist die Leiterplatte eines **Stereo-Class-D-Leistungsverstärkers**, den ich vollständig selbst entwickelt habe: von den Anforderungen über Schaltplan, Simulation und Bauteilprüfung bis zum fertig gerouteten 4-Lagen-Layout.

Der Verstärker soll passive Regallautsprecher antreiben und direkt an einen Mac- oder Windows-Rechner angeschlossen werden. Dafür enthält die Platine einen eigenen USB-Audio-Zweig mit integriertem DAC. Wer lieber analog hört, nutzt die beiden Cinch-Eingänge.

### Grundidee

**Klein, leise und sauber: passiv gekühlt, ohne Netzspannung auf der Platine und mit einer Schutz- und Überwachungslogik, die bei jedem Fehler den Ausgang stumm schaltet.**

Die Platine ist ausdrücklich ein **Entwicklungsprojekt**. Gehäuse, Kühlkörper und Netzteil gehören nicht zum Umfang.

---

## 2. Projektziele

- Ein hochwertiger Stereo-Verstärker für akustische Musik wie Klavier, Streicher und Orchester.
- Zwei Eingangswege auf einer Platine: digital über USB-C und analog über Cinch.
- Eine einzige externe Versorgung: ein zertifiziertes 28-V-Steckernetzteil. Auf der Platine liegt **keine Netzspannung**.
- Passive Kühlung ohne Lüfter.
- Hybride Fertigung: Der Hersteller bestückt die SMD-Teile, große Bauteile und Steckverbinder lötet der Eigentümer selbst.
- Eine nachvollziehbare Dokumentation: jeder Wert ist als Messwert, Datenblattwert, Rechnung oder Annahme gekennzeichnet.

---

## 3. Systemarchitektur

Der Signalweg besteht aus zwei Eingängen, die ein Relais auf einen gemeinsamen Lautstärkesteller und die Endstufe führt.

### Digitaler Weg

**USB-C → XMOS XU316 → PCM5122**

Der Mikrocontroller XU316 arbeitet als USB-Audio-Klasse-2-Gerät. Er gibt I²S an den DAC PCM5122 weiter. Vorgesehene Formate sind 24 Bit PCM bei 44,1, 48, 88,2 und 96 kHz. Die Firmware-Quellen liegen vor, wurden aber noch nicht gebaut.

### Analoger Weg

**RCA → OPA1662 (invertierende Stufe) → Relais**

Die Cinch-Eingänge laufen über invertierende OPA1662-Stufen mit rund 10,5 kΩ Eingangsimpedanz. Ein Pegel von bis zu 4 Vrms gilt rechnerisch als sicher.

### Gemeinsamer Weg

**Relais K401 → PGA2311 → OPA1662 (Puffer + Inverter) → TPA3255**

- Das Relais wählt die Quelle. Ohne Spannung ist **RCA** gewählt.
- Der PGA2311 stellt die Lautstärke ein und wird per SPI vom XU316 gesteuert.
- Zwei OPA1662 erzeugen daraus das **differenzielle** Signal für die Endstufe.
- WIMA-Folienkondensatoren (2,2 µF) koppeln das Signal in den TPA3255.

### Endstufe und Ausgangsfilter

Der **TPA3255** arbeitet als Brückenschaltung (BTL) mit zwei Kanälen. Jeder Ausgang hat ein LC-Filter aus 10-µH-Drosseln (Coilcraft MA5172-AE) und 1-µF-Folienkondensatoren, dazu ein Zobel-Glied aus 3,3 Ω und 10 nF. Die Lautsprecher werden an zwei Phoenix-Klemmen J7 und J8 angeschlossen.

---

## 4. Stromversorgung und Schutz

Alles läuft aus **einem** 28-V-Eingang (nominal, Studienfenster 26,6 bis 29,4 V). Das externe Netzteil liefert mindestens 8 A beziehungsweise 224 W. Ein bestimmtes Netzteil ist bewusst noch nicht festgelegt.

### Eingangsschutz

1. **Sicherung F101** mit 10 A.
2. **TVS-Diode** SMCJ33CA gegen Überspannungsspitzen.
3. **Sperr-FET Q101** (CSD19532Q5B): schützt gegen Verpolung und Rückstrom.
4. **Zwei parallele eFuses TPS26631** mit je etwa 6 A Strombegrenzung. Sie fahren den 2000-µF-Pufferkondensator in rund 44 bis 74 ms hoch (Einschaltstrombegrenzung).

### Spannungsschienen

- **PVDD 28 V** für den TPA3255.
- **+12 V und +5,2 V** aus zwei Buck-Wandlern LMR36520 (GVDD und Hilfsversorgung).
- **+3,3 V, +1,8 V und +0,9 V** aus drei Buck-Wandlern TPS62822 für den XU316 und die Logik.
- **±5 V analog** (+5 VA und −5 VA) aus rauscharmen LDOs für Op-Amps und Lautstärkesteller, dazu 4,5 V für die Relaisspule.

Die Reihenfolge ist festgelegt: PVDD, dann +5,2 V und +12 V, dann +3,3 V, +1,8 V und +0,9 V. Erst danach gibt die Überwachung den XU316 frei.

---

## 5. Fail-safe: Reset, Mute und Watchdog

Ein Verstärker darf bei einem Fehler nicht „irgendetwas“ tun. Darum gibt es eine reine Hardware-Überwachung, die ohne Firmware funktioniert:

- **Fensterüberwachung** der Schienen (TPS3700) und eine gemeinsame Power-Good-Leitung.
- **Reset-Verzögerung** (TPS3808) von etwa 0,34 bis 0,80 s nach dem Einschalten.
- **Hardware-Watchdog** (TPS3431) mit einem Herzschlag-Signal vom XU316.
- **Verriegelung (Latch):** Ein einmal erkannter Ausfall bleibt gespeichert und wird nur durch ein echtes Power-Good-Low gelöscht.

Das Ergebnis ist eine UND-Verknüpfung: `PWR_RDY = RDY UND WD_OK UND LATCH_OK`. Sie hält den TPA3255 im Reset und den PGA2311 stumm, bis alles in Ordnung ist. Pull-Downs sorgen dafür, dass der Verstärker auch bei unbestückter oder unprogrammierter Logik stumm bleibt.

---

## 6. Leiterplatte

- **Größe:** 172,10 × 115,10 mm, **4 Lagen**, 1,6 mm, ENIG
- **Lagenaufbau:** JLC04161H-3313 (Signal, GND-Fläche, PVDD-Fläche, Signal/Leistung)
- **Bauteile:** 344 Footprints, alle oben bestückt
- **USB:** differenzielles Paar mit 0,15 mm Leiterbahnbreite, berechnet etwa 92,5 Ω (Ziel 90 Ω ±10 %)
- **Prüfung:** ERC 0 Verstöße, DRC 0 Verstöße, Schaltplan-Abgleich ohne Abweichung
- **Befestigung:** vier M3-Bohrungen

Der Leistungsteil mit den vier Ausgangsleitungen OUT_A bis OUT_D, den Filterdrosseln und den beiden großen 1000-µF-Elkos liegt rechts, der empfindliche Audio- und USB-Teil links. So bleiben die schaltenden Ströme räumlich vom Signalweg getrennt.

### Fertigung

Ein Fertigungspaket für JLCPCB ist vorbereitet, aber **nicht bestellt**. Der Hersteller bestückt 307 SMD-Teile. Etwa 33 Teile löte ich selbst: Drosseln, Elkos, Folienkondensatoren, Steckverbinder, Relais und Sicherung.

---

## 7. Technische Zielwerte

Alle Werte sind **Designziele, Datenblattangaben oder Rechnungen**. Es gibt keine Messung.

- **Ausgangsleistung:** 2 × 50 W an 4 Ω (1 kHz, 1 % THD+N, kurzzeitig). Das ist ein Ziel, kein Versprechen.
- **An 8 Ω:** etwa 42,5 W. 50 W sind bei 28 V rechnerisch nicht erreichbar.
- **Mindestlast:** 3,4 Ω (BTL)
- **Verstärkung:** typisch 21,5 dB
- **Dauerbetrieb:** 2 × 50 W Sinus ist kein vorgesehener Dauerzustand. Für Musik wird etwa ein Achtel der Nennleistung angenommen.
- **Verlustleistung:** etwa 15 bis 18 W bei voller Aussteuerung (Planungswert)
- **Kühlung:** Die Leiterplatte allein führt nur etwa 1,7 W ab. Der TPA3255 braucht einen externen, geerdeten Kühlkörper mit isolierender Wärmeleitschicht.

---

## 8. Anschlüsse

- **J101:** DC-Eingang 28 V (Kycon KPJX-4S)
- **J301:** USB-C (USB 2.0 High-Speed, eigenversorgt)
- **J401 / J402:** Cinch links / rechts (REAN NYS367)
- **J7 / J8:** Lautsprecher links / rechts (Phoenix MKDS)
- **J302:** xSYS2-Stecker zum Programmieren und Debuggen
- **TP801 / TP802:** Testpunkte für `PWR_RDY` und `LATCH_OK`

**Wichtig:** Die Lautsprecherausgänge sind Brückenausgänge. **Kein Anschluss darf mit Masse oder Gehäuse verbunden werden.**

---

## 9. Was ich bei der Entwicklung gelernt habe

### Der Eingangsschutz wurde komplett neu entworfen

Die erste Lösung mit LM5069 und LM5050 und einem Shunt ließ sich nicht innerhalb der zulässigen Spannungsgrenze (±0,3 V am Sense-Eingang) betreiben. Ich habe sie durch **zwei parallele TPS26631** mit Sperr-FET ersetzt. Das spart den Shunt, schützt nativ gegen Verpolung und lässt sich mit Datenblattwerten belegen.

### Die Watchdog-Logik hatte einen Denkfehler

Meine erste Annahme zum Einschaltverhalten des TPS3431 war falsch. Er meldet erst nach Ablauf des Timeouts. Dadurch hätte eine hängende Firmware den Ausgang wiederholt ein- und ausschalten können. Die Lösung ist die **einrastende Verriegelung** aus Abschnitt 5.

### Ehrliche Leistungsangaben

Ich habe frühere Zahlen zu Klirrfaktor und Leistung wieder zurückgezogen, weil sie nur Extrapolationen waren. Stattdessen stehen jetzt nur Werte, die sich aus Datenblättern ableiten lassen, mit dem Hinweis, dass nichts gemessen wurde.

### Der Eingangsweg wurde neu aufgebaut

Die Cinch-Eingänge laufen jetzt über zwei invertierende OPA1662-Stufen. Der PGA2311 wird dadurch aus einem Op-Amp-Ausgang getrieben, was die Quellimpedanz sauber definiert.

---

## 10. Aktueller Status und Transparenz

**Wichtig:** Es existiert noch **keine gefertigte Platine** und **keine Messung**.

- Der Schaltplan V1.0 wurde freigegeben (12 Blätter, 340 Bauteile, ERC 0).
- Die Leiterplatte ist vollständig geroutet, mit DRC 0 und Schaltplan-Abgleich 0.
- Das Fertigungspaket ist vorbereitet, aber nicht bestellt.
- Die USB-Audio-Firmware ist geschrieben, aber **nicht gebaut**. Ohne sie funktionieren USB-Audio, Lautstärke und Quellenwahl nicht.
- Die abgebildeten 3D-Ansichten sind **illustrativ**: Für 52 Bauteile wurden Ersatzmodelle verwendet. Die Leiterplattenbilder sind KiCad-Exporte und keine Fotos.
- Es wird **keine CE-, EMV- oder sonstige Konformität** behauptet.

### Sicherheitshinweise

- Es liegt nur Gleichspannung (28 V, bis etwa 8 A) an. Das Netzteil muss selbst zertifiziert und galvanisch getrennt sein.
- Die beiden 1000-µF-Kondensatoren speichern nach dem Ausschalten noch Energie.
- Der Kühlkörper, die Drosseln und der TPA3255 können heiß werden.
- Die erste Inbetriebnahme erfolgt mit einem **strombegrenzten Labornetzteil**, nicht mit dem Steckernetzteil.

---

## 11. Nächste Schritte

1. Fertigungspaket prüfen und den Prototyp bestellen.
2. Kontrollierte Inbetriebnahme mit Strombegrenzung, Schiene für Schiene.
3. USB-Firmware bauen und testen.
4. Messen: Klirrfaktor, Rauschen, Frequenzgang, Leistung und Wärme.
5. Kühlkörper und Gehäuse entwerfen.
6. Die Dokumentation mit echten Messwerten aktualisieren.

---

## Fazit

AMP-D50-V1 zeigt den kompletten Weg einer Hardwareentwicklung: von den Anforderungen über Schaltungsentwurf, Schutzkonzept und Simulation bis zum fertigen Leiterplattenlayout. Der nächste und wichtigste Schritt ist der Beweis in der Praxis, nämlich die erste gebaute Platine und die erste Messung.
