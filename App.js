import React, { Component } from 'react';
import { StyleSheet, StatusBar, TouchableOpacity, Text, View, Image, Button } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

{/*IMPORT OTHER CLASSES FROM DIFFERENT FILES */}
import LoginWithFacebook from './LoginWithFacebook';
import LoginWithPhone from './LoginWithPhone';
import signUp from './signup';
import skip from './skip';

{/*CLASS FOR MAKING BUTTONS*/}
class ButtonMintGreen extends Component {
  pressedButton = () => {
    this.props.navigate(this.props.page, {});
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.pressedButton}
          style={styles.ButtonMintGreen}>
          <Text style={styles.whiteButton}>{this.props.text}</Text>
        </TouchableOpacity> 
      </View>
    );
  }
}


{/* MAIN LOG IN SCREEN */}
class App extends Component {

  render() {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="black" />

      
        <Image
          style={{width: 200, height: 200, margin: 10 }}
          source={require('./assets/chorestorepng.png')}
        />

        {/*CALLING BUTTON MINT GREEN FUNCTION ABOVE */}
        <ButtonMintGreen text='Log In with Facebook' page='LoginWithFacebook' navigate={this.props.navigation.navigate} />
        <ButtonMintGreen text='Log In with Phone Number' page='loginwithphone' navigate={this.props.navigation.navigate} />
        <ButtonMintGreen text='Sign Up' page='SignUp' navigate={this.props.navigation.navigate} />
        <ButtonMintGreen text='Skip' page='Skip' navigate={this.props.navigation.navigate} />



      </View>

    );
  }
}


{/* NAVIGATION DICTIONARY */}
export default createStackNavigator({
  Home: {
    screen: App,
  },
  LoginWithFacebook: { screen: LoginWithFacebook},
  loginwithphone: { screen: LoginWithPhone},
  SignUp: {screen: signUp},
  Skip: {screen: skip},
  }, {
    initialRouteName: 'Home',
});




{/* STYlE SHEETS */}

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
