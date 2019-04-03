import React, { Component } from "react";
import MenuList from "./components/menuList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Chavita Dinner</h2>
        <MenuList />
      </div>
    );
  }
}

export default App;
