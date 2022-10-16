import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import HomePage from "./Pages/HomePage";
import MovieFormPage from "./Pages/MovieFormPage";
import MovieListPage from "./Pages/MovieListPage";
import MoviePage from "./Pages/MoviePage";
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App/>,
		children: [
			{
				element: <HomePage />,
				index: true
			},
			{
				element: <MovieFormPage />,
				path: "/movie-form"
			},
			{
				element: <MovieListPage />,
				path: "/movie-list"
			},
			{
				element: <MoviePage />,
				path: "/movie/:title"
			},
		]
	}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
