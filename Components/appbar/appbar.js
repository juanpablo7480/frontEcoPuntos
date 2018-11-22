import * as React from 'react';
import {StyleSheet} from 'react-native';
import { Appbar } from 'react-native-paper';

export default class AppBar extends React.Component{
  static navigationOptions = {header:null};
  state={
    subtitle_view: this.props.subtitle_view
    //title: 'agregue producto'
  }

  _goBack = () => this.props.navigation.navigate('Home');

  render(){
    return(
        <Appbar.Header style = {styles.header}>
          <Appbar.BackAction onPress={this._goBack} color="#fff"/>
          <Appbar.Content title = "Eco Puntos" subtitle = {this.state.subtitle_view} color="#fff"/>
        </Appbar.Header>
    );
  }
}

const styles=StyleSheet.create({
  header: {
    backgroundColor: "#009688",
  },
});
