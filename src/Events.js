import React from 'react';
import events from './data/events';
import EventItem from './EventItem';
import Filter from './Filter'
import AddEventForm from './AddEventForm'

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        events: [],
        filter: '',
        add: {
            name: "",
            nameValid: false,
            place: "",
            placeValid: false,
            date: "",
            dateValid: false,
            time: '',
            timeValid: false
        }
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

  onFilterChange(event){
    console.log(event.currentTarget.value)
      this.setState({
          filter: event.currentTarget.value
      })
    // this.setState((prevState, props)=>{
    //     return {events: prevState.events
    //         .filter((item)=> item.name.includes(event.currentTarget.value))}
    // })

      // this.setState({events: this.state.events
      //         .filter((item)=> item.name.includes(event.currentTarget.value))
      // })
  }

    onInputChange(key, event){
      console.log(key, event, event.currentTarget.value.length > 0? true: false, {
          add: {
              ...this.state.add,
              [key]: event.currentTarget.value,
              [key + 'Valid']: event.currentTarget.value.length > 0? true: false
          }
      }, {...this.props.add});
      this.setState({
          add: {
              ...this.state.add,
              [key]: event.currentTarget.value,
              [key + 'Valid']: event.currentTarget.value.length > 0? true: false
          }
      })
        // this.setState({
        //
        // })
    }

    onFormSumbit(event){
        event.preventDefault();

        this.setState((prevState, props) =>{
            console.log("onFormSumbit", prevState, props, {...prevState.add, id: Math.max(...prevState.events.map(item => item.id))+1});

            let events = prevState.events;
            events.push(
                {...prevState.add, id: Math.max(...prevState.events.map(item => item.id))+1})

            console.log("events", events);
            return {
                events: events
            }
        })
    }

  render() {
    return (
      <div>
        <Filter onFilterChange={this.onFilterChange.bind(this)} value={this.state.filter}/>
        <ul>
          {this.state.events
              .filter((item)=> item.name.includes(this.state.filter))
              .map(item => {

                const date = new Date(item.date);

                if (date >= Date.now()) {
                  return (
                    <EventItem {...item} key={item.id} onDeleteClicked={this.onDeleteClicked.bind(this)} />
                  );
                }

                return null;
          })}
        </ul>
        <button onClick={this.onClearClicked.bind(this)}>Wyczyść</button>
        <AddEventForm {...this.state.add} onFormSumbit={this.onFormSumbit.bind(this)} onInputChange={this.onInputChange.bind(this)}></AddEventForm>
      </div>
    );
  }
};

export default Events;
