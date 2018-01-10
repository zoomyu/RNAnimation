import { StackNavigator } from 'react-navigation';

import Main from './pages/Main';
import Timing from './pages/Animated_Timing';
import Spring from './pages/Animated_Spring';
import Filp from './pages/Filp';

const Navigators = StackNavigator(
  {
    Main: { screen: Main },
    Timing: { screen: Timing },
    Spring: { screen: Spring },
    Filp: { screen: Filp }
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.routeName}`
    })
  }
);

export default Navigators;
