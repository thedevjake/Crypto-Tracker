import React, { Component } from "react";
import "./App.css";
import BoxGridShadow from "./boxGridShadow";
import Top5 from "./top5";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 id="logo">CoinTrack</h1>
        <ul className="nav">
          <li>
            <a href="/" rel="noopener noreferrer">
              Home
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.cointelegraph.com"
              rel="noopener noreferrer"
            >
              News
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.coinbase.com"
              rel="noopener noreferrer"
            >
              Buy
            </a>
          </li>
        </ul>
        <BoxGridShadow />
        <Top5 />
      </div>
    );
  }
}

export default App;
