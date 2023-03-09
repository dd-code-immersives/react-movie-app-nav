

const MovieCard = (props) => {

	const {movie} = props;

	return (
		<div className="movie-list-card">
			<h2>{movie.Title}</h2>
			<p>{movie.Director}</p>
		</div>
	)
}

export default MovieCard