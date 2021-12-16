import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Nav extends React.Component {
    render() {
      return (
        <div className="Nav">
  
          <Link to="/">
            <img
              className="pet-logo"
              src="https://static.tvtropes.org/pmwiki/pub/images/piccolo_super.png"
              alt="pet logo"
              style={{ width: "50px", height: "50px" }}
            />
          </Link>
  
          <Link to="/Movies">Movies</Link>
  
          <Link to="/People">People</Link>

          <Link to="/Locations">Locations</Link>
        </div>
      );
    }
  }


export default Nav;
