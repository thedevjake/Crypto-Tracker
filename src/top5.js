import React, { Component } from "react";
import "./top5.css";
import apiKey from "./apiKey";

export default class Top5 extends Component {
  constructor() {
    super();
    this.state = {
      one: {
        name: "",
        MktCap: 0,
        Price: 0
      },
      two: {
        name: "",
        MktCap: 0,
        Price: 0
      },
      three: {
        name: "",
        MktCap: 0,
        Price: 0
      },
      four: {
        name: "",
        MktCap: 0,
        Price: 0
      },
      five: {
        name: "",
        MktCap: 0,
        Price: 0
      },
      coins: []
    };
  }

  componentDidMount() {
    this.fetchCoins();
  }

  fetchCoins = () => {
    let url =
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      qString = "?CMC_PRO_API_KEY=" + apiKey + "&start=1&limit=5&convert=USD";
    fetch(url + qString)
      .then(res => res.json())
      .then(data =>
        this.setState({
          one: {
            name: data.data[0].name,
            MktCap: data.data[0].quote.USD.market_cap,
            price: data.data[0].quote.USD.price
          },
          two: {
            name: data.data[1].name,
            MktCap: data.data[1].quote.USD.market_cap,
            price: data.data[1].quote.USD.price
          },
          three: {
            name: data.data[2].name,
            MktCap: data.data[2].quote.USD.market_cap,
            price: data.data[2].quote.USD.price
          },
          four: {
            name: data.data[3].name,
            MktCap: data.data[3].quote.USD.market_cap,
            price: data.data[3].quote.USD.price
          },
          five: {
            name: data.data[4].name,
            MktCap: data.data[4].quote.USD.market_cap,
            price: data.data[4].quote.USD.price
          }
        })
      );
  };

  render() {
    if (this.state.coins.length > 0) {
      console.log(this.state.coins);
    }
    if (this.state.one.price > 0) {
      console.log(this.state.one.price);
    }
    if (this.state.one.MktCap > 0) {
      console.log(this.state.one.MktCap);
    }
    // Names
    let oneName = this.state.one.name;
    let twoName = this.state.two.name;
    let threeName = this.state.three.name;
    let fourName = this.state.four.name;
    let fiveName = this.state.five.name;
    // Market Cap
    let oneMktCap = "$ " + Math.round(this.state.one.MktCap);
    let twoMktCap = "$ " + Math.round(this.state.two.MktCap);
    let threeMktCap = "$ " + Math.round(this.state.three.MktCap);
    let fourMktCap = "$ " + Math.round(this.state.four.MktCap);
    let fiveMktCap = "$ " + Math.round(this.state.five.MktCap);

    //Prices
    let onePrice = "$ " + Math.round(this.state.one.price * 100) / 100;
    let twoPrice = "$ " + Math.round(this.state.two.price * 100) / 100;
    let threePrice = "$ " + Math.round(this.state.three.price * 100) / 100;
    let fourPrice = "$ " + Math.round(this.state.four.price * 100) / 100;
    let fivePrice = "$ " + Math.round(this.state.five.price * 100) / 100;

    return (
      <div className="top5">
        <div className="top-1">
          <h1>#1</h1>
          <h2>{oneName}</h2>
          <h3>Market Cap</h3>
          <h4 className="mkt-cap">{oneMktCap}</h4>
          <h3 className="price">Price</h3>
          <h4 className="cur-price">{onePrice}</h4>
        </div>
        <div className="top-2">
          <h1>#2</h1>
          <h2>{twoName}</h2>
          <h3>Market Cap</h3>
          <h4 className="mkt-cap">{twoMktCap}</h4>
          <h3 className="price">Price</h3>
          <h4 className="cur-price">{twoPrice}</h4>
        </div>
        <div className="top-3">
          <h1>#3</h1>
          <h2>{threeName}</h2>
          <h3>Market Cap</h3>
          <h4 className="mkt-cap">{threeMktCap}</h4>
          <h3 className="price">Price</h3>
          <h4 className="cur-price">{threePrice}</h4>
        </div>
        <div className="top-4">
          <h1>#4</h1>
          <h2>{fourName}</h2>
          <h3>Market Cap</h3>
          <h4 className="mkt-cap">{fourMktCap}</h4>
          <h3 className="price">Price</h3>
          <h4 className="cur-price">{fourPrice}</h4>
        </div>
        <div className="top-5">
          <h1>#5</h1>
          <h2>{fiveName}</h2>
          <h3>Market Cap</h3>
          <h4 className="mkt-cap">{fiveMktCap}</h4>
          <h3 className="price">Price</h3>
          <h4 className="cur-price">{fivePrice}</h4>
        </div>
        <div id="button-shadow" />
        <button id="buy-now">Buy Now</button>
      </div>
    );
  }
}
