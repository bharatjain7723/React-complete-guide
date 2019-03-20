import React, { Component } from 'react';
import './App.css';
import Radium from 'radium'
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id:"1", name: "Bharat", age: 22},
      { id:"2", name: "Harshit", age: 23},
      { id:"3", name: "Prachi", age: 21}
    ],
    otherStates: 'some other value'
  }

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
      persons = (
        <div> 
          {
            this.state.persons.map((person, index) => {
              return <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name}  
                age={person.age}
                key={person.id}
                changed={(event) => {this.nameChangeHandler(event, person.id)}} />
            })
          }
        </div>
      )

      style.backgroundColor = "red";
    }

    let classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red'); // classes = ['red];
    }

    if(this.state.persons.length <= 1){
      classes.push('bold'); // classes = ['red', 'bold'];
    }

    return (
      <div className="App">
        <h1>Hi, I'm Bharat</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button 
         onClick={()=>this.switchNameHandler("Bharat Jain")}>Switch Here</button>
         <button 
         style={style}
         onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, new way to render elements'));
  }
}

export default Radium(App);

