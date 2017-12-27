import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../style/encounter.css";

class Encounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      encounters: []
    };
  }

  componentWillMount() {
    axios
      .get("https://red-wdp-api.herokuapp.com/api/mars/encounters")
      .then(response => {
        this.setState({
          encounters: response.data.encounters
        });
      });
  }

  render() {
    return (
      <div className="encounter">
        <h1> Recent Encounters</h1>
        <p> See An Alien? Report It! </p>
        <ul>
          {this.state.encounters.reverse().map(encounter => (
            <li key={encounter.id}>
              <p>
                {encounter.date}-{encounter.atype}
              </p>
              <p>{encounter.action}</p>
            </li>
          ))}
        </ul>
        <Link to={"/report"}>
             <h1> Report Encounter </h1>
        </Link>
      </div>
    );
  }
}

export default Encounter;
