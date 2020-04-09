import React from "react";
import './card-list-component.css'

export const CardList = (props) => {
  console.log(props);
  return <div className='card-list'>{props.children}</div>;
};
