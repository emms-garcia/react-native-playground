import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

const styles = {
  divisionStyle: {
    borderColor: '#ddd',
    borderRightWidth: 1,
    height: 20,
  },
  textStyle: {
    flex: 2,
    fontSize: 17,
    textAlign: 'center',
  },
};

const Item = ({ item }) => {
  const {
    divisionStyle,
    textStyle,
  } = styles;

  return (
    <TouchableHighlight onPress={() => Actions.itemEdit({ item })}>
      <View>
        <CardSection>
          <View style={{ ...divisionStyle, flex: 2 }}>
            <Text style={textStyle}>{item.name} : {item.quantity}</Text>
          </View>
          <View style={{ ...divisionStyle, flex: 1 }}>
            <Text style={textStyle}>{item.price}</Text>
          </View>
          <View style={{ ...divisionStyle, flex: 1, borderRightWidth: 0 }}>
            <Text style={textStyle}>${item.price * item.quantity}</Text>
          </View>
        </CardSection>
      </View>
    </TouchableHighlight>
  );
};

export default Item;
