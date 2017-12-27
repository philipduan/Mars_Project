import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../style/report.css";

class Report extends Component {
  constructor() {
    super();
    this.state = {
      actionTaken: "",
      alienId: 0,
      alienList: [],
      actionInput: true,
      alienSelect: true
    };
    this._handleActionTakenChange = this._handleActionTakenChange.bind(this);
    this._handleSendReport = this._handleSendReport.bind(this);
    this._handleAlienType = this._handleAlienType.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://red-wdp-api.herokuapp.com/api/mars/aliens")
      .then(response => {
        console.log(response.data);
        this.setState({
          alienList: response.data.aliens
        });
      });
  }

  _handleActionTakenChange(event) {
    this.setState({
      actionTaken: event.target.value,
      actionInput : true,
    });
  }

  _handleAlienType(event) {
    this.setState({
      alienId: event.target.value,
      alienSelect : true,
    });
  }

  _handleSendReport(event) {
    if (!this._validate()) {
      event.preventDefault();
    } else {
      var date = new Date();
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      date = `${year}-${month}-${day}`;
      axios({
        method: "post",
        url: "https://red-wdp-api.herokuapp.com/api/mars/encounters",
        data: {
          encounter: {
            atype: this.state.alienList[this.state.alienId-1].type,
            date: date,
            action: this.state.actionTaken,
            colonist_id: this.props.saveId,
          }
        }
      })
        .then(function(response) {
          console.log(response);
        })
        .then(function(response) {
          console.log(response);
        });
    }
  }

  _validate() {
    var validation = true;
    if (this.state.actionTaken == "") {
      validation = false;
      this.setState({
        actionInput: false
      });
    }

    if (this.state.alienId == 0) {
      validation = false;
      this.setState({
        alienSelect: false
      });
    }

    return validation;
  }

  render() {
    return (
      <div className="report">
        <h1>Report Encounter </h1>
        <p> Safety On Mars Is Your Responsibility</p>
        <form>
          <select
            className={this.state.alienSelect.toString()}
            onChange={this._handleAlienType}
          >
            <option> -- Select Alien Type -- </option>
            {this.state.alienList.map(alien => (
              <option value={alien.id} key={alien.id}>
                {alien.type}{" "}
              </option>
            ))}
          </select>
          <textarea
            className={this.state.actionInput.toString()}
            placeholder="Action Taken"
            onChange={this._handleActionTakenChange}
          />
        </form>
        <Link to={"/encounter"} onClick={this._handleSendReport}>
          <h1> Submit Report </h1>
        </Link>
      </div>
    );
  }
}

export default Report;
