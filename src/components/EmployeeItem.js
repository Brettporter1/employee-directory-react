import React, { useContext } from 'react';
import EmployeeContext from '../utils/EmployeeContext';

const EmployeeItem = () => {
  // const { picture, name, email, login, phone } = useContext(EmployeeContext);
  return (
    <tr className='employee-table-row'>
      <td>picture</td>
      <td>name</td>
      <td>email</td>
      <td>phone</td>
    </tr>
  );
};

export default EmployeeItem;
