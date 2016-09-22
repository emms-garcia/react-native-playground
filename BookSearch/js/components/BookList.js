import React, { Component } from 'react';
import {
    Image,
    ListView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

import BookDetail from './BookDetail';

const styles = StyleSheet.create({
    author: {
        color: '#656565',
    },
    container: {
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
    },
    listView: {
       backgroundColor: '#F5FCFF',
    },
    rightContainer: {
        flex: 1,
    },
    separator: {
        backgroundColor: '#dddddd',
        height: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
    },
    thumbnail: {
        height: 81,
        marginRight: 10,
        width: 53,
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

    showBookDetail(book) {
        this.props.navigator.push({
            component: BookDetail,
            passProps: {book},
            title: book.volumeInfo.title,
        });
    }

    renderBook(book) {
        return (
            <TouchableHighlight
                onPress={() => this.showBookDetail(book)}
                underlayColor='#dddddd'>
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
