import React from "react";
import "../App.css";

class Movies extends React.Component {
  constructor() {
    super();

    this.state = {
      films: [],
      currentFilm: null,
    };
  }

  fetchFilms = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          films: data,
        });
      });
  };

  componentDidMount = () => {
    this.fetchFilms();
  };

  handleDropdownChange = (event) => {
    let currentFilmObject = this.state.films.find((film) => {
      return film.title === event.target.value;
    });

    this.setState({
      currentFilm: currentFilmObject,
    });
  };

  render() {
    let dropDownOptions = this.state.films.map((film) => {
      return <option>{film.title}</option>;
    });

    return (
      <div className="movies">
        <h1>Movies Page...</h1>
        <select onChange={this.handleDropdownChange}>
          <option>Select a Movie</option>
          {dropDownOptions}
        </select>

        <h1>
          {this.state.currentFilm
            ? this.state.currentFilm.title
            : null}{" "}
          <p>{this.state.currentFilm?.description}</p>
        </h1>
      </div>
    );
  }
}

export default Movies;
