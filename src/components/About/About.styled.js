import styled from "styled-components";

export const MainContainer = styled.div`
	padding: 10px 15px;
	font-family: "Raleway", sans-serif;
`;

export const FullContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
	margin-top: 60px;
`;

export const SectionTitle = styled.h2`
	font-weight: 400;
	font-size: 18px;
	letter-spacing: 3px;
`;

export const PolaroidContainer = styled.div`
	width: 100%;
	/* width: 33.33%; */
	margin-bottom: 30px;
`;

export const Polaroid = styled.div`
	background: #ffffff;
	/* display: inline-block; */
	/* margin: 55px 75px 30px; */
	padding: 15px 15px 15px;
	text-align: center;
	text-decoration: none;
	-webkit-box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
	-moz-box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
	-webkit-transition: all 0.2s linear;
	-moz-transition: all 0.2s linear;
	transition: all 0.2s linear;
	/* z-index: 0;
	position: relative; */
`;

export const ProfilePicture = styled.img`
	width: 100%;
`;

export const ContentContainer = styled.div`
	width: 100%;
	/* width: 66.66%; */
	display: flex;
	justify-content: center;
	margin-top: 40px;
`;

export const ContentWindow = styled.div`
	margin: 0 15px;
	border: 1px solid rgba(0, 0, 0, 0.125);
	border-radius: 3px;
`;

export const ContentHeader = styled.div`
	display: flex;
	background-color: #f7f7f7;
	padding: 8px 13px;
`;

const Circle = styled.div`
	border-radius: 50%;
	width: 10px;
	height: 10px;
	margin-right: 7px;
`;

export const CircleRed = styled(Circle)`
	background-color: #ff5f57;
`;

export const CircleYellow = styled(Circle)`
	background-color: #ffbd2e;
`;

export const CircleGreen = styled(Circle)`
	background-color: #28ca41;
`;

export const ContentBody = styled.div`
	display: center;
	justify-content: flex-start;
	padding: 0 20px;
	text-align: justify;
	line-height: 30px;
`;
