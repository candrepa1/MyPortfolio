import styled from "styled-components";

export const HeaderContainer = styled.section`
	background-color: #e9d5a1;
	height: 100%;
	padding-top: 180px;
	font-family: "Raleway", sans-serif;
`;

export const Name = styled.h1`
	margin-top: 30px;
	font-weight: 600;
	font-size: 33px;
`;

export const Typing = styled.div`
	text-transform: uppercase;
	font-size: 23px;
`;

export const Emoji = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 30px;
`;

export const LanguageContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 170px 15px 0 15px;
`;

const Language = styled.span`
	font-size: 50px;
	border-radius: 100px;
	cursor: pointer;
	margin-left: 20px;
	justify-self: center;
`;

export const LanguageUSA = styled(Language)`
	${({ active }) =>
		active &&
		`
    	color: rgba(0, 0, 0, 0.5);
  	`}
`;

export const LanguageCOL = styled(Language)`
	${({ active }) =>
		active &&
		`
    	color: rgba(0, 0, 0, 0.5);
  	`}
`;
