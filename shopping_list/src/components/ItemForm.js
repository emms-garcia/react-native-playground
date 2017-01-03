import React from 'react';
import { View } from 'react-native';

import { CardSection, Input } from './common';

const ItemForm = ({ autoFocus, children, name, quantity, price, updateItemForm }) => {
  return (
    <View>
      <CardSection>
        <Input
          autoFocus={autoFocus}
          label='Name'
          onChangeText={(value) => updateItemForm('name', value)}
          placeholder='milk'
          value={name}
        />
      </CardSection>

      <CardSection>
        <Input
          keyboardType='numeric'
          label='Quantity'
          onChangeText={(value) => updateItemForm('quantity', value)}
          placeholder='1'
          value={quantity}
        />
      </CardSection>

      <CardSection>
        <Input
          keyboardType='numeric'
          label='Price'
          onChangeText={(value) => updateItemForm('price', value)}
          placeholder='0'
          value={price}
        />
      </CardSection>

      { children }
    </View>
  );
};

ItemForm.propTypes = {
  checked: React.PropTypes.bool.isRequired,
  name: React.PropTypes.string.isRequired,
  quantity: React.PropTypes.string.isRequired,
  price: React.PropTypes.string.isRequired,
  updateItemForm: React.PropTypes.func.isRequired,
};

export default ItemForm;
