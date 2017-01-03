import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { fetchItems } from '../actions';
import { Card, CardSection, FooterMenu } from './common';
import Item from './Item';
import { itemProp } from '../utils';

const styles = {
  footerTextStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
  },
};

class ItemList extends Component {
  static propTypes = {
    items: React.PropTypes.arrayOf(itemProp),
  };

  state = { sort: false };

  componentWillMount() {
    this.props.fetchItems();
  }

  createDataSource({ items }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.dataSource = ds.cloneWithRows(
      _.sortBy(items, (item) => {
        return this.state.sort ? item.name : item.uid;
      })
    );
  }

  renderRow(item) {
    return <Item editMode={this.props.editMode} item={item} />;
  }

  renderBody() {
    if (this.props.items.length) {
      return this.renderList();
    }

    return (
      <CardSection>
        <Text style={styles.footerTextStyle}>No Items</Text>
      </CardSection>
    );
  }

  renderFooter() {
    return (
      <CardSection>
        <Text style={styles.footerTextStyle}>Total: ${this.props.total.toFixed(2)}</Text>
      </CardSection>
    );
  }

  renderList() {
    this.createDataSource(this.props);
    return (
      <View>
        <ListView
          dataSource={this.dataSource}
          renderFooter={this.renderFooter.bind(this)}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Card>{ this.renderBody() }</Card>
        </ScrollView>
        {
          this.props.editMode && <FooterMenu
            leftText='Delete'
            onRightPress={() => this.setState({ sort: !this.state.sort })}
            rightText={this.state.sort ? 'Unsort' : 'Sort'}
          />
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  let total = 0;
  const items = _.map(state.items, (item, uid) => {
    total += item.quantity * item.price;
    return { ...item, uid };
  });

  return { items, total };
};

export default connect(mapStateToProps, { fetchItems })(ItemList);
