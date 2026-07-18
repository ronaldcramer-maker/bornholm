# Bornholm Familienreise – GitHub-Pages-Version (mit Offline-Funktion)

Diese Version läuft als eigenständige Web-App (PWA) und funktioniert nach dem ersten Laden **komplett offline**.

## Dateien in diesem Ordner
- `index.html` – die komplette App (Fotos & Daten sind eingebettet)
- `manifest.json` – App-Beschreibung (Name, Icon, Startseite)
- `sw.js` – Service Worker fuer den Offline-Betrieb
- `icon-192.png`, `icon-512.png`, `icon-180.png` – App-Icons

## In 5 Schritten online stellen
1. Bei **github.com** anmelden (oder kostenlos registrieren).
2. Oben rechts **+ → New repository**. Name z. B. `bornholm`, **Public**, dann **Create repository**.
3. **Add file → Upload files** und **alle Dateien aus diesem Ordner** hineinziehen. Unten **Commit changes**.
4. **Settings → Pages**. Unter *Build and deployment → Source*: **Deploy from a branch**,
   Branch **main** / Ordner **/(root)**, dann **Save**.
5. Nach 1–2 Minuten ist die Seite erreichbar unter:
   `https://DEINBENUTZERNAME.github.io/bornholm/`

## Auf iPhone / iPad
Die URL in **Safari** oeffnen → **Teilen** → **Zum Home-Bildschirm**.
Danach startet sie wie eine App im Vollbild und laedt auch ohne Internet.

## Wichtig (oeffentlich!)
Ein normales GitHub-Pages-Repository ist **oeffentlich** – jeder mit der URL kann die Seite sehen,
inklusive Familienfoto, Fährdaten, Reservierungsnummern und Kennzeichen.
Wenn das nicht gewuenscht ist: sensible Angaben vorher entfernen (sag Bescheid, ich mache eine
"oeffentliche" Fassung ohne diese Details) oder das Repository privat halten
(Pages aus privaten Repos benoetigt GitHub Pro).

## Aenderungen spaeter
Einfach die betroffene Datei im Repo ersetzen (Upload) und committen – die Seite aktualisiert sich.
Nach groesseren Updates in `sw.js` die Zeile `const CACHE = 'bornholm-v1'` auf `-v2` erhoehen,
damit alte Offline-Daten ersetzt werden.
