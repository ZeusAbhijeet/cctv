# SurveilMap - Seamless Camera Discovery for Smarter Patrols
- This mobile application was developed as part of the Goa Police 48-Hour Hackathon 2024, where it emerged as the winning solution.
- This application allows investigating officers to find CCTV cameras in the investigating area and navigate to them using Google Maps.
- The application also allows ground officers to add, update or delete cameras from the database.

**Companion Web Dashboard:** [ https://github.com/ZeusAbhijeet/cctv ]

**Backend API and Database:** [ https://github.com/TheLMNTRIX/Nearby-cctv-camera-detector ]

**Tech Stack:** React Native, Firebase.

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
<br />

### Application Screenshots:
<div align="center">
  <h2>Map & Camera Details Screen</h2>
  <img src="https://github.com/ZeusAbhijeet/cctv/blob/master/README%20props/map_screen.jpeg" width="360" height="780"/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/ZeusAbhijeet/cctv/blob/master/README%20props/camera_details.jpeg" width="360" height="780"/>
  <br /><br />

  <h2>Add New Camera & Report Camera Screen</h2>
  <img src="https://github.com/ZeusAbhijeet/cctv/blob/master/README%20props/add_camera.jpeg" width="360" height="780"/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/ZeusAbhijeet/cctv/blob/master/README%20props/report_camera.jpeg" width="360" height="780"/>
  <br /><br />

  <h2>Search Filters & Profile Screen</h2>
  <img src="https://github.com/ZeusAbhijeet/cctv/blob/master/README%20props/search_filter.jpeg" width="360" height="780"/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/ZeusAbhijeet/cctv/blob/master/README%20props/profile_screen.jpeg" width="360" height="780"/>
  <br /><br />
</div>
