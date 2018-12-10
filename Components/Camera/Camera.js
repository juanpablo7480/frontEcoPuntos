import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import {Camera, Permissions, FileSystem, MediaLibrary} from 'expo';
import {Button} from 'react-native-paper';

export default class CameraView extends Component{
  static navigationOptions = {header:null};

  state = {
    hasCameraPermission: null,
    hasCameraRollGranted:null,
    type: Camera.Constants.Type.back,
    newPhotos: false,
    ratio:'16:9'
  };

  snap = () => {
    console.log("sadasdasd")
    if(this.camera){
      this.camera.takePictureAsync({quality:1.0,base64:true,onPictureSaved:this.onPictureSaved});
    }
  }

  onPictureSaved = async photo => {
    console.log(photo.base64)
    const asset = await MediaLibrary.createAssetAsync(photo.uri);
    MediaLibrary.createAlbumAsync('Ecopuntos',asset)
    .then(() => {console.log("creado")})
    .catch(err => {console.log('err'),err})
    this.setState({newPhotos:true});
  }

   async componentWillMount(){
     const{status} = await Permissions.askAsync(Permissions.CAMERA);
     const {status2} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
     this.setState({hasCameraPermission: status === 'granted'});
   }

   render() {
     const { hasCameraPermission } = this.state;
     if (hasCameraPermission === null) {
       return <View />;
     } else if (hasCameraPermission === false) {
       return <Text>No access to camera</Text>;
     } else {
       return (
         <View style={{ flex: 1 }}>
           <Camera style={{ flex: 1 }} ref={ref => {this.camera = ref;}} >
             <View
               style={{
                 flex: 1,
                 backgroundColor: 'transparent',
                 flexDirection: 'row',
                 alignItems: 'center',
                 justifyContent: 'space-evenly'
               }}>
               <TouchableOpacity
                 style={{
                   alignSelf: 'flex-end',
                 }}
                 onPress={this.snap}>
                 <Image source = {require('../../assets/camera.png')} style= {{width: 48,height: 48, marginBottom: 20}}/>
               </TouchableOpacity>
             </View>
           </Camera>
         </View>
       );
     }
   }
 }
