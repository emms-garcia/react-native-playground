import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';

import { employeeDelete, employeeSave, employeeUpdate } from '../actions';
import { Button, CardSection, Confirm } from './common';
import EmployeeForm from './EmployeeForm';
import { employeeProp } from '../Utils';

class EmployeeEdit extends Component {
  static propTypes = {
    employee: employeeProp.isRequired,
    employeeDelete: React.PropTypes.func.isRequired,
    employeeSave: React.PropTypes.func.isRequired,
    employeeUpdate: React.PropTypes.func.isRequired,
    name: React.PropTypes.string.isRequired,
    phone: React.PropTypes.string.isRequired,
    shift: React.PropTypes.string.isRequired,
  };

  state = { showModal: false };

  componentWillMount() {
    Object.keys(this.props.employee).forEach((prop) => {
      this.props.employeeUpdate(prop, this.props.employee[prop]);
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave(
      { name, phone, shift, uid: this.props.employee.uid }
    );
  }

  onTextPress() {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onAccept() {
    this.props.employeeDelete(this.props.employee.uid);
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <EmployeeForm {...this.props}>
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Save Changes
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={this.onTextPress.bind(this)}>
              Text Schedule
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={() => this.setState({ showModal: true })}>
              Fire Employee
            </Button>
          </CardSection>

          <Confirm
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}
            visible={this.state.showModal}
          >
            Are you sure you want to delete this?
          </Confirm>
      </EmployeeForm>
    );
  }
}

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeDelete, employeeSave, employeeUpdate
})(EmployeeEdit);
