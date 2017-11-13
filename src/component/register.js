import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../style/register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    sessionStorage.clear();
    this.state = {
      name: "",
      age: "",
      jobId: "",
      occupation: [],
      nameInput: true,
      ageInput: true,
      selected: true
    };

    this._handleNameChange = this._handleNameChange.bind(this);
    this._handleAgeChange = this._handleAgeChange.bind(this);
    this._handleJobChange = this._handleJobChange.bind(this);
    this._sendUserProfile = this._sendUserProfile.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://red-wdp-api.herokuapp.com/api/mars/jobs")
      .then(response => {
        this.setState({
          occupation: response.data.jobs
        });
      });
  }

  _handleNameChange(event) {
    this.setState({
      name: event.target.value,
      nameInput: true
    });
  }

  _handleAgeChange(event) {
    console.log(event.target.value);
    this.setState({
      age: event.target.value,
      ageInput: true
    });
  }

  _handleJobChange(event) {
    this.setState({
      jobId: event.target.value,
      selected: true
    });
  }

  _sendUserProfile(event) {
    if (!this._validate()) {
      event.preventDefault();
    } else {
      axios({
        method: "post",
        url: "https://red-wdp-api.herokuapp.com/api/mars/colonists",
        data: {
          colonist: {
            name: this.state.name,
            job_id: `${this.state.jobId}`,
            age: this.state.age
          }
        }
      })
        .then(response => {
          sessionStorage.setItem(
            "colonist_id",
            JSON.stringify({
              id: response.data.colonist.id
            })
          );
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }

  _validate() {
    var verification = true;
    if (this.state.name === "") {
      verification = false;
      this.setState({
        nameInput: false
      });
    }

    if (this.state.age === "") {
      verification = false;
      this.setState({
        ageInput: false
      });
    }

    if (this.state.jobId === "") {
      verification = false;
      this.setState({
        selected: false
      });
    }

    return verification;
  }

  render() {
    return (
      <div className="register">
        <h1> Register </h1>
        <div className="forms">
          <form>
            <label>Name : </label>
            <input
              ref="nameInput"
              className={this.state.nameInput.toString()}
              type="text"
              onChange={this._handleNameChange}
            />
          </form>
          <form>
            <label>Age : </label>
            <input
              ref="ageInput"
              className={this.state.ageInput.toString()}
              classtype="number"
              onChange={this._handleAgeChange}
            />
          </form>
          <form>
            <label>Occupation : </label>
            <select
              className={this.state.selected.toString()}
              onChange={this._handleJobChange}
            >
              <option> -- Select an option -- </option>
              {this.state.occupation.map(job => (
                <option value={job.id} key={job.id}>
                  {job.name}
                </option>
              ))}
            </select>
          </form>
        </div>
        <Link to="/encounter" onClick={this._sendUserProfile}>
          <h1>Check In</h1>
        </Link>
      </div>
    );
  }
}

export default Register;
