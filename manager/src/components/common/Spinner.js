import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
};

Spinner.propTypes = {
  size: React.PropTypes.string,
};

export { Spinner };
