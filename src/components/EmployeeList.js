import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  componenetWillReceiveProps(nextProps) {
    // nextProps are next set of props the component will be rendered with
    // this.props is the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  // renderEmployees() {
  //   for (let employee in this.props.employees) {
  //     return <Text>{employee.name}</Text>
  //   }
  // }

  render() {
    return (
      <View>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  
}

export default connect (null, { employeesFetch })(EmployeeList);
