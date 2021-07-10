import NavBar from "./NavBar.jsx";
import Category from "./Category.jsx";
import Search from "./Search.jsx";
import React from "react";
import Table from "./Table.jsx";
function App(props) {
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
                <Search />
              </div>
            </div>
            <div className="row">
              <div className="col-8"></div>
              <Table />
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;
