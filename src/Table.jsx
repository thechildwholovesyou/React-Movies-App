import React from "react";

class Table extends React.Component {
  state = {
    allMovies: [
      {
        title: "Terminator",
        genre: "Action",
        stock: "2",
        rate: "2.5",
      },
      {
        title: "Terminator",
        genre: "Action",
        stock: "2",
        rate: "2.5",
      },
      {
        title: "Terminator",
        genre: "Action",
        stock: "2",
        rate: "2.5",
      },
      {
        title: "Terminator",
        genre: "Action",
        stock: "2",
        rate: "2.5",
      },
    ],
  };
  render() {
    // isliye kyoki esa na ho ki items h 10 and pagination me wo 10 hi show krra .... 10 pages
    let numberOfPages = Math.ceil(this.state.allMovies.length / 6);
    // ye kaam pagination array k liye
    let arr = [];
    for (let i = 1; i <= numberOfPages; i++) {
      arr.push(i);
    }
    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">rate</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {this.state.allMovies.map((el) => {
            return (
              <tr>
                <td>{el.title}</td>
                <td>{el.genre}</td>
                <td>{el.stock}</td>
                <td>{el.rate}</td>
                <td>
                  <button type="button" class="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            {arr.map(function (e) {
              return (
                <li class="page-item">
                  <a class="page-link" href="#">
                    {e}
                  </a>
                </li>
              );
            })}

            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </table>
    );
  }
}

export default Table;
