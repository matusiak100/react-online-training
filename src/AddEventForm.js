import React from 'react'

const AddEventForm = (props) => {
    console.log("new props", props);
    return (
        <form onSubmit={props.onFormSumbit}>
            <label htmlFor="name">Name</label>
            <input name="name" type="text" onChange={props.onInputChange.bind(this, "name")} value={props.name}/>
            {!props.nameValid ? <div >This Field is Required</div>:null}

            <label htmlFor="name">place</label>
            <input name="place" type="text" onChange={props.onInputChange.bind(this, "place")} value={props.place}/>

            <label htmlFor="date">date</label>
            <input name="date" type="date" onChange={props.onInputChange.bind(this, "date")} value={props.date}/>

            <label htmlFor="time">time</label>
            <input name="time" type="number" onChange={props.onInputChange.bind(this, "time")} value={props.time}/>

            <button type="submit">Submit</button>
        </form>
    )
};

AddEventForm.componentWillReceiveProps = function(p1, p2, p3){
    console.log("componentWillReceiveProps", p1, p2, p3)
};

export default AddEventForm;