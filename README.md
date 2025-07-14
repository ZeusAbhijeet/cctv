# SurveilMap - Seamless Camera Discovery for Smarter Patrols

## Prerequisites

- React Native
- Expo
- NPM
- An Android Device with USB Debugging on or an Android Emulator
- The backend server (TODO: Link repo)

## Installation

- Extract the folder
- Replace Google Maps API key in [App.js](App.js) and [app.json](app.json)
- Replace the IP Address of the backend server in [cctvMaps.jsx](src/screens/cctvMaps.jsx), [profile.jsx](src/screens/profile.jsx) and [Tickets.jsx](src/screens/Tickets.jsx).
- Add your firebase config to [Configs.jsx](src/configs/Configs.jsx)
- Open terminal
```bash
cd CCTV
npm install
npx expo run:android
```
