import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// Plase import App from ./App_hooks if you would like to work with React Hooks.
import App from "./App";
// Import App from './App_hooks'
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
