import {Outlet} from "react-router-dom";
import NavBar from "../Components/NavBar";

//container component for 
// wrapping our components in css classes
// <Outlet/> for rendering child routes
// of our parent routes.
// in this example: NavBar
const NavLayout = () => {
	return (
		<div className="nav-layout">
			<NavBar/>
			<Outlet/>
		</div>
	)
}

export default NavLayout