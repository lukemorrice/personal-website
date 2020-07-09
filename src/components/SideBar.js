import React, { Component } from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { FaStrava } from "react-icons/fa";
import "../css/SideBar.css";

export default class SideBar extends Component {
	render() {
		return (
			<div class="sideNav">
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
	}
}

{
	/* <div class="socialIcons">
						<a href="https://www.linkedin.com/in/lukemorrice/" target="_blank">
							<IoLogoLinkedin class="socialIcon" id="linkedin" />
						</a>
						<a href="https://github.com/lukemorrice" target="_blank">
							<IoLogoGithub color="#333" class="socialIcon" id="github" />
						</a>
					</div> */
}
