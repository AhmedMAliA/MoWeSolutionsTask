import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Easing,
  Animated
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation'

import DrawerMenu from '../drawer/drawer_menu'
import DrawerItems from '../drawer/drawer_items'
import ListComponent from '../list/list.js'
import ItemDetails from '../list/item'
import TabsNavComponent from '../tabs/tab_container'

/**
 * This is the main conntroller that that contains the navigator 
 */
export default class AppController extends Component {

  render() {
    return (
      <AppNavigator />
    );
  }
}

/**
 * This class holds the navigator whitch contains all screens of the app.
 */
class AppNavigator extends Component {

  render() {
    const NAV = StackNavigator({
      DrawerMenu: { screen: DrawerMenu },
      DrawerItems: { screen: DrawerItems },
      ListComponent: { screen: ListComponent },
      ItemDetails: { screen: ItemDetails },
      TabsNavComponent: { screen: TabsNavComponent },

    },
      {
        headerMode: 'none',
        mode: 'modal',
        transitionConfig: () => ({
          transitionSpec: {
            duration: 1000,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
          },
          screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps;
            const { index } = scene;

            const height = layout.initHeight;
            const translateY = position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [height, 0, 0],
            });

            const opacity = position.interpolate({
              inputRange: [index - 1, index - 0.99, index],
              outputRange: [0, 1, 1],
            });

            return { opacity, transform: [{ translateY }] };
          },
        }),
      }
    );
    return <NAV />

  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
