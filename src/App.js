import React, { Component } from "react";
import Display from "./Display";
import "./Display.css";
import AllCountryData from "./AllCountryData";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      global: {},
      contrywiseDetails: [],
      currentLocationStatus: {},
      location: {},
    };
  }

  //get the location data from the api and set it in the location array state
  // the same for the global  and the same for the details
  componentWillMount() {
    fetch("https://api.coronatracker.com/v3/stats/worldometer/global")
      .then((res) => res.json())
      .then((res) => this.setState({ global: res }));

    fetch("https://api.coronatracker.com/v3/stats/worldometer/country")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ contrywiseDetails: res });
      });
  }
  render() {
    const { contrywiseDetails, global, location } = this.state;

    let countryData;
    contrywiseDetails.map((data) => {
      if (data.countryCode === location.countryCode) {
        countryData = data;
      }
    }, []);

    console.log("countryData", countryData);
    console.log("countryWiseData", contrywiseDetails);

    return (
      <>
        <h1 className="heading__style">Covid 19 Tracker</h1>
        <div className="container">
          {global && (
            <Display countryLabel="WorldWide" {...global} {...this.props} />
          )}
          <div style={{ margin: "20px" }}></div>
          {countryData && (
            <Display
              countryLabel={countryData.country}
              {...countryData}
              {...this.props}
            />
          )}
        </div>
      </>
    );
  }
}
