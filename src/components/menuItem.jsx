import React from "react";

const MenuItem = props => {
  return (
    <div onClick={props.handleClick}>
      <h3>{props.name}</h3>
      <img src={props.imageUrl} alt={props.name} />
      <button onClick={props.handleClick}>Agregar</button>
    </div>
  );
};

export default MenuItem;
