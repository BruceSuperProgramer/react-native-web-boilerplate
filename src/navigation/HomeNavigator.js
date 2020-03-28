import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../screens/Home';
import SettingScreen from '../screens/Setting';
import TabBarIcon from '../components/TabBarIcon';

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

HomeStack.navigationOptions = ({navigation}) => {
  return {
    tabBarIcon: ({focused}) => (
      <TabBarIcon focused={focused} name={'ios-home'} />
    ),
  };
};

const SettingStack = createStackNavigator(
  {
    Setting: SettingScreen,
  },
  {
    initialRoute: 'Setting',
  },
);

SettingStack.navigationOptions = ({navigation}) => {
  return {
    tabBarIcon: ({focused}) => (
      <TabBarIcon textID='exploreTab' focused={focused} name={'ios-search'} />
    ),
  };
};

HomeStack.path = '';

const HomeNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Setting: SettingStack,
});

HomeNavigator.path = '';

export default HomeNavigator;
