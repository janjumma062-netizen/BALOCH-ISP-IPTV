# 📥 BALOCH ISP IPTV - Download & Installation Guide

## **Repository**
🔗 **https://github.com/janjumma062-netizen/BALOCH-ISP-IPTV**

---

## **Option 1: Clone & Run Locally** (Recommended for Development)

### Prerequisites:
- Node.js v14+ installed
- Android Studio (for Android)
- Xcode (for iOS)

### Steps:
```bash
# 1. Clone repository
git clone https://github.com/janjumma062-netizen/BALOCH-ISP-IPTV.git
cd BALOCH-ISP-IPTV/mobile

# 2. Install dependencies
npm install

# 3. Start development server
npm start

# 4. Build for Android
npm run android

# 5. Build for iOS
npm run ios
```

---

## **Option 2: Quick Start with Expo** (No Build Required)

```bash
# Install Expo Go app on your phone first
# Then run:

npm install -g expo-cli
cd mobile
expo start

# Scan QR code with your phone camera
```

---

## **Option 3: Pre-built APK** (When Available)

### Download from GitHub Releases:
1. Go to: https://github.com/janjumma062-netizen/BALOCH-ISP-IPTV/releases
2. Download the latest `app-release.apk`
3. Install on Android device

**Note:** Pre-built APK coming soon! For now, build locally.

---

## **Manual Android Build**

```bash
cd mobile/android
./gradlew assembleRelease

# APK will be at:
# app/build/outputs/apk/release/app-release.apk
```

---

## **System Requirements**

| Component | Version |
|-----------|---------|
| Node.js | 14+ |
| React Native | 0.72+ |
| Android SDK | API 21+ |
| iOS | 11+ |

---

## **Source Code Structure**

```
BALOCH-ISP-IPTV/
├── index.html              # Web version
├── mobile/
│   ├── App.tsx
│   ├── package.json
│   ├── android/
│   ├── ios/
│   └── src/
│       ├── screens/
│       └── utils/
└── README.md
```

---

## **Features**

✅ 700+ Live Channels  
✅ Search & Filter  
✅ Favorites Management  
✅ Dark Theme  
✅ HLS Streaming  
✅ Background Playback  

---

## **Support**

- 📧 Email: janjumma062@gmail.com
- 🐛 Issues: https://github.com/janjumma062-netizen/BALOCH-ISP-IPTV/issues
- 📱 GitHub: https://github.com/janjumma062-netizen

---

**Happy Streaming! 🎬**
