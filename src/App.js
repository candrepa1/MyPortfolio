import React, { useState } from "react";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
	const [language, setLanguage] = useState("USA");

	const handleClick = (id) => setLanguage(id);

	return (
		<div className="App">
			<Header languageClick={handleClick} language={language} />
			<About
				sectionName="ABOUT ME"
				profilePic="https://static.tumblr.com/27196e6c18448ca51d52ffb3a5481bd8/jivpey3/V09oud9gl/tumblr_static_tumblr_static_filename_focused_v3.jpg"
				helloMessage="Hi :)"
				about="👋 I'm Camila, a Software Developer based in Colombia 🇨🇴 Currently building websites with React, as well as learning Backend Development with Node.js."
				personalAbout="Besides programming, I'm interested in learning languages. I'm fluent in English and Spanish, and my next goal is to reach an intermediate level in French. I love having picnics 🧺 with my friends and watching shows 📺 with complex storylines."
			/>
		</div>
	);
}

export default App;
