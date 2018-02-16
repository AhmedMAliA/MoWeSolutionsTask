import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator
} from 'react-native';

import * as Common from '../home/common';

export default class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logoRatio: null
        }
    }
    componentDidMount() {
        Image.getSize(Common.MOWE_LOGO, (realWidth, realHeight) => {
            ratio = realWidth / realHeight;
            this.setState({
                logoRatio: ratio
            })
        }, () => {
            /* Handle failed to get image ratio  */
            ratio = 1;
        });
    }
    render() {
        if (this.state.logoRatio !== null) {
            return (
                <View style={styles.container}>
                    <Image source={{ uri: Common.MOWE_LOGO }}
                        style={[styles.logo_img, { aspectRatio: this.state.logoRatio }]} />
                    <Text style={styles.welcome_msg}>Welcome to MoWe Solutions</Text>
                </View>
            );
        } else {
            return <ActivityIndicator size={"large"} style={styles.container} />
        }

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    welcome_msg: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        width: "80%",
        color: "white"
    },
    logo_img: {
        width: "60%",
        marginLeft: "auto",
        marginRight: "auto",
    }
});
