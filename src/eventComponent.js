import React from 'react';
import PropTypes from 'prop-types';
import EventItem from './eventItemComponent';

const EventList = (props) => {
    return (
        <ul>
            {
                // events.filter(item=>{
                //         return new Date(item.date) > Date.now();
                // })
                //     .map((item, index) => {
                //         return <p key={index}>{item.date}</p>
                // })
                props.events.map((item, index) => {
                    if(new Date(item.date) > Date.now() )
                        return <li key={index}>{item.date}</li>
                })
            }
        </ul>
    );
}


const getEvents = (events) => {
    return (
        <ul>
            {
                // events.filter(item=>{
                //         return new Date(item.date) > Date.now();
                // })
                //     .map((item, index) => {
                //         return <p key={index}>{item.date}</p>
                // })
                events.map((item, index) => {
                    if(new Date(item.date) > Date.now() )
                        return <li key={index}>{item.date}</li>
                })
            }
        </ul>
    );
};

class EventListCoponent extends React.Component{
    static proptypes ={
      text: PropTypes.array.isRequired
    };
    constructor(props){
        super(props);
        this.state = {
            events: []
        };
        this.onClickRestorButton = this.onClickRestorButton.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }
    onClickRestorButton(){
        this.setState({
            events: this.props.events
        })
    }

    removeItem(index){
        console.log("remove", index);

        this.setState({
            events: this.state.events.filter((item, i)=> {
                if(i == index)
                    return false;
                return true;
            })
        })
    }

    componentDidMount() {
        this.setState({
            events: this.props.events
        })
    }
    render(){
        return (
            <div>
            <ul>
                {
                    // events.filter(item=>{
                    //         return new Date(item.date) > Date.now();
                    // })
                    //     .map((item, index) => {
                    //         return <p key={index}>{item.date}</p>
                    // })
                    // this.props.events.map((item, index) => {
                    //     if(new Date(item.date) > Date.now() )
                    //         return <li key={index}>{item.date}</li>
                    // })
                    this.state.events.map((item, index) => {
                        if(new Date(item.date) > Date.now() )
                            return <EventItem key={index} item={item} onClickDelete={this.removeItem.bind(this, index)}></EventItem>
                    })
                }
            </ul>
                <button onClick={(event)=> this.setState({events:[]})}> clear </button>
                <button onClick={this.onClickRestorButton}> restor </button>


            </div>

        );
    }
}

export {getEvents, EventList, EventListCoponent};