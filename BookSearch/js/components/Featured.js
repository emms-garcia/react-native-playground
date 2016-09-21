import React, { Component } from 'react';
import {
    NavigatorIOS,
    StyleSheet,
} from 'react-native';

import BookList from './BookList';

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default class Featured extends Component {
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    title: 'Featured Books',
                    component: BookList
                }}
                style={styles.container}
            />
        );
    }
}
