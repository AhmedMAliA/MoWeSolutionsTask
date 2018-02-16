import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator
} from 'react-native';

import * as Common from '../home/common';

/**
 * This class contain item details from the listview
 */
export default class ItemDetails extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<View style={styles.container}>
            <Text style={styles.title} >{this.props.navigation.state.params.movie.title + "'s Details"}</Text>
            <View style={styles.item}>
                <Text style={styles.movie_txt} >{"Movie name : " + this.props.navigation.state.params.movie.title}</Text>
                <Text style={styles.movie_txt} >{"Release year : " + this.props.navigation.state.params.movie.releaseYear}</Text>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: '#fff',
    },
    movie_txt: {
        fontSize: 20,
        textAlign: 'left',
        color: "black",
        textAlignVertical: 'center',
        margin: "auto"
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        height: 70,
        margin: 10,
        color: "black",
        textAlignVertical: 'center',
    },
    item: {
        width: "96%",
        height: 150,
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: 'gray',
        margin: 10,
        borderRadius: 5,
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "center"
    }
});
