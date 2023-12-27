import React from 'react';
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CloseIcon from '@mui/icons-material/Close';


	const SideDrawer = props => {
		return(
		<Drawer
		anchor="left"
		open={props.open}
		onClose={() => props.onClose(false)}

		>
		<List component="nav">
		<ListItem button onClick={() => console.log("Start Events")}>
		Sales start іn
        </ListItem>
		
<ListItem button onClick={() => console.log("React Info")}>
		React Info
        </ListItem>
		
<ListItem button onClick={() => console.log("Our Team")}>
		About Epic Games
        </ListItem>
		
<ListItem button onClick={() => console.log("Pricing")}>
		Pricing
        </ListItem>
		
<ListItem button onClick={() => console.log("Location")}>
		Location
        </ListItem>
		</List>
		</Drawer>
		);
	};
	
	export default SideDrawer;