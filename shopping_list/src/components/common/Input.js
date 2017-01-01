import React from 'react';
import { TextInput, Text, View } from 'react-native';

const styles = {
  containerStyle: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: 40,
  },
  inputStyle: {
    color: '#000',
    flex: 2,
    fontSize: 18,
    lineHeight: 23,
    paddingRight: 5,
    paddingLeft: 5,
  },
  labelStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20,
  },
};

const Input = (props) => {
  const { containerStyle, labelStyle, inputStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{props.label}</Text>
      <TextInput
        autoCorrect={false}
        style={inputStyle}
        {...props}
      />
    </View>
  );
};

Input.propTypes = {
  label: React.PropTypes.string.isRequired,
  ...TextInput.propTypes,
};

export { Input };
