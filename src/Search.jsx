import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div>
        <p className="mt-4"> Hello Shubham </p>
        <div class="input-group input-group-lg mt-4">
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            placeholder="Search.."
            aria-describedby="inputGroup-sizing-lg"
          />
        </div>
        <button type="button" class="btn btn-primary mt-4">
          New
        </button>
      </div>
    );
  }
}

export default Search;
