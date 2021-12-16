import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <h1>Welcome to GhibliApp</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Movies" component={Movies} />
          <Route path="/People" component={People} />
          <Route path="/Locations" component={Locations} />
        </Switch>
      </div>
    );
  }
}

export default App;
