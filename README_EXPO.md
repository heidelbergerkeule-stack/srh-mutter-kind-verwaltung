# Expo / EAS Vorbereitung für "SRH Mutter-Kind Verwaltung"

Diese Anleitung beschreibt die notwendigen Schritte, um das Repository für Launch über https://launch.expo.dev/ (EAS / Expo) vorzubereiten.

## 1) Überblick der hinzugefügten Dateien
- app.json          -> Expo-Konfiguration (Name, slug, Plattformen, iOS/Android identifiers)
- eas.json          -> EAS Build-Konfiguration
- .expoignore       -> Dateien, die bei publish/build ausgeschlossen werden
- App.tsx           -> Minimaler Einstiegspunkt für Expo
- assets/README.md  -> Hinweise zu benötigten Icon-Dateien

## 2) Voraussetzungen
- Node.js (empfohlen >= 18)
- npm oder yarn
- Ein Expo Account (für EAS Builds)
- EAS CLI: Installation über `npm install -g eas-cli` oder `npx eas`

## 3) Empfohlene package.json Ergänzungen (manuell oder ich kann das übernehmen):
Füge folgende Scripts hinzu:
```json
"scripts": {
  "start": "expo start",
  "android": "expo run:android",
  "ios": "expo run:ios",
  "web": "expo start --web",
  "eas:build": "eas build --platform all"
}
```

und ggf. devDependencies / dependencies:
- expo
- react-native-web (für Web)
- eas-cli (dev oder global)

## 4) Installationsschritte (lokal)
- Falls Expo noch nicht installiert: `npm install --save expo`
- Installiere empfohlene native Abhängigkeiten: `npx expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context`
- EAS konfigurieren: `npx eas build:configure` (führt durch das Einrichten, erzeugt projectId in app.json/Developer-Console)
- Für iOS/Android-Bundles: `npx eas build --platform ios` bzw. `--platform android`

## 5) Testing / Launch
- Entwicklung starten: `npm run start` (oder `npx expo start`)
- Überprüfe, ob dein App-Einstiegspunkt vorhanden ist (App.tsx ist jetzt vorhanden)
- Sobald alles läuft, melde dich bei EAS an: `eas login` und starte Builds über `eas build`.

## 6) Hinweise / ToDo
- Ergänze in app.json das `extra.eas.projectId` nachdem `eas build:configure` durchlaufen wurde.
- Setze die iOS Bundle Identifier und Android Package Name final (derzeit Platzhalter).
- Stelle sicher, dass alle verwendeten nativen Bibliotheken mit Expo kompatibel sind oder verwende EAS Managed/Prebuild entsprechend.