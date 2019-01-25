import React, { Component } from "react";
import "./top5.css";
import apiKey from "./apiKey";

export default class Top5 extends Component {
  constructor() {
    super();
    this.state = {
      one: {
        Price: 0
      },
      two: {
        Price: 0
      },
      three: {
        Price: 0
      },
      four: {
        Price: 0
      },
      five: {
        Price: 0
      },
      coins: []
    };
  }

  componentDidMount() {
    this.fetchCoinPrices();
  }

  fetchCoinPrices = () => {
    //BTC
    fetch(
      "https://api.nomics.com/v1/markets/prices?key=" + apiKey + "&currency=BTC"
    )
      .then(res => res.json())
      .then(data => this.setState({ one: { price: data[6].price } }));
    //ETH
    fetch(
      "https://api.nomics.com/v1/markets/prices?key=" + apiKey + "&currency=ETH"
    )
      .then(res => res.json())
      .then(data => this.setState({ two: { price: data[6].price } }));
    // XRP
    fetch(
      "https://api.nomics.com/v1/markets/prices?key=" + apiKey + "&currency=XRP"
    )
      .then(res => res.json())
      .then(data => this.setState({ three: { price: data[6].price } }));
    // BCH
    fetch(
      "https://api.nomics.com/v1/markets/prices?key=" + apiKey + "&currency=BCH"
    )
      .then(res => res.json())
      .then(data => this.setState({ four: { price: data[6].price } }));
    // EOS
    fetch(
      "https://api.nomics.com/v1/markets/prices?key=" + apiKey + "&currency=EOS"
    )
      .then(res => res.json())
      .then(data => this.setState({ five: { price: data[6].price } }));
  };

  render() {
    //Prices
    let onePrice = Math.round(this.state.one.price * 100) / 100;
    let twoPrice = Math.round(this.state.two.price * 100) / 100;
    let threePrice = Math.round(this.state.three.price * 100) / 100;
    let fourPrice = Math.round(this.state.four.price * 100) / 100;
    let fivePrice = Math.round(this.state.five.price * 100) / 100;

    return (
      <div className="top5">
        <div className="top-1">
          <h1>#1</h1>
          <h2>Bitcoin</h2>
          <h3>Price</h3>
          <h4 className="price">{onePrice}</h4>
        </div>
        <div className="top-2">
          <h1>#2</h1>
          <h2>Ethereum</h2>
          <h3>Price</h3>
          <h4 className="price">{twoPrice}</h4>
        </div>
        <div className="top-3">
          <h1>#3</h1>
          <h2>XRP</h2>
          <h3>Price</h3>
          <h4 className="price">{threePrice}</h4>
        </div>
        <div className="top-4">
          <h1>#4</h1>
          <h2>Bitcoin Cash</h2>
          <h3>Price</h3>
          <h4 className="price">{fourPrice}</h4>
        </div>
        <div className="top-5">
          <h1>#5</h1>
          <h2>EOS</h2>
          <h3>Price</h3>
          <h4 className="price">{fivePrice}</h4>
        </div>
        <div id="button-shadow" />
        <button id="buy-now">Buy Now</button>
        <p>
          Built with
          <a href="https://docs.nomics.com"> Nomics Cryptoasset API</a>.
        </p>
      </div>
    );
  }
}
