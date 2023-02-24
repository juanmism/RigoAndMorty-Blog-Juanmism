import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Card from 'react-bootstrap/Card';
import "../../styles/countriesdetails.css";

export const Countriesdetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params)
	const charOnly = store.characters[params.theid]; // Pulsar primer o segundo muñeco para utilizar demo.
	
	return (
		<div className="div-details">	
		<Card className="card-detail" style={{ width: '48rem' }}>
      <Card.Img className="card-img" src={charOnly.image} />
      <Card.Body>
        <Card.Title>{charOnly.name}</Card.Title>
        <Card.Text>
		  <p>Status: {charOnly.status}</p>
		  <p>Gender: {charOnly.gender}</p>
		  <p>Origin: {charOnly.origin.name}</p>
		  <p>Specie: {charOnly.species}</p>
		  <a href={charOnly.url}>See More about {charOnly.name}</a>
        </Card.Text>
      </Card.Body>
    </Card>
		</div>
	);
};

Countriesdetails.propTypes = {
	match: PropTypes.object
};
