import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
} from 'react-native';
import { TabNavigator } from "react-navigation";

import Images from './tab_images';
import Videos from './tab_videos';

/**
 * This is the tabs parent that contain images and videos components
 */
export default class TabsNavComponent extends Component {

    render() {

        const TabsNav = TabNavigator({
            Images: {
                screen: Images,
            },
            Videos: {
                screen: Videos,
            },
        }, {
                tabBarPosition: 'top',
                animationEnabled: true,
                tabBarOptions: {
                    activeTintColor: '#e91e63',
                },
            });

        return <TabsNav />
    }
}


