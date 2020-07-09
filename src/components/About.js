import React, { Component } from "react";
import "../css/Content.css";
import "../css/About.css";

export default class About extends Component {
	render() {
		return (
			<section data-section="about" class="section" id="about">
				<h2 class="subHeader">About Me</h2>
				<div>
					<h3 class="descriptionHeader">Who am I?</h3>
					<p class="description">
						I'm a driven, goal-oriented individual full of determination. I'm
						from Aberdeen, Scotland but attend The University of Edinburgh;
						currently about to begin my 4th year. My degree is Artificial
						Intelligence and Computer Science, which I love. Specifically, I
						enjoy the Data Science and Software Engineering aspects, revolving
						around Machine Learning.
						<br /> <br />
						Seeing the massive progress made in recent years with AI has
						inspired me to be at the forefront of this sector. However, I also
						recognise the ethical responsibilites that working with data
						entails, and, concerning this, believe there is a lot of room for
						improvement.
					</p>
				</div>
				<div>
					<h3 class="descriptionHeader">What am I up to?</h3>
					<p class="description">
						I have used the quarantine period as an opportunity to reflect and
						improve. For example, I have completed an online course from Udacity
						called 'Intro to TensorFlow for Deep Learning'. It was a great
						experience and invaluable as I expanded my understanding of concepts
						within Deep Learning and learned how to work with TensorFlow. I
						intend to complete many more.
						<br /> <br />
						Additionally, I have used the new free time to develop fresh,
						benefical habits and work at breaking some bad ones. Despite being
						active and attending the gym, I wanted to improve my cardio fitness
						so I can perform better when playing for my Football Team which I
						captain, Baird Buffaloes. So, I took up running, and have enjoyed it
						so much that I have set a goal to run a{" "}
						<span style={{ fontWeight: "bold" }}>marathon</span> before my 22nd
						birthday (August 2021).
					</p>
				</div>
			</section>
		);
	}
}
