import React, { useContext } from "react";
import { Context } from "../store/appContext";

import Button from 'react-bootstrap/Button';

import "../../styles/nextprev.css";


export function Nextprev() {
  const { store, actions } = useContext(Context);

  const nextFetch = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => actions.nextCharacters(data));

  };

  const prev = () => {
    nextFetch(store.prev);
  };

  const next = () => {
    nextFetch(store.next);
  };

 
  return (
    <div className="div-next">
        <div className="sec-div-next">
          <Button variant="outline-warning" onClick={()=>prev()}>Prev Page</Button>{' '}
          <Button variant="outline-success" onClick={()=>next()}>Next Page</Button>{' '}
        </div>
    </div>
          
  );
}