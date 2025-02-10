<!-- # Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions. -->

# Welcome to Location Notifier App 📍

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

### Requirements

This project is part of the **React Native Developer Assignment** and includes:

1. **Google Maps Integration**:
   - Integrate Google Maps.
   - Allow users to select a location on the map.
   - Automatically fill a form with location details (latitude, longitude, address).
2. **Firebase Notifications**:
   - Set up Firebase Cloud Messaging (FCM).
   - Enable the app to receive push notifications from the Firebase dashboard.

### Prerequisites

Before running the app, ensure you have the following installed:

- Node.js & npm
- Expo CLI (`npm install -g expo-cli`)
- Android Studio (for emulator) or Xcode (for iOS simulator)
- Add your Google Maps API Keys for both iOS and Android in the app.json file. Look for the ios.config.googleMapsApiKey and android.config.googleMapsApiKey fields, and update them with your keys.
- Place your google-service.json file (Firebase configuration for Android) in the root folder of your project.
- Add the google map api key in the utils/lication.ts file in the API_KEY field.
- Firebase setup with FCM enabled

### Install dependencies

```bash
npm install
```

### Build Expo Dev Client

This app requires the **Expo Dev Client** to run, as it utilizes native libraries that are not supported in Expo Go. You need to build the dev client before running the app.

#### For Android:

```bash
npx expo run:android
```

#### For iOS:

```bash
npx expo run:ios
```

(Requires macOS and Xcode)

### Build the app using EAS

To create a development build, use the following command:

```bash
eas build --profile development --platform android
```

### Start the app

```bash
npx expo start
```

In the output, you'll find options to open the app in:

- [Development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)

## Learn more

To learn more about developing your project with Expo, check out:

- [Expo documentation](https://docs.expo.dev/)
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/)

## Join the community

- [Expo on GitHub](https://github.com/expo/expo)
- [Discord community](https://chat.expo.dev)

Happy coding! 🌟
