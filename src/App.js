import React, { Component } from "react";
import {
	IoMdPerson,
	IoMdCode,
	IoIosCall,
	IoLogoGithub,
	IoLogoLinkedin,
} from "react-icons/io";
import "./index.css";

class App extends Component {
	render() {
		return (
			<div>
				<div style={{ marginLeft: 40, marginRight: 40 }}>
					<div
						className="row"
						style={{
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 30,
							marginTop: 10,
							marginLeft: 10,
						}}
					>
						<div
							className="row"
							style={{
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<div style={{ marginRight: 20 }}>
								<img
									src={require("./images/portrait.png")}
									width="200"
									height="200"
								/>
							</div>
							<h1 id="nameheader">Luke Morrice</h1>
						</div>
						<div
							className="row"
							style={{
								marginRight: 10,
								height: "100%",
							}}
						>
							<a
								href="https://www.linkedin.com/in/lukemorrice/"
								style={{
									height: 50,
									width: 50,
									marginRight: 10,
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<IoLogoLinkedin
									color="#0072b1"
									style={{ height: "100%", width: "100%" }}
								/>
							</a>
							<a
								href="https://github.com/lukemorrice"
								style={{
									height: 50,
									width: 50,
									justifyContent: "center",
									alignItems: "center",
									marginRight: 10,
								}}
							>
								<IoLogoGithub
									color="#333"
									style={{ height: "100%", width: "100%" }}
								/>
							</a>
						</div>
					</div>
					<div
						id="about"
						className="square"
						style={{ backgroundColor: "#48c9b0" }}
					>
						<div className="iconHeader">
							<h3>About Me</h3>
							<IoMdPerson size={35} style={{ marginLeft: 10 }} />
						</div>
						<p>
							Hi there! I'm Luke. I'm a student at The University of Edinburgh
							in my final year studying Artificial Intelligence and Computer
							Science.
						</p>
						<p>
							Asides from software engineering, I enjoy playing football and
							following my team, Manchester City.
						</p>
					</div>
					<div className="row">
						<div
							id="projects"
							className="square"
							style={{ backgroundColor: "#64b5f6" }}
						>
							<div className="iconHeader">
								<h3>Projects</h3>
								<IoMdCode size={40} style={{ marginLeft: 10 }} />
							</div>
							<p>Some of my personal projects.</p>
						</div>
						<div
							id="contact"
							className="square"
							style={{ backgroundColor: "#64b5f6" }}
						>
							<div className="iconHeader">
								<h3>Contact</h3>
								<IoIosCall size={35} style={{ marginLeft: 10 }} />
							</div>
							<p>
								Email:{" "}
								<a
									style={{ textDecoration: "none" }}
									href="mailto:ljrmorrice@gmail.com"
								>
									ljrmorrice@gmail.com
								</a>
							</p>
						</div>
					</div>
					<div style={{ marginBottom: 40, marginTop: 10 }}>
						<div
							style={{
								display: "flex",
							}}
						>
							<img
								src={require("./images/amsterdam_football.png")}
								width="550"
								height="350"
								style={{ margin: "auto", borderRadius: 40 }}
							/>
						</div>
						<figcaption
							style={{ textAlign: "center", marginTop: 15, color: "#6c757d" }}
						>
							Football game for Culter Boys Club, Amsterdam
						</figcaption>
					</div>
				</div>

				<footer>
					<p
						style={{
							color: "#fff",
							textAlign: "center",
							backgroundColor: "#1a252f",
							padding: 20,
							marginBottom: 0,
						}}
					>
						Copyright © lukemorrice.com 2020
					</p>
				</footer>
			</div>
		);
	}
}

export default App;
