import {createBrowserApp} from '@react-navigation/web';
import {createSwitchNavigator} from 'react-navigation';
import HomeNavigator from './HomeNavigator';

const switchNavigator = createSwitchNavigator({
  HomeNavigator: HomeNavigator,
});

export default createBrowserApp(switchNavigator, {history: 'hash'});
