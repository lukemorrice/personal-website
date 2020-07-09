import React, { Component } from "react";
import SideBar from "./SideBar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import "../css/Content.css";
import { GoThreeBars, GoPlus } from "react-icons/go";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { FaStrava } from "react-icons/fa";
import { openNav, closeNav } from "../assets/nav.js";

export default class Content extends Component {
	render() {
		return (
			<div class="content">
				{sideNav}
				<div id="main">
					<GoThreeBars id="bars" class="bars" onClick={() => openNav()} />
					<GoPlus id="cross" class="bars" onClick={() => closeNav()} />
					<Home />
					<About />
					<Projects />
					<Contact />
				</div>
			</div>
		);
	}
}

const sideNav = (
	<div class="nav" id="mySideNav">
		<div style={{ textAlign: "center" }}>
			<img
				src={require("../images/portrait.jpeg")}
				class="portrait"
				alt="Portrait"
			/>
			<h1 class="name">Luke Morrice</h1>
			<ul class="tabItems">
				<li>
					<a href="#home" data-nav-section="home">
						Introduction
					</a>
				</li>
				<li>
					<a href="#about" data-nav-section="about">
						About
					</a>
				</li>
				<li>
					<a href="#projects" data-nav-section="projects">
						Projects
					</a>
				</li>
				<li>
					<a href="#contact" data-nav-section="contact">
						Contact
					</a>
				</li>
			</ul>
			<div class="socialIcons">
				<a target="_blank" href="https://www.linkedin.com/in/lukemorrice/">
					<IoLogoLinkedin class="socialIcon" />
				</a>
				<a target="_blank" href="https://github.com/lukemorrice">
					<IoLogoGithub class="socialIcon" />
				</a>
				<a target="_blank" href="https://www.strava.com/athletes/33419952">
					<FaStrava class="socialIcon" />
				</a>
			</div>
		</div>
	</div>
);
