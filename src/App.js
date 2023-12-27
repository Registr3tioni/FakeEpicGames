import React from "react";
import './resorces/style.css';
import Slider from "./Components/Slider";
import Header from "./Components/Header_Footer/Header.js";
import Info from "./Components/Info/index.js";
import Highlights from "./Components/Highlights/index.js";
import Footer from "./Components/Highlights/Footer.js"


function App() {
	return (
	<div  className="App">
		<Header />
		<Slider />
		<Info />
		<Highlights />
		<Footer />
		</div>
);
};
export default App;