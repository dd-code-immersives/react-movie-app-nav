import { Outlet } from "react-router-dom";
import MovieSideBar from "../Components/MovieSideBar";

const MovieLayout = (props) => {
	const {movieList} = props;
  return (
    <div className="movie-layout">
      <MovieSideBar movieList={movieList}/>
      <div className="movie-content">
        <Outlet />
      </div>
    </div>
  );
};

export default MovieLayout;
