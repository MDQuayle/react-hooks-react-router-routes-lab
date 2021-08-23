import React from "react";
import { actors } from "../data";

function Actors() {
  let index = 0
  let listnumber = 0
  return <div>
    {<h1>Actors Page</h1>}
    {actors.map((actor) => (
    <div key={index++}>{actor.name}<ul>{actor.movies.map((movie)=>
    (<li key={listnumber++}>{movie}</li>))}</ul>
    </div>))}
    </div>;
}

export default Actors;
