import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/login';
import Register from './components/register1';
import Header from './components/Header';
import MainPage from './components/MainPage';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Colors from './constants/Colors';

// let content = <Login onSuccess={nextScreen}></Login>;

//   // if(userNumber && guessRounds<=0){
//   //   content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>;
//   // }else if(guessRounds>0){
//   //   content = <GameOverScreen onRestart={configureNewGameHandler} roundsNumber={guessRounds} userNumber={userNumber}/>;
//   // }

// export default function App() {
//   return (
//     <View style={styles.screen}>
//       <Header title="Welcome"/>
//       <Login></Login>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: 'black',
//     shadowOffset: {width: 0, height: 2},
//     shadowRadius: 0,
//     shadowOpacity: 0.26,
//     elevation: 20,
//     backgroundColor: '#ececec', 
//     marginTop: 20,
//     alignItems: 'center',   
//   }
// });
const Navigation = createStackNavigator({
  Login:{screen:Login},
  Main:{screen:MainPage},
  Register:{screen:Register},
},{ 
  mode: 'modal',
  initialRouteName:'Login',
  defaultNavigationOptions:{
          headerStyle: {
              backgroundColor: Colors.primary,
          },
          headerTintColor: 'white',
  }
});
const App = createAppContainer(Navigation);
export default App;