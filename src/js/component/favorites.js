import React, { Component, useContext } from "react";
import { Context } from "../store/appContext"
import Dropdown from 'react-bootstrap/Dropdown';
import"../../styles/footer.css";

export const Favorites = () => {
    const { store, actions } = useContext(Context);
    console.log(store.favorites)
    
    return(
        <Dropdown>
      <Dropdown.Toggle variant="warning" id="dropdown-basic">
        Favorites {store.favorites.length}
      </Dropdown.Toggle>
      <Dropdown.Menu>
            {store.favorites.map((el, index) => {
                return (
                    <Dropdown.Item key={index} href="#">{el.name}
                    <i className="fas fa-trash-alt" onClick={() => actions.deleteFavorites(index)}></i>
                    </Dropdown.Item>)
            })}
      </Dropdown.Menu>
    </Dropdown>
    
    )
};