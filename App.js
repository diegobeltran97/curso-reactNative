import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import Counter from './src/screens/Counter';
import ColorScreen from './src/screens/ColorsSreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    ImageScreen: ImageScreen,
    CounterScreen: Counter,
    ColorScreen: ColorScreen,
    SquareScreen: SquareScreen,
    TextScreen: TextScreen

  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);



export default createAppContainer(navigator);
