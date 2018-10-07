
import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';


import LoginWithPhone from './LoginWithPhone';

class Card extends Component{
  pressedButton = () => {
    this.props.navigate("LoginWithPhone", {});
  }
  render(){
    return(
      <View>
      <TouchableOpacity onPress={this.pressedButton} style={styles.border}>                
        <Text style={styles.previewText}>{this.props.type}</Text>
      </TouchableOpacity>
      </View>
    );
  }
}


export default class EducationalCards extends Component{
  render(){
    return(
      <View style={styles.container}>
        <ScrollView>
        <Card type="Babysitting" navigate={this.props.navigation.navigate}/>
        <Card type="Lawnmowing" navigate={this.props.navigation.navigate}/>
        <Card type="Petsitting" navigate={this.props.navigation.navigate}/>
        <Card type="Car Washing" navigate={this.props.navigation.navigate}/>
        <Card type="General Cleaning" navigate={this.props.navigation.navigate}/>
        <Card type="Laundry" navigate={this.props.navigation.navigate}/>
        <Card type="Floor Cleaning" navigate={this.props.navigation.navigate}/>
        <Card type="Moving" navigate={this.props.navigation.navigate}/>
        </ScrollView>
      </View>

    );
  }
}




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
    marginTop: 270,
    marginLeft: 20,
    fontSize: 40,
    color: 'white',
  }
})


