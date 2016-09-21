import React, { Component } from 'react';
import {
    NavigatorIOS,
    StyleSheet,
} from 'react-native';

import SearchBooks from './SearchBooks';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default class Search extends Component {
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    title: 'Search Books',
                    component: SearchBooks,
                }}
                style={styles.container}
            />
        );
    }
}
