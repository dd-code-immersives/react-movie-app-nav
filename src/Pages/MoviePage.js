import { useParams } from "react-router-dom";

const MoviePage = (props) => {
	const {movieList} = props;
	const params = useParams()

	const foundMovie = movieList.find((movie)=>{
		return movie.Title === params.title
	})

	console.log(foundMovie)


	return (
		<div>
			<h1>
				Movie Page
			</h1>
				<h2>{foundMovie.Title}</h2>
				<p>Director: {foundMovie.Director}</p>
				<p>Actors: {foundMovie.Actors}</p>
				<p>Plot: {foundMovie.Plot}</p>

		</div>
	)
}

export default MoviePage