---
id: lm5116-synchronous-buck-converter-24v-8v
slug: lm5116-synchronous-buck-converter-24v-8v
translation_id: lm5116-buck-converter-24v-8v
language: en
content_type: project
title: LM5116 – Synchronous Buck Converter 24 V to 8 V / 3 A (KiCad, Prototype Rev A)
category: Power, PCB
image_url: /my-electronics-blog/images/posts/lm5116-buck-3d-iso.webp
image_gallery:
- /my-electronics-blog/images/posts/lm5116-buck-block-diagram.webp
- /my-electronics-blog/images/posts/lm5116-buck-schematic.webp
- /my-electronics-blog/images/posts/lm5116-buck-placement.webp
- /my-electronics-blog/images/posts/lm5116-buck-copper-layers.webp
- /my-electronics-blog/images/posts/lm5116-buck-sim-vin-sweep.webp
- /my-electronics-blog/images/posts/lm5116-buck-sim-load-transient.webp
excerpt: A four-layer, non-isolated synchronous buck converter built around the TI LM5116, with a 24 V input and an 8 V, 3 A output. Fully designed in KiCad 10, with frozen manufacturing data, audit reports, LTspice simulations and a bring-up plan. The prototype has not been built yet, and all measurements are still to come.
tags:
- LM5116
- KiCad
- Buck converter
- 4 layers
- LTspice
- Power electronics
read_time: 12 Min.
published: true
created_at: '2026-11-10T23:00:00.000Z'
external_link: 
pdf_url: /my-electronics-blog/documents/steckbrief/lm5116-en.pdf
project_status: in_progress
sort_order: 40
---

# LM5116 buck converter
### 24 V to 8 V / 3 A, synchronous, four-layer, Prototype Rev A

**A power-supply design from component selection to manufacturing data, with a clear separation between what is calculated, what is simulated and what is not yet measured.**

**Controller:** Texas Instruments LM5116  
**Input:** 24 V nominal, 18 to 28 V while running  
**Output:** 8 V, 3 A (24 W), non-isolated  
**Switching frequency:** about 251 kHz  
**PCB:** 4 layers, 85 × 50 mm, 1.6 mm FR-4, ENIG  
**Tools:** KiCad 10, LTspice  
**Status:** hardware frozen, prototype not yet ordered and not measured

---

## 1. Project overview

### What is it about?

The design is a synchronous step-down converter for a 24 V DC supply, as often found in industry and machinery. It is meant to produce 8 V at up to 3 A from it. The project is set up as complete development work: schematic, circuit board, manufacturing data, audit reports, simulation and a test plan for the later measurements.

### Why document it so precisely?

A power supply is only good once you know **how good** it is. So the project separates strictly by the kind of evidence:

- **Calculated:** from the datasheet and formulas, with stated assumptions
- **Officially simulated:** the result of a reviewed simulation campaign, but still a model
- **Model characterisation:** behaviour or limit of the model, not evidence from hardware
- **Measured:** there is **nothing yet**

What matters to me is that a simulation is never passed off as a measurement.

### The honest status

- The **hardware is frozen** (version `v1.0.0-prototype-rev-a`), including the manufacturing data.
- The prototype has **not been ordered or built**.
- All 17 planned measurements (T00 to T16) have **not been carried out**.
- There is no production qualification, no certification and no EMC statement.

---

## 2. Technical data

- **Topology:** non-isolated synchronous buck converter with current-mode control
- **Input:** 24 V DC nominal. 18 to 28 V is intended while running. A cold start at exactly 18 V is not guaranteed because the controller's undervoltage threshold has a tolerance.
- **Output:** 8 V at up to 3 A. The calculated set point is 8.05 V (reference 1.215 V, divider 6.81 kΩ to 1.21 kΩ).
- **Switching frequency:** about 251 kHz, calculated 251.8 kHz
- **Power stage:** two 60 V N-channel MOSFETs (SI7850DP), 22 µH storage inductor (XAL1510-223MED), 18 mΩ sense resistor with Kelvin connection
- **Output capacitance:** 3 × 47 µF ceramic, about 57 µF effective in the analysis at 8 V and 50 °C, allowing for the DC-bias loss of the ceramics
- **Control:** Type-II compensation (9.76 kΩ, 3.3 nF, 100 pF) and a ramp network

---

## 3. Circuit design

### Input protection

The input is protected several times over, in this order:

1. **Fuse** F1, time-lag, 3.15 A
2. **Reverse-polarity protection** with a P-channel MOSFET whose gate is clamped to 12 V
3. **TVS diode** SMAJ28A against voltage spikes
4. **Input capacitors:** 4 × 10 µF ceramic and a 100 µF polymer electrolytic

On top of that, the controller provides undervoltage lockout, soft start and cycle-by-cycle current limiting.

### Power stage and control

The LM5116 drives the two switches directly. Current is sensed across RS1, 18 mΩ, which is picked up through its own sense points (Kelvin). The feedback network, the compensation and the artificial ramp close the control loop. The schematic is divided into blocks: input and protection, input capacitors, controller, gate drive, output filter, current sensing and feedback.

---

## 4. Circuit board

The board is designed in KiCad 10, and its construction and layer stack are laid out for switching high currents with fast edges:

- **4 layers**, 85 × 50 mm, **all components on the top side**
- **Continuous ground plane** on the second layer as return path and shielding
- **Small loop** of input capacitor, MOSFET and sense resistor, to keep noise and overshoot low
- **Small switch-node area**, so little noise is radiated
- **Net classes** for high current, gate drive, sensitive analogue lines and Kelvin lines, plus a custom clearance rule at the controller
- **Heat removal at the controller:** 15 thermal vias under the exposed pad and a custom solder-paste pattern of eight windows with 70 % area coverage, which has to be preserved when the library is updated

---

## 5. Manufacturing data and audit

The manufacturing package is frozen and audited. It contains Gerber and drill files for JLCPCB, a bill of materials with manufacturer part numbers, a placement list (41 SMD parts, 45 components in total), an assembly drawing, a stencil layer, the schematic as a PDF, drill maps, 3D images and a checksum list (SHA-256) of all 40 files.

**Audit results:**

- **ERC (schematic):** 0 violations
- **DRC (PCB, zones refilled):** 0 errors, 0 unconnected items
- **Schematic to PCB parity:** 0 differences
- **Gerber and drill audit:** 37 of 37 checks passed
- **Cross-check of BOM, placement list and PCB:** 18 of 18 passed
- **Checksum list:** 40 of 40 files match

The PCB file is stored with unfilled zones. A DRC of the file as saved therefore shows apparent unconnected items, and the results above come from a copy with refilled zones.

### Open points before ordering

- At the audit, C_BULK1, RS1, F1 and L1 were unavailable or in short supply at the assembler. This has to be checked again at order time, and no substitute parts are approved.
- Q1 and Q2 must be ordered as **SI7850DP-T1-GE3**; the schematic still carries the text -T1-E3.
- The 3D view shows fuse F1 without a body because no model was available. In the circuit F1 is present.
- The first order is **five bare boards**, with no assembly and no stencil.

---

## 6. Simulation

A reviewed campaign was run in LTspice with the TI model of the LM5116 (input voltage from 18 to 28 V, start-up, shutdown, ripple, load step, line step, Bode plot). Examples of the results, all **simulated and not measured**:

- **Output ripple:** about 7 to 10 mV peak to peak
- **Control loop:** crossover frequency 19 to 24.5 kHz with 53 to 56 degrees of phase margin
- **Load step from 1.5 to 3 A** in 1 µs: dip and overshoot of the output voltage of about 170 mV each, with quick settling
- **Switching frequency:** about 250.7 kHz across the whole input range

### Limits of the model

A simulation is only as good as its model, and the project names the deviations explicitly:

- The **undervoltage threshold** in the TI model differs from the datasheet. Runs at 18 V are therefore normal-operation simulations and not evidence of cold start.
- The **current-sense gain** in the model differs clearly from the datasheet. The prediction of the current limit and parts of the loop analysis are limited as a result.
- The **gate-drive level** in the model is not evidence of the real drive.
- A start-up problem at very light load in the simulation is a limit of the solver and not a sign of a hardware fault.

---

## 7. The test plan

For bring-up there is a guide in German, English and Vietnamese, a test plan with a requirements matrix and a test log. The 17 planned measurements are:

- **T00 to T02:** visual inspection, resistance and diode checks without power, staged first power-up
- **T03 to T04:** undervoltage threshold, operation with no and light load
- **T05 to T08:** load sweep and efficiency, line and load regulation, output ripple
- **T09 to T10:** switch node and gate drive
- **T11:** thermal behaviour
- **T12 to T13:** load transient, start-up and shutdown
- **T14 to T15:** protection and reverse polarity, current limit
- **T16:** stability of the control loop

Every test stays at "not tested" until it has really been carried out. A positive result is entered only after a measurement.

---

## 8. What I take from it

This project was less about the power supply itself than about the way of working: freeze the design and the manufacturing data, label every statement with the kind of evidence behind it, disclose the limits of the tools, and measure only once a plan is in place. That is how I would hand over hardware in a company.

---

## 9. Sources and rights

The design files (KiCad project, manufacturing data, simulations, reports and the test plan) are not public. If you want to assess how I work, you can see them **on request**, including the design reports in three languages: [donguyennhan.de@gmail.com](mailto:donguyennhan.de@gmail.com)

The design has not been physically tested, is not production-qualified, not certified and not checked for EMC compliance. All rights reserved, © 2026 Nguyen Nhan Do.
