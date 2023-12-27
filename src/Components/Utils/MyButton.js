import React from "react";
import Button from "@mui/material/IconButton";


const MyButton = props => {
	return (
	<Button
	hrtef ={props.link}
	variant="contained"
	size="small"
	style={{
		background: props.bck,
		color: props.color
	}}
	>

	</Button>
	);
};

export default MyButton;