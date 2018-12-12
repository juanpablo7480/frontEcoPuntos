import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

export default class UpdateStatusQr extends React.Component {
  state = {
    hasCameraPermission: null,
    timestamp: "",
    status: "",
    owner :[{'rut':rut,'nombre_completo':nombre,'edad':"", 'genero':"", 'direccion_retiro':address, 'fecha_nac':""}]
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
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
            'status':this.state.status,
            'position':this.state.new_coordinates,
            'timestamp':this.state.timestamp,
            'owner':this.state.owner
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
  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
        </View>
      );
    }
  }

  _handleBarCodeRead = ({ type, data }) => {
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  }
}

