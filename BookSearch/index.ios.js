import React, { Component } from 'react';
import {
    AppRegistry,
    TabBarIOS,
} from 'react-native';

import FeaturedPage from './js/pages/FeaturedPage';
import SearchPage from './js/pages/SearchPage';

class BookSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'featured',
        };
    }

    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    onPress={() => {
                        this.setState({
                            selectedTab: 'featured',
                        });
                    }}
                    selected={this.state.selectedTab === 'featured'}
                    systemIcon={'featured'} >
                    <FeaturedPage/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    onPress={() => {
                        this.setState({
                            selectedTab: 'search',
                        });
                    }}
                    selected={this.state.selectedTab === 'search'}
                    systemIcon={'search'} >
                    <SearchPage/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

AppRegistry.registerComponent('BookSearch', () => BookSearch);
