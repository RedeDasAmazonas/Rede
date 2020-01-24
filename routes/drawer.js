import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import CadastroStack from './cadastroStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
   
  // Home: {
  //   screen: AboutStack,
  // },
  // About: {
  //   screen: AboutStack,
  // },
},
  {
    drawerType: "back",
  }
);

export default createAppContainer(RootDrawerNavigator);