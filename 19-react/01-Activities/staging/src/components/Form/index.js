import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let { name, value } = event.target;

    if(name === "password" && value.length >= 15){
      value = value.substring(0,14);

    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    if(!this.state.firstName || !this.state.lastName){
      alert("Fill out your first and last name please!")
    }else if(this.state.password.length < 6){
      alert("Fill out a stronger pass (longer than 6 chars)")
    }
    else {
      alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
      this.setState({
        firstName: "",
        lastName: "",
        password: ""
      });
    }
    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs

  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
           <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="text"
            placeholder="pass"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;