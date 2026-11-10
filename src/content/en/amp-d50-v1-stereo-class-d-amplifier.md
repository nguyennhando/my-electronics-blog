---
id: amp-d50-v1-stereo-class-d-amplifier
slug: amp-d50-v1-stereo-class-d-amplifier
translation_id: amp-d50-v1-stereo-class-d
language: en
content_type: project
title: AMP-D50-V1 – Stereo Class-D Amplifier with USB Audio
category: Audio, PCB
image_url: /my-electronics-blog/images/posts/amp-d50-v1-3d-iso.webp
image_gallery:
- /my-electronics-blog/images/posts/amp-d50-v1-pcb-top.webp
- /my-electronics-blog/images/posts/amp-d50-v1-3d-top.webp
- /my-electronics-blog/images/posts/amp-d50-v1-block-diagram-en.webp
- /my-electronics-blog/images/posts/amp-d50-v1-audio-signal-flow-en.webp
- /my-electronics-blog/images/posts/amp-d50-v1-power-distribution-en.webp
- /my-electronics-blog/images/posts/amp-d50-v1-connector-location-en.webp
- /my-electronics-blog/images/posts/amp-d50-v1-pcb-bottom.webp
excerpt: A self-designed stereo Class-D amplifier built around the TPA3255, with USB-C audio and analog RCA inputs. The target is 2 × 50 W into 4 Ω from a 28 V supply. Schematic and PCB are finished, but nothing has been built or measured yet.
tags:
- Class-D
- TPA3255
- USB Audio
- XMOS
- KiCad
- PCB Design
read_time: 9 min
published: true
created_at: '2026-11-10T18:00:00.000Z'
external_link: 
project_status: in_progress
sort_order: 30
---

# AMP-D50-V1
### Stereo Class-D Amplifier with USB Audio

**A compact amplifier for critical listening: USB-C or RCA in, two bookshelf speakers out.**

**Power stage:** Texas Instruments TPA3255  
**Design target:** 2 × 50 W into 4 Ω from 28 V DC  
**Inputs:** USB-C (XMOS XU316 + PCM5122) and 2 × RCA  
**Development:** KiCad, LTspice  
**Project status:** Schematic V1.0 approved, PCB routed, not yet manufactured and not measured

---

## 1. Project Overview

### What is AMP-D50-V1?

AMP-D50-V1 is the circuit board of a **stereo Class-D power amplifier** that I developed entirely myself: from the requirements through schematic, simulation and component verification to a fully routed 4-layer layout.

The amplifier is meant to drive passive bookshelf speakers and to connect directly to a Mac or Windows computer. For that, the board contains its own USB audio path with an integrated DAC. If you prefer analog sources, the two RCA inputs are there for that.

### Basic idea

**Small, quiet and clean: passively cooled, no mains voltage on the board, and a protection and supervision logic that mutes the output on every fault.**

The board is explicitly a **development project**. The enclosure, heat sink and power adapter are outside the scope.

---

## 2. Project Goals

- A high-quality stereo amplifier for acoustic music such as piano, strings and orchestra.
- Two input paths on one board: digital over USB-C and analog over RCA.
- A single external supply: a certified 28 V plug-in adapter. There is **no mains voltage** on the board.
- Passive cooling without a fan.
- Hybrid assembly: the manufacturer places the SMD parts, while large components and connectors are soldered by the owner.
- Traceable documentation: every value is labeled as a measurement, a datasheet value, a calculation or an assumption.

---

## 3. System Architecture

The signal chain has two inputs, which a relay routes to a shared volume control and the power stage.

### Digital path

**USB-C → XMOS XU316 → PCM5122**

The XU316 microcontroller works as a USB Audio Class 2 device. It passes I²S to the PCM5122 DAC. The intended formats are 24-bit PCM at 44.1, 48, 88.2 and 96 kHz. The firmware sources exist but have not been built yet.

### Analog path

**RCA → OPA1662 (inverting stage) → relay**

The RCA inputs pass through inverting OPA1662 stages with an input impedance of about 10.5 kΩ. A level of up to 4 Vrms is judged safe by calculation.

### Shared path

**Relay K401 → PGA2311 → OPA1662 (buffer + inverter) → TPA3255**

- The relay selects the source. With no power applied, **RCA** is selected.
- The PGA2311 sets the volume and is controlled over SPI by the XU316.
- Two OPA1662 op-amps turn this into the **differential** signal for the power stage.
- WIMA film capacitors (2.2 µF) couple the signal into the TPA3255.

### Power stage and output filter

The **TPA3255** works in bridge-tied load (BTL) mode with two channels. Each output has an LC filter made of 10 µH inductors (Coilcraft MA5172-AE) and 1 µF film capacitors, plus a Zobel network of 3.3 Ω and 10 nF. The speakers connect to two Phoenix terminals, J7 and J8.

---

## 4. Power Supply and Protection

Everything runs from **one** 28 V input (nominal, study window 26.6 to 29.4 V). The external adapter supplies at least 8 A or 224 W. A specific adapter has deliberately not been chosen yet.

### Input protection

1. **Fuse F101**, 10 A.
2. **TVS diode** SMCJ33CA against voltage spikes.
3. **Blocking FET Q101** (CSD19532Q5B): protects against reverse polarity and reverse current.
4. **Two parallel TPS26631 eFuses**, each with a current limit of about 6 A. They ramp up the 2000 µF buffer capacitance in roughly 44 to 74 ms (inrush limiting).

### Voltage rails

- **PVDD 28 V** for the TPA3255.
- **+12 V and +5.2 V** from two LMR36520 buck converters (gate-drive supply and auxiliary power).
- **+3.3 V, +1.8 V and +0.9 V** from three TPS62822 buck converters for the XU316 and the logic.
- **±5 V analog** (+5 VA and −5 VA) from low-noise LDOs for the op-amps and the volume control, plus 4.5 V for the relay coil.

The sequence is fixed: PVDD, then +5.2 V and +12 V, then +3.3 V, +1.8 V and +0.9 V. Only after that does the supervision release the XU316.

---

## 5. Fail-safe: Reset, Mute and Watchdog

An amplifier must not do "something" when a fault occurs. That is why there is a pure hardware supervision that works without firmware:

- **Window monitoring** of the rails (TPS3700) and a shared power-good line.
- **Reset delay** (TPS3808) of about 0.34 to 0.80 s after power-up.
- **Hardware watchdog** (TPS3431) with a heartbeat signal from the XU316.
- **Latch:** a failure, once detected, stays stored and is cleared only by a genuine power-good low.

The result is an AND combination: `PWR_RDY = RDY AND WD_OK AND LATCH_OK`. It holds the TPA3255 in reset and the PGA2311 muted until everything is in order. Pull-down resistors keep the amplifier muted even when the logic is unpowered or unprogrammed.

---

## 6. Printed Circuit Board

- **Size:** 172.10 × 115.10 mm, **4 layers**, 1.6 mm, ENIG
- **Stackup:** JLC04161H-3313 (signal, GND plane, PVDD plane, signal/power)
- **Components:** 344 footprints, all on the top side
- **USB:** differential pair with 0.15 mm traces, calculated about 92.5 Ω (target 90 Ω ±10 %)
- **Checks:** ERC 0 violations, DRC 0 violations, schematic parity with no differences
- **Mounting:** four M3 holes

The power section with the four output lines OUT_A to OUT_D, the filter inductors and the two large 1000 µF capacitors sits on the right, while the sensitive audio and USB section sits on the left. This keeps the switching currents physically apart from the signal path.

### Manufacturing

A manufacturing package for JLCPCB is prepared but **not ordered**. The manufacturer assembles 307 SMD parts. About 33 parts are soldered by me: inductors, electrolytic and film capacitors, connectors, the relay and the fuse.

---

## 7. Technical Target Values

All values are **design targets, datasheet figures or calculations**. Nothing has been measured.

- **Output power:** 2 × 50 W into 4 Ω (1 kHz, 1 % THD+N, short duration). This is a target, not a promise.
- **Into 8 Ω:** about 42.5 W. 50 W cannot be reached at 28 V by calculation.
- **Minimum load:** 3.4 Ω (BTL)
- **Gain:** typically 21.5 dB
- **Continuous operation:** 2 × 50 W sine is not an intended continuous mode. For music, about one eighth of rated power is assumed.
- **Dissipation:** about 15 to 18 W at full drive (planning value)
- **Cooling:** the PCB alone removes only about 1.7 W. The TPA3255 needs an external grounded heat sink with an insulating, thermally characterized interface.

---

## 8. Connectors

- **J101:** 28 V DC input (Kycon KPJX-4S)
- **J301:** USB-C (USB 2.0 High-Speed, self-powered)
- **J401 / J402:** RCA left / right (REAN NYS367)
- **J7 / J8:** speakers left / right (Phoenix MKDS)
- **J302:** xSYS2 header for programming and debugging
- **TP801 / TP802:** test points for `PWR_RDY` and `LATCH_OK`

**Important:** the speaker outputs are bridge outputs. **Neither terminal may be connected to ground or the chassis.**

---

## 9. What I Learned During Development

### The input protection was redesigned completely

The first solution with an LM5069, an LM5050 and a shunt could not be operated within the permitted voltage limit (±0.3 V at the sense input). I replaced it with **two parallel TPS26631** and a blocking FET. This removes the shunt, protects natively against reverse polarity and can be backed by datasheet values.

### The watchdog logic had a flaw

My first assumption about the start-up behavior of the TPS3431 was wrong. It only reports after the timeout expires. As a result, hung firmware could have switched the output on and off repeatedly. The fix is the **latching circuit** from section 5.

### Honest performance figures

I withdrew earlier figures for distortion and power because they were only extrapolations. Only values that can be derived from datasheets are listed now, with the note that nothing was measured.

### The input path was rebuilt

The RCA inputs now run through two inverting OPA1662 stages. This lets the PGA2311 be driven from an op-amp output, which defines the source impedance cleanly.

---

## 10. Current Status and Transparency

**Important:** there is **no manufactured board** yet and **no measurement**.

- Schematic V1.0 has been approved (12 sheets, 340 components, ERC 0).
- The PCB is fully routed, with DRC 0 and schematic parity 0.
- The manufacturing package is prepared but not ordered.
- The USB audio firmware is written but **not built**. Without it, USB audio, volume and source selection do not work.
- The 3D views shown are **illustrative**: substitute models were used for 52 components. The PCB images are KiCad exports, not photographs.
- **No CE, EMC or other conformity** is claimed.

### Safety notes

- Only DC voltage is present (28 V, up to about 8 A). The adapter itself must be certified and galvanically isolated.
- The two 1000 µF capacitors still store energy after switch-off.
- The heat sink, the inductors and the TPA3255 can become hot.
- The first power-up is done with a **current-limited bench supply**, not with the plug-in adapter.

---

## 11. Next Steps

1. Review the manufacturing package and order the prototype.
2. Controlled bring-up with current limiting, rail by rail.
3. Build and test the USB firmware.
4. Measure: distortion, noise, frequency response, power and heat.
5. Design the heat sink and enclosure.
6. Update the documentation with real measurements.

---

## Conclusion

AMP-D50-V1 shows the complete path of a hardware development: from the requirements through circuit design, protection concept and simulation to a finished PCB layout. The next and most important step is proof in practice, namely the first built board and the first measurement.
