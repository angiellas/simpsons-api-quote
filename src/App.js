import React from "react";
import axios from "axios";
import DisplayQuote from "./Components/DisplayQuote";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: {}
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    // Send the request
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          quote: data[0]
        });
        console.log(data);
      });
  }

  render() {
    return (
      <div className="App">
        <DisplayQuote quote={this.state.quote} />
        <button type="button" onClick={this.getQuote}>
          Get new quote
        </button>
      </div>
    );
  }
}

export default App;
