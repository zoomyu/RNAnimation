import { StackNavigator } from 'react-navigation';

import Main from './pages/Main';
import Timing from './pages/Animated_Timing';
import Filp from './pages/Filp';

const Navigators = StackNavigator(
  {
    Main: { screen: Main },
    Filp: { screen: Filp },
    Timing: { screen: Timing }
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.routeName}`
    })
  }
);

export default Navigators;
