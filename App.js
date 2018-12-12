import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {Provider as PaperProvider} from 'react-native-paper';
import Add from './Components/add/add';
import UpdateStatus from './Components/updateStatus/updateStatus';
import Home from './Components/home/home';
import Pieces from './Components/pieces/pieces';
import Login from './Components/login/login';
import HomeTransport from './Components/homeTransport/homeTransport';
import CameraView from './Components/Camera/Camera';
import QrScanner from './Components/QrScanner/QrScanner';
import QrGenerator from './Components/QrGenerator/QrGenerator';
const RootStack = createStackNavigator(
  {
    Login : {screen:Login},
    Home:{screen: Home},
    Add:{screen: Add},
    UpdateStatus:{screen: UpdateStatus},
    Pieces:{screen: Pieces},
    HomeTransport: {screen: HomeTransport},
    CameraView: {screen: CameraView},
    QrScanner: {screen: QrScanner},
    QrGenerator: {screen: QrGenerator}

  },
  {
    initialRouteName: 'HomeTransport',
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
