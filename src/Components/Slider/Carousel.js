import React from "react";
import Slider from "react-slick";

import ginger_1 from "../../resorces/img/ginger_1.jpg";
import ginger_2 from "../../resorces/img/ginger_2.png";
import ginger_3 from "../../resorces/img/ginger_3.jpg";

const Carousel = () => {
	const settings = {
	dots: false,
	infinite: true,
	autoplay: true,
	speed: 500
	};
return(
<div
	className="carrousel_wrapper"
	style={{
		height: `${window.innerHeight}px`,
		overflow: "hidden"
	}}
	>
	<Slider {...settings}>
	<div>
	<div
		className="carrousel_image"
		style={{
		background: `url(${ginger_1})`,
		height: `${window.innerHeight}px`		
		}}
		/>
		</div>
	<div>
	<div
		className="carrousel_image"
		style={{
		background: `url(${ginger_2})`,
		height: `${window.innerHeight}px`		
		}}
		/>
		</div>
		<div>
<div
		className="carrousel_image"
		style={{
		background: `url(${ginger_3})`,
		height: `${window.innerHeight}px`		
		}}
		/>
		</div>		
	</Slider>
	</div>
		);
		};
export default Carousel;