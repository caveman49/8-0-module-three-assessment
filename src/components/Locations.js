import React from "react";
import "../App.css";

class Locations extends React.Component {
  constructor() {
    super();

    this.state = {
      locations: [],
    };
  }

  fetchLocations = () => {
    fetch("https://ghibliapi.herokuapp.com/locations/")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          locations: data,
        });
      });
  };

  componentDidMount = () => {
    this.fetchLocations();
  };

  render() {
    let displayLocations = this.state.locations.map((location) => {
      return (
        <div>
          <h3>Name: {location.name} </h3>
          <h3>Climate: {location.climate} </h3>
          <h3>Terrain: {location.terrain} </h3>
        </div>
      );
    });

    return (
      <div>
        <h1>Locations Page...</h1>
        <div>{displayLocations}</div>
      </div>
    );
  }
}

export default Locations;
