---
id: finanzverwaltung-mit-datenanalyse
slug: finanzverwaltung-mit-datenanalyse
translation_id: local-post-1779957810945
language: de
content_type: 
title: Finanzverwaltung mit Datenanalyse
category: Softwareentwicklung
image_url: /my-electronics-blog/images/posts/finanzmanager-main.webp
image_gallery:
- /my-electronics-blog/images/posts/finanzmanager-1.webp
- /my-electronics-blog/images/posts/finanzmanager-2.webp
- /my-electronics-blog/images/posts/finanzmanager-3.webp
excerpt: Die Software ermöglicht die Verwaltung persönlicher Einnahmen und Ausgaben, unterstützt CSV-Import und -Export sowie Echtzeit-Datenanalysen über eine moderne grafische Benutzeroberfläche. Über den Button „Zum Projekt“ am Ende der Seite erhalten Sie Zugriff auf den vollständigen Quellcode des Projekts „Finanzmanager“.
tags:
- C++
- Qt 6.9
read_time: 5 Min.
published: true
created_at: '2026-05-28T08:43:30.945Z'
external_link: https://github.com/nguyennhando/finanzmanager
project_status: done
sort_order: 30
---

# Finanzverwaltung mit Datenanalyse

🧭 GeldPilot - Persönliche Finanzverwaltung

Entwicklung einer modernen Desktop-Anwendung zur Finanzverwaltung mit C++, Qt 6 und SQLite.
Die Software ermöglicht die Verwaltung persönlicher Einnahmen und Ausgaben, unterstützt CSV-Import und -Export sowie Echtzeit-Datenanalysen über eine moderne grafische Benutzeroberfläche.
Über den Button „Zum Projekt“ am Ende der Seite erhalten Sie Zugriff auf den vollständigen Quellcode des Projekts „Finanzmanager“.

Eine professionelle Desktop-Anwendung zur Verwaltung Ihrer persönlichen Finanzen, entwickelt mit Qt 6.9 und C++.
📋 Inhaltsverzeichnis
    • Überblick
    • Features
    • Systemanforderungen
    • Installation
    • Erste Schritte
    • Benutzerhandbuch
    • Technische Details
    • Entwicklung
    • Support
🎯 Überblick
GeldPilot ist eine benutzerfreundliche Anwendung zur Verwaltung Ihrer Einnahmen und Ausgaben. Mit einer intuitiven Oberfläche können Sie Transaktionen verwalten, Kategorien organisieren und umfassende Finanzberichte erstellen.
✨ Hauptmerkmale
    • Transaktionsverwaltung: Hinzufügen, Bearbeiten und Löschen von Einnahmen und Ausgaben
    • Kategorisierung: Vordefinierte und benutzerdefinierte Kategorien
    • Zeitraumfilter: Flexible Filterung nach Datum und Kategorie
    • Finanzübersicht: Automatische Berechnung von Einnahmen, Ausgaben und Bilanz
    • Visualisierung: Interaktive Balkendiagramme zur Darstellung Ihrer Finanzen
    • Import/Export: CSV-Import und -Export für Datenaustausch
    • Druckfunktion: Professionelle Berichte mit Firmenlogo
🔧 Systemanforderungen
Mindestanforderungen
    • Betriebssystem: Windows 10/11, macOS 10.15+, Linux (Ubuntu 20.04+)
    • RAM: 4 GB
    • Festplattenspeicher: 100 MB
    • Bildschirmauflösung: 1024x768
Empfohlene Anforderungen
    • RAM: 8 GB oder mehr
    • Bildschirmauflösung: 1920x1080 oder höher
🚀 Installation
Vorkompilierte Version (Windows)
    1. Laden Sie die neueste Version von der Releases-Seite herunter
    2. Entpacken Sie das Archiv in einen Ordner Ihrer Wahl
    3. Starten Sie GeldPilot.exe
Aus Quellcode kompilieren
Voraussetzungen
    • Qt 6.9 oder neuer
    • CMake 3.16 oder neuer
    • C++17-kompatible Compiler:
        ◦ Windows: MinGW-w64 oder MSVC 2019+
        ◦ macOS: Xcode 12+
        ◦ Linux: GCC 9+ oder Clang 10+
Kompilierungsschritte
# Repository klonen
git clone https://github.com/username/geldpilot.git
cd geldpilot

# Build-Verzeichnis erstellen
mkdir build && cd build

# CMake konfigurieren
cmake .. -DCMAKE_BUILD_TYPE=Release

# Kompilieren
cmake --build . --config Release

# Ausführen (Windows)
./Release/GeldPilot.exe

# Ausführen (Linux/macOS)
./GeldPilot
🏁 Erste Schritte
1. Erste Transaktion hinzufügen
    1. Starten Sie GeldPilot
    2. Geben Sie Datum, Betrag und Beschreibung ein
    3. Wählen Sie eine Kategorie (z.B. "Gehalt" für Einnahmen)
    4. Wählen Sie den Typ ("Einnahme" oder "Ausgabe")
    5. Klicken Sie auf "Neue Transaktion"
2. Daten filtern
    • Verwenden Sie die Dropdown-Menüs für Kategorien
    • Setzen Sie Start- und Enddatum für Zeitraumfilter
    • Klicken Sie "Filter" um die Ansicht zu aktualisieren
3. Berichte erstellen
    • Klicken Sie auf "Diagramm" für eine visuelle Darstellung
    • Nutzen Sie "Drucken" für professionelle Berichte
    • Exportieren Sie Daten als CSV für weitere Analyse
📖 Benutzerhandbuch
Transaktionsverwaltung
Neue Transaktion hinzufügen
    1. Füllen Sie alle Pflichtfelder aus:
        ◦ Datum: Transaktionsdatum
        ◦ Betrag: Geldbetrag (immer positiv eingeben)
        ◦ Beschreibung: Kurze Beschreibung der Transaktion
        ◦ Kategorie: Zuordnung zu einer Kategorie
        ◦ Typ: "Einnahme" oder "Ausgabe"
Transaktion bearbeiten
    1. Wählen Sie eine Zeile in der Tabelle aus
    2. Die Daten erscheinen automatisch in den Eingabefeldern
    3. Nehmen Sie Ihre Änderungen vor
    4. Klicken Sie "Speichern"
Transaktionen löschen
    • Einzelne Transaktion: Zeile auswählen → "Löschen"
    • Mehrere Transaktionen: Mehrere Zeilen auswählen (Strg+Klick) → "Löschen"
Kategorien
Vordefinierte Kategorien:
    • Freizeit
    • Gehalt
    • Gesundheit
    • Lebensmittel
    • Miete
    • Sonstiges
    • Transport
    • Versicherungen
    • Investition
    • Kommunikation
    • Wohnen
Filterung und Suche
Nach Kategorie filtern
    • Wählen Sie "Alle Kategorien" für ungefilterte Ansicht
    • Wählen Sie eine spezifische Kategorie für gefilterte Ansicht
Nach Zeitraum filtern
    • Setzen Sie Startdatum und Enddatum
    • Klicken Sie "Filter" zum Anwenden
Import/Export
CSV-Import
    1. Bereiten Sie eine CSV-Datei vor mit Spalten:
        ◦ ID, Datum, Betrag, Beschreibung, Kategorie, Typ
    2. Klicken Sie "Import"
    3. Wählen Sie Ihre CSV-Datei aus
CSV-Export
    1. Klicken Sie "Export"
    2. Wählen Sie Speicherort und Dateiname
    3. Die aktuelle Tabellenansicht wird exportiert
Diagramme und Berichte
Finanzdiagramm anzeigen
    • Klicken Sie "Diagramm" für Balkendiagramm
    • Zeigt Kategorien, Gesamteinnahmen, -ausgaben und Bilanz
    • Interaktive Darstellung mit Farbkodierung
Drucken
    • Öffnen Sie das Diagramm
    • Klicken Sie "Drucken"
    • Wählen Sie Drucker und Einstellungen
    • Professioneller Ausdruck mit Logo
🛠 Technische Details
Architektur
    • GUI Framework: Qt 6.9
    • Datenbank: SQLite (lokale Datei)
    • Diagramme: Qt Charts
    • Bauansystem: CMake
    • Compiler: MinGW-w64 (Windows)
Datenbankschema
Tabelle: transaktionen
CREATE TABLE transaktionen (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    datum DATE NOT NULL,
    betrag REAL NOT NULL,
    beschreibung TEXT,
    kategorie TEXT NOT NULL,
    typ TEXT NOT NULL CHECK (typ IN ('Einnahme', 'Ausgabe'))
);
Tabelle: kategorien
CREATE TABLE kategorien (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE NOT NULL
);
Projektstruktur
geldpilot/
├── src/
│   ├── main.cpp                 # Einstiegspunkt
│   ├── mainwindow.cpp/h         # Hauptfenster
│   ├── chartwindow.cpp/h        # Diagrammfenster
│   ├── datenbankmanager.cpp/h   # Datenbanklogik
│   └── centerdelegate.h         # UI-Styling
├── ui/
│   ├── mainwindow.ui            # Hauptfenster UI
│   └── chartwindow.ui           # Diagramm UI
├── resources/
│   └── icons/                   # Anwendungssymbole
├── CMakeLists.txt               # Build-Konfiguration
└── README.md                    # Diese Datei
👨‍💻 Entwicklung
Code-Stil
    • C++17 Standard
    • Qt-Konventionen
    • Deskriptive deutsche Variablennamen
    • Umfangreiche Kommentierung
Beitrag zum Projekt
    1. Fork das Repository
    2. Erstellen Sie einen Feature-Branch
    3. Machen Sie Ihre Änderungen
    4. Testen Sie gründlich
    5. Erstellen Sie einen Pull Request
Bekannte Probleme
    • ✅ Mehrfachauswahl für Löschen implementiert
    • ✅ Datenbankindizierung für Performance
    • ⚠️ Backup-Funktionalität geplant
📞 Support
Hilfe benötigt?
    • Dokumentation: Lesen Sie dieses README vollständig
    • Issues: Melden Sie Bugs auf GitHub
    • E-Mail: support@geldpilot.de
Häufige Probleme
Q: Datenbank kann nicht geöffnet werden A: Stellen Sie sicher, dass die Anwendung Schreibrechte im Installationsordner hat.
Q: Diagramm wird nicht angezeigt A: Überprüfen Sie, ob Qt Charts installiert ist.
Q: Import schlägt fehl A: Überprüfen Sie das CSV-Format (Semikolon-getrennt).

📄 Lizenz
© 2025 Nguyen Nhan Do. Alle Rechte vorbehalten.
Version: 1.0.0
Entwickler: Nguyen Nhan Do
Build: Qt 6.9, MinGW-w64, CMake

Behalten Sie mit GeldPilot den Überblick über Ihre Finanzen und steuern Sie gezielt Ihre finanzielle Zukunft! 🧭💰
