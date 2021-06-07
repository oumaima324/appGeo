import MapView,  { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { Marker } from 'react-native-maps';
import { ClusterMap } from 'react-native-cluster-map';

import React, {Component} from 'react';
import {Text, View, StyleSheet,FlatList} from 'react-native';
import {List} from '../Data/MapData';
import { TouchableHighlight } from 'react-native-gesture-handler';


export default class MapF extends Component{
    constructor(props) {
        super(props);
        this.state={};
      }

    
      
        render(){
            return(
           <View>
            <FlatList
            keyExtractor = {(item, index) => index.toString()}
             data={List}
             renderItem = {({ item }) => (
            <ListItem bottomDivider>
           <Avatar source={{uri: item.avatar_url}} />
             <ListItem.Content>
            <ListItem.Title>{`${item.name} ${item.vitesse}`}</ListItem.Title>
            <ListItem.Subtitle>{item.Heure}</ListItem.Subtitle>
            </ListItem.Content>
            

        </ListItem>
      )}
    />
             
             </View>
);
            }
        }


            


