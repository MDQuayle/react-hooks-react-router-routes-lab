import React from "react";
import { directors } from "../data";

function Directors() {
  let index = 0
  let listnumber = 0
  return <div>
    {<h1>Directors Page</h1>}
    {directors.map((director) => (
    <div key={index++}>{director.name}<ul>{director.movies.map((movie)=>
    (<li key={listnumber++}>{movie}</li>))}</ul>
    </div>))}
  
  
  </div>;
}

export default Directors;
