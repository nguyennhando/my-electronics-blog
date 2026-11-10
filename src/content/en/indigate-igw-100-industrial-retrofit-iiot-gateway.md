---
id: indigate-igw-100-industrial-retrofit-iiot-gateway
slug: indigate-igw-100-industrial-retrofit-iiot-gateway
translation_id: indigate-igw-100-industrial-retrofit-iiot-gateway
language: en
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
excerpt: An industrial communication and data acquisition gateway for digitalizing existing machines and plants.
tags:
[]
read_time: 5 min.
published: true
created_at: '2026-10-26T17:01:57.523Z'
external_link: 
project_status: in_progress
sort_order: 40
---

# INDIGATE IGW-100
### Industrial Retrofit & IIoT Gateway

**An industrial communication and data acquisition gateway for digitalizing existing machines and plants.**

**Hardware:** IGW100-HW-REV-A  
**Platform:** STM32H573  
**Development:** KiCad 10.0  
**Project status:** Hardware development completed, prototype manufacturing and validation pending

---

## 1. Project Overview

### What is INDIGATE IGW-100?

The **INDIGATE IGW-100** is a self-developed industrial gateway designed to connect existing machines, sensors and control systems with modern digital communication and data acquisition systems.

In many industrial plants, machines have been in service for years or decades. They work reliably, but they often lack modern network interfaces or options for central data acquisition.

A complete modernization of such plants is often very expensive.

This is exactly where INDIGATE IGW-100 comes in.

The device is intended to serve as an **interface between existing industrial hardware and modern IT and IIoT systems**.

Different industrial signals and communication interfaces can be captured and processed on a single hardware platform.

The focus is on retrofitting existing plants without having to replace their entire control technology.

### Basic idea

**Keep using existing machines, make their data accessible and connect industrial systems better with each other.**

For this purpose, the IGW-100 is meant to provide a compact, robust and flexibly usable hardware platform.

---

## 2. Which Problem Should the Project Solve?

In industrial plants, different generations of machines and controllers often exist side by side.

Typical challenges are:

- Older machines have no Ethernet interface.
- Sensors provide only analog or digital signals.
- Different controllers use different communication interfaces.
- Operating states and process data are not available centrally.
- A complete modernization of the control technology is not always economically sensible.
- Integrating existing plants into higher-level systems is laborious.

The IGW-100 was developed to provide a common hardware basis for these tasks.

### Practical example

An older production machine has several sensors and a controller with an RS-485 interface.

The machine works reliably, but its operating data cannot easily be made available over an Ethernet network.

An industrial gateway can serve here as the link between the existing machine and a modern network environment.

For this, the IGW-100 provides the required hardware interfaces:

1. Digital inputs for capturing machine signals.
2. Analog inputs for capturing process values.
3. RS-485 for communication with existing devices.
4. CAN-FD for connecting suitable control and communication systems.
5. Ethernet as the network interface.
6. Digital outputs for driving suitable external loads.

The future firmware will define how data is processed, transmitted and provided for specific applications.

**Important:** The hardware is designed, but firmware development has not started yet. The applications described are therefore intended use cases and not yet proven device functions.

---

## 3. Project Goals

The main goal is to develop a stand-alone industrial gateway hardware that combines various communication and input/output interfaces on a common platform.

### Industrial retrofit

Existing machines and plants should be extendable with additional options for data acquisition and communication.

### Central data acquisition

Digital and analog signals should be processable through a common microcontroller platform.

### Connecting different interfaces

Ethernet, RS-485 and CAN-FD should be available on one hardware platform.

### Robust hardware architecture

The circuit is designed for an industrial 24 VDC supply.

Protection circuits, galvanically isolated interfaces and an independent hardware watchdog are part of the design.

### Extensibility

The hardware should serve as a foundation for future firmware functions and industrial applications.

---

## 4. System Architecture

The heart of the IGW-100 is the **STM32H573ZIT6** microcontroller from STMicroelectronics.

In the intended system architecture, it handles the central processing and control of the connected interfaces.

The hardware consists of several functional groups.

### Central processing unit

**STM32H573ZIT6**

The microcontroller provides the peripheral functions needed for communication with the various hardware modules.

These include:

- Ethernet MAC
- FDCAN
- USART
- SPI
- I²C
- GPIO
- ADC functions
- USB
- SD/MMC
- SWD debug interface

### Communication interfaces

**Ethernet**

A 10/100BASE-T network interface is provided through the DP83825I Ethernet PHY.

This forms the hardware basis for later communication over Ethernet.

**RS-485**

Two galvanically isolated RS-485 channels allow connecting suitable industrial communication devices.

The ISO3082 is used as the transceiver.

**CAN-FD**

A galvanically isolated CAN-FD interface based on the ISO1042 allows connecting CAN-based devices.

**USB-C**

A USB 2.0 Full Speed interface is intended for service, diagnostic and firmware functions.

### Industrial inputs and outputs

**Digital inputs**

Eight digital 24 V inputs are used to capture industrial switching signals.

Examples of possible signal sources:

- Limit switches
- Proximity sensors
- Operating state signals
- Fault signals
- Enable signals

**Digital outputs**

Four digital 24 V high-side outputs are intended for driving suitable external loads.

The technical target value is 0.25 A continuous current per channel.

**Analog inputs**

Two analog input channels are intended for standard industrial signals:

- 0–10 V
- 4–20 mA

This makes it possible, for example, to capture process values from suitable sensors.

---

## 5. Technical Specification

| Function | Specification |
|---|---|
| Microcontroller | STM32H573ZIT6 |
| Supply voltage | 24 VDC nominal |
| Supply voltage range | 18–30 VDC |
| Ethernet | 1 × 10/100BASE-T |
| Ethernet PHY | DP83825I |
| RS-485 | 2 × galvanically isolated |
| RS-485 transceiver | ISO3082 |
| CAN-FD | 1 × galvanically isolated |
| CAN transceiver | ISO1042 |
| Digital inputs | 8 × 24 V |
| Digital outputs | 4 × 24 V high-side |
| Output current | 0.25 A per channel (design target) |
| Analog inputs | 2 × 0–10 V / 4–20 mA |
| Analog front end | ADS8684 |
| USB | USB-C, Full Speed |
| External memory | NOR flash |
| Additional memory | microSD |
| Real-time clock | RV-3028-C7 |
| Hardware watchdog | TPS3851H33E |
| Debugging | SWD / SWO / UART |
| PCB | 6 layers |
| PCB thickness | 1.6 mm |
| PCB size | 146 × 184 mm |
| Development software | KiCad 10.0 |
| Circuit simulation | LTspice |

The information describes the current hardware design. The electrical function must be confirmed by measurements after manufacturing.

---

## 6. Power Supply and Protection Concept

Industrial devices must work reliably under different electrical operating conditions.

For this reason, particular attention was paid in the development of the IGW-100 to the power supply and the separation of the various functional areas.

### 24 VDC supply

The device is designed for a nominal supply voltage of 24 VDC.

The intended continuous input voltage range is 18 to 30 VDC.

### Input protection

The TPS26600 is used as an electronic fuse (eFuse).

It is part of the protection concept of the input stage.

### Voltage conversion

An LT8640S generates the internal 5 V supply.

Further supply stages provide the voltages required for the logic and the various hardware modules.

### Galvanic isolation

Several interfaces are implemented with galvanic isolation.

These include:

- Two RS-485 channels
- CAN-FD
- Digital input group
- Digital output group

The galvanic isolation is intended to decouple the different electrical areas from one another.

### Hardware watchdog

An independent TPS3851H33E watchdog is part of the system architecture.

It is intended to support the monitoring of the microcontroller.

### Safety and EMC

Isolation areas and electrical clearances were taken into account in the PCB development.

The design rules contain clearance classes of 8 mm and 4 mm.

However, these checks do not replace a complete assessment against the relevant safety and EMC standards.

No corresponding certification exists.

---

## 7. PCB Development

The entire hardware was developed as a six-layer PCB in **KiCad 10.0**.

The design covers the power supply, the microcontroller, the communication interfaces, the industrial inputs and outputs, as well as additional memory and monitoring functions.

### PCB data

| Property | Value |
|---|---|
| PCB revision | IGW100-HW-REV-A |
| Number of copper layers | 6 |
| Dimensions | 146 × 184 mm |
| PCB thickness | 1.6 mm |
| Copper thickness | 35 µm |
| Surface finish | ENIG |
| Solder mask | Dark blue |
| Silkscreen | White |
| Footprints | 423 |
| Electrical nets | 275 |
| Vias | 884 |
| Minimum track width | 0.15 mm |
| Minimum copper clearance | 0.127 mm |
| Minimum via drill | 0.3 mm |

### Development focus

The following aspects were the main focus of the PCB development:

- Separation of the different voltage and ground areas
- Consideration of galvanic isolation barriers
- Routing of the Ethernet RMII signals
- Integration of several industrial interfaces
- Power supply of the digital outputs
- Accessibility of the debug interfaces
- Manufacturability of the six-layer PCB
- Preparation of the manufacturing documents

### Design Rule Check

The current PCB version was checked with the KiCad Design Rule Checker.

**Result:**

| Check | Result |
|---|---|
| DRC errors | 0 |
| DRC warnings | 0 |
| Unconnected nets | 0 |
| Schematic parity errors | 0 |

In addition, isolation clearances and selected manufacturing data were checked independently.

**These results only confirm the design checks that were performed. They are not proof of the function of a manufactured PCB.**

---

## 8. Circuit Development and Simulation

The hardware development covers both the creation of the schematics and the analysis of selected electrical functional areas.

### KiCad

The circuit development was carried out with KiCad.

The schematic project comprises 17 hierarchical sheets.

The various functional groups were developed separately and then integrated into the overall circuit.

### LTspice

LTspice was used to analyze the power supply architecture.

The simulation files are located in the directory:

`hardware/power/`

The main schematic is:

`hardware/power/g2_power.asc`

### Opening the simulation

On Windows, the file

`OPEN_LTSPICE.bat`

in the main directory of the repository can be run.

The script looks for an existing LTspice installation and opens the corresponding schematic.

The simulation is not started automatically.

LTspice must be installed beforehand.

[Download LTspice](https://www.analog.com/en/resources/design-tools-and-calculators/ltspice-simulator.html)

---

## 9. Development Process

The project was developed step by step from the requirements definition to the preparation of prototype manufacturing.

### Phase 1 — Requirements

Definition of the basic requirements:

- Industrial 24 VDC supply
- Microcontroller platform
- Ethernet communication
- RS-485 and CAN-FD
- Digital and analog inputs/outputs
- Galvanic isolation
- Debug and service access

### Phase 2 — Hardware architecture

Definition of the functional groups and selection of the essential components.

### Phase 3 — Circuit development

Creation of the hierarchical schematics and verification of the electrical connections.

### Phase 4 — PCB layout

Development of the six-layer PCB, including component placement, routing and copper areas.

### Phase 5 — Design review

Carrying out:

- Electrical Rule Check (ERC)
- Design Rule Check (DRC)
- Isolation clearance checks
- Footprint checks
- Manufacturing data checks

### Phase 6 — Manufacturing preparation

Creation of the manufacturing package with Gerber and drill data.

The current manufacturing release is **Release 3**.

### Phase 7 — Prototype manufacturing and validation

This phase is still pending.

---

## 10. Current Project Status

**Hardware revision: IGW100-HW-REV-A**

The current state of development is the preparation of the first prototype manufacturing.

Schematic and PCB development are completed.

The manufacturing package has been created and checked at design level.

A physical PCB has not been manufactured so far.

### Status overview

| Development area | Status |
|---|---|
| Requirements definition | Completed |
| System architecture | Completed |
| Component selection | Completed |
| Schematic development | Completed |
| PCB layout | Completed |
| Design Rule Check | Passed |
| Manufacturing data | Created |
| Prototype order | Pending |
| PCB assembly | Pending |
| Hardware bring-up | Pending |
| Electrical measurements | Pending |
| Firmware development | Not started |
| EMC testing | Pending |
| Safety assessment | Pending |

### Open technical points

Before manufacturing and bring-up, the following points in particular must be taken into account:

- Confirmation of the required copper thickness by the PCB manufacturer
- Manufacturing approval for filled and capped vias
- Review of the manufacturing requirements for the silkscreen
- Verification of the oscillator part number Y701 before the bill of materials is issued
- Measurement of the Ethernet RMII timing on the real prototype
- Electrical testing of the power supply
- Validation of the galvanically isolated interfaces
- Testing of the digital and analog inputs/outputs

Further technical details are documented in the project reports.

---

## 11. Planned Further Development

After the hardware development is completed, manufacturing and practical validation follow.

### Hardware

- [x] Define system requirements
- [x] Develop hardware architecture
- [x] Select components
- [x] Create schematics
- [x] Develop six-layer PCB
- [x] Run Design Rule Check
- [x] Prepare manufacturing data
- [ ] Order PCBs
- [ ] Assemble components
- [ ] Bring up the hardware
- [ ] Verify the power supply
- [ ] Test the Ethernet interface
- [ ] Test the RS-485 interfaces
- [ ] Test the CAN-FD interface
- [ ] Verify digital inputs and outputs
- [ ] Calibrate and validate analog inputs
- [ ] Plan EMC and safety pre-checks

### Firmware

Firmware development is planned for a later project phase.

Planned development areas are:

- STM32H573 initialization
- Ethernet communication
- RS-485 communication
- CAN-FD communication
- USB service functions
- Digital input and output control
- Analog data acquisition
- Memory management
- Fault monitoring
- Secure firmware update

Specific application protocols and the later software architecture must be defined and implemented as part of the firmware development.

---

## 12. Project Structure

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

## 13. Opening the Project in KiCad

**KiCad 10.0** is required for editing.

The project was last saved with KiCad 10.0.4.

### PCB project

```text
hardware/pcb/igw100/igw100.kicad_pro
```

### Schematic project

```text
hardware/kicad/igw100/igw100.kicad_pro
```

The project-specific symbol and footprint libraries are located inside the repository.

The library paths use `${KIPRJMOD}` and are defined relative to the respective project directory.

This means the project can be opened with the included project libraries after cloning the repository.

---

## 14. Documentation

Further technical information can be found in the following files and directories:

| File / directory | Content |
|---|---|
| [`PROJECT.md`](PROJECT.md) | Current project status |
| [`AGENTS.md`](AGENTS.md) | Technical development rules |
| [`docs/README.md`](docs/README.md) | Documentation overview |
| [`docs/hardware/power.md`](docs/hardware/power.md) | Power supply architecture |
| [`agent_reports/`](agent_reports/) | Technical review reports |
| [`references/INDEX.md`](references/INDEX.md) | Datasheets and references |
| [`fabrication/README.md`](fabrication/README.md) | Manufacturing documents |
| [`firmware/`](firmware/) | Future firmware development |

---

## 15. Summary

The **INDIGATE IGW-100** is a self-developed industrial hardware project with the goal of making it easier to integrate existing machines and plants into modern data acquisition and communication systems.

The project combines a powerful STM32H573 microcontroller with Ethernet, galvanically isolated RS-485 and CAN-FD, as well as industrial digital and analog inputs/outputs.

Particular attention was paid to a robust 24 VDC power supply, galvanic isolation, electrical protection measures and a traceable hardware development.

The six-layer PCB was developed entirely in KiCad. The schematics, the PCB layout and the manufacturing documents are available.

**The current project status is a completed hardware design with a prepared manufacturing package. Manufacturing of the first prototype, electrical validation and firmware development are still pending.**

In the long term, the IGW-100 is intended to serve as a flexible hardware platform for industrial retrofit, machine data acquisition and IIoT applications.

---

### INDIGATE IGW-100

**Industrial Retrofit & IIoT Gateway**

Hardware Revision A — Prototype development

Proprietary hardware project. All rights reserved.

See [LICENSE](LICENSE).
