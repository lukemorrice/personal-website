import React, { Component } from "react";
import SideBar from "./components/SideBar";
import Content from "./components/Content";

export default class App extends Component {
	render() {
		return (
			<div>
				<SideBar />
				<Content />
			</div>
		);
	}
}
