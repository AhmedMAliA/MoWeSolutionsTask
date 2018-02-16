import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    ActivityIndicator,
    TouchableHighlight
} from 'react-native';

import Video from 'react-native-video';

import * as Common from '../home/common';

/**
 * This component holds a single video item
 */
export default class VideoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            volume: 0.0
        }
    }

    /**
     * This method use to turn the video voice on and off 
     */
    toggleVoice() {

        this.setState({
            volume: this.state.volume == 0.0 ? 1.0 : 0.0
        })
    }
    render() {
        return (
            <TouchableHighlight onPress={() => this.toggleVoice()} underlayColor={null}>
                <Video source={{ uri: this.props.videoPath.uri }}   // Can be a URL or a local file.
                    ref={(ref) => {
                        this.player = ref
                    }}                                      // Store reference
                    rate={1.0}                              // 0 is paused, 1 is normal.
                    volume={this.state.volume}
                    resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
                    repeat={true}                           // Repeat forever.
                    playInBackground={false}                // Audio continues to play when app entering background.
                    style={styles.video}

                />
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    video: {
        width: "75%",
        marginLeft: "auto",
        marginRight: "auto",
        aspectRatio: 1
    }
});
