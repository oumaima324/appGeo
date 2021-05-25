import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import Searchbar from '../components/Searchbar';

class Rapports extends Component {
  render () {
    return (
      <View>

      <HeaderComponent >  Rapports Quotidiens </HeaderComponent>

      <View style = {styles.lineStyle} />


      <Searchbar> </Searchbar>

      </View>

    )
  }

  }
  const styles = StyleSheet.create({
    lineStyle:{
          borderWidth: 10,
          borderColor:'#DCDCDC',
          margin:0,
        },
          });

  export default Rapports;
