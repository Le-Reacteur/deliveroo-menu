import React from "react";

class Basket extends React.Component {
  render() {
    return (
      <div className="basket">
        {this.props.meals.map((meal, index) => {
          return (
            <div key={"meals-" + index}>
              <span>{meal.quantity} </span>
              <span>{meal.name} </span>
              <span>{meal.quantity * meal.price} </span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Basket;
