import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div>
			<Link to="/">Home</Link>
			<Link to="/movie-list">Movie List</Link>
			<Link to="/movie-form">Movie Form</Link>
		</div>
	)
}

export default NavBar;