import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

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
          />
        </Scene>
      </Scene>
    </Router>
  )
};

export default RouterComponent;
