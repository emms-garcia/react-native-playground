import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from './common';
import Item from './Item';
import { itemProp } from '../Utils';

const styles = {
  totalTextStyle: {
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
  },
};

class ItemList extends Component {
  static propTypes = {
    items: React.PropTypes.arrayOf(itemProp),
  };

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

  renderList() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    let total = 0;
    this.props.items.forEach((item) => {
      total += (item.quantity * item.price);
    });

    return (
      <View>
        <ListView
          dataSource={ds.cloneWithRows(this.props.items)}
          renderRow={this.renderRow.bind(this)}
        />
        <CardSection>
          <Text style={styles.totalTextStyle}>Total: ${total}</Text>
        </CardSection>
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

export default connect(mapStateToProps)(ItemList);
