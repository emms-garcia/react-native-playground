import React from 'react';
import { Picker, Text, View } from 'react-native';

const styles = {
  containerStyle: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  pickerStyle: {
    flex: 2,
  },
  pickerTextStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20,
  }
};

const Selector = ({ label, onValueChange, options, selectedValue }) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.pickerTextStyle}>{ label }</Text>
      <Picker
        onValueChange={onValueChange}
        selectedValue={selectedValue}
        style={styles.pickerStyle}
      >
        {
          options.map((option, idx) => {
            return (
              <Picker.Item key={idx} label={option.label} value={option.value} />
            );
          })
        }
      </Picker>
    </View>
  );
};

Selector.propTypes = {
  label: React.PropTypes.string,
  onValueChange: React.PropTypes.func,
  options: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      label: React.PropTypes.string.isRequired,
      value: React.PropTypes.string.isRequired,
    }),
  ),
  selectedValue: React.PropTypes.string.isRequired,
};

export { Selector };
