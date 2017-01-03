import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const styles = {
  cellStyle: { flex: 0.33, padding: 7 },
  containerStyle: {
    backgroundColor: '#eee',
    borderColor: '#ccc',
    borderTopWidth: 1,
    height: 40,
    flexDirection: 'row',
  },
  textStyle: {
    color: '#007aff',
    fontSize: 17,
    fontWeight: '400',
    justifyContent: 'center',
    textAlign: 'center',
  },
};

export const FooterMenu = ({ leftText, onLeftPress, onRightPress, rightText }) => {
  const { cellStyle, containerStyle, textStyle } = styles;
  return (
    <View style={containerStyle}>
      <TouchableOpacity style={cellStyle} onPress={onLeftPress}>
        <Text style={textStyle}>{ leftText }</Text>
      </TouchableOpacity>
      <TouchableOpacity style={cellStyle} onPress={onRightPress}>
        <Text style={textStyle}>{ rightText }</Text>
      </TouchableOpacity>
    </View>
  );
};
