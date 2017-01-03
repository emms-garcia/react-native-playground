import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { editItem } from '../actions';
import { CardSection } from './common';
import { itemProp } from '../utils';

const styles = {
  divisionStyle: {
    borderColor: '#ddd',
    borderRightWidth: 2,
    height: 20,
  },
  textStyle: {
    flex: 2,
    fontSize: 16,
    textAlign: 'center',
  },
};

class Item extends Component {
  static propTypes = {
    editMode: React.PropTypes.bool,
    item: itemProp.isRequired,
  };

  onLongPress() {
    const { editMode, item } = this.props;
    if (!editMode) {
      Actions.itemEdit({ item });
    }
  }

  onPress() {
    this.props.editItem({
      ...this.props.item,
      checked: !this.props.item.checked,
    });
  }

  render() {
    const { item } = this.props;
    const {
      divisionStyle,
      textStyle,
    } = styles;
    const textDecorationLine = item.checked ? 'line-through' : 'none';
    return (
      <TouchableHighlight
        onLongPress={this.onLongPress.bind(this)}
        onPress={this.onPress.bind(this)}
      >
        <View>
          <CardSection>
            <View style={{ ...divisionStyle, flex: 2 }}>
              <Text style={[textStyle, { textDecorationLine }]}>
                {item.name} : {item.quantity}
              </Text>
            </View>
            <View style={{ ...divisionStyle, flex: 1 }}>
              <Text style={[textStyle, { textDecorationLine }]}>{item.price} (x1)</Text>
            </View>
            <View style={{ ...divisionStyle, flex: 1, borderRightWidth: 0 }}>
              <Text style={[textStyle, { textDecorationLine }]}>
                ${item.price * item.quantity} (x{item.quantity})
              </Text>
            </View>
          </CardSection>
        </View>
      </TouchableHighlight>
    );
  }
}

export default connect(null, { editItem })(Item);
