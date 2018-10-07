import React, { Component } from 'react';
import { StyleSheet, StatusBar, TouchableOpacity, Text, View, Image, Button } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json



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

class App extends Component {

  render() {
    return (
      <View style={styles.container}>


      <StatusBar hidden />
        <Image
          style={{width: 200, height: 200, margin: 10 }}
          source={require('./assets/chorestorepng.png')}
        />




        <TouchableOpacity style={styles.ButtonMintGreen}>
        <Button 
        title="Log In with Facebook"
        color="#636363"
        onPress={() => {  
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Page2' })
              ],
            }))
          }}
           />
        </TouchableOpacity>


        <TouchableOpacity style={styles.ButtonMintGreen}>
        <Button 
        title="Log In with Phone Number"
        color="#636363"
        onPress={() => {  
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Page2' })
              ],
            }))
          }}
           />
        </TouchableOpacity>


        <TouchableOpacity style={styles.ButtonMintGreen}>
        <Button 
        title="Sign Up"
        color="#636363"
        onPress={() => {  
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Page2' })
              ],
            }))
          }}
           />
        </TouchableOpacity>

        {/* <ButtonMintGreen text='Log In with Phone Number' />
        <ButtonMintGreen text='Sign Up' /> */ }

      </View>

    );
  }
}

class xpage2 extends Component {

  render() {
    return (
      <View style={styles.container}>


      <StatusBar hidden />
        <Image
          style={{width: 200, height: 200, margin: 10 }}
          source={require('./assets/chorestorepng.png')}
        />

        <ButtonMintGreen text='Sign Up' />

      </View>

    );
  }
}





export default createStackNavigator({
  Home: {
    screen: App,
  },
  Page2: {
    screen: xpage2,
  },
  }, {
    initialRouteName: 'Home',
});






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99e1d9',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  ButtonMintGreen: {
    marginTop: 20,
    textAlign: 'center',
    width: 300,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#ffffff',
    color: '#000000',

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
