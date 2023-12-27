import React, {useState, useEffect} from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../Utils/MyButton";
import egg from "../../resorces/img/egg.jpeg";



const Discount = () => {
	const [discountStart,setDiscountStart] = useState(0);
	const discountEnd= 30;
	
	const porcentage = () => {
	if (discountStart < discountEnd) {
	setDiscountStart(discountStart + 1);
	}
	};

useEffect(() => {
	setTimeout(() => {
		porcentage();
	}, 30);
},[discountStart]);

return (
 
	<div className="center_wrapper" style={{
		background: `url(${egg})`,
		 overflow: 'hidden',
		 backgroundSize: 'cover',
		 height:'500px'
	}}>
	<div className="discount_wrapper">
	<Fade onReveal={() => porcentage()}>
	<div className ="discount_porcentage">
	<span className="spn">{discountStart}% OFF</span>
	
	
	</div>
	</Fade>
	<div className="discount_description">
	<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><h3 className="rtt">Get coupon</h3>
	</div>
	</div>
	</div>
	);
	};
	
	export default Discount;