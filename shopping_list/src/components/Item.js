import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

const styles = {
  divisionStyle: {
    borderColor: '#ddd',
    borderRightWidth: 1,
    flex: 1,
  },
  nameTextStyle: {
    flex: 2,
    fontSize: 15,
    textAlign: 'center',
  },
  quantityTextStyle: {
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
  },
  priceTextStyle: {
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
  },
};

const Item = ({ item }) => {
  const {
    divisionStyle,
    nameTextStyle,
    quantityTextStyle,
    priceTextStyle
  } = styles;
  return (
    <TouchableWithoutFeedback onPress={() => Actions.itemEdit({ item })}>
      <View>
        <CardSection>
          <View style={divisionStyle}><Text style={nameTextStyle}>{item.name}</Text></View>
          <View style={divisionStyle}>
            <Text style={quantityTextStyle}>{item.quantity} x ${item.price}</Text>
          </View>
          <View style={{ ...divisionStyle, borderRightWidth: 0 }}>
            <Text style={priceTextStyle}>${item.price * item.quantity}</Text>
          </View>
        </CardSection>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Item;
