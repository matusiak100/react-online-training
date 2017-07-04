import React from 'react';
import PropTypes from 'prop-types';

const EventAdd = (props) => {
  return (
    <form onSubmit={props.onFormSubmit}>
      <input type="text" placeholder="Nazwa..." value={props.name} onChange={props.onFieldChange.bind(this, 'name')} /><br />
      <input type="text" placeholder="Miejsce..." value={props.place} onChange={props.onFieldChange.bind(this, 'place')} /><br />
      <input type="text" placeholder="Data..." value={props.date} onChange={props.onFieldChange.bind(this, 'date')} /><br />
      <input type="text" placeholder="Godzina..." value={props.time} onChange={props.onFieldChange.bind(this, 'time')} /><br />
      <button type="submit">Dodaj</button>
    </form>
  );
}

EventAdd.propTypes = {
  name: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired
};

export default EventAdd;
