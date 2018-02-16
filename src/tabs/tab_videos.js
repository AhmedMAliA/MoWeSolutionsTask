import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    CameraRoll,
    ScrollView,
    ActivityIndicator,
} from 'react-native';

import VideoItem from './video_item';
import * as Common from '../home/common';

/**
 * This component suppose to hold 15 videos from gallery
 */
export default class Videos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            videosLoaded: false
        }
    }

    /** 
     * Getting videos from gallery
    */
    componentWillMount() {
        CameraRoll.getPhotos({ first: 15, assetType: "Videos" }).then(
            (data) => {
                const assets = data.edges;
                const videos = assets.map((asset) => asset.node.image);
                this.setState({
                    videosLoaded: true,
                    videos: videos
                })
            },
            (error) => {
                console.warn(error);
            }
        );
    }

    render() {
        /* Show preloading panel untill the videos loaded */
        if (this.state.videosLoaded) {
            return (
                <ScrollView style={styles.container}>
                    {this.state.videos.map((video, i) =>
                        <VideoItem videoPath={video} key={i} />
                    )}
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
});

