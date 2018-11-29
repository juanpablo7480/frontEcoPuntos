import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {Provider as PaperProvider} from 'react-native-paper';
import Add from './Components/add/add';
import UpdateStatus from './Components/updateStatus/updateStatus';
import Home from './Components/home/home';
import Pieces from './Components/pieces/pieces';
const RootStack = createStackNavigator(
  {
    Home:{screen: Home},
    Add:{screen: Add},
    UpdateStatus:{screen: UpdateStatus},
    Pieces:{screen: Pieces}
  },
  {
    initialRouteName: 'Home',
  },
  {
    navigationOptions:{header:null}
  }

);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component{
  render(){
    return (
      <PaperProvider>
        <AppContainer />
      </PaperProvider>
    );
  }
}
