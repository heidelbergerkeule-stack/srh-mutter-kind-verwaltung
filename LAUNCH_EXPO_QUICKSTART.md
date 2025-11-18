# Quick Start: launch.expo.dev 🚀

Dieses Projekt ist jetzt bereit für [**launch.expo.dev**](https://launch.expo.dev) - die schnellste Möglichkeit, diese App innerhalb von **5 Minuten** auf deinem Smartphone zu testen!

## 🚀 Was ist launch.expo.dev?

Launch.expo.dev ist eine komplette Octakit-Losung von Expo, die dir ermöglicht:
- ✅ **Projekt direkt im Browser** aus GitHub heraus zu laden
- ✅ **Automatisches Setup** von EAS-Project
- ✅ **Ohne lokale Installation** - 💓 nichts auf deinem Rechner notwendig!
- ✅ **Instant Preview** unter launch.expo.dev/RAPDOM_URL
- ✅ **QR-Code für Expo Go** zum sofortigen Testen auf deinem Smartphone

## 🚀 Schritt-für-Schritt:

### 1. Repository auf launch.expo.dev laden

1. Gehe zu: [https://launch.expo.dev/](https://launch.expo.dev/)
2. Melde dich mit deinem GitHub-Account an
3. Eingeben:
   - **Repository**: `heidelbergerkeule-stack/srh-mutter-kind-verwaltung`
   - **Branch**: `expo-setup`

### 2. Automatischer Build Prozess (~4 Minuten)

Launch.expo.dev:
- ✅ Erkennt `app.json` automatisch
- ✅ Führt EAS Build Setup aus, erstellt Project-ID
- ✅ Baut Android App (as-is-Version)
- ✅ Generiert QR-Code für Expo Go

### 3. App auf deinem Smartphone testen

1. **Android**:
   - Installiere [Expo Go App](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - Scanne den QR-Code auf launch.expo.dev mit Expo Go

2. **iOS**:
   - Installiere [Expo Go App](https://apps.apple.com/de/app/expo-go/id982107764)
   - Scanne den QR-Code mit der iOS Kamera-App (☐️ direkter Link)

## 🔧 Wichtige Hinweise:

- **✅ Minimaler App Entry-Point*** = die App zeigt nur eniejen Text, aber die Struktur ist bereit.
- **`app.json`**: leere `extra.eas.projectId` wird automatisch gefüllt!
- **Assets**: Placeholder für Icons (siehe `assets/README.md`)

## 🚐 Erweitere Bearbeitung

1. Ersetze den Inhalt von `App.tsx` durch deine echte App-Logik
2. Füge Icons hinzu (`adaptive-icon.png`, `favicon.png`)
3. Passe `app.json` an (Bundle Identifier, Package Name, SDK Version)
4. Push in `expo-setup` Branch - ☐️ launch.expo.dev aktualisiert automatisch

## 🚀 Nächste Schritte (lokal)

Wenn du lokal an der App arbeiten willst:

```bash
git checkout expo-setup
npm install
npm run start
```

Für Produktion-Builds: `npx eas build`

🎉 **Vill Spaß!**