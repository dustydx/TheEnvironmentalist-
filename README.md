# ♻️ EcoSort — AI Waste Sorting App

> Take a photo of something you're about to throw away, and the app tells you whether it belongs in **recycling, compost or landfill**.

<!-- Add 2–3 screenshots side by side, e.g.: -->
<!-- <p align="center">
  <img src="screenshots/home.png" width="250">
  <img src="screenshots/recycle.png" width="250">
  <img src="screenshots/compost.png" width="250">
</p> -->

---

## 📌 Overview

Many people aren't sure which bin an item goes in, so recyclables end up in landfill and trash contaminates recycling. This mobile app removes the guesswork. You pick a photo, and the app sends it to **Google Gemini's vision model**, which classifies the item. Then the app takes you to a results screen showing where it should go.

🏆 **Built at a hackathon** by a team of coaches from **Urban TxT**.

## 🎥 Demo

<!-- Replace this line with your video: on github.com, edit README.md and drag the video file right here -->

📊 **[View our hackathon pitch deck](docs/EcoSort-Pitch-Deck.pdf)**


## ✨ Features

- **Photo-based classification:** Choose a photo of an item from your gallery, then crop it before classifying.
- **AI-powered sorting:** Gemini 2.0 Flash looks at the image and sorts it as **Recyclable**, **Compostable** or **Landfill**. It also recognizes when something isn't a disposable item.
- **Results screens:** Each category has its own illustrated page, with one tap back to the home screen.
- **Cross-platform:** Built with Expo and React Native, so it runs on iOS, Android and the web.

## 📱 How It Works

```
 Choose photo ──► Crop ──► Tap Select ──► Base64-encode image
                                               │
                                               ▼
                                   Gemini 2.0 Flash (vision)
                                               │
              ┌──────────────┬─────────────────┼──────────────────┐
              ▼              ▼                 ▼                  ▼
         ♻️ Recycle     🌱 Compost        🗑️ Landfill      ❌ Not an item
```

1. The user picks an image with `expo-image-picker`.
2. The image is read as Base64 with `expo-file-system` and sent to the Gemini API along with a classification prompt.
3. The app reads the model's answer and uses Expo Router to go to the matching results screen.

## 🛠️ Tech Stack

| Layer | Tools |
|---|---|
| Framework | React Native 0.79, Expo SDK 53 |
| Language | TypeScript |
| Navigation | Expo Router (file-based routing) |
| AI | Google Gemini 2.0 Flash (vision) |
| Networking | Axios |
| Database | MongoDB Atlas *(in progress)* |

## 📁 Project Structure

```
├── frontend/                  # Expo / React Native app
│   ├── app/
│   │   ├── _layout.tsx        # Root stack navigator
│   │   ├── index.tsx          # Home: choose photo + classify
│   │   ├── recyclePage.tsx    # Results screens
│   │   ├── compostPage.tsx
│   │   ├── landfillPage.tsx
│   │   ├── notAnItemPage.tsx
│   │   └── +not-found.tsx
│   ├── components/
│   │   ├── Button.tsx
│   │   └── ImageViewer.tsx
│   └── assets/
└── backend/
    └── connect.cjs            # MongoDB Atlas connection (in progress)
```

## 🚀 Getting Started

1. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```
2. **Add your API key.** Get a free key from [Google AI Studio](https://aistudio.google.com/) and create `frontend/.env`. This file is ignored by git, so your key stays out of the repo.
   ```
   EXPO_PUBLIC_GEMINI_API_KEY=your_key_here
   ```
3. **Run the app**
   ```bash
   npx expo start
   ```
   To open it, scan the QR code with **Expo Go** or press `i` (iOS simulator), `a` (Android) or `w` (web).

## 🔮 Future Improvements

- Take photos with the camera in the app, not just from the gallery
- Explain *why* an item belongs in a bin, with local recycling tips
- Save a history of classifications with MongoDB
- Move the Gemini call to a backend so the API key never reaches the client

## 👥 Team

Built by coaches at **Urban TxT**:

- **Li Yuan Ho** — [GitHub](https://github.com/lyuanh0) · [LinkedIn](https://www.linkedin.com/in/liyuan-ho/)
- **Daisy Fregoso** — [GitHub](https://github.com/dazyfrgso) · [LinkedIn](https://www.linkedin.com/in/daisy-fregoso/)
- **Randy Reyes** — [GitHub](https://github.com/dustydx) · [LinkedIn](https://www.linkedin.com/in/randyreyesbarrios/)
