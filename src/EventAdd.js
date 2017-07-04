import React from 'react';
import PropTypes from 'prop-types';

const EventAdd = (props) => {
  return (
    <form onSubmit={props.onFormSubmit}>
      <input type="text" placeholder="Nazwa..." value={props.name} onChange={props.onNameChange} />
      <input type="text" placeholder="Miejsce..." value={props.place} onChange={props.onPlaceChange} />
      <input type="text" placeholder="Data..." value={props.date} onChange={props.onDateChange} />
      <input type="text" placeholder="Godzina..." value={props.time} onChange={props.onTimeChange} />
      <button type="submit">Dodaj</button>
    </form>
  );
}

EventAdd.propTypes = {
  name: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onPlaceChange: PropTypes.func.isRequired,
  onDateChange: PropTypes.func.isRequired,
  onTimeChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired
};

export default EventAdd;
