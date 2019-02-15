import React, { Component } from "react";
import Header from "./components/Header";
import Basket from "./components/Basket";
import Menu from "./components/Menu";
import axios from "axios";

import "./App.css";

// 1) Les états
// 2) UI
// 3) Interactions

class App extends Component {
  state = {
    restaurant: {},
    menu: {},
    error: false,
    basket: [
      {
        name: "Brunch vegan",
        price: 24.5,
        quantity: 1
      },
      {
        name: "Fromage blanc",
        price: 3.5,
        quantity: 1
      }
    ]
  };
  renderError = () => {
    if (this.state.error === true) {
      return <div>Une erreur est survenue</div>;
    }
    return null;
  };
  addMeal = meal => {
    const newBasket = [...this.state.basket];
    newBasket.push(meal);

    this.setState({
      basket: newBasket
    });
  };
  // (1), (3)
  render() {
    return (
      <div>
        <Header />
        {this.renderError()}
        <div className="wrapper">
          <h1>{this.state.restaurant.name}</h1>
          <p>{this.state.restaurant.description}</p>
        </div>

        <div className="page-content wrapper">
          <Menu addMeal={this.addMeal} data={this.state.menu} />
          <Basket meals={this.state.basket} />
        </div>
      </div>
    );
  }
  // (2)
  async componentDidMount() {
    try {
      const response = await axios.get("https://deliveroo-api.now.sh/menu");
      // Va déclencher un nouveau render
      this.setState({
        restaurant: response.data.restaurant,
        menu: response.data.menu
      });
    } catch (error) {
      this.setState({
        error: true
      });
    }
  }
}

export default App;
