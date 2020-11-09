import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
import "./index.css";
// class called App, state initialized
class App extends React.Component {
  state = { lat: null, errorMessage: '' };
 
// get users current position, once
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
//decides which content to render
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
        return <div> Error: {this.state.errorMessage}</div>;
      }
      if (!this.state.errorMessage && this.state.lat) {
        return <SeasonDisplay lat={this.state.lat}/>
      }
      return <Loader message="Please accept the location request." />
  }
// renders content from above
  render() {
   return (
       <div className="border">
           {this.renderContent()}
           </div>
   )
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
