import React from 'react';
import PropTypes from 'prop-types';

const EventFilters = (props) => {
  return (
    <form>
      <input type="text" value={props.filter} onChange={props.onFilterChange} placeholder="filtruj..." />
    </form>
  );
};

EventFilters.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired
};

export default EventFilters;
