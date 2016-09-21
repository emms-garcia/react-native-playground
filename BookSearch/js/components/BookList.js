import React, { Component } from 'react';
import {
    Image,
    ListView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

const styles = StyleSheet.create({
    author: {
        color: '#656565'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10
    },
    listView: {
       backgroundColor: '#F5FCFF'
    },
    rightContainer: {
        flex: 1
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    thumbnail: {
        width: 53,
        height: 81,
        marginRight: 10
    },
});

export default class BookList extends Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: dataSource.cloneWithRows(props.books),
        };
    }

    renderBook(book) {
        return (
            <TouchableHighlight>
                <View>
                    <View style={styles.container}>
                        <Image
                            source={{uri: book.volumeInfo.imageLinks.thumbnail.replace('http', 'https')}}
                            style={styles.thumbnail} />
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{book.volumeInfo.title}</Text>
                            <Text style={styles.author}>{book.volumeInfo.authors}</Text>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
        );
    }

    render() {
       return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderBook.bind(this)}
                style={styles.listView} />
        );
    }
}
