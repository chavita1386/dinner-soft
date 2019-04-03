import React, { Component } from "react";
import { getDishes } from "../services/fakeDishesService";
import MenuItem from "./menuItem";

const imagePath = "/assets/";

class MenuList extends Component {
  state = {
    dishes: []
  };

  componentDidMount() {
    console.log(process.env.PUBLIC_URL);
    this.setState({ dishes: getDishes() });
  }

  handleClick = (id) => {
    console.log("Click to menu: ", id);
  };
  render() {
    return (
      <div>        
        {this.state.dishes.map(dish => (
          <MenuItem
            key={dish._id}
            name={dish.name}
            handleClick={(e) => this.handleClick(dish._id)}
            imageUrl={imagePath + dish.imageUrl}
          />
        ))}
      </div>
    );
  }
}

export default MenuList;
