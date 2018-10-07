
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import { AppRegistry, FlatList, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';



class FeatScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feat!</Text>
      </View>
    );
  }
}


export class TypeOfTask extends Component{
  pressedButton = () => {
    this.props.navigate(this.props.page, {});
  }
  render(){
    return(
      <ImageBackground onPress={this.pressedButton} source={{
        uri: this.props.uri,
      }}
      style={{width: 415, height: 320}}
    >
        <TouchableOpacity onPress={this.pressedButton}  style={styles.tyoeOfTask}>
          <Text style={styles.TOTpreviewText} >{this.props.type}</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}


class CategoryScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TypeOfTask type="Home" page='EducationalCards' uri='https://i.imgur.com/lWVxcz7.png' navigate={this.props.navigation.navigate}/>
        <TypeOfTask type="School" page='HomeCard' uri='https://i.imgur.com/tZQ4oPf.png' navigate={this.props.navigation.navigate}/>
      </View>
    );
  }
}


{/*CLASS FOR MAKING BUTTONS*/}
export class AButtonMintGreen extends Component {
  pressedButton = () => {
    //this.props.navigate(this.props.page, {});
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


class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style = {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

      <ScrollView style={{width: 320}}>
      <View style = {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Image
          style={{width: 150, height: 150, margin: 10, borderRadius:75 }}
          source={require('./assets/tay.jpg')}
        />
        <Text>Taylor Swift</Text>
        <Text>⭐⭐⭐⭐⭐</Text>
        <View style={styles.profileSty}>
          <Text>Title: Singer</Text>
          <Text>Quote: "Look what you made me do!"</Text>
          <Text>$100/ hour</Text>

        </View>

      </View>


 
        </ScrollView>




      </View>

       
      </View>
    );
  }
}

class SettingsScreen extends Component {
  render() {
    return (

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView style={{width: 320}}>
      <View style = {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Image
          style={{width: 150, height: 150, margin: 10, borderRadius:75 }}
          source={require('./assets/tay.jpg')}
        />
        <Text>Taylor Swift</Text>
      
      </View>
        
        <AButtonMintGreen text='Account Managment' />
        <AButtonMintGreen text='Notifications' page='EducationalCards' navigate={this.props.navigation.navigate} />
        <AButtonMintGreen text='Location' page='EducationalCards' navigate={this.props.navigation.navigate} />
        <AButtonMintGreen text='Support / Help' page='EducationalCards' navigate={this.props.navigation.navigate} />
        <AButtonMintGreen text='Report User' page='EducationalCards' navigate={this.props.navigation.navigate} />
        <AButtonMintGreen text='User Agreement' page='EducationalCards' navigate={this.props.navigation.navigate} />
        <AButtonMintGreen text='Terms of Services' page='EducationalCards' navigate={this.props.navigation.navigate} />
        <AButtonMintGreen text='About' page='EducationalCards' navigate={this.props.navigation.navigate}  />

 
        </ScrollView>
      </View>

    );
  }
}

export default createBottomTabNavigator({
  Featured: FeatScreen,
  Categories: CategoryScreen,
  Profile: HomeScreen,
  Settings: SettingsScreen,
});




const styles = StyleSheet.create({

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderTopWidth: 1,
    borderColor: '#000000',

  },
  container: {

    paddingBottom: 5,
    flex: 1,

  }, 
    previewText:{
    paddingLeft: 15,
    paddingTop: 25,
    paddingBottom: 5,
    backgroundColor: '#fff',
    color: 'rgba(0,0,0,1)',
    fontSize: 18,

  }, border:{
    borderRadius: 0,
    borderWidth: 1,
    borderColor: '#000000',
  }, tyoeOfTask:{
    height:330,

  }, TOTpreviewText:{
    marginTop: 250,
    marginLeft: 20,
    fontSize: 40,
    color: 'white',
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
  },
  profileSty:{

    backgroundColor: '#99e1d9',
    borderRadius: 10,
    padding: 20,
    marginTop: 30,


  }
})


