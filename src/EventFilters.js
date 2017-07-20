import React from 'react';
import PropTypes from 'prop-types';

const EventFilters = (props) => {
  return <input type="text" value={props.filter} onChange={props.onFilterChange} placeholder="filtruj..." />
};

EventFilters.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired
};

export default EventFilters;
