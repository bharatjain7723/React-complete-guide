import React, { Component } from "react";

import Person from "./Person/Person";

// const persons = (props)=>{
//     return (
//         props.persons.map((person, index) => {
//             return <Person
//             click={() => props.clicked(index)}
//             name={person.name}
//             age={person.age}
//             key={person.id}
//             changed={(event) => {props.changed(event, person.id)}} />
//         })
//     )
// }

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log("[Persons.js] inside constructor");
  }

  componentWillMount() {
    console.log("[Persons.js] inside componentWillMount");
  }

  componentDidMount() {
    console.log("[Persons.js] inside componentDidMount");
  }
  render() {
    console.log("[Persons.js] inside render");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => {
            this.props.changed(event, person.id);
          }}
        />
      );
    });
  }
}

// export default persons;
export default Persons;
