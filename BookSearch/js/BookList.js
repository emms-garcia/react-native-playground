import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10
    },
    thumbnail: {
        width: 53,
        height: 81,
        marginRight: 10
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    author: {
        color: '#656565'
    }
});

const FAKE_BOOK_DATA = [
    {
        volumeInfo: {
            authors: "J. D. Salinger",
            imageLinks: {
                thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/32/Rye_catcher.jpg'
            },
            title: 'The Catcher in the Rye',
        }
    }
];

export default class BookList extends Component {
    render() {
        const book = FAKE_BOOK_DATA[0];
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: book.volumeInfo.imageLinks.thumbnail}}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{book.volumeInfo.title}</Text>
                    <Text style={styles.author}>{book.volumeInfo.authors}</Text>
                </View>
            </View>
        );
    }
}
