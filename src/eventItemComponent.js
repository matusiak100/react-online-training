import React from 'react'

const EventItem = (props)=>{
    return (
        <li>{props.item.date}
            <button onClick={props.onClickDelete}>delete</button>
        </li>
    )
};

export default EventItem;