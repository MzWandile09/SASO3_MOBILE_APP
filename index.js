import {AppRegistry} from 'react-native';
import App from './src/app/App'; // Make sure the path is correct
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
