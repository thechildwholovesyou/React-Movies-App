import NavBar from "./NavBar.jsx";
import Category from "./Category.jsx";
import Search from "./Search.jsx";
import React from "react";
import Table from "./Table.jsx";
class App extends React.Component {
  state = {
    noOfMovies: 0,
    searchString: "",
  };

  receiveMovieData = (number) => {
    this.setState({ noOfMovies: number });
  };

  receiveSearchParam = (param) => {
    this.setState({ searchString: param });
  };

  render() {
    return (
      <div>
        <React.Fragment>
          <NavBar />
          <div className="row">
            <div className="col-2 p-4">
              <Category />
            </div>

            <div className="col-10 p-4">
              <div className="row">
                <div className="col-3">
                  <Search
                    noOfMovies={this.state.noOfMovies}
                    receiveSearchParam={this.receiveSearchParam}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-8"></div>
                <Table
                  sendData={this.receiveMovieData}
                  searchString={this.state.searchString}
                />
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
