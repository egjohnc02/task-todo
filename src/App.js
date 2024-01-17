import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    characters: [
      {
        task: "ABC",
        time: "12:30",
      },
      {
        task: "Mac",
        time: "12:00",
      },
    ],
  };

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    const { characters } = this.state;
    var currentDate = new Date();
    var day = currentDate.getDay();
    switch (day + 1) {
      case 2:
        day = "Monday";
        break;
      case 3:
        day = "Tuesday";
        break;
      case 4:
        day = "Wednesday";
        break;
      case 5:
        day = "Thursday";
        break;
      case 6:
        day = "Friday";
        break;
      case 7:
        day = "Saturday";
        break;
      default:
        day = "Sunday";
        break;
    }
    return (
      <div className="container">
        <h3>Today is {day}, please done your task</h3>
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
