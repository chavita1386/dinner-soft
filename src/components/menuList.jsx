import React, { Component } from "react";
import { getDishes } from "../services/fakeDishesService";

class MenuList extends Component {
  state = {
    dishes: []
  };

  componentDidMount() {
    this.setState({ dishes: getDishes() });
  }
  render() {
    return (
      <div>
        <article>1</article>
        <article>2</article>
        <article>3</article>
        <article>4</article>
      </div>
    );
  }
}

export default MenuList;
