import React from "react";
import { Link } from "react-router-dom";
import globo from "../../img/globo.webp";
import "../../styles/navbar.css"

export const Navbar = () => {
	return (
		<nav className="nav-main navbar nav-main mb-3">
		<Link to="/">
			<span className="navbar-brand mb-0 h1">
			<img src={globo} width="150" height="150"/>
			</span>
		</Link>
		<h1 className="h1-navbar">World's Countries</h1>
		<div className="ml-auto">
			<Link to="/countries">
				<button type="button" className="btn btn-primary">Go to Countries</button>
			</Link>	
			<button type="button" className="btn btn-dark">Favoritos</button>
		</div>
	</nav>
	);
};
