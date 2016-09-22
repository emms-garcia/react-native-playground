import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 75,
    },
    image: {
        height: 165,
        padding: 10,
        width: 107,
    },
    description: {
        color: '#656565',
        fontSize: 15,
        padding: 10,
    }
});

export default class BookDetail extends Component {
    renderImage(book) {
        const imageURI = (typeof book.volumeInfo.imageLinks !== 'undefined') ? book.volumeInfo.imageLinks.thumbnail : '';
        if(imageURI) {
            return (
                <Image style={styles.image} source={{uri: imageURI.replace('http', 'https')}} />
            );
        }
        return (
            <Text>Image not found</Text>
        );
    }

    render() {
        const book = this.props.book;
        const description = (typeof book.volumeInfo.description !== 'undefined') ? book.volumeInfo.description : '';
        return (
            <View style={styles.container}>
                {this.renderImage(book)}
                <Text style={styles.description}>{description}</Text>
            </View>
        );
    }
}
