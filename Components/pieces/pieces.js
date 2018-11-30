import React, {Component} from 'react';
import {StyleSheet, Text, Picker, View} from 'react-native';
import {Button, TextInput, Portal, Dialog, Paragraph} from 'react-native-paper';
import Spinner from 'react-native-loading-spinner-overlay';
import AppBar from '../appbar/appbar';


export default class pieces extends Component{
  static navigationOptions = {header:null};
  constructor(props){
    super(props);
    this.putMaterial = this.putMaterial.bind(this);
    this.cleanInputs = this.cleanInputs.bind(this);
  }
  state = {
  residues:[{code:'',estados:[{gps:'aux',paso:'aux'}],final:'',owner:'',raws:[],residuo:'',rut:''}],
  material1: '',
  material2:'',
  material3:'',
  materials: [],
  subtitle_view: 'Descomposición',
  sku:'',
  spinner: true,
  message: '',
  visible: false,
  text_content_loading_spinner: 'Obteniendo datos...',
  }

  componentDidMount(){
    fetch('http://159.65.125.29:8015/products/',{
      method:'GET',
      headers:{
        Accept: 'Application/json',
        'Content-Type':'application/json',
      }
    })
    .then((response) => response.json())
    .then((residues) => this.setState({residues:residues,spinner:false}))
  }

  putMaterial(){
    if( this.state.sku !== '0'){
      var aux_materials = [this.state.material1,this.state.material2,this.state.material3]
      this.setState({text_content_loading_spinner: 'Agregando Material...', spinner: true}, () =>{

        var aux_url = 'http://159.65.125.29:8015/products/' + this.state.sku + '/';
        fetch(aux_url,{
          method: 'DELETE',
          headers: {
            Accept: 'Application/json',
            'Content-Type':'application/json',
          },
          body:JSON.stringify({
            'raws':aux_materials
          })
        })
        .then((response) => {
          if(response.status === 200)
            this.setState({spinner:false, message: 'Los materiales fueron agregados exitosamente'}, () => this._showDialog())
          else
            this.setState({spinner:false, message: 'Los materiales no pudieron ser agregados'}, () => this._showDialog())
        })
        .catch((error) => {console.log(error.message)})
      })
    }
    else
      this.setState({message: 'Debe agregar al menos un material'}, () => this._showDialog())
  }

  _showDialog = () => this.setState({visible: true});
  _hideDialog = () => this.setState({visible: false}, () => {this.cleanInputs});

  cleanInputs(){
    this.setState({material1: '', material2: '', material3: '', sku: '"Seleccione residuo'})
  }

  render(){
    return(
      <View style = {styles.container}>
        <AppBar subtitle_view = {this.state.subtitle_view}></AppBar>
          <Spinner
            visible={this.state.spinner}
            textContent={this.state.text_content_loading_spinner}
            textStyle={styles.spinnerTextStyle}
          />
          <Portal>
            <Dialog
              visible = {this.state.visible}
              onDismiss = {this._hideDialog}>
              <Dialog.Title>Aviso</Dialog.Title>
              <Dialog.Content>
                <Paragraph>{this.state.message}</Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button color =  "#009688" onPress = {this._hideDialog}>Aceptar</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
          <View style = {styles.containerForm}>
            <Picker
              selectedValue = {this.state.sku}
              onValueChange={(itemValue, itemIndex) => this.setState({sku: itemValue})}>
              <Picker.Item label = "Seleccione residuo" value = "0" />
              {this.state.residues.map((i, index) => (
                <Picker.Item key = {index} label = {i.code} value = {i.code} />
              ))}
            </Picker>
            <TextInput placeholder = 'Ingrese material obtenido' value = {this.state.material1} onChangeText = {material1 => this.setState({material1})} underlineColor = "#009688" style = {{backgroundColor:'#ffffff',marginBottom: 10}} />
            <TextInput placeholder = 'Ingrese material obtenido' value = {this.state.material2} onChangeText = {material2 => this.setState({material2})} underlineColor = "#009688" style = {{backgroundColor:'#ffffff',marginBottom: 10}} />
            <TextInput placeholder = 'Ingrese material obtenido' value = {this.state.material3} onChangeText = {material3 => this.setState({material3})} underlineColor = "#009688" style = {{backgroundColor:'#ffffff',marginBottom: 10}} />
        </View>
        <View style = {styles.button}>
          <Button icon="edit" mode = "contained" color = "#009688" onPress = {this.putMaterial}>Ingresar</Button>
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
  },
  spinnerTextStyle: {
    color: '#009688'
  }
});
