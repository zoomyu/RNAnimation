import { StackNavigator } from 'react-navigation';

import Main from './pages/Main';
import Timing from './pages/Animated_Timing';
import Spring from './pages/Animated_Spring';
import Decay from './pages/Animated_Decay';

import Delay from './pages/Animated_Delay';
import Parallel from './pages/Animated_Parallel';
import Filp from './pages/Filp';

const Navigators = StackNavigator(
  {
    Main: { screen: Main },
    Timing: { screen: Timing },
    Spring: { screen: Spring },
    Decay: { screen: Decay },
    Delay: { screen: Delay },
    Parallel: { screen: Parallel },
    Filp: { screen: Filp }
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.routeName}`
    })
  }
);

export default Navigators;
