import React, { Component } from 'react';
<<<<<<< HEAD
import { StyleSheet, View , Text} from 'react-native';
import { FloatingAction } from "react-native-floating-action";
=======
import { View , StyleSheet} from 'react-native';
import ActionButton from 'react-native-action-button';
import HeaderComponent from '../components/HeaderComponent';
import { Icon } from 'react-native-elements';
>>>>>>> imane

const actions = [
{
  text: "Accessibility",
  icon: require("../images/Logoo.png"),
  name: "Logoo",
  position: 2
},
{
  text: "Language",
  icon: require("../images/voiture.png"),
  name: "voiture",
  position: 1
},
{
  text: "Location",
  icon: require("../images/voiture2.png"),
  name: "voiture2",
  position: 3
},
{
  text: "Video",
  icon: require("../images/img.png"),
  name: "img",
  position: 4
}
];

<<<<<<< HEAD
=======

>>>>>>> imane
class Service extends Component {

  render() {
    return (
<<<<<<< HEAD
      <View style={styles.container}>
  <Text style={styles.example}>Floating Action example</Text>
  <FloatingAction
    actions={actions}
    onPressItem={name => {
      console.log(`selected button: ${name}`);
    }}
    ref={(ref) => { this.floatingAction = ref; }}

  />

</View>
=======
   




      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
        <HeaderComponent label='Service' 
    style={{paddingBottom: 15,paddingTop: 15, backgroundColor:'#C0C0C0'}}/>

        {/* Rest of the app comes ABOVE the action button component !*/}
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="Autres" onPress={() => this.props.navigation.navigate('Autres')}>
          <Icon name='fa-gear' type='font-awesome-6'color='#A71F3C' />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Vidange" onPress={() => this.props.navigation.navigate('Vidange')}>
          <Icon name='fa-gear' type='font-awesome-6'color='#A71F3C' /> 
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="Visite Technique" onPress={() => this.props.navigation.navigate('VisiteTechnique')}>
          <Icon name='align-justify' type='font-awesome-6'color='#A71F3C' /> 
          </ActionButton.Item>
      
        <ActionButton.Item buttonColor='#1abc9c' title="Assurance" onPress={() => this.props.navigation.navigate('Assurance')}>
            <Icon name='align-justify' type='font-awesome-6' color='#A71F3C' />
          </ActionButton.Item>
        </ActionButton>

      </View>
>>>>>>> imane
    );
  }

}
export default Service;

<<<<<<< HEAD
const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
=======
>>>>>>> imane
