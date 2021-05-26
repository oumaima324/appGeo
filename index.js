/**
 * @format
 */
import React, {Component} from 'react';
import {Text, View, AppRegistry} from 'react-native';


import Apps from './src/navigation/Apps';
import Service  from './src/scenes/Service';
import ExpandableComponent  from './src/components/ExpandableComponent';
import ButtonExpandable from './src/components/ButtonExpandable';
import Actions from './src/scenes/Actions';

import DateComponent  from './src/components/DateComponent';



AppRegistry.registerComponent('TrackingApp', () =>Apps);

