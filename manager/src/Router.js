import React from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';

import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import EmployeeList from './components/EmployeeList';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 60 }}>
      <Scene key='auth'>
        <Scene component={LoginForm} key='login' title='Please Login' />
      </Scene>
      <Scene key='main'>
        <Scene
          component={EmployeeList}
          key='employeeList'
          onRight={() => Actions.employeeCreate()}
          rightTitle='Add'
          title='Employees'
        />
        <Scene
          component={EmployeeCreate}
          key='employeeCreate'
          title='New Employee'
        />
        <Scene
          component={EmployeeEdit}
          key='employeeEdit'
          title='Edit Employee'
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
