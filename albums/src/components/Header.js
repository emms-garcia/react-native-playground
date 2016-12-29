import React from 'react';
import { Text, View } from 'react-native';

const styles = {
  textStyle: {
    fontSize: 20,
  },
  viewStyle: {
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    elevation: 2,
    height: 60,
    justifyContent: 'center',
    paddingTop: 15,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.2,
  },
};

const Header = ({ text }) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{ text }</Text>
    </View>
  );
};

Header.propTypes = {
  text: React.PropTypes.string.isRequired,
};

export default Header;
