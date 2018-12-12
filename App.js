import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {Provider as PaperProvider} from 'react-native-paper';
import Add from './Components/add/add';
import UpdateStatus from './Components/updateStatus/updateStatus';
import Home from './Components/home/home';
import HomeTransport from './Components/homeTransport/homeTransport';
import HomeDestroy from './Components/homeDestroy/homeDestroy';
import HomeWorker from './Components/homeWorker/homeWorker';
import Pieces from './Components/pieces/pieces';
import Login from './Components/login/login';
import CameraView from './Components/Camera/Camera';
import QrScanner from './Components/QrScanner/QrScanner';
import QrGenerator from './Components/QrGenerator/QrGenerator';
import UpdateStatusQr from './Components/updateStatusQr/updateStatusQr';
const RootStack = createStackNavigator(
  {
    Login : {screen:Login},
    Home:{screen: Home},
    HomeTransport: {screen: HomeTransport},
    HomeDestroy: {screen: HomeDestroy},
    HomeWorker: {screen: HomeWorker},
    Add:{screen: Add},
    UpdateStatus:{screen: UpdateStatus},
    UpdateStatusQr:{screen: UpdateStatusQr},
    Pieces:{screen: Pieces},
    CameraView: {screen: CameraView},
    QrScanner: {screen: QrScanner},
    QrGenerator: {screen: QrGenerator}
  },
  {
    initialRouteName: 'Login',
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
