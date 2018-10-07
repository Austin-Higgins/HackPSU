
import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';


class Card extends Component{
  render(){
    return(
      <View>
      <TouchableOpacity onPress={this.props.file} style={styles.border}>                
        <Text style={styles.previewText}>{this.props.type}</Text>
      </TouchableOpacity>
      </View>
    );
  }
}


export default class HomeCard extends Component{
  render(){
    return(
      <View style={styles.container}>
        <ScrollView>
        <Card type="Tutoring"/>
        <Card type="Note Taking"/>
        <Card type="Exam Preparation"/>
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


