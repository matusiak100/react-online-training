import React from 'react';
import ReactDOM from 'react-dom';
import {getEvents, EventList, EventListCoponent} from './eventComponent';
import events from './data/events.json';


// ReactDOM.render(getEvents(events), document.getElementById('root'));
// ReactDOM.render(<EventList events={events} />, document.getElementById('root'));
ReactDOM.render(<EventListCoponent events={events} />, document.getElementById('root'));
