import React from "react";
import "./Header.css";

function Header() {
	return (
		<header className="site-header">
			<div className="site-container header-inner">
				<a href="/" className="brand" aria-label="Maieutic home">
					<img src="maieutic-logo.png" alt="Maieutic Logo" />
				</a>

				<nav className="main-nav" aria-label="Main navigation">
					<a className="nav-link" href="/">Home</a>
					<a className="nav-link" href="/solutions">Solutions</a>
					<a className="nav-link" href="/industry">Industry</a>
					<a className="nav-link" href="/insights">Insights</a>
					<a className="nav-link" href="/portfolio">Portfolio</a>
					<a className="nav-link" href="/resources">Resources</a>
					<a className="nav-link" href="/contact">Contact</a>
				</nav>
			</div>
		</header>
	);
}

export default Header;