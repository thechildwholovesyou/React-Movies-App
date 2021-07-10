import React from "react";

class Category extends React.Component {
  state = {
    allGenre: ["Horror", "Action", "Romance"],
  };
  render() {
    return (
      <div>
        <ul class="list-group p-4">
          {this.state.allGenre.map((e) => {
            return (
              <li class="list-group-item" key={e}>
                {e}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Category;
