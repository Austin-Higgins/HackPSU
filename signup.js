// SignUp.js
import React from 'react'
import { StyleSheet, Text, TextInput, Image, View, Button } from 'react-native'
export default class SignUp extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  handleSignUp = () => {
    // TODO: Firebase stuff...
    console.log('handleSignUp')
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 200, height: 200}}
          source={require('./assets/chorestorepng.png')}
        />
        {/* Sign Up Button  <Text>Sign Up</Text> */}
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        {/* Email Field */}
        <TextInput
          placeholder=" Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        {/* Password Field */}
        <TextInput 
          secureTextEntry
          placeholder=" Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        

        <View style={{ flexDirection: "row"}}>
          {/* Sign Up Button */}
          <View style={styles.ButtonMintGreen}>
            <Button title="Sign Up" onPress={this.handleSignUp} />
            onPress={() => this.props.navigation.navigate('SignUp')}
            />
           </View>
          {/*  Login Button */}
          <View style={styles.ButtonMintGreen}>
            <Button title="Login" onPress={this.handleSignUp} />
            onPress={() => this.props.navigation.navigate('Login')}
            />
           </View>
</View>
</View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99e1d9',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    color: 'black',
    height: 40,
    width: '90%',
    borderColor: 'gray',
    backgroundColor: 'white',
    borderWidth: 1,
    marginTop: 8,
    width: 350,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#99e1d9',
    shadowOffset: { width: 10, height: 10, },
    shadowColor: 'black',
    shadowOpacity: 0.3,
   
    
  },
  ButtonMintGreen: {

    marginTop:10,
    width: 150,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#ffffff',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#99e1d9',
    shadowOffset: { width: 10, height: 10, },
    shadowColor: 'black',
    shadowOpacity: 0.3,

    marginLeft: 10,
    marginRight: 10,

  }
})
