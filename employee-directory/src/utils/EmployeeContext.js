import React from 'react';

const EmployeeContext = React.createContext({
  employees: [],
  displayedEmployees: [],
  sortOrder: 'desending'
});

export default EmployeeContext;
