import React from "react";
import {
	FullContainer,
	MainContainer,
	PolaroidContainer,
	ProfilePicture,
	Polaroid,
	ContentContainer,
	ContentWindow,
	ContentHeader,
	ContentBody,
	CircleRed,
	CircleYellow,
	CircleGreen,
	SectionTitle,
} from "./About.styled";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify-icons/logos/react";
import nodejsIcon from "@iconify-icons/logos/nodejs";

const About = ({
	sectionName,
	profilePic,
	helloMessage,
	about,
	personalAbout,
}) => {
	return (
		<section>
			<MainContainer>
				<SectionTitle>{sectionName}</SectionTitle>
				<FullContainer>
					<PolaroidContainer>
						<Polaroid>
							<ProfilePicture src={profilePic} alt="" />
							<Icon
								icon={reactIcon}
								style={{ fontSize: "250%", margin: "15px 15px 0 5px" }}
							/>
							<Icon
								icon={nodejsIcon}
								style={{ fontSize: "250%", margin: "15px 0 0 5px" }}
							/>
						</Polaroid>
					</PolaroidContainer>

					<ContentContainer>
						<ContentWindow>
							<ContentHeader>
								<CircleRed></CircleRed>
								<CircleYellow></CircleYellow>
								<CircleGreen></CircleGreen>
							</ContentHeader>
							<ContentBody>
								<p>{helloMessage}</p>
								<p>{about}</p>
								<p>{personalAbout}</p>
							</ContentBody>
						</ContentWindow>
					</ContentContainer>
				</FullContainer>
			</MainContainer>
		</section>
	);
};

export default About;
