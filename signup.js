import React, { Component } from 'react';
import { StyleSheet, StatusBar, TouchableOpacity, Text, View, Image } from 'react-native';

class ButtonMintGreen extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.ButtonMintGreen}>
          <Text style={styles.whiteButton}>{this.props.text}</Text>
        </TouchableOpacity>
  
      </View>
    );
  }
}


export default class signUp extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Image
          style={{width: 200, height: 200, margin: 10 }}
          source={require('./assets/chorestorepng.png')}
        />


        <ButtonMintGreen text='SIGN UP' />

      </View>

    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99e1d9',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  ButtonMintGreen: {
    marginTop: 20,

    width: 300,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#ffffff',


    borderRadius:50,
    borderWidth: 1,
    borderColor: '#99e1d9',
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 0.3,

  },
  whiteButton: {
    color: '#636363',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
