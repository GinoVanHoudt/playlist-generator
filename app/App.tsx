import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {HomeScreenComponent} from './components/home-screen.component';
import {ProfileScreenComponent} from './components/profile-screen.component';
import 'react-native-gesture-handler';

const MainNavigator = createStackNavigator(
    {
      Home: {screen: HomeScreenComponent},
      Profile: {screen: ProfileScreenComponent},
    },
    {
      initialRouteName: 'Home'
    });

const App = createAppContainer(MainNavigator);

export default App;