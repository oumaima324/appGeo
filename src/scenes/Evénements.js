import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import Searchbar from '../components/Searchbar';

class Evénements extends Component {
  render () {
    return (
      <View>

<<<<<<< HEAD
      <HeaderComponent >  Evénement</HeaderComponent>
=======
      <HeaderComponent label='Evénements' style={{paddingBottom: 15,paddingTop: 15, backgroundColor:'#C0C0C0'}}/>
>>>>>>> imane

      <View style = {styles.lineStyle} />


      <Searchbar> </Searchbar>

      </View>

    )
  }

  }
  const styles = StyleSheet.create({
    lineStyle:{
          borderWidth: 5,
          borderColor:'#808080',
          margin:0,
        },
          });

  export default Evénements;
