---
id: amp-d50-v2-lite-class-d-amplifier
slug: amp-d50-v2-lite-class-d-amplifier
translation_id: amp-d50-v2-lite-class-d
language: en
content_type: project
title: AMP-D50-V2-LITE – TPA3255 Class-D Amplifier with USB-C Audio
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
excerpt: A compact stereo Class-D amplifier with a TPA3255, a USB-C audio input and a separate 24 V supply, designed in KiCad. The design is complete and the bare PCB has been manufactured, but nothing has been assembled or measured yet.
tags:
- Class-D
- TPA3255
- USB Audio
- PCM2704C
- KiCad
- PCB Design
read_time: 9 min
published: true
created_at: '2026-11-10T19:30:00.000Z'
external_link: 
project_status: in_progress
sort_order: 16
---

# AMP-D50-V2-LITE
### TPA3255 Class-D Amplifier with USB-C Audio

**A stereo amplifier designed in KiCad: the computer delivers digital audio over USB-C, and a dedicated 24 V adapter powers the output stage.**

**Power stage:** Texas Instruments TPA3255 (2 × BTL)  
**USB DAC:** Texas Instruments PCM2704C  
**Supply:** 24 V DC, separate from the USB path  
**PCB:** 2 layers, 2 oz copper, 182.1 × 145.6 mm  
**Development:** KiCad 10, LTspice  
**Project status:** Design complete, bare PCB manufactured, not yet assembled and not measured

---

## 1. Project Overview

### What is AMP-D50-V2-LITE?

AMP-D50-V2-LITE is the hardware design of a compact **stereo power amplifier**. A computer sends digital audio over USB-C to a PCM2704C USB audio DAC. A small analog stage then drives the **TPA3255** Class-D power stage. It runs from a separate 24 V supply and delivers a bridge-tied-load (BTL) output to each speaker.

### How it differs from AMP-D50-V1

The V2-LITE is a **simpler variant** of the AMP-D50 family. Instead of a 4-layer board with an XMOS controller, it uses a **2-layer board with 2 oz copper**, a simple USB DAC that needs no firmware, and mostly **through-hole parts** that can be soldered by hand.

### Goal

**A complete, manufacturable KiCad design: 11 schematic sheets, a PCB with custom routing rules, a heatsink on the power stage and a documented manufacturing package.**

---

## 2. Key Features

- **Power stage:** TPA3255 with two BTL channels.
- **Digital input:** USB-C receptacle, USB 2.0 Full-Speed, with the DAC powered from the USB bus.
- **Cable compatibility:** designed for USB-A to USB-C and USB-C to USB-C cables (design expectation, not verified).
- **Power input:** 5.5 × 2.5 mm barrel jack, centre positive, 24 V DC.
- **Outputs:** stereo BTL with four independent screw terminals.
- **Protection:** 10 A fuse, reverse-polarity P-MOSFET, 30 V TVS diode, TPS26633 eFuse, plus mute and reset supervision.
- **Cooling:** heatsink on top of the TPA3255.

**No power, distortion or noise figures are claimed.** Nothing has been measured.

---

## 3. System Architecture

The 24 V path and the USB path are independent. USB powers only the DAC. The analog stage and the gate drivers run from a 12 V auxiliary rail derived from the protected 24 V rail.

### USB audio path

**USB-C receptacle → ESD protection → PCM2704C**

- The receptacle J401 has its own 5.1 kΩ pull-down (Rd) on each of CC1 and CC2. A standards-compliant USB-A to C cable therefore lets the host power the DAC.
- The USBLC6-2SC6 ESD device protects the data lines.
- The PCM2704C is a USB audio device with 16-bit stereo at 32, 44.1 and 48 kHz. According to its datasheet it needs no dedicated driver.

### Analog stage

**AC coupling → 2 × NE5532 → TPA3255**

Two NE5532 op-amps drive the power stage differentially. They run from the 12 V auxiliary rail.

### Power stage and output filter

The **TPA3255** works in bridge-tied load. Each output has an LC filter with four Coilcraft MA5172-AE inductors (10 µH), 1 µF film capacitors and Zobel networks. The speakers connect to two Phoenix terminals, J1001 and J1002.

### Supervision

Logic built from an LM339, a TL431 and a TPS3802K33 holds the amplifier in reset and muted until the 24 V rail and the USB 5 V rail are both valid and an unmute delay has elapsed.

---

## 4. Power Supply and Protection

- **Input:** 24 V DC on the barrel jack, **centre positive**.
- **Adapter:** at least 5 A. The no-load voltage must not exceed 25.2 V, because the input TVS has a 25.6 V working voltage. The design was calculated and simulated around a Mean Well GST120A24-P1M. No adapter has been selected or tested.
- **Current budget:** 5 to 5.25 A, with peaks near 6 A for up to 25 ms (calculated, not measured).

### Input protection

1. **Fuse F1**, 10 A.
2. **Reverse-polarity protection** with the IRF4905 P-MOSFET.
3. **TVS diode** 1.5KE30A against voltage spikes.
4. **TPS26633 eFuse** for inrush and current limiting.
5. **Reservoir capacitors:** 2 × 3300 µF, 50 V.

### Auxiliary supply

A RECOM R-78HB12-0.5 converter generates the 12 V auxiliary rail for the analog stage, the gate drivers and the supervision.

**Safety:** use a closed, double-insulated adapter with a CE mark. Check the polarity and the no-load voltage with a multimeter before plugging in. The input protection chain reduces risk but does not replace this check.

---

## 5. Printed Circuit Board

- **Size:** 182.1 × 145.6 mm
- **Layers:** 2, copper 2 oz (70 µm) on both sides, 1.6 mm
- **Components:** 209 footprints, all on the top side, 150 of them through-hole
- **Rules:** 14 net classes with custom DRC rules, 0.6 mm clearance for the 24 V, switching-node, bootstrap and speaker nets
- **Track widths:** 24 V main path 1.4 mm, speaker and switching-node nets 0.8 mm
- **Check (KiCad DRC, 18 October 2026):** 0 errors, 0 unconnected nets, schematic parity 0, 4 deliberately accepted warnings

The **first two gallery images are photographs of the manufactured, still unpopulated PCB**. All other images are **CAD renders from the KiCad project**.

### Power routing

- The four OUT nodes use 1.0 mm tracks with links on the bottom layer and parallel vias.
- The bootstrap capacitors sit as close to the TPA3255 as the heatsink allows.
- Copper pours on the top layer feed the PVDD pins, supported by pours and via arrays on the bottom layer.

### Cooling

On the TPA3255 in the DDV package, the PowerPAD is on **top**. There is therefore no thermal pad under the chip. The ATS-TI1OP-519-C1-R3 heatsink rests on the package and is fixed with two M3 screws 36.8 mm apart. The thermal interface material and the actual contact gap are **not yet determined**.

---

## 6. Main Components

- **U4:** TI TPA3255 (HTSSOP-44), Class-D power stage
- **U401:** TI PCM2704C (SSOP-28), USB audio DAC
- **J401:** Amphenol 12401610E4#2A, USB-C receptacle (USB 2.0 only)
- **U5, U6:** NE5532 (DIP-8), analog stage
- **U201:** TI TPS26633, eFuse
- **Q101:** IRF4905, reverse-polarity protection
- **U2:** RECOM R-78HB12-0.5, 12 V auxiliary supply
- **U701, U702, U7:** LM339, TL431, TPS3802K33, supervision
- **L2 to L5:** Coilcraft MA5172-AE, 10 µH
- **C201, C202:** 3300 µF, 50 V
- **J101:** Same Sky PJ-102BH DC jack
- **J1001, J1002:** Phoenix MKDS 3/2-5.08 speaker terminals

Many passive-component part numbers are still marked "TBD" in the design.

---

## 7. Connecting Speakers

The TPA3255 drives each speaker in **bridge-tied-load (BTL)**. Each channel has a positive and a negative output: J1001 for left, J1002 for right.

**Warning: the negative terminals (L−, R−) must NOT be connected to ground, to each other, or to the negative terminal of another channel.** Both terminals of each speaker are active outputs. Grounding either one can destroy the amplifier. The PCB silkscreen therefore reads "BTL OUTPUTS, L−/R− NOT GND".

Use four independent insulated wires, one per terminal.

---

## 8. Simulation and Manufacturing

### LTspice

The project includes a fully wired LTspice schematic of the whole board with 206 parts. It was compared with the KiCad netlist with no differences. DC operation, a 1 kHz sine, clipping, frequency response and start-up were simulated.

All ICs are **behavioural models, not manufacturer models**. The results are therefore not hardware measurements.

### Manufacturing package

For JLCPCB there are Gerber files, a BOM and CPL for 43 SMD parts, and a list of the **150 through-hole parts** to be soldered by hand. Optionally, only the TPA3255 can be assembled.

The **bare PCB has since been manufactured** (see the photos in the gallery). For SMD assembly, part numbers and stock still have to be confirmed.

---

## 9. Assembly Guide (Recommendation)

The bare PCB is in hand, but nothing has been assembled yet.

1. Inspect the PCB (2 layers, 2 oz, 1.6 mm) for manufacturing defects.
2. Place the SMD parts first (TPA3255, TPS26633, PCM2704C, TPS3802, ESD device, MOSFETs, crystal, USB-C receptacle, capacitors).
3. Solder the TPA3255 carefully (HTSSOP-44, 0.635 mm pitch, moisture sensitive) and inspect for bridges.
4. Then the through-hole parts: low-profile ones first, then sockets, electrolytics, inductors, connectors and the fuse.
5. Fit the heatsink last, with two M3 screws.
6. Choose and validate a suitable thermal interface material.
7. Before power-up, inspect for solder bridges, check the polarity of electrolytics and diodes, and measure the resistance between 24 V and ground and between 12 V and ground.
8. The first power-on uses a **current-limited bench supply and no speakers**. Only after checking the 12 V rail and the mute logic are a load or speakers connected.

---

## 10. Current Status and Limitations

**Important:** the PCB is **manufactured but not yet populated**. There is **no measurement**.

- The schematic and the PCB are complete and pass the KiCad DRC.
- The bare PCB has been manufactured (photos in the gallery).
- **USB:** enumeration and playback are unverified. There may be an audible pop when the PC suspends or resumes, because the DAC suspend signal is not wired to the mute logic.
- **Power supply:** no adapter has been selected, and start-up with a real adapter is untested. Hot-plug and start-up behaviour come from approximate models.
- **Heatsink:** the manufacturer publishes no positional tolerance and the contact gap is unknown. The distance between the GVDD copper and the heatsink foot is 0.7 mm, which leaves little margin.
- **BOM:** many resistor and capacitor part numbers are "TBD".
- **Assembly:** part numbers, stock and rotation for SMD assembly are unverified.
- **Performance:** there are no measurements of power, distortion, noise, thermal behaviour or EMC.
- No certification is claimed. No license has been assigned to the repository yet.

---

## 11. Next Steps

1. Source the components and confirm part numbers.
2. Populate and solder the board.
3. Controlled bring-up with current limiting and no speakers.
4. Test USB enumeration and playback on Windows, macOS and Linux.
5. Choose a thermal interface and measure the thermal behaviour.
6. Measure power, distortion and noise.
7. Update the documentation with real measurements.

---

## Conclusion

AMP-D50-V2-LITE is a fully documented amplifier design with a focus on manufacturability: a 2-layer board, parts that can be soldered by hand, a clear protection chain and traceable manufacturing documents. The decisive next step is building the first board and taking the first measurement.

---

### AMP-D50-V2-LITE

**Designed by Nguyen Nhan Do**

Two photographs show the manufactured, unpopulated PCB; all other images are CAD renders. The hardware has not yet been populated or tested.
