import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="auth" hideNavBar={true}>
          <Scene
            hideNavBar={false}
            key="login"
            component={LoginForm}
            title="Please Login"
          />
        </Scene>

        <Scene key="main" hideNavBar={true}>
          <Scene
            hideNavBar={false}
            key="employees"
            component={EmployeeList}
            title="Employees"
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            initial
          />
          <Scene
            hideNavBar={false}
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
          />
          <Scene
            hideNavBar={false}
            key="employeeEdit"
            component={EmployeeEdit}
            title="Edit Employee"
            backTitle="back"
          />
        </Scene>
      </Scene>
    </Router>
  )
};

export default RouterComponent;
