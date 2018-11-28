import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import AppBar from '../appbar/appbar';

export default class add extends Component{
static navigationOptions = {header:null};
  constructor(props){
    super(props);
    this.getResiduos = this.getResiduos.bind(this);
  }
    state = {
      rut:'',
      address: '',
      region: '',
      raee: '',
      type_raee:'',
      desc: '',
      subtitle_view: 'agregar producto',
      canSelectResidue:false,
    //raees:[{id:'',name:''}] para array de json para cargar desde bd para que no sea estatico
    //types:[{id:'',name:''}] para array de json para cargar desde bd para que no sea estatico
      raees: [
        {id: 0, name: 'Refrigerador', types: [{id_type:0, name: 'frigobar'},
        {id_type: 1, name: '1 puerta'},
        {id_type: 2, name: '2 puertas'},
        {id_type: 3, name: 'side by side'}]},
        {id: 1, name: 'lavadora/secadora', types: [{id_type: 0, name: 'hasta 5 Kg'},
        {id_type: 1, name: 'hasta 12 Kg'},
        {id_type: 2, name: 'Más de 12 Kg'}]},
        {id: 2, name: 'Cocina', types: [{id_type: 0, name: 'hasta 2 platos'},
        {id_type: 1, name: 'hasta 4 platos'},
        {id_type: 2, name: 'Más de 4 platos'}]},
        {id: 3, name: 'Aire acondicionado', types: [{id_type: 0, name: 'Portátil'},
        {id_type: 1, name: 'Split muro cielo'},
        {id_type: 2, name: 'Ventana'}]},
        {id: 4, name: 'Radiador', types: [{id_type: 0, name: 'Estándar'}]},
        {id: 5, name: 'Máquina expendedora', types: [{id_type: 0, name: '1 m3'},
        {id_type: 1, name: '2 m3'},
        {id_type: 2, name: '3 m3'},
        {id_type: 3, name: '4 m3'}]}
      ],
      types_raee: [{id_type:0,name:''}]
      }

    getResiduos(i){
      this.setState({types_raee: this.state.raees[i].types});
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
            onValueChange={(itemValue, itemIndex) => {this.setState({raee:itemValue}),this.getResiduos(itemIndex-1)}}>
            <Picker.Item label = "Seleccione residuo" value ='' />
            {this.state.raees.map((i, index) => (
              <Picker.Item key = {index} label = {i.name} value = {i.name}/>
            ))}
          </Picker>
          <Picker
            selectedValue = {this.state.type_raee}
            onValueChange = {(itemValue, itemIndex) => {this.setState({type_raee: itemValue})}}>
            <Picker.Item label = "Seleccione el tipo de residuo" value = '' />
            {this.state.types_raee.map((i, index) => (
              <Picker.Item key = {index} label = {i.name} value = {i.name} />
            ))}
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
