import React, { Component } from "react";
import "../css/Content.css";
import "../css/Projects.css";

export default class Projects extends Component {
	render() {
		return (
			<section data-section="projects" class="section" id="projects">
				<h2 class="subHeader">Projects I've Worked On</h2>
				<ul class="projectsList">
					<li>
						<h1 class="projectHeader">Optify, Personal Project</h1>
						<br />
						<div class="projectItem">
							<div class="optifyO" />
							<p class="optifyText">ptify</p>
						</div>
						<p class="description">
							<br />
							Developed a mobile app for iOS and Android using{" "}
							<span style={{ fontWeight: "600" }}>React Native</span>,
							<span style={{ fontWeight: "600" }}> Redux </span>
							and
							<span style={{ fontWeight: "600" }}> Firebase</span>
							. <br /> <br />
							Optify helps you to become the best version of yourself by sending
							you daily challenges to complete related to exercise, wellbeing,
							learning, relationships, habits and creativity. The user chooses
							which categories and the number of goals they want to recieve each
							day (1-3). Additionally, they can add their own goals and set
							which ones they want to receive daily.
							<br /> <br />
							The purpose of Optify is based on the belief that daily,
							incremental improvements quickly add up and compound to help you
							flourish.
							<br /> <br />
							"Improve by just 1% every day and, after a year, you will be 37
							times better than before."
						</p>
					</li>
					<br />
					<li>
						<h1 class="projectHeader">
							Pneumonia Classification from Chest X-Ray Images
						</h1>
						<p class="description" style={{ color: "blue", fontSize: 21 }}>
							<a
								style={{ color: "blue" }}
								href="https://github.com/lukemorrice/ChestXRays"
								target="_blank"
							>
								Github Repository Link
							</a>
						</p>
						<p class="description">
							Using chest x-ray images sourced from Kaggle, I created a
							Convolutional Neural Network to classify between healthy patients
							and patients with pneumonia. I created two models: a standard CNN
							with 2 convolution blocks, each with a max-pooling layer, and a
							second Transfer Learning model (using ResNet V2 50). The second
							model perfomed poorly, however the first model achieved an
							accuracy on a test set of
							<span style={{ fontWeight: "600" }}> ~89%</span>.
						</p>
					</li>
					<br />
					<li>
						<h1 class="projectHeader">www.lukemorrice.com</h1>
						<p class="description">
							Using my skills in web development, I created my personal website
							using{" "}
							<span style={{ fontWeight: "600" }}>React (JavaScript)</span> in
							combination with <span style={{ fontWeight: "600" }}>HTML</span>{" "}
							and <span style={{ fontWeight: "600" }}>CSS</span>.
						</p>
					</li>
				</ul>
			</section>
		);
	}
}
