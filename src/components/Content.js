import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import "../css/Content.css";

export default class Content extends Component {
	render() {
		return (
			<div class="content">
				<Home />
				<About />
				<Projects />
				<Contact />
			</div>
		);
	}
}
