import MapView, { Marker } from 'react-native-maps';
import { ClusterMap } from 'react-native-cluster-map';
import { markers } from '../Data/MapData';
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = { markers};
  
  }
  render() {
    
    var coordinate=(this.props.route.params!==undefined)?[{
         latitude:this.props.route.params.latitude,
          longitude:this.props.route.params.longitude
        }]:this.state.markers;
     
       
         return (
  
        <View style={styles.container}>
       <ClusterMap

      style={styles.map}
      region={{
        latitude: 34.0242,
        longitude: -6.822734,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
       { coordinate.map((marker) => (
                    <Marker
                    key={marker.id}
                   coordinate={{latitude:marker.latitude, longitude:marker.longitude}}
                              
                   />
                         ))}

  
</ClusterMap>

  </View>
);
  }

};
export default Map;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 1000,
    width: 1000,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});