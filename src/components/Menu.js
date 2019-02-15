import React from "react";
import Meal from "./Meal";

class Menu extends React.Component {
  render() {
    const categories = Object.keys(this.props.data); // Retourne un tableau

    // Créer une liste de categories, ayant toutes des plats
    // const newCategories = [];
    // for (let i = 0; i < categories.length; i++) {
    //   if (this.props.data[categories[i]].length > 0) {
    //     newCategories.push(categories[i]);
    //   }
    // }

    return (
      <div className="menu">
        {categories.map((category, index) => {
          if (this.props.data[category].length > 0) {
            return (
              <div key={index}>
                <h2 key={index}>{category}</h2>
                <div className="meal-container">
                  {this.props.data[category].map(meal => {
                    return (
                      <Meal
                        addMeal={this.props.addMeal}
                        key={meal.id}
                        {...meal}
                      />
                    );
                  })}
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  }
}

export default Menu;
