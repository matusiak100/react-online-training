import React from 'react';
import events from './data/events';
import EventItem from './EventItem';
import EventFilters from './EventFilters';
import EventAdd from './EventAdd';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      filter: '',
      newName: '',
      newNameValid: false,
      newPlace: '',
      newPlaceValid: false,
      newDate: '',
      newDateValid: false,
      newTime: '',
      newTimeValid: false
    };
  }

  componentDidMount() {
    this.setState({
      events
    });
  }

  onClearClicked(event) {
    event.preventDefault();

    this.setState({ events: [] });
  }

  onDeleteClicked(id, event) {
    event.preventDefault();

    const filteredArray = this.state.events.filter(item => item.id !== id);

    this.setState({
      events: filteredArray
    });
  }

  onFilterChange(event) {
    const value = event.currentTarget.value;

    this.setState({
      filter: value
    });
  };

  onNameChange(event) {
    const value = event.currentTarget.value;
    this.setState({
      newName: value,
      newNameValid: value.length > 0
    });
  }

  onPlaceChange(event) {
    const value = event.currentTarget.value;
    this.setState({
      newPlace: value,
      newPlaceValid: value.length > 0
    });
  }

  onDateChange(event) {
    const value = event.currentTarget.value;
    this.setState({
      newDate: value,
      newDateValid: value.length > 0
    });
  }

  onTimeChange(event) {
    const value = event.currentTarget.value;
    this.setState({
      newTime: value,
      newTimeValid: value.length > 0
    });
  }

  onEventAdd(event) {
    event.preventDefault();

    const {
      events,
      newName,
      newPlace,
      newDate,
      newTime
    } = this.state;

    const maxId = Math.max(...events.map(item => item.id));

    events.push({
      id: maxId + 1,
      name: newName,
      place: newPlace,
      date: newDate,
      time: newTime
    });

    this.setState({
      events
    })
  }

  render() {
    return (
      <div>
        <EventFilters onFilterChange={this.onFilterChange.bind(this)} />
        <ul>
          {this.state.events.map(item => {
            const date = new Date(item.date);

            if (date >= Date.now() && item.name.indexOf(this.state.filter) > -1) {
              return (
                <EventItem {...item} key={item.id} onDeleteClicked={this.onDeleteClicked.bind(this)} />
              );
            }

            return null;
          })}
        </ul>
        <button onClick={this.onClearClicked.bind(this)}>Wyczyść</button>
        <EventAdd name={this.state.newName}
                  place={this.state.newPlace}
                  date={this.state.newDate}
                  time={this.state.newTime}
                  nameValid={this.state.newNameValid}
                  placeValid={this.state.newPlaceValid}
                  dateValid={this.state.newDateValid}
                  timeValid={this.state.newTimeValid}
                  onNameChange={this.onNameChange.bind(this)}
                  onPlaceChange={this.onPlaceChange.bind(this)}
                  onDateChange={this.onDateChange.bind(this)}
                  onTimeChange={this.onTimeChange.bind(this)}
                  onFormSubmit={this.onEventAdd.bind(this)}
        />
      </div>
    );
  }
};

export default Events;
