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
Ein normales GitHub-Pages-Repository ist **oeffentlich** – jeder mit der URL kann die Seite sehen.
In dieser oeffentlichen Fassung sind **Reservierungsnummern und das Kfz-Kennzeichen bereits entfernt**.
Das **Familienfoto** ist weiterhin enthalten – wenn auch das nicht oeffentlich sein soll, sag Bescheid,
dann nehme ich es heraus. Alternativ das Repository privat halten (Pages aus privaten Repos benoetigt GitHub Pro).

## Geteilte Notizen fuer die ganze Familie (Firebase)
Damit alle dieselben Notizen sehen (Live-Sync), braucht es eine kleine kostenlose
Online-Datenbank. Einrichtung einmalig, ca. 5 Minuten:

1. Auf **console.firebase.google.com** mit einem Google-Konto anmelden.
2. **Projekt hinzufuegen** -> Name z. B. `bornholm-reise` -> Google Analytics kannst du
   deaktivieren -> **Projekt erstellen**.
3. Links im Menue **Erstellen (Build) -> Realtime Database -> Datenbank erstellen**.
4. Standort waehlen (z. B. `europe-west1`).
5. Beim Assistenten **"Im gesperrten Modus starten"** waehlen. Danach oben auf den
   Reiter **Regeln (Rules)** gehen, den Inhalt durch das Folgende ersetzen und
   **Veroeffentlichen** klicken:
   {
     "rules": { ".read": true, ".write": true }
   }
   (WICHTIG: NICHT den 30-Tage-Testmodus nehmen - der laeuft vor der Reise ab!)
6. Oben auf der Realtime-Database-Seite steht die **URL**, z. B.
   `https://bornholm-reise-default-rtdb.europe-west1.firebasedatabase.app` - kopieren.
7. In **index.html** die Zeile `var FIREBASE_DB_URL = "";` aendern zu
   `var FIREBASE_DB_URL = "DEINE-URL";` (oder mir die URL schicken, ich trage sie ein).
8. index.html hochladen. Fertig - ab jetzt sehen alle Familienmitglieder dieselben
   Notizen, und Aenderungen erscheinen live auf allen Geraeten.

Hinweis Datenschutz: Mit diesen Regeln kann jeder, der die genaue URL kennt, die
Notizen lesen/aendern. Fuer Reisenotizen ist das meist unproblematisch.

## Aenderungen spaeter
Einfach die betroffene Datei im Repo ersetzen (Upload) und committen – die Seite aktualisiert sich.
Nach groesseren Updates in `sw.js` die Zeile `const CACHE = 'bornholm-v1'` auf `-v2` erhoehen,
damit alte Offline-Daten ersetzt werden.
