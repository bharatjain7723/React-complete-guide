import React from 'react';

const cockpit = (props) => {

    const classes = [];

    if(props.showPersons){
        props.style.backgroundColor = "red";
    }

    if(props.persons.length <= 2){
        classes.push('red'); // classes = ['red];
    }

    if(props.persons.length <= 1){
        classes.push('bold'); // classes = ['red', 'bold'];
    }

    return (
        <div className="cockpit">
            <h1>{props.appTitle}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button 
            onClick={props.switch}>Switch Here</button>
            <button 
            style={props.style}
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
}

export default cockpit;