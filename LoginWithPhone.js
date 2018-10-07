import React, { Component } from 'react';
import { StyleSheet, StatusBar, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native';



export default class LoginWithPhone extends Component {
  render() {
    return (
      <View style={styles.base}>
      <StatusBar backgroundColor="black" />
      <ScrollView>
         <PersonSmall title='FrontEnd Developer'  quote='Quote: Living a life' cost='$50'  username='Ali Malik' rating='⭐⭐☆☆☆' />
         <PersonSmall title='Designer'  quote='Quote: Something' cost='$20'  username='Jake Davis' rating='⭐☆☆☆☆' />
         <PersonSmall title='Backend Developer'  quote='Quote: Something' cost='$70'  username='Austin Higgins' rating='⭐⭐⭐☆☆' />
         <PersonSmall title='Backend Developer'  quote='Quote: Dinosaur' cost='$50'  username='Brandon Bartosek' rating='⭐⭐⭐⭐⭐' />
         <PersonSmall title='Johns Lawn Mowing'  quote='Quote: I love it' cost='$50'  username='John Doe' rating='⭐⭐⭐⭐☆' />
         </ScrollView>
      </View>

    );
  }
}

export class PersonSmall extends Component {
  render()
  {
      return(
      <View style={styles.container}>
        <View style={{flexDirection: 'column',justifyContent: 'center', alignItems: 'center',  marginRight: 50,}}>
             <Image
               style= {{width: 80, height: 80,}}
               source={require('./assets/blankPerson.jpg')}
               />
               <Text style={{width:60}} >{this.props.username}</Text>
        </View>

        <View style={{flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
           <Text style={{padding: 5}}>{this.props.title}</Text>

            <Text style={{padding: 5}}>{this.props.quote}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{padding:20}}>{this.props.cost}</Text>
              <Text style={{padding:20}}>{this.props.rating}</Text>
            </View>
        </View>
      

      </View>

      );

  }
  
}



const styles = StyleSheet.create({
  base:{
    flex:1,
    backgroundColor: '#636363',
    padding: 20,
    
  },
  container: {
    
    flexDirection: 'row',

    backgroundColor: '#FFF',
    borderRadius:75,
    borderWidth: 2,
    borderColor: '#99e1d9',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 30,
    marginTop: 20
    
    
    }

});