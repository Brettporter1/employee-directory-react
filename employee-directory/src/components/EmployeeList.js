import React, { useContext } from 'react';
import EmployeeContext from '../utils/EmployeeContext';

const EmployeeList = () => {
  console.log(EmployeeContext);
  const { employees, handleSort } = useContext(EmployeeContext);
  return (
    <div className='employee-list-container'>
      <table className='employee-table'>
        <thead className='employee-table-heading'>
          <tr>
            <td>image</td>
            <td onClick={() => handleSort()}>
              name {employees.sortOrder === 'descending' ? '▴' : '▾'}
            </td>
            <td>email</td>
            <td>phone number</td>
          </tr>
        </thead>
        <tbody>
          {employees.displayedEmployees.map(employee => (
            <tr className='employee-table-row' key={employee.login.uuid}>
              <td>
                <img
                  src={employee.picture.thumbnail}
                  alt={employee.name.first}
                />
              </td>
              <td>
                {employee.name.first} {employee.name.last}
              </td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
