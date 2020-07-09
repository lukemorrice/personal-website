import React, { Component } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { MdPhone } from "react-icons/md";
import { FaRegHandPointLeft } from "react-icons/fa";
import "../css/Content.css";
import "../css/Contact.css";

export default class Contact extends Component {
	render() {
		return (
			<section data-section="contact" class="section" id="contact">
				<h2 class="subHeader">Get In Touch</h2>

				<div class="contactInfo">
					<AiOutlineMail class="contactIcon" />
					<p class="contactText">
						<a class="link" href="mailto:ljrmorrice@gmail.com">
							ljrmorrice@gmail.com
						</a>
					</p>
				</div>

				<div class="contactInfo">
					<MdPhone class="contactIcon" />
					<p class="contactText">07943614536</p>
				</div>

				<div class="contactInfo">
					<FaRegHandPointLeft class="contactIcon" />
					<p class="contactText">
						Explore my{" "}
						<a
							class="link"
							target="_blank"
							href="https://www.linkedin.com/in/lukemorrice/"
						>
							LinkedIn
						</a>{" "}
						and{" "}
						<a
							class="link"
							target="_blank"
							href="https://github.com/lukemorrice"
						>
							Github
						</a>
					</p>
				</div>
			</section>
		);
	}
}
