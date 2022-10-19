import {Outlet} from "react-router-dom";
import NavBar from "../Components/NavBar";

const NavLayout = () => {
	return (
		<div className="nav-layout">
			<NavBar/>
			<Outlet/>
		</div>
	)
}

export default NavLayout