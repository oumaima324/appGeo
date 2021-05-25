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

      <HeaderComponent> Parametres </HeaderComponent>
      <View style = {styles.lineStyle} />
         <Parametre>  </Parametre>
         
        
         <SafeAreaView style={{flexDirection:'row',alignItems:'center',}}>
        <View style={styles.buttonContainer}>
            <ButtonComponent
              label={'Sauvegarder'}
              style={{
                 backgroundColor:'#FA8072',
                 }}
            />
          </View>
             
        </SafeAreaView>







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
