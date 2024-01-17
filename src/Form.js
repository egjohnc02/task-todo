import React, { Component } from "react";

class Form extends Component {
  initialState = {
    task: "",
    time: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  state = this.initialState;

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { task, time } = this.state;

    return (
      <form>
        <label htmlFor="task">Task</label>
        <input
          type="text"
          name="task"
          id="task"
          value={task}
          onChange={this.handleChange}
        />
        <label htmlFor="time">Time</label>
        <input
          type="time"
          name="time"
          id="time"
          value={time}
          onChange={this.handleChange}
        />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
