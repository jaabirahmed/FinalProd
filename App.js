import React from 'react';

// Import for Drawer
import Colors from './constants/Colors';
import 'react-native-gesture-handler';
import { Text, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
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
import HomeScreen from './screens/HomeScreen';
import ActivityHome from './screens/ActivityHome';

import ProfileScreen from './screens/ProfileScreen';
import Settings from './screens/Settings';
import ProductDetailsScreen from './screens/ProductDetailsScreen';

//Components
import CustomHeaderComponent from './components/CustomHeader';
const Drawer = createDrawerNavigator();

// Options for drawer Navigation
const AppDrawer = (navigation) => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={{
        backgroundColor: Colors.primary,
        width: Dimensions.get('window').width / 2,
      }}
      drawerContentOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'black',
        activeBackgroundColor: '#ABCF3B',
        inactiveBackgroundColor: '#ABCF3B',
        labelStyle: {
          textAlign: 'justify',
          fontSize: Dimensions.get("screen").width > 400 ? 14 : 10,
        }
      }}
    >
      <Drawer.Screen
        name='Home'
        component={HomePage}
        options={{
          drawerIcon: ({ focused }) => (
            <Text><Ionicons name="ios-home" size={Dimensions.get('window').width > 400 ? 24 : 18} color={focused == true ? 'white' : 'black'} /></Text>
          ),
        }} />
      <Drawer.Screen
        name='Family'
        component={FamilyPage}
        options={{
          drawerIcon: ({ focused }) => (
            <Text><Ionicons name="ios-globe" size={Dimensions.get('window').width > 400 ? 24 : 18} color={focused == true ? 'white' : 'black'} /></Text>
          ),
        }}
      />
      <Drawer.Screen
        name='Wisdom'
        component={WisdomPage}
        options={{
          drawerIcon: ({ focused }) => (
            <Text><Ionicons name="ios-folder" size={Dimensions.get('window').width > 400 ? 24 : 18} color={focused == true ? 'white' : 'black'} /></Text>
          ),
        }}
      />
      <Drawer.Screen
        name='Emporium'
        component={EmporiumPage}
        options={{
          drawerIcon: ({ focused }) => (
            <Text><Ionicons name="md-cart" size={Dimensions.get('window').width > 400 ? 24 : 18} color={focused == true ? 'white' : 'black'} /></Text>
          ),
        }}
      />
      <Drawer.Screen
        name="Academy"
        component={AcademyPage}
        options={{
          drawerIcon: ({ focused }) => (
            <Text><Ionicons name="ios-calculator" size={Dimensions.get('window').width > 400 ? 24 : 18} color={focused == true ? 'white' : 'black'} /></Text>
          ),
        }}
      />
      <Drawer.Screen
        name="Assist"
        component={AssistPage}
        options={{
          drawerIcon: ({ focused }) => (
            <Text><Ionicons name="ios-mail" size={Dimensions.get('window').width > 400 ? 24 : 18} color={focused == true ? 'white' : 'black'} /></Text>
          ),
        }}
      />
      <Drawer.Screen
        name="IT Solutions"
        component={ITSolutionsPage}
        options={{
          drawerIcon: ({ focused }) => (
            <Text><Ionicons name="ios-print" size={Dimensions.get('window').width > 400 ? 24 : 18} color={focused == true ? 'white' : 'black'} /></Text>
          ),
        }}
      />
      <Drawer.Screen
        name="Health"
        component={HealthPage}
        options={{
          drawerIcon: ({ focused }) => (
            <Text><Ionicons name="ios-information-circle-outline" size={Dimensions.get('window').width > 400 ? 24 : 18} color={focused == true ? 'white' : 'black'} /></Text>
          ),
        }}
      />
      <Drawer.Screen
        name="About Us"
        component={AboutUsPage}
        options={{
          drawerIcon: ({ focused }) => (
            <Text><Ionicons name="ios-help-circle-outline" size={Dimensions.get('window').width > 400 ? 24 : 18} color={focused == true ? 'white' : 'black'} /></Text>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const LoginStack = createStackNavigator();
const LoginStackScreen = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen name="Login"
      component={Login}
      options={{
        title: 'As-Salamu Alaykum Wa-Rahmatu illahi Wa-Barakatuhu',
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: Dimensions.get("screen").width > 400 ? 14 : 10,
          textAlign: 'center',
          color: Colors.accent,
        },
      }}
    />
    <LoginStack.Screen name="Register"
      component={Register}
      options={{
        title: 'Bismillah al-rahman al-rahim',
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: Dimensions.get("screen").width > 400 ? 14 : 10,
          textAlign: 'center',
          color: Colors.accent,
        },
      }}
    />
  </LoginStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator >
    <ProfileStack.Screen name="Profile"
      component={ProfileScreen}
      options={{
        title: 'IQRA Rewards',
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: Dimensions.get("screen").width > 400 ? 20 : 16,
          color: 'black',
        },
      }}
    />
    <ProfileStack.Screen
      name="Settings"
      component={Settings}
    />
  </ProfileStack.Navigator>
);

const ProductDetailsStack = createStackNavigator();
const ProductDetailsStackScreen = () => (
  <ProductDetailsStack.Navigator >
    <ProductDetailsStack.Screen name="ProductDetails"
      component={ProductDetailsScreen}
      options={{
        title: 'IQRA Rewards',
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: Dimensions.get("screen").width > 400 ? 20 : 16,
          color: 'black',
        },
      }}
    />
    <ProductDetailsStack.Screen
      name="Settings"
      component={Settings}
    />
  </ProductDetailsStack.Navigator>
);



// Custom Headers
function CustomHeader({ nav }) {
  return (
    <CustomHeaderComponent nav={nav} />
  )
}

// HomeScreen Component for Drawer
function HomePage({ navigation }) {
  return (
    <View style={{ flex: 1, }}>
      <CustomHeader nav={navigation} />
      <HomeScreen />
    </View>
  );
}

// FamilyScreen Component for Drawer
function FamilyPage({ navigation }) {
  return (
    <View style={{ flex: 1, }}>
      <CustomHeader nav={navigation} />
      <ActivityHome />
    </View>
  );
}

// WisdomScreen Component for Drawer
function WisdomPage({ navigation }) {
  return (
    <View style={{ flex: 1, }}>
      <CustomHeader nav={navigation} />
      <WisdomScreen />
    </View>
  );
}

// EmporiumScreen Component for Drawer
function EmporiumPage({ navigation }) {
  return (
    <View style={{ flex: 1, }}>
      <CustomHeader nav={navigation} />
      <EmporiumScreen />
    </View>
  );
}

// AcademyScreen Component for Drawer
function AcademyPage({ navigation }) {
  return (
    <View style={{ flex: 1, }}>
      <CustomHeader nav={navigation} />
      <AcademyScreen />
    </View>
  );
}

// AssistScreen Component for Drawer
function AssistPage({ navigation }) {
  return (
    <View style={{ flex: 1, }}>
      <CustomHeader nav={navigation} />
      <AssistScreen />
    </View>
  );
}

// ITSolutionsScreen Component for Drawer
function ITSolutionsPage({ navigation }) {
  return (
    <View style={{ flex: 1, }}>
      <CustomHeader nav={navigation} />
      <IT_SolutionsScreen />
    </View>
  );
}

// HealthScreen Component for Drawer
function HealthPage({ navigation }) {
  return (
    <View style={{ flex: 1, }}>
      <CustomHeader nav={navigation} />
      <HealthScreen />
    </View>
  );
}

// AboutUsScreen Component for Drawer
function AboutUsPage({ navigation }) {
  return (
    <View style={{ flex: 1, }}>
      <CustomHeader nav={navigation} />
      <About_UsScreen />
    </View>
  );
}
const MainStack = createStackNavigator();
const RootStack = ({ navigation }) => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen options={{ headerShown: false }} name='Login' component={LoginStackScreen} />
      <MainStack.Screen name='AppDrawer' component={AppDrawer} options={{ headerShown: false }} />
      <MainStack.Screen name='ProfileScreen' component={ProfileStackScreen} options={{ headerShown: false }} />
      <MainStack.Screen name='ProductDetailsScreen' component={ProductDetailsStackScreen} />
    </MainStack.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;