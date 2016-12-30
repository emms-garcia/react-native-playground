import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';

import EmployeeDetail from './EmployeeDetail';
import { employeesFetch } from '../actions';
import { employeeProp } from '../Utils';

class EmployeeList extends Component {
  static propTypes = {
    employeesFetch: React.PropTypes.func.isRequired,
    employees: React.PropTypes.arrayOf(employeeProp),
  };

  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return (
      <EmployeeDetail employee={employee} />
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        enableEmptySections
        renderRow={this.renderRow.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const employees = [];
  Object.keys(state.employees).forEach((uid) => {
    employees.push({ ...state.employees[uid], uid });
  });
  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
