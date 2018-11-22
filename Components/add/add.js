import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import AppBar from '../appbar/appbar';

export default class add extends Component{
  static navigationOptions = {header:null};
  state = {
    rut:'',
    address: '',
    region: '',
    raee: '',
    desc: '',
    subtitle_view: 'agregar producto'
  }

  render(){
    return(
      <View style={styles.container}>
        <AppBar subtitle_view = {this.state.subtitle_view}></AppBar>
        <View style = {styles.containerForm}>
          <TextInput label='RUT' value = {this.state.rut} onChangeText = {rut => this.setState({rut})} underlineColor = "#009688" style = {{backgroundColor:'#ffffff',marginBottom: 5}}/>
          <Picker
            selectedValue={this.state.region}
            onValueChange={(itemValue, itemIndex) => this.setState({region: itemValue})} style = {{marginTop: 10}}>
            <Picker.Item label = "Seleccione región" value ="0" />
            <Picker.Item label="Región Metropolitana" value="santiago" />
            <Picker.Item label="Valparaíso" value="valpo" />
            </Picker>
            <TextInput label='Dirección' value = {this.state.address} onChangeText = {address => this.setState({address})} underlineColor = "#009688" style = {{backgroundColor:'#ffffff',marginBottom: 5}}/>
        </View>
        <View style = {styles.containerForm}>
          <Picker
            selectedValue={this.state.raee}
            onValueChange={(itemValue, itemIndex) => this.setState({raee: itemValue})}>
            <Picker.Item label = "Seleccione residuo" value ="0" />
            <Picker.Item label="Refrigerador" value="refrigerador" />
            <Picker.Item label="Televisor" value="tv" />
            </Picker>
            <TextInput label='Descripción' value = {this.state.desc}  onChangeText = {desc => this.setState({desc})} underlineColor = "#009688" numberOfLines = {2} style = {{backgroundColor:'#ffffff',marginBottom: 5}}/>
        </View>
        <View style = {styles.button}>
          <Button icon="add" mode = "contained" color = "#009688">Guardar</Button>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  containerForm:{
    justifyContent:'center',
    paddingTop:20,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 15
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,

  }
});
