import React from "react";

class Meal extends React.Component {
  render() {
    return (
      <div
        onClick={() => {
          this.props.addMeal({
            name: this.props.title,
            quantity: 1,
            price: Number(this.props.price)
          });
        }}
        className="meal"
      >
        {this.props.title}
      </div>
    );
  }
}

export default Meal;
