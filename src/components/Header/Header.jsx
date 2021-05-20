import React, { useState } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import {
	Typing,
	Emoji,
	LanguageCOL,
	LanguageUSA,
	LanguageContainer,
	HeaderContainer,
	Name,
} from "./Header.styled";

const Header = ({ languageClick, language }) => {
	const [checked, setChecked] = useState(false);

	const handleChange = (nextChecked) => setChecked(nextChecked);

	return (
		<HeaderContainer>
			<i className="fas fa-laptop-code fa-6x" style={{ color: "#212529" }}></i>
			<Name>
				Camila Parada <br />
				Valderrama
			</Name>
			<Typing>
				<Typical
					steps={[
						"Frontend Developer",
						2000,
						"Backend Developer",
						2000,
						"Full-stack Developer",
						2000,
					]}
					loop={50}
				/>
			</Typing>
			<Switch
				checked={checked}
				onChange={handleChange}
				offColor="#baaa80"
				onColor="#353535"
				aria-label="dark/light mode toggle switch"
				width={90}
				height={40}
				checkedIcon={<Emoji>☀️</Emoji>}
				uncheckedIcon={<Emoji>🦉</Emoji>}
			/>
			<LanguageContainer>
				<LanguageUSA
					active={language === "USA" ? true : false}
					onClick={() => languageClick("USA")}
				>
					🇺🇸
				</LanguageUSA>
				<LanguageCOL
					active={language === "COL" ? true : false}
					onClick={() => languageClick("COL")}
				>
					🇨🇴
				</LanguageCOL>
			</LanguageContainer>
		</HeaderContainer>
	);
};

export default Header;
