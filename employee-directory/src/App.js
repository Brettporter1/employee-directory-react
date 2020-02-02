import React, { Fragment, useState, useEffect } from 'react';
import EmployeeList from './components/EmployeeList';
import Search from './components/Search';
import Nav from './components/Nav';
import EmployeeContext from './utils/EmployeeContext';
import API from './utils/API';
import './App.css';

const App = () => {
  const [employees, setEmployees] = useState({
    employees: [],
    displayedEmployees: [],
    sortOrder: 'descending'
  });

  const handleSearch = e => {
    const searchTerm = e.target.value;
    console.log(searchTerm);
    console.log(employees.employees);
    const searchList = employees.employees.filter(employee => {
      let nameVal = `${employee.name.first.toLowerCase()} ${employee.name.last.toLowerCase()}`;
      if (nameVal.indexOf(searchTerm.toLowerCase()) !== -1) {
        return employee;
      }
    });
    setEmployees({ ...employees, displayedEmployees: searchList });
  };

  const handleSort = () => {
    console.log(employees.displayedEmployees);
    if (employees.sortOrder === 'descending') {
      employees.displayedEmployees.sort((a, b) => {
        setEmployees({ ...employees, sortOrder: 'ascending' });
        console.log(a.name.first);
        return a.name.first.localeCompare(b.name.first);
      });
    } else {
      employees.displayedEmployees.sort((a, b) => {
        setEmployees({ ...employees, sortOrder: 'descending' });
        return b.name.first.localeCompare(a.name.first);
      });
    }
  };

  useEffect(() => {
    API.getUsers().then(results => {
      setEmployees({
        ...employees,
        employees: results.data.results,
        displayedEmployees: results.data.results
      });
    });
  }, []);
  return (
    <Fragment>
      <Nav />
      <EmployeeContext.Provider value={{ employees, handleSearch, handleSort }}>
        <Search />
        <div className='main-container'>
          <EmployeeList />
        </div>
      </EmployeeContext.Provider>
    </Fragment>
  );
};

export default App;
