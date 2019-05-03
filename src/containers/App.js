import React, { Component } from 'react';
import './App.css';
import Radium from 'radium'
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      persons: [
        { id:"1", name: "Bharat", age: 22},
        { id:"2", name: "Harshit", age: 23},
        { id:"3", name: "Prachi", age: 21}
      ],
      otherStates: 'some other value'
    }
    console.log("[App.js] inside constructor");
  }

  componentWillMount(){
    console.log("[App.js] inside componentWillMount");
  }

  componentDidMount(){
    console.log("[App.js] inside componentDidMount");
  }

  // state = {
  //   persons: [
  //     { id:"1", name: "Bharat", age: 22},
  //     { id:"2", name: "Harshit", age: 23},
  //     { id:"3", name: "Prachi", age: 21}
  //   ],
  //   otherStates: 'some other value'
  // }

  switchNameHandler = (newName) => {
    // console.log('Was Clicked !!');
    //DON'T DO THIS: this.state.persons[0].name = "Bharat Jain"
    this.setState({
      persons: [
        { name: newName, age: 22},
        { name: "Harshit", age: 23},
        { name: "Prachi", age: 22}
      ],
      showPersons : false
    });
  }

  nameChangeHandler = (event, id) => {
    
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })

  }

  togglePersonsHandler = () => {   
    const currentState = this.state.showPersons; 
    this.setState({
      showPersons : !currentState
    });
  }

  deletePersonHandler = (personIndex) => {
    // slice without an arguments copies the whole array and returns it
    // const persons = this.state.persons.slice();

    // OR

    // Using spread operator
    const persons = [...this.state.persons] 
    
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }

  render() {
    console.log("[App.js] inside render");
    const style = {
      backgroundColor: "green",
      color: "white", 
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover":{
        backgroundColor: "lightGreen",
        color: "black"
      }
    }

    let persons = null;

    if(this.state.showPersons){      
      persons = <Persons
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangeHandler} />
    }

    return (
      <div className="App">
        <Cockpit
        appTitle = {this.props.title}
        showPersons = {this.state.showPersons}
        style = {style}
        persons = {this.state.persons}
        clicked = {this.togglePersonsHandler}
        switch={this.switchNameHandler}
        />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, new way to render elements'));
  }
}

export default Radium(App);

