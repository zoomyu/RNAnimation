import { StackNavigator } from 'react-navigation';

import Main from './pages/Main';
import Timing from './pages/Animated_Timing';
import Spring from './pages/Animated_Spring';
import Decay from './pages/Animated_Decay';

import Delay from './pages/Animated_Delay';
import Parallel from './pages/Animated_Parallel';
import Sequence from './pages/Animated_Sequence';
import Stagger from './pages/Animated_Stagger';

import Add from './pages/Animated_Add';
import Divide from './pages/Animated_Divide';
import Modulo from './pages/Animated_Modulo';
import Multiply from './pages/Animated_Multiply';

import InterpolationValue from './pages/Animated_Interpolation_Value';
import InterpolationColor from './pages/Animated_Interpolation_Color';
import InterpolationRotation from './pages/Animated_Interpolation_Rotation';

import Filp from './pages/Filp';

const Navigators = StackNavigator(
  {
    Main: { screen: Main },
    Timing: { screen: Timing },
    Spring: { screen: Spring },
    Decay: { screen: Decay },
    Delay: { screen: Delay },
    Parallel: { screen: Parallel },
    Sequence: { screen: Sequence },
    Stagger: { screen: Stagger },
    Add: { screen: Add },
    Divide: { screen: Divide },
    Modulo: { screen: Modulo },
    Multiply: { screen: Multiply },
    InterpolationValue: { screen: InterpolationValue },
    InterpolationColor: { screen: InterpolationColor },
    InterpolationRotation: { screen: InterpolationRotation },
    Filp: { screen: Filp }
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.routeName}`
    })
  }
);

export default Navigators;
