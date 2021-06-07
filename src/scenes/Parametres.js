import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';
import { StyleSheet, View, Text, FlatList, SafeAreaView} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import ButtonComponent from '../components/ButtonComponent';

import Parametre from '../components/Parametre';

class Parametres extends Component {
    render () {
      return (
        <View>
  
     <HeaderComponent label='Parametres' 
      style={{paddingBottom: 15,paddingTop: 15, backgroundColor:'#C0C0C0'}}/>
        <View style = {styles.lineStyle} />
        <View style = {styles.lineStyle} />
        <Parametre>  </Parametre>
        <View style={styles.buttonContainer}>
            <ButtonComponent
              label={'Sauvegarder'}
              style={{
                 backgroundColor:'#FA8072',
                 }}
            />
          </View>
             
    






</View>
);
}
}

      const styles = StyleSheet.create({
        lineStyle:{
              borderWidth: 10,
              borderColor:'#DCDCDC',
              margin:0,
         },
         
      buttonContainer:{
      flex:1,
},

       });

export default Parametres;
