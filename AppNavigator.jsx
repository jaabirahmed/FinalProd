import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import Login from './Login';
const AppNavigator = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen, navigationOptions: {
      headerBackTitle: ' ',
    }
  },
  login: {
    screen: Login, navigationOptions: {
      headerBackTitle: ' ',
    }
  },
  register: {
    screen: Register, navigationOptions: {
      headerBackTitle: ' ',
    }
  }

});

const App = createAppContainer(AppNavigator);
export default App;