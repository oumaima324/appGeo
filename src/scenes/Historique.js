import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';
import { StyleSheet, View, Text, FlatList, SafeAreaView} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import ListOptions from '../components/ListOptions';
import ListV from '../components/ListV';
import ButtonComponent from '../components/ButtonComponent';

class Historique extends Component {


  render () {
    return (
      <View>

<<<<<<< HEAD
      <HeaderComponent> Historique </HeaderComponent>
=======
   <HeaderComponent label='Historique' 
    style={{paddingBottom: 15,paddingTop: 15, backgroundColor:'#C0C0C0'}}/>
      <View style = {styles.lineStyle} />
>>>>>>> imane
      <View style = {styles.lineStyle} />
        <ListV>  </ListV>
      <Text style={styles.Text}> Options </Text>
         <ListOptions>  </ListOptions>
         <SafeAreaView style={{flexDirection:'row',alignItems:'center',}}>
        <View style={styles.buttonContainer}>
            <ButtonComponent
              label={'Afficher'}
              style={{
                 backgroundColor:'#A71F3C',
                 }}
            />
          </View>
             <View style={styles.buttonContainer}>
             <ButtonComponent
                 label={'Cacher'}
                style={{
                   backgroundColor:'#8A8D8C',
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
              borderWidth: 5,
              borderColor:'#808080',
              margin:0,
         },
         Text:{
           width :'100%',
           height :'10%',
           flexDirection: 'row',
           alignItems: 'center',
           justifyContent: 'center',
           backgroundColor: '#D3D3D3',
             margin:0,
   },

      buttonContainer:{
      flex:1,
},

       });

export default Historique;
