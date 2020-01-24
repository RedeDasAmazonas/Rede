import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Home from '../screens/about';
import SignUp from '../screens/signup'
import ReviewDetails from '../screens/reviewDetails';
import { createAppContainer } from 'react-navigation';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Rede Das Amazonas' navigation={navigation} />
      }
    },
  },
  // ReviewDetails: {
  //   screen: ReviewDetails,
  //   navigationOptions: {
  //     title: 'Review Details',
  //   }
  // },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      headerShown: false
    }
  }
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee' }
  }
});

export default createAppContainer(HomeStack);