import React from "react";
import "../App.css";

class People extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      submitted: false,
      people: [],
    };
  }

  handleChange = (event) => this.setState({ userInput: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://ghibliapi.herokuapp.com/people/`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          people: data,
        });
      })
      .catch((error) => {
        throw error;
      });
    event.target.searchbar.value = "";
  };

  render() {
    return (
      <div>
          <h1>People Page...</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="type here"
            name="searchbar"
            onChange={this.handleChange}
            required
          />
          <button type="submit">Search</button>
        </form>

        {this.state.submitted ? (
          <People data={this.state.people.name} />
        ) : (
          <p>Make a search</p>
        )}
      </div>
    );
  }
}

export default People;
