jest
  .mock('react-native-elements', () => require.requireActual('./react-native-elements'))
  .mock('react-native-navigation', () => require.requireActual('./react-native-navigation'));
