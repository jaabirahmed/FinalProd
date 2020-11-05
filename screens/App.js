import React from 'react';

// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// New Import for Drawer
import Colors from './constants/Colors';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Screens
import FamilyScreen from './screens/FamilyScreen';
import WisdomScreen from './screens/WisdomScreen';
import EmporiumScreen from './screens/EmporiumScreen';
import AcademyScreen from './screens/AcademyScreen';
import AssistScreen from './screens/AssistScreen';
import IT_SolutionsScreen from './screens/IT_SolutionsScreen';
import HealthScreen from './screens/HealthScreen';
import About_UsScreen from './screens/About_UsScreen';

import Login from './screens/Login';
import Register from './screens/Register';
//import MyRewards from './screens/MyRewards';
import HomePage from './screens/HomePage';

import HeaderButton from './components/HeaderButton';

const Navigation = createStackNavigator({
  Login:{screen:Login},
  Main:{screen:HomePage},
  Register:{screen:Register},
},{ 
  mode: 'modal',
  initialRouteName:'Main',
  defaultNavigationOptions:{
          headerStyle: {
              backgroundColor: Colors.primary,
          },
          headerTintColor: 'white',
  }
});
const App = createAppContainer(Navigation);
export default App;