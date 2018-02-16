import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    ActivityIndicator,
    ToastAndroid,
    TouchableHighlight,
} from 'react-native';

import * as Common from '../home/common';

/**
 * This class use to fetch from API and parse the data to list of items
 */
export default class ListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        }
    }

    componentDidMount() {

        /* Call fetch method */
        this.getData();
    }

    /**
     * This method use to fetch data from url
     */
    getData() {

        /* Options data */
        var requestOptions = {
            method: Common.METHOD_TYPE,
            headers: Common.HEADERS
        };

        fetch(Common.REQUEST_URL, requestOptions)
            .then((response) => response.json())
            .then((responseJson) => {
                /* Handle response */
                if (responseJson !== null) {
                    /* handle success */
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(responseJson.movies),
                        loaded: true
                    })
                } else {
                    /* handle error */
                    ToastAndroid.show("Error : Cannot fetch from =>" + Common.REQUEST_URL, ToastAndroid.SHORT);
                }
            });

    }

    /* Render list items */
    renderItem(itemData) {
        return (
            <TouchableHighlight onPress={() => this.props.navigation.navigate(Common.ITEM_DETAILS, { movie: itemData })}
                underlayColor={null}>
                <View style={styles.item}>
                    <Text style={styles.movie_name} >{itemData.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }
    render() {

        if (!this.state.loaded) {
            return <ActivityIndicator size={"large"} style={styles.container} />
        }
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title} >Simple Movies API </Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderItem.bind(this)}
                    style={styles.listView}
                />
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
    movie_name: {
        fontSize: 25,
        textAlign: 'center',
        height: "100%",
        color: "black",
        textAlignVertical: 'center',
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        height: 50,
        margin: 10,
        color: "black",
        textAlignVertical: 'center',
    },
    item: {
        width: "80%",
        height: 100,
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: 'gray',
        margin: 10,
        borderRadius: 5,
        marginLeft: "auto",
        marginRight: "auto",
    }
});