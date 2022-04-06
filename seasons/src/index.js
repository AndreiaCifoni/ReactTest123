import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  //constructor to inicialize the state
  constructor(props) {
    super(props);
    //THIS IS THE ONLY TIME we do direct assignment to "this.state"
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //we call setState to update the state
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.log(err)
    );
  }

  //React says we have to define render!!
  render() {
    return <div>Latitude: {this.state.lat} </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
