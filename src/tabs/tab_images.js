import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    CameraRoll,
    ScrollView,
    ActivityIndicator
} from 'react-native';

import * as Common from '../home/common';

/**
 * This component suppose to hold 15 images from gallery
 */
export default class Images extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [],
            imagesLoaded: false
        }
    }
    componentWillMount() {
        CameraRoll.getPhotos({ first: 15 }).then(
            (data) => {
                const assets = data.edges;
                const images = assets.map((asset) => asset.node.image);
                this.setState({
                    imagesLoaded: true,
                    images: images
                })
            },
            (error) => {
                console.warn(error);
            }
        );
    }

    render() {
        /* Show preloading panel untill the photos loaded */
        if (this.state.imagesLoaded) {
            return (
                <ScrollView style={styles.container}>
                    {this.state.images.map((image, i) => <Image key={i} style={styles.img} source={{ uri: image.uri }} />)}
                </ScrollView>
            );
        } else {
            return <ActivityIndicator size={"large"} style={styles.container} />
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img: {
        width: "75%",
        marginLeft: "auto",
        marginRight: "auto",
        aspectRatio: 1
    }
});

