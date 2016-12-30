import React, { Component } from 'react';
import { connect } from 'react-redux';

import { employeeCreate } from '../actions';
import { CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  static propTypes = {
    employeeCreate: React.PropTypes.func.isRequired,
    name: React.PropTypes.string.isRequired,
    phone: React.PropTypes.string.isRequired,
    shift: React.PropTypes.string.isRequired,
  };

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'monday' });
  }

  render() {
    return (
      <EmployeeForm {...this.props}>
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Create
            </Button>
          </CardSection>
      </EmployeeForm>
    );
  }
}

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate);
