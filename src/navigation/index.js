import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Detail';

const AppNavigator = createStackNavigator({
  //   Home: {
  //     screen: HomeScreen,
  //   },
  //   Detail: {
  //     screen: DetailScreen,
  //   },
  Home: HomeScreen,
  Details: DetailsScreen,
});

const MainNavigator = createAppContainer(AppNavigator);

export default MainNavigator;
