import React, {Component} from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity, Image } from 'react-native';
import { Button, TextInput, Appbar, Title } from 'react-native-paper';
import AppBar from '../appbar/appbar';
import Add from '../add/add';
import UpdateStatus from '../updateStatus/updateStatus';
import Pieces from '../pieces/pieces';
import {createStackNavigato, createAppContainer} from 'react-navigation';

export default class Home extends Component {
  state={
    subtitle_view: 'Home'
  }
  static navigationOptions = {header:null};
  render() {
    return (
      <View style = {styles.container}>
        <AppBar subtitle_view = {this.state.subtitle_view}></AppBar>
        <View style = {styles.helper}>
        </View>
        <Title style = {styles.title}>¿Qué desea hacer?</Title>
        <View style = {styles.actions}>
          <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('Add')}>
            <Image source={require("../../assets/cart.png")} style = {styles.image} />
            <Text style = {{textAlign:'center'}}>Añadir Residuo</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('UpdateStatus')}>
            <Image source={require("../../assets/refresh.png")} style = {styles.image} />
            <Text style = {{textAlign:'center'}}>Actualizar estado</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.actions}>
          <TouchableOpacity style = {styles.button} onPress = {() => {alert("No implementado")}}>
            <Image source = {require("../../assets/placeholder.png")} style = {styles.image} />
            <Text style = {{textAlign: 'center'}}>centros de acopio</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('Pieces')}>
            <Image source = {require("../../assets/recycle-bin.png")} style = {styles.image} />
            <Text style = {{textAlign: 'center'}}>Partes</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});
