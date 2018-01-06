import { StackNavigator } from 'react-navigation';
import Main from './pages/Main';

const Navigators = StackNavigator({
  Main: { screen: Main },
});

export default Navigators;
