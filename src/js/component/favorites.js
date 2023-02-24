import React, { Component, useContext } from "react";
import { Context } from "../store/appContext"

import Dropdown from 'react-bootstrap/Dropdown';

import "../../styles/favorites.css";

export const Favorites = () => {
    const { store, actions } = useContext(Context);
    return(
      <Dropdown>
        <Dropdown.Toggle className="letter-fav" variant="warning" id="dropdown-basic">
          Favorites <i className="number-fav">&nbsp;&nbsp;{store.favorites.length}&nbsp;&nbsp;</i>
          </Dropdown.Toggle>
            <Dropdown.Menu>
                  {store.favorites.map((el, index) => {
                      return (
                          <Dropdown.Item className="drop-scroll" key={index} href="#">{el.name}
                          <i className="fas fa-trash-alt" onClick={() => actions.deleteFavorites(index)}></i>
                          </Dropdown.Item>)
                  })}
            </Dropdown.Menu>
    </Dropdown>
    
    )
};