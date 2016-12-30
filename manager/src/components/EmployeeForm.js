import React, { Component } from 'react';
import { connect } from 'react-redux';

import { employeeUpdate } from '../actions';
import {
  Card,
  CardSection,
  Input,
  Selector,
} from './common';

class EmployeeForm extends Component {
  static propTypes = {
    children: React.PropTypes.node,
    employeeUpdate: React.PropTypes.func.isRequired,
    name: React.PropTypes.string.isRequired,
    phone: React.PropTypes.string.isRequired,
    shift: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Name'
            onChangeText={(text) => this.props.employeeUpdate('name', text)}
            placeholder='Jane'
            value={this.props.name}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Phone'
            onChangeText={(text) => this.props.employeeUpdate('phone', text)}
            placeholder='555-555-5555'
            value={this.props.phone}
          />
        </CardSection>

        <CardSection>
          <Selector
            label='Shift'
            onValueChange={text => this.props.employeeUpdate('shift', text)}
            options={[
              { label: 'Monday', value: 'monday' },
              { label: 'Tuesday', value: 'tuesday' },
              { label: 'Wednesday', value: 'wednesday' },
              { label: 'Thursday', value: 'thursday' },
              { label: 'Friday', value: 'friday' },
              { label: 'Saturday', value: 'saturday' },
              { label: 'Sunday', value: 'sunday' },
            ]}
            selectedValue={this.props.shift}
          />
        </CardSection>

        { this.props.children }
      </Card>
    );
  }
}

export default connect(null, {
  employeeUpdate,
})(EmployeeForm);
