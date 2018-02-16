import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import * as Common from '../home/common';

/**
 * This component holds the drawer menu items 
 */
export default class DrawerItems extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo_container}>
                    <Image source={{ uri: Common.MOWE_LOGO }}
                        style={styles.logo_img} />
                </View>
                <View style={{ flex: 3 }}>
                    <Text style={styles.menu_entry}
                        onPress={() => this.props.itemClicked(Common.LISTVIEW_ENTRY)}>
                        {Common.FIRST_ENTRY}
                    </Text>
                    <Text style={styles.menu_entry}
                        onPress={() => this.props.itemClicked(Common.TAB_NAV)}>
                        {Common.SECOND_ENTRY}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    logo_container: {
        flex: 1,
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: 'white'
    },
    menu_entry: {
        fontSize: 22,
        textAlign: 'left',
        marginLeft: 20,
        marginTop: 15,
        width: "80%",
        color: "white"
    },
    logo_img: {
        width: 120,
        marginLeft: "auto",
        marginRight: "auto",
        aspectRatio: 2.7
    }
});

