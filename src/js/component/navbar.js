import React from "react";
import { Favorites } from "./favorites";
import { Link } from "react-router-dom";
import globo from "../../img/R_M_collab_logo.webp";
import "../../styles/navbar.css"

export const Navbar = () => {
	return (
		<nav className="nav-main navbar nav-main mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
				<img src={globo} width="150" height="150"/>
				</span>
			</Link>
			<h1 className="h1-navbar">Ricky & Morti</h1>
			<div className="ml-auto">
			<Link to="/countries">
				<button type="button" className="chara-nav btn btn-success">Characters</button>
			</Link>	
			<Favorites/>
			</div>
	</nav>
	);
};
