import { Title } from 'native-base';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  View,
  Animated,
  Image,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';

export default class ActionButton extends Component {
  state = {
    animation: new Animated.Value(0),
  };
  toggleOpen = () => {

    if (this._open) {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1000,
      }).start();

    } else {

      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 1000,
      }).start();
    }
    this._open = !this._open

  };
  render() {
    const printInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -90],
    });
    const saveInterpolate = this.state.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, -80, -180],
    });

    const printStyle = {
      transform: [
        {
          translateY: printInterpolate,
        },
      ],
    };

    const saveStyle = {
      transform: [
        {
          translateY: saveInterpolate,
        },
      ],
    };
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.background]}>
          <TouchableWithoutFeedback buttonColor="rgba(231,76,60,1)" onPress={() => Alert.alert('printIcon')}>
            <Animated.View style={[styles.button, saveStyle]}>
             <Text> aaaa </Text>
             <Icon name="md-create" style={styles.actionButtonIcon} />
            </Animated.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => Alert.alert('printIcon')}>
            <Animated.View style={[styles.button, printStyle]}>
              <Text> visite technique </Text>
              <Image
                style={styles.iconStyle}
                resizeMode="contain"
                source={{
                  uri:
                    'https://cdn4.iconfinder.com/data/icons/developer-set-3/128/settings-512.png',
                }}
              />
            </Animated.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.toggleOpen()}>
            <Animated.View style={[styles.button]}>
              <Image
                style={styles.iconStyle}
                resizeMode="contain"
                source={{ uri: 'https://img.icons8.com/cotton/2x/plus.png' }}
              />
            </Animated.View>
          </TouchableWithoutFeedback>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor: '#f3f3f3'
  },
  background: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
  },
  button: {
    // backgroundColor: 'grey',
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
    alignSelf: 'center',
    shadowRadius: 4,
    shadowOpacity: 1,
    borderRadius: 40,
    borderBottomColor: 12,
    width: 70,
    height: 70,
  },
  iconStyle: {
    width: 60,
    height: 60,
  },
});