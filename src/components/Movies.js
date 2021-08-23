import React from "react";
import { movies } from "../data";

function Movies() {
  let index = 0
  let listnumber = 0
  return <div>
    <h1>Movies Page</h1>
    {movies.map((movie) => (
    <div key={index++}>{movie.title} {movie.time}<ul>{movie.genres.map((genre)=>
    (<li key={listnumber++}>{genre}</li>))}</ul>
    </div>))}
    </div>;
}

export default Movies;
