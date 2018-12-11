import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ImageBackground, TextInput, Animated, Easing, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigato, createAppContainer} from 'react-navigation';


const myIcon = (<Icon name = 'user' size = {30} color='white' />)

export default class login extends Component{
  static navigationOptions = {header:null};
  constructor(props){
    super(props);
    this.login = this.login.bind(this);
    this.verifiedUser = this.verifiedUser.bind(this);
  }

  state = {
    email: '',
    input_password: '',
    testUsers: [
      {user:'t', pass: '1234', type:1},
      {user:'adminCA', pass:'4321', type:2},
      {user:'admin', pass:'admin', type:3},
      {user:'worker', pass:'password', type:4},
      {user:'administrador', pass:'admin', type:5}
    ],
    loginText: 'Ingresar',
    loading:false
  }

  login(username, pass){
    for(var i = 0; i < this.state.testUsers.length; i++){
      if(this.state.testUsers[i].user.localeCompare(username) === 0 &&  this.state.testUsers[i].pass.localeCompare(pass) === 0){
        console.log(this.state.testUsers[i].type)
        return this.state.testUsers[i].type;
      }
    }
    return -1;
  }


  verifiedUser(){
    this.setState({loading:!this.state.loading, loginText:'Verificando...'}, () => {
      var res = this.login(this.state.email, this.state.input_password)
      if(res > 0){
        if (res === 1)
          this.props.navigation.navigate('HomeTransport');
        else if(res >= 2)
          this.props.navigation.navigate('Home');
      }

      else{
        this.setState({loading:false, loginText:'Ingresar'}, ()=> {
            alert('Usuario no registrado');
        });
      }
    })
  }

  render(){
    return(
      <ImageBackground source = {require('../../assets/login.jpg')} style = {styles.imageBackground} >
      <View style = {styles.loginView}>
        <View style = {styles.inputContainer}>
          <TextInput placeholder = 'Nombre de usuario' value = {this.state.email} onChangeText = {email => this.setState({email})} style = {styles.inputText} underlineColor ='transparent'/>
          <TextInput placeholder = 'Contraseña' value = {this.state.input_password} onChangeText = {input_password => this.setState({input_password})} style = {styles.inputText} secureTextEntry = {true} underlineColor ='transparent'/>
          <Button mode = 'contained' style = {styles.button} onPress = { this.verifiedUser} loading={this.state.loading}>{this.state.loginText}</Button>
      </View>
        <View style = {styles.help}>
          <Text style = {styles.failedText}>No puedo ingresar</Text>
        </View>
      </View>
    </ImageBackground>
  )
  }
}

const styles = StyleSheet.create({
  loginView:{
    backgroundColor: 'rgba(0,150,136,0.70)',
    flex:1
  },
  imageBackground:{
    flex:1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    resizeMode: 'cover'
  },
  logoContainer:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex:1,
    marginBottom: 5
  },
  logo:{
    width: 120,
    height: 120,
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle:'solid',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderRadius: 30,
    width: '85%',
    height: '60%',
    backgroundColor: '#009688'
  },
  inputContainer:{
    marginTop: 170,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText:{
    backgroundColor: 'rgba(169,184,189,0.7)',
    borderBottomColor: 'transparent',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderRadius: 30,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
    height: '18%',
    marginTop:10,
    marginBottom: 20,
  },
  help:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  failedText:{
    color:'#BDBDBD',
    fontSize: 16,

  }
})
