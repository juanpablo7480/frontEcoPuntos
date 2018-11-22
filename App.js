/*import React, {Component} from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity, Image } from 'react-native';
import { Button, TextInput, Appbar, Title } from 'react-native-paper';
import Add from './Components/add/add';
import UpdateStatus from './Components/updateStatus/updateStatus';
import {createStackNavigato, createAppContainer} from 'react-navigation';

export default class Home extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Appbar.Header style = {styles.header}>
          <Appbar.Content title = "Eco Puntos" titleStyle = {{fontSize:32, textAlign:'center'}}/>
        </Appbar.Header>
        <View style = {styles.helper}>
        </View>
        <Title style = {styles.title}>¿Qué desea hacer?</Title>
        <View style = {styles.actions}>
          <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('Add')}>
            <Image source={require("./assets/cart.png")} style = {styles.image} />
            <Text style = {{textAlign:'center'}}>Añadir Residuo</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('UpdateStatus')}>
            <Image source={require("./assets/refresh.png")} style = {styles.image} />
            <Text style = {{textAlign:'center'}}>Actualizar estado</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.actions2}>
          <TouchableOpacity style = {styles.button} onPress = {() => {alert("No implementado")}}>
            <Image source = {require("./assets/placeholder.png")} style = {styles.image} />
            <Text style = {{textAlign: 'center'}}>centros de acopio</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#009688",
    height: 130,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    marginTop: 30,
    marginBottom: 50,
    fontSize: 24,
    textAlign: 'center',
    color: "#C2C2C2"

  },
  container: {
    backgroundColor: '#ffffff',

  },
  actions:{
    marginTop: 35,
    marginBottom: 150,
    flex: 1,

    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  actions2:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
   width: 85,
   height: 85,
   marginBottom: 10
  },
  image:{
    width: 85,
    height:85,
    marginBottom: 10
  }


});*/
import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Add from './Components/add/add';
import UpdateStatus from './Components/updateStatus/updateStatus';
import Home from './Components/home/home';

const RootStack = createStackNavigator(
  {
    Home:{screen: Home},
    Add:{screen: Add},
    UpdateStatus:{screen: UpdateStatus},
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
    return <AppContainer />
  }
}
