---
id: esp32-mqtt-gateway
slug: esp32-mqtt-gateway
title: ESP32 als MQTT-Gateway für industrielle Sensorsignale
category: IoT
image_url: /my-electronics-blog/images/posts/esp32-mqtt-main.webp
image_gallery: []
excerpt: Entwicklung eines einfachen IoT-Gateways zur Erfassung industrieller Sensorsignale mit ESP32 und MQTT-Kommunikation.
tags:
  - ESP32
  - MQTT
  - IoT
  - Sensorik
read_time: 6 Min.
published: true
created_at: 2026-05-30T10:00:00.000Z
external_link:
project_status: done
sort_order: 100
---

# ESP32 als MQTT-Gateway für industrielle Sensorsignale

Die Digitalisierung industrieller Anlagen spielt eine immer wichtigere Rolle. Viele Sensoren liefern wertvolle Prozessdaten, die für Überwachung, Analyse und Optimierung genutzt werden können. In diesem Projekt wurde ein einfacher Prototyp entwickelt, der Sensordaten mit einem ESP32 erfasst und über MQTT an ein Dashboard überträgt.

## Projektziel

Ziel des Projekts war die Entwicklung eines kostengünstigen IoT-Gateways zur Erfassung von Messwerten und deren Übertragung über WLAN.

Erfasste Daten:

- Temperatur
- Luftfeuchtigkeit
- Spannung
- Stromverbrauch

Die Daten sollten anschließend auf einem MQTT-Broker bereitgestellt und in einem Dashboard visualisiert werden.

## Verwendete Hardware

- ESP32 DevKit V1
- DHT22 Temperatur- und Feuchtigkeitssensor
- INA219 Stromsensor
- OLED Display
- WLAN-Netzwerk

## Software und Kommunikation

Die Firmware wurde mit der Arduino-IDE entwickelt.

Der ESP32 liest die Sensorwerte zyklisch aus und veröffentlicht die Daten über MQTT.

### Beispielhafte MQTT-Topics

```text
factory/temperature
factory/humidity
factory/current
factory/voltage
```

Als MQTT-Broker wurde Mosquitto verwendet.

## Vorteile der MQTT-Kommunikation

- Geringe Bandbreite
- Schnelle Datenübertragung
- Einfache Implementierung
- Gute Skalierbarkeit

## Ergebnisse

Während der Tests konnten die Messwerte zuverlässig übertragen und visualisiert werden.

Mögliche Erweiterungen:

- Modbus RTU
- RS485-Kommunikation
- Home Assistant
- Node-RED
- Eigene Leiterplatte mit KiCad

## Fazit

Mit einem ESP32 lassen sich bereits mit geringem Aufwand leistungsfähige IoT-Lösungen realisieren. Das Projekt zeigt, wie industrielle Sensordaten erfasst, verarbeitet und über MQTT bereitgestellt werden können.
