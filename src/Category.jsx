import React from "react";

class Category extends React.Component {
  state = {
    allGenre: [],
  };
  componentDidMount() {
    // api call(get krna .. message bhejna )

    // is wale function me hm all genre ka data apni banai hui api se fetch krre h
    fetch("/genre")
      .then(function (res) {
        return res.json();
      })
      .then((json) => {
        this.setState({ allGenre: json });
      });
  }
  render() {
    return (
      <div>
        <ul class="list-group p-4">
          {this.state.allGenre.map((e) => {
            return (
              <li class="list-group-item" key={e._id}>
                {e.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Category;
