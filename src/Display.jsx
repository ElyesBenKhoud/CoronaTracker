import React from "react";
import "./Display.css";

const Box = (props) => {
  const {
    totalActiveCases,
    activeCases,
    totalConfirmed,
    totalDeaths,
    totalNewCases,
    // totalNewDeaths,
    countryLabel,
    totalRecovered,
    totalCritical,
  } = props;
  return (
    <div className="currentLocation-status">
      <label className="country-label">{countryLabel}</label>
      <div className="contryDetails">
        <div className="confirmedDetails">
          <label className="confirmed">Confirmed</label>
          <label className="confirmed-value conf-value">{totalConfirmed}</label>
        </div>
        <div className="confirmedDetails">
          <label className="confirmed deaths">Deaths</label>
          <label className="confirmed-value deaths-value">{totalDeaths}</label>
        </div>
        <div className="confirmedDetails">
          <label className="confirmed">ActiveCases</label>
          <label className="confirmed-value active-value">
            {totalActiveCases ? totalActiveCases : activeCases}
          </label>
        </div>
        <div className="confirmedDetails">
          <label className="confirmed">Recovered</label>
          <label className="recovered-value">{totalRecovered}</label>
        </div>
        <div className="confirmedDetails">
          <label className="confirmed">
            {totalNewCases ? `New Cases` : `Total Critical`}
          </label>
          <label
            className={
              totalNewCases
                ? `confirmed-value new-value`
                : `confirmed-value critical-value`
            }
          >
            {totalNewCases ? totalNewCases : totalCritical}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Box;
