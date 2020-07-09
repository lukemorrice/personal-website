import React, { Component } from "react";
import "../css/Home.css";

export default class Home extends Component {
	render() {
		return (
			<div class="headerContent">
				<section data-section="home" class="section" id="home">
					<h1 class="header">Hi there, I'm Luke!</h1>
					<h2 class="header">
						A Software Engineer and Football Fan from Scotland
					</h2>
				</section>
			</div>
		);
	}
}
