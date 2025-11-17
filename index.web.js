import React from 'react';
import { AppRegistry } from 'react-native-web';
import App from './App';

AppRegistry.registerComponent('RouteRent', () => App);
AppRegistry.runApplication('RouteRent', {
  rootTag: document.getElementById('root'),
});

export default App;
