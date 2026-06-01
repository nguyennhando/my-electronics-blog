---
id: demo-3
title: PLC-Programmierung einer industriellen Tauchanlage
category: SPS-Programmierung
image_url: /my-electronics-blog/images/posts/Tauchanlage-main.webp
image_gallery:
- /my-electronics-blog/images/posts/Tauchanlage-1.webp
- /my-electronics-blog/images/posts/Tauchanlage-2.webp
excerpt: Automatisierte Tauchanlage mit SPS-Steuerung. Automatischer Transport und
  Tauchprozess mit Siemens S7-300. Hand- und Automatikbetrieb im TIA Portal realisiert.
tags:
- SPS
- S7300
- TiaPortal
read_time: 5 Min.
published: true
created_at: '2026-04-29T12:00:00Z'
external_link: https://drive.google.com/drive/folders/1WgBLk6R1F-_J_oisAxwNgQyFdcKVzb-m
project_status: done
sort_order: 50
slug: plc-programmierung-einer-industriellen-tauchanlage
---

# PLC-Programmierung einer industriellen Tauchanlage

Automatisierte Tauchanlage mit Siemens S7-300

Dieses Projekt umfasst die Entwicklung und Programmierung einer automatisierten Tauchanlage zur Steuerung eines industriellen Transport- und Tauchprozesses.
Die Anlage ermöglicht das automatische Verfahren, Heben und Senken eines Werkstückkorbs zwischen zwei Tauchbädern unter Berücksichtigung definierter Sicherheits- und Bewegungsbedingungen.

Die Steuerung wurde mit einer Siemens S7-300 CPU im TIA Portal realisiert.
Das Projekt beinhaltet sowohl einen Handbetrieb zur manuellen Steuerung der Achsen als auch einen vollautomatischen Ablauf mit sequenzieller Prozesssteuerung.

Im Automatikbetrieb fährt der Korb selbstständig zu den einzelnen Tauchstationen, führt definierte Tauch- und Abtropfzeiten aus und kehrt anschließend in die Ausgangsposition zurück.
Zusätzlich wurden Endlagensensoren, Sicherheitsabfragen, Statusanzeigen, Motorsteuerungen sowie eine Werkstückzählung mit Zeitstempel-Historie implementiert.

Die Softwarestruktur besteht aus mehreren Funktionsbausteinen für Betriebsarten, Ausgangssteuerung, Ablaufsteuerung, Teilehistorie und Diagnosefunktionen.
Zur Verbesserung der Übersichtlichkeit wurden symbolische Variablen, Datenbausteine sowie strukturierte Datentypen verwendet.

Das Projekt demonstriert praxisnah die Umsetzung industrieller Automatisierungstechnik mit SPS, Sensorik, Aktorik und Ablaufsteuerung im Siemens TIA Portal.

**Zum Projekte klicken, um die vollständige Dokumentation und Projektdateien im Detail anzusehen.**
