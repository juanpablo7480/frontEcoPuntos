import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {Camera, Permissions, FileSystem} from 'expo';

export default class CameraView extends Component{
  static navigationOptions = {header:null};
  constructor(props) {
      super(props);
      this.document_dir = FileSystem.documentDirectory; // the full path to where the photos should be saved (includes the trailing slash)
      this.filename_prefix = 'increment_photo_'; // prefix all file names with this string
    }
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  snap = async() => {
    if(this.camera){
      let photo = await this.camera.takePictureAsync()
      .then((data) => {
        let datetime = getPathSafeDatetime();
        let file_path = `${this.document_dir}${this.filename_prefix}${datetime}.jpg`;
      })
    }
  }

  getPathSafeDatetime() {
     let datetime = getLocalDateTime(new Date()).replace(/\//g, '-').replace(',', '').replace(/:/g, '_').replace(/ /g, '+');
     return datetime;
   }

  async componentDidMount() {
     const { status } = await Permissions.askAsync(Permissions.CAMERA);
     this.setState({ hasCameraPermission: status === 'granted' });
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
           <Camera style={{ flex: 1 }} type={this.state.type} ref = {ref => {this.camera = ref;}} >
             <View
               style={{
                 flex: 1,
                 backgroundColor: 'transparent',
                 flexDirection: 'row',
               }}>
               <TouchableOpacity
                 style={{
                   flex: 0.1,
                   alignSelf: 'flex-end',
                   alignItems: 'center',
                 }}
                 onPress={() => this.snap}>
                 <Text
                   style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                   {' '}Flip{' '}
                 </Text>
               </TouchableOpacity>
             </View>
           </Camera>
         </View>
       );
     }
   }
 }
