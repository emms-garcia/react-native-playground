import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const styles = {
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
};

const Button = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>
        { text || 'Button' }
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  label: React.PropTypes.string,
  onPress: React.PropTypes.func.isRequired,
};

export default Button;
