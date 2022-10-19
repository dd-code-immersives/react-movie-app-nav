import { useState } from "react";

const MovieFormPage = (props) => {
	const {handleAddMovie} = props;
	const [title, setTitle] = useState("")

	return (
		<div>
			<h1>
				Movie Form Page
			</h1>

			<label>Title:</label>
			<input type="text" onChange={(e)=>{
				setTitle(e.target.value)
			}}/>
			<br/>
			<button onClick={()=>{
				handleAddMovie(title)
			}}>Add Movie</button>
		</div>
	)
}

export default MovieFormPage