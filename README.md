# Rezepte Dashboard

> Privates, modulares Dashboard zum Erstellen und verwalten von Rezepten aller Art.

> ⚠️ Dieses Projekt wird im Rahmen des Moduls PBO'21 an der HTW-Dresden erstellt und entwickelt. Am Ende des Moduls wird es kein fertiges Projekt zur Weiterverwendung sein. Einige wichtige Funktionen werden nicht implementiert sein (siehe [**PROJECT-PLAN.md**](https://github.com/OlafdeViesel/recipedash/blob/master/PROJECT-PLAN.md)).

### Modular

Das System ist Modular aufgebaut und kann durch selbst geschriebene Module individuell erweitert werden. Dadurch wird eine spätere Weiterentwicklung
seitens der Community ermöglicht.

### Standalone

Das Rezepte-Board kann bei Bedarf auf dem eigenen Rechner oder eigenem Server gehostet werden. 

## Inhaltsverzeichnis

1. [Features](#Features)
   1. [Must-have](#must-have)
   2. [Nice-to-have](#nice-to-have)
   3. [Misc](#misc)
2. [Technologie](#Technologie)
3. [Pre-Installation](#pre-installationsschritte)
4. [Installation](#Installation)
   1. [Kompilieren und Hot Reloads für die Entwicklung](#Kompilieren-und-Hot-Reloads-für-die-Entwicklung)
   2. [Kompilieren und minifizieren für Produktionsmodus](#kompilieren-und-minifizieren-für-Produktionsmodus)
   3. [Linten und Dateien fixen](#linten-und-dateien-fixen)
4. [Changelog](#Changelog)
5. [Lizenz](#Lizenz)
6. [Demo](#Demo)
7. [Projektplan](#Projektplan)

## Features

### Must have

⬜ Suche/Filtern

⬜ Rezepte anlegen/bearbeiten/löschen

⬜ Kommentarfunktion

⬜ Sortieren nach Art (Getränke, Hauptspeise, etc ...)

⬜ Rezepte bewerten

⬜ Zutatenmenge anhand der Portionen anpassbar

                                                       
### Nice-to-have
⬜ Einkaufsliste aus vorher ausgewählten Rezepten
  
⬜ Wochenplan (automatisch erstellter Vorschlag) (nicht im PBO Projektplan enthalten)

⬜ Rezepte Variation, wenn ein User das Rezept verändert (nicht im PBO Projektplan enthalten)
  
⬜ Sharing auf bekannten Social-Media Plattformen/Apps (nicht im PBO Projektplan enthalten)
  
⬜ “Rewe ErnährWert” (nicht im PBO Projektplan enthalten)

⬜ Nährwerttabellen (nicht im PBO Projektplan enthalten)

### Misc

⬜ Login/ Profile (nicht im PBO Projektplan enthalten)

⬜ Ernährungsplan anhand Fitnessplan /-ziele erstellen (nicht im PBO Projektplan enthalten)
  
⬜ Empfehlungen für Einkaufsmärkte (z.B. Bio-Märkte, Wochenmarkt, Unverpackt-Laden…) (nicht im PBO Projektplan enthalten)
  
⬜ Empfehlungen anhand von Angeboten (nicht im PBO Projektplan enthalten)

## Technologie

✅ Vue 3

✅ Vuetify

⬜ Nuxt (Future)

⬜ Vuex

⬜ Symfony (Future)

⬜ TailwindCSS

⬜ MariaDB  (Future)

⬜ PHP 8.* (Future)

## Externe Bibliotheken

⬜ Date-Fns

## Pre-Installationsschritte
Folg. Frameworks, Libraries oder Software muss vorher noch installiert werden:

- NPM 
  - Windows: [Windows Installer](https://nodejs.org/en/download/)
  - Linux (Ubuntu): ``sudo apt install npm nodejs``

- YARN 
  - Windows: [Windows Installer](https://classic.yarnpkg.com/latest.msi)
  - Linux (Ubuntu): ``sudo npm install --global yarn``


## Installation
```
yarn install
```

### Kompilieren und Hot Reloads für die Entwicklung
```
yarn serve
```

### Kompilieren und minifizieren für Produktionsmodus
```
yarn build
```

### Linten und Dateien fixen
```
yarn lint
```

## Changelog

[Changelog](https://github.com/OlafdeViesel/recipedash/blob/master/CHANGELOG.md)

## Lizenz

folgt

## Demo

folgt

## Projektplan

[PBO'21 Projektplan](https://github.com/OlafdeViesel/recipedash/blob/master/PROJECT-PLAN.md)