<h1 align="center">
  <img src="logo.png"/><br>
  React Native Navigation + Redux + Saga
</h1>

A starter boilerplate for a mobile app using React Native and React Native Navigation(v2). This boilerplate also provides a cool redux-saga structure to bootstrap your react-native app development.

## Screenshots

<img src="https://user-images.githubusercontent.com/17483938/51156806-e7c9f480-1885-11e9-8b4e-f079f7200da5.png" /><br>

## Requirements
Before start, make sure you installed:
- [Android Studio](https://developer.android.com/studio/index.html) : Android Dev Environment
- [Xcode](https://developer.apple.com/xcode/), [CocoaPods](https://cocoapods.org/) : iOS Dev Environment
- [Node](https://nodejs.org) and [React Native CLI](http://facebook.github.io/react-native/docs/getting-started.html): React Native Dev Environment
- [FBSDK](https://origincache.facebook.com/developers/resources/?id=facebook-ios-sdk-current.zip): Download the SDK and unzip the archive to `~/Documents/FacebookSDK`.

## Stack
- [React Native 0.58.5](https://facebook.github.io/react-native/): Development Environment
- [React Native Navigation 2.12.0](https://github.com/wix/react-native-navigation): Native based navigator for React Native
- [Redux](http://redux.js.org/): A predictable state container for JavaScript apps
- [Redux-Saga](https://redux-saga.js.org/docs/api/): An alternative side effect model for Redux apps
- [ESLint](https://eslint.org/): Pluggable linting utility for JavaScript
- [Babel](http://babeljs.io/): The compiler for writing next generation JavaScript
- [Jest](https://jestjs.io/): Delightful JavaScript Testing
- [React Native FBSDK](https://github.com/facebook/react-native-fbsdk): A React Native wrapper around the Facebook SDKs for Android and iOS
- [React Native Elements](https://react-native-training.github.io/react-native-elements/): Cross Platform React Native UI Toolkit
- [React Native Vector Icons](https://oblador.github.io/react-native-vector-icons/): Customizable Icons for React Native
- [React Native Config](https://github.com/luggit/react-native-config): Config variables for React Native apps

## How to run?

Clone the repo and install packages.
```shell
$ git clone https://github.com/atoami/react-native-navigation-redux-starter-kit ReactNativeBoilerplate
$ cd ReactNativeBoilerplate
$ yarn
```

Run Android Project.
```shell
$ react-native run-android
```

Run iOS Project.
```shell
$ cd ios && pod install
$ cd .. && react-native run-ios
```

## Issues

Do you have any concern to run this project?&nbsp;&nbsp;Please feel free to contact me!

## License

This project is licensed under the MIT License
