import React from "react";
import "./SeasonDisplay.css";

//text and icon to use once we figure out if it's summer or winter
const seasonConfig = {
  summer: {
    text: "It's hot out! Let's build a sand castle!",
    iconName: "sun",
  },
  winter: {
    text: "It's cold out! Let's build a snowman!",
    iconName: "snowflake",
  },
};

//function to determine if it's summer or winter
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

//  function that says to display text and icon from above depending on the season
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season]; // { text, iconName}

  // dispay of text and icons when component is called
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};
//export SeasonDisplay for use throughout application
export default SeasonDisplay;
