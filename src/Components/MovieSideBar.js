import { Link } from "react-router-dom";

const MovieSideBar = (props) => {
	const {movieList} = props
	return (
		<div className="movie-sidebar">
			<h2>Movie Sidebar</h2>
			{movieList.map((movieItem)=>{
				return (
					<Link>{movieItem.Title}</Link>
				)
			})}
		</div>
	)
}

export default MovieSideBar