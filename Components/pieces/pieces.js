import React, {Component} from 'react';
import {StyleSheet, Text, Picker, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

import AppBar from '../appbar/appbar';


export default class pieces extends Component{
  static navigationOptions = {header:null};
  state = {
    product:[{
      sku:'',
      type:'',
      state:''
    }
  ],
  subtitle_view: 'Descomposición',
  sku:''
  }

  render(){
    return(
      <View style = {styles.container}>
        <AppBar subtitle_view = {this.state.subtitle_view}></AppBar>
          <View style = {styles.containerForm}>
            <Picker
              selectedValue = {this.state.sku}
              onValueChange={(itemValue, itemIndex) => this.setState({sku: itemValue})}>
              <Picker.Item label = "Seleccione residuo" value = "0" />
              <Picker.Item label = "SDLA-1-EB" value = "1" />
              <Picker.Item label = "PEG-NE-43" value = "2" />
            </Picker>
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
