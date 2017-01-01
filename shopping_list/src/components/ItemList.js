import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchItems } from '../actions';
import { Card, CardSection } from './common';
import Item from './Item';
import { itemProp } from '../utils';

const styles = {
  footerTextStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
  },
  headerTextStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
  },
};

class ItemList extends Component {
  static propTypes = {
    items: React.PropTypes.arrayOf(itemProp),
  };

  componentWillMount() {
    this.props.fetchItems();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ items }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.dataSource = ds.cloneWithRows(items);
  }

  renderRow(item) {
    return <Item item={item} />;
  }

  renderBody() {
    if (this.props.items.length) {
      return this.renderList();
    }
    return (
      <CardSection>
        <Text style={styles.totalTextStyle}>No Items</Text>
      </CardSection>
    );
  }

  renderFooter() {
    let total = 0;
    this.props.items.forEach((item) => {
      total += (item.quantity * item.price);
    });
    return (
      <CardSection>
        <Text style={styles.footerTextStyle}>Total: ${total}</Text>
      </CardSection>
    );
  }

  renderHeader() {
    return (
      <CardSection>
        <View style={{ flex: 2, height: 20 }}>
          <Text style={styles.headerTextStyle}>Name</Text>
        </View>
        <View style={{ flex: 1, height: 20 }}>
          <Text style={styles.headerTextStyle}>Price</Text>
        </View>
        <View style={{ flex: 1, height: 20 }}>
          <Text style={styles.headerTextStyle}>Subtotal</Text>
        </View>
      </CardSection>
    );
  }

  renderList() {
    return (
      <View>
        <ListView
          dataSource={this.dataSource}
          renderFooter={this.renderFooter.bind(this)}
          renderHeader={this.renderHeader.bind(this)}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }

  render() {
    return (
      <Card>{ this.renderBody() }</Card>
    );
  }
}

const mapStateToProps = (state) => {
  const items = [];
  Object.keys(state.items).forEach((uid) => {
    items.push({ ...state.items[uid], uid });
  });
  return { items };
};

export default connect(mapStateToProps, { fetchItems })(ItemList);
