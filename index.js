/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {App} from './App';

import {name as appName} from './app.json';
import { CharacterList } from './src/screens/Home';

AppRegistry.registerComponent(appName, () => CharacterList);
