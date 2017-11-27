import React from 'react';

const Filter = (props) => {
  return (
  <form>
      <input type="text" onChange={props.onFilterChange.bind(this)} value={props.value}/>
  </form>
  )
};

export default Filter;