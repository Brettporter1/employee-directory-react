import React, { useContext, useState } from 'react';
import EmployeeContext from '../utils/EmployeeContext';

const Search = () => {
  const { handleSearch } = useContext(EmployeeContext);
  return (
    <div className='search-container'>
      <label className='search-label'>Search</label>
      <input
        className='search-input'
        placeholder='Name'
        onChange={e => handleSearch(e)}
      />
    </div>
  );
};

export default Search;
