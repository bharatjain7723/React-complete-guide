import React, { Component } from "react";
import Radium from "radium";

import "./Person.css";

// const person = (props) => {
//     return (
//         <div className="Person">
//             <p onClick={props.click}>I'm {props.name}!! I am {props.age} years old</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name}/>
//         </div>
//     )
// }

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person111111.js] inside constructor");
  }

  componentWillMount() {
    console.log("[Person111111.js] inside componentWillMount");
  }

  componentDidMount() {
    console.log("[Person111111.js] inside componentDidMount");
  }

  render() {
    console.log("[Person111111.js] inside render");
    return (
      <div className="Person">
        <p onClick={this.props.click}>
          I'm {this.props.name}!! I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

// export default Radium(person);
export default Radium(Person);
