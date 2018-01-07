import { StackNavigator } from 'react-navigation';

import Main from './pages/Main';
import Filp from './pages/Filp';

const Navigators = StackNavigator(
  {
    Main: { screen: Main },
    Filp: { screen: Filp }
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.routeName}`
    })
  }
);

export default Navigators;
