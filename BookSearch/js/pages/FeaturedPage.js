import React, { Component } from 'react';
import {
    ActivityIndicator,
    NavigatorIOS,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import BookList from '../components/BookList';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loading: {
       alignItems: 'center',
       flex: 1,
       justifyContent: 'center',
    }
});

export default class FeaturedPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            isLoading: true,
        };
    }

    componentDidMount() {
       this.fetchData();
    }

    fetchData() {
       fetch('https://www.googleapis.com/books/v1/volumes?q=subject:fiction')
       .then((response) => response.json())
       .then((responseData) => {
           this.setState({
                books: responseData.items,
                isLoading: false,
           });
       })
       .done();
    }

    renderLoadingText() {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size='large' />
                <Text>Loading books...</Text>
            </View>
        );
    }

    render() {
        if(this.state.isLoading) {
            return this.renderLoadingText();
        }

        return (
            <NavigatorIOS
                initialRoute={{
                    component: BookList,
                    passProps: {
                        books: this.state.books,
                    },
                    title: 'Featured Books',
                }}
                style={styles.container}
            />
        );
    }
}
