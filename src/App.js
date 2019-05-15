import React from "react";
import logo from "./icon_trans.png";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    fetch(figPostsURL)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Post Title</p>
          <div className="recipe-button" onClick={this.handleClick}>
            Get Post
          </div>
        </header>
      </div>
    );
  }
}

export default App;

const figPostsURL = "https://jsonplaceholder.typicode.com/todos/1";
