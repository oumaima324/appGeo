import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListSection from '../scenes/ListSection';


const Tab = createBottomTabNavigator();

export default function Apps() {

return (
    <NavigationContainer style={styles.navigationContaier}>
      <Tab.Navigator >
       
        <Tab.Screen name="ListSection" component={ListSection} />
       
      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles= StyleSheet.create({
  name:{
   width :'100%',
   height :'10%',
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: 'red'
  },

});
