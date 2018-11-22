import React,{Component} from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import AppBar from '../appbar/appbar';

export default class updateStatus extends Component{
  static navigationOptions = {header:null};
  state = {
    sku: '',
    state:'',
    coordinates: '',
    subtitle_view: 'Actualizar estado'
  }

  render(){
    return(
      <View style = {styles.container}>
        <AppBar subtitle_view = {this.state.subtitle_view}></AppBar>
      <View style = {styles.containerForm}>
        <Picker
          selectedValue = {this.state.sku}
          onValueChange = {(itemValue, itemIndex) => this.setState({sku: itemValue})}>
          <Picker.Item label = "Seleccione residuo por sku" value = "0" />
          <Picker.Item label = "SDLA-1-EB" value = "1" />
          <Picker.Item label = "PEG-NE-43" value = "2" />
        </Picker>
        <Picker
          selectedValue = {this.state.state}
          onValueChange = {(itemValue, itemIndex) => this.setState({sku: itemValue})}>
          <Picker.Item label = "Seleccione nuevo estado" value = "0" />
          <Picker.Item label = "En camino a centro de acopio" value = "1" />
          <Picker.Item label = "En centro de acopio" value = "2" />
          <Picker.Item label = "En centro de tratamiento" value = "3" />
          <Picker.Item label = "En camino a centro de tratamiento" value = "4" />
          <Picker.Item label = "Finalizado" value = "5" />
        </Picker>
      </View>
      <View style = {styles.button}>
        <Button icon="edit" mode = "contained" color = "#009688">Actualizar</Button>
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
