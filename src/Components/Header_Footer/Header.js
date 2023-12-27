import React, {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu"; 
import IconButton from "@mui/material/IconButton";
import SideDrawer from "./SideDrawer"
import CloseIcon from '@mui/icons-material/Close';
import Timer from '../Slider/Timer';
import logo from '../../resorces/img/logo.png'

const Header = () => { 
const [drawerOpen, setDrawerOpen] = useState(false);
const toggleDrawer = value => {
	setDrawerOpen(value);
};

return(
<AppBar
position="fixed"
style={{
background: "#303030", 
padding: "20px 0px"
}}
>

<Toolbar>
<div className="header_logo"> <div className="font_left header_logo_title">Not yet
<img src={logo} className="oto" />
</div>
<div className="font_left header_logo_caption">Discover new</div> 
</div> 
<div className="Time">
<Timer />
</div>
<div className="Layer"><IconButton aria-label="Menu" color="inherit"
onClick={() => toggleDrawer(true)}>
<div id="nav-icon3">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
</IconButton></div>
<SideDrawer open={drawerOpen} onClose={value => toggleDrawer(value)} />
</Toolbar> 
</AppBar>
);

};
export default Header;