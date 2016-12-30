import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { CardSection } from './common';
import { employeeProp } from '../Utils';

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

class EmployeeDetail extends Component {
  static propTypes = {
    employee: employeeProp,
  };

  onRowPress() {
    Actions.employeeEdit({ employee: this.props.employee });
  }

  render() {
    const { name } = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{ name }</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default EmployeeDetail;
