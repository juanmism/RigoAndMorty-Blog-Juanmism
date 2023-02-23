import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Cards } from "../component/cards"

export const Countriesdetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div>
			<Cards/>
		</div>
			
	);
};

Countriesdetails.propTypes = {
	match: PropTypes.object
};
