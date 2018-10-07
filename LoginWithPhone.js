import React, { Component } from 'react';
import { StyleSheet, StatusBar, Text, View, Image } from 'react-native';
import { AppRegistry } from 'react-native';



export default class LoginWithPhone extends Component {
  render() {
    return (
      <View style={styles.base}>
      <StatusBar backgroundColor="black" />
        
         <PersonSmall title='Johns Lawn Mowing'  quote='I love it' cost='$50'  username='John Doe' rating='⭐⭐☆☆☆' />
         <PersonSmall title='Johns Lawn Mowing'  quote='I love it' cost='$50'  username='John Doe' rating='5/5' />
         <PersonSmall title='Johns Lawn Mowing'  quote='I love it' cost='$50'  username='John Doe' rating='5/5' />
         <PersonSmall title='Johns Lawn Mowing'  quote='I love it' cost='$50'  username='John Doe' rating='5/5' />
         <PersonSmall title='Johns Lawn Mowing'  quote='I love it' cost='$50'  username='John Doe' rating='5/5' />
         <PersonSmall title='Johns Lawn Mowing'  quote='I love it' cost='$50'  username='John Doe' rating='5/5' />
         <PersonSmall title='Johns Lawn Mowing'  quote='I love it' cost='$50'  username='John Doe' rating='5/5' />

      </View>

    );
  }
}

class PersonSmall extends Component {
  render()
  {
      return(

      //Create the outside container.
  


      <View style={styles.container}>
        <View style={{flexDirection: 'column',justifyContent: 'center', alignItems: 'center',  marginRight: 50,}}>
             <Image
               style= {{width: 80, height: 80,}}
               source={require('./assets/blankPerson.jpg')}
               />
               <Text>{this.props.username}</Text>
        </View>

        <View style={{flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
           <Text style={{padding: 5}}>{this.props.title}</Text>

            <Text style={{padding: 5}}>{this.props.quote}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{position: "absolute", right: 65}}>{this.props.cost}</Text>
              <Text style={{position: "absolute", left: 35}}>{this.props.rating}</Text>
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