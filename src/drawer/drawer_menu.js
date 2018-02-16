import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid
} from 'react-native';

import DrawerItems from './drawer_items'
import * as Common from '../home/common';
import Welcome from '../home/welcome'

/**
 * This class represent the drawer mwnu 
 */
export default class DrawerMenu extends Component {

  /* Handle each menu item click */
  itemClicked(item) {
    this.props.navigation.navigate(item);
  }
  render() {
    var navigationView = (
      <DrawerItems itemClicked={(item) => this.itemClicked(item)} />
    );
    return (
      <DrawerLayoutAndroid
        drawerWidth={230}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        <Welcome />
      </DrawerLayoutAndroid>
    );
  }
}