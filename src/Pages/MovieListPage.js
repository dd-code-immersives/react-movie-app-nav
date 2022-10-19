import MovieCard from "../Components/MovieCard";

const MovieListPage = (props) => {

	const {movieList} = props

	return (
		<div>
			<h1>
				Movie List Page
			</h1>
			{movieList.map((movie)=>{
				return <MovieCard movie={movie}/>
			})}
		</div>
	)
}

export default MovieListPage