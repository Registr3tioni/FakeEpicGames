import React from "react";
import Zoom from "react-reveal/Zoom";
import PlaceIcon from '@mui/icons-material/Place';
import icon_calendar from "../../resorces/img/calendar.png";
import icon_location from "../../resorces/img/location.png";
import icon_PlaceIcon from "../../resorces/img/PlaceIcon.png";
const Info = () => {
	return (
	<div className="bck_black">"
		<div className="center_wrapper">
			<div className="vn_wrapper">
				<Zoom duration={500}>
					<div className="vn_item">
					<div className="vn_outer">
					<div className="vn_inner">
					<div className="vn_icon_square bck_red" />
					<div id="corona"
					className="vn_icon"
					style ={{
						
						background: `url(${icon_calendar})`
					}}
					/>
					
					<div className="vn_title"> U can go and get excursion around our office</div>
					<div className="vn_desc" id="id1"> 15 September @10.00 pm.
					Also if u are some kind developer we can present u some courses like C++ with work on UE5 and php courses, in short Full stack dev courses.U can get hired after these courses by us. 
					</div>
					</div>
					</div>
					</div>
					
					</Zoom>
					
					<Zoom duration={500} delay={500}>
					<div className="vn_item">
					<div className="vn_outer">
					<div className="vn_inner">
					<div className="vn_icon_square bck_yellow"/>
					<div id="corona1"
					className="vn_icon"
					style ={{
						background: `url(${icon_location})`
					}}
					/>
					
					<div className="vn_title">  Location of main office </div>
					<div className="vn_desc" id="id2">
					Our main office is been placed in Cary, North of the USA.
					We moved here because "Unreal was first created by developers who were scattered across the world, eventually, the team came together to finish the game and that's when the real magic started. The move to North Carolina centralizes Epic, bringing all of the company's talented developers under one roof.".
					</div>
					</div>
					</div>
					</div>
					
					</Zoom>
					</div>
					</div>
					</div>
					);
};



export default Info;