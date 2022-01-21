import React from 'react';

function Activities(props) {
    // Creates an array of list item JSX elements with key
    console.log(props.events);
	let listItems = props.events.map(function(event, i) {
        return <tr key={"event" + i}><td>{event.name}</td> <td>{event.times}</td> <td>{event.dates}</td> <td>{event.description}</td></tr>;
    });

    return <><header>
        <h1> Club Activities</h1>
    </header>
    <main>
    <table id="EventList" class="myEvents">
    <thead>
        <tr>
            <th>Name</th>
            <th>Date(s)</th>
            <th>Time(s)</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
    {listItems}
    </tbody>
    </table>
    </main></>;
    
}

export default Activities;