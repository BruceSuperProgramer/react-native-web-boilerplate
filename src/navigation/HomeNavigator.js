import {Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../screens/Home';
import SettingScreen from '../screens/Setting';

const config = Platform.select({
  web: {headerMode: 'screen'},
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Setting: SettingScreen,
  },
  {
    initialRoute: 'Home',
  },
);

HomeStack.navigationOptions = ({navigation}) => {};

const SettingStack = createStackNavigator(
  {
    Setting: SettingScreen,
  },
  {
    initialRoute: 'Setting',
  },
);

SettingStack.navigationOptions = ({navigation}) => {};

HomeStack.path = '';

const HomeNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Setting: SettingStack,
});

HomeNavigator.path = '';

export default HomeNavigator;
