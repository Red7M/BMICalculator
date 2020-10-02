//Import react-navigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Metric from './screens/Metric';
import Standard from './screens/Standard';

const App = createStackNavigator(
  {
    Metric: {screen: Metric},
    Standard: {screen: Standard},
  },
  {
    initialRouteName: 'Metric',
  },
);
export default createAppContainer(App);
