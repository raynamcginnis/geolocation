import React from "react";

// loader pulled from Semantic UI
const Loader = (props) => {
  return (
    
    <div className="loader">
      <div className="ui active inverted dimmer">
        <div className="ui text loader">{props.message}</div>
      </div>
    </div>
 
  );
};
// set default message for loader
Loader.defaultProps = {
    message: 'loading'
}

//export loader to be used throughout application
export default Loader;
