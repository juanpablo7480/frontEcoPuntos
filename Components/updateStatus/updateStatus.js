import React,{Component} from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import { Button, TextInput, Portal, Dialog, Paragraph } from 'react-native-paper';
import Spinner from 'react-native-loading-spinner-overlay';
import AppBar from '../appbar/appbar';

export default class updateStatus extends Component{
static navigationOptions = {header:null};
  constructor(props){
    super(props);
    this.getResidueState = this.getResidueState.bind(this);
    this.putResidueState = this.putResidueState.bind(this);
  }

  state = {
    sku: '',
    spinner: true,
    visible: false,
    state:'',
    residue_state_update: '',
    new_coordinates: '1,1',
    subtitle_view: 'Actualizar estado',
    residue_state: 'Estado actual de residuo',
    residue_rut:'',
    residue_name:'',
    text_content_loading_spinner: 'Obteniendo datos...',
    message: '',
    residues:[{code:'',estados:[{gps:'aux',paso:'aux'}],final:'',owner:'',raws:[],residuo:'',rut:''}]
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

  getResidueState(i){
    if(i >= 0)
      this.setState({residue_state:this.state.residues[i].estados[(this.state.residues[i].estados.length)-1].paso,
    residue_name:this.state.residues[i].residuo,residue_rut:this.state.residues[i].rut})
    else
      this.setState({residue_state: 'Estado actual de residuo'})

  }

  putResidueState(){
    if(this.state.residue_state_update !== '0' ){
      this.setState({text_content_loading_spinner: 'Actualizando producto', spinner:true}, () =>{
        var aux_url = 'http://159.65.125.29:8015/products/' + this.state.sku + '/'
        fetch(aux_url, {
          method: 'PUT',
          headers: {
            Accept: 'Application/json',
            'Content-Type':'application/json',
          },
          body:JSON.stringify({
            'paso':this.state.residue_state_update,
            'gps':this.state.new_coordinates
          })
        })
        .then((response) => {
          if(response.status === 200)
            this.setState({spinner:false,message: 'El estado del residuo fue actualizado correctamente'}, () => this._showDialog())
          else{
            console.log(response)
            this.setState({spinner:false,message: 'El estado del residuo no pudo ser actualizado. Revise red'}, () => this._showDialog())
          }

        })
        .catch((error) => {console.log(error.message)})
      })
    }
    else
      this.setState({message: 'Debe seleccionar un nuevo estado'}, () => this._showDialog())
  }

  _showDialog = () => this.setState({visible: true});
  _hideDialog = () => this.setState({visible: false});

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
          onValueChange = {(itemValue, itemIndex) => {this.setState({sku: itemValue}), this.getResidueState(itemIndex-1)}}>
          <Picker.Item label = "Seleccione residuo por sku" value = 'Estado actual de residuo' />
          {this.state.residues.map((i, index) => (
            <Picker.Item key = {index} label = {i.code} value = {i.code} />
          ))}
        </Picker>
        <TextInput value = {this.state.residue_state} mode = 'outlined' disabled = {true}/>
        <TextInput value = {this.state.residue_name} placeholder = 'residuo' mode = 'outlined' disabled = {true}/>
        <TextInput value = {this.state.residue_rut} placeholder = 'dueño' mode = 'outlined' disabled = {true}  style = {{marginBottom: 20}} />
        <Picker
          selectedValue = {this.state.residue_state_update}
          onValueChange = {(itemValue, itemIndex) => this.setState({residue_state_update: itemValue})}>
          <Picker.Item label = "Seleccione nuevo estado" value = "0" />
          <Picker.Item label = "En camino a centro de acopio" value = "En camino a centro de acopio" />
          <Picker.Item label = "En centro de acopio" value = "En centro de acopio" />
          <Picker.Item label = "En camino a centro de tratamiento" value = "En camino a centro de tratamiento" />
          <Picker.Item label = "En centro de tratamiento" value = "En centro de tratamiento" />
          <Picker.Item label = "Finalizado" value = "Finalizado" />
        </Picker>
      </View>
      <View style = {styles.button}>
        <Button icon="edit" mode = "contained" color = "#009688" onPress = {this.putResidueState}>Actualizar</Button>
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
