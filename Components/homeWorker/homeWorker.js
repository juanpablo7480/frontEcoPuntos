import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity, Image } from 'react-native';
import { Button, TextInput, Appbar, Title } from 'react-native-paper';
import AppBar from '../appbar/appbar';
import Add from '../add/add';
import QrScanner from '../QrScanner/QrScanner';
// vista qr
//vista centros de acopio
import {createStackNavigato, createAppContainer} from 'react-navigation';

export default class HomeWorker extends Component{
  state = {
    subtitle_view: 'Administrador Centro de Acopio'
  }
  static navigationOptions = {header:null};

  render(){
    return(
      <View style = {styles.container}>
        <AppBar subtitle_view = {this.state.subtitle_view}></AppBar>
        <View style = {styles.helper}>
        </View>
        <Title style = {styles.title}>¿Qué desea hacer?</Title>
        <View style = {styles.actions}>
          <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('UpdateStatusQr')}>
            <Image source={require("../../assets/refresh.png")} style = {styles.image} />
            <Text style = {{textAlign:'center'}}>Actualizar estado</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('QrScanner')}>
            <Image source={require("../../assets/qr.png")} style = {styles.image} />
            <Text style = {{textAlign:'center'}}>Consultar código</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.actions}>
          <TouchableOpacity style = {styles.button} onPress = {() => {alert("No implementado")}}>
            <Image source = {require("../../assets/placeholder.png")} style = {styles.image} />
            <Text style = {{textAlign: 'center'}}>Centros de acopio</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
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
