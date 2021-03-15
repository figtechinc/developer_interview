import React, { useState } from "react";
import logo from "./icon_trans.png";
import "./App.css";

function App() {
  const [endpoint, setEndpoint] = useState(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  const handleClick = () => {
    fetch(endpoint)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(JSON.stringify(myJson));
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Post Title</p>
        <div className="post-button" onClick={() => handleClick()}>
          Get Post
        </div>
      </header>
    </div>
  );
}

export default App;
