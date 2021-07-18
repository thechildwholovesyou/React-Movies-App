import React from "react";

function Search(props) {
  return (
    <div>
      <p className="mt-4">Showing {props.noOfMovies} movies from the databse</p>
      <div class="input-group input-group-lg mt-4">
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          placeholder="Search.."
          aria-describedby="inputGroup-sizing-lg"
          onChange={(e) => {
            // console.log(e.currentTarget.value);
            props.receiveSearchParam(e.currentTarget.value);
          }}
        />
      </div>
      <button type="button" class="btn btn-primary mt-4">
        New
      </button>
    </div>
  );
}

export default Search;
