import React, { Component } from "react";
import axios from "axios";
import '../../assets/css/donor.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      displaysearchdata: [],
    };
  }

  changeOfInput = (event) => {
    this.setState({
      keyword: event.target.value,
    });
  };

  searchMyData = (event) => {
    event.preventDefault();
    const { keyword } = this.state;

    axios
      .get("/search", { params: { keyword: keyword } })
      .then((res) => {
        console.log(res.data);
        this.setState({
          displaysearchdata: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const pheader = (
      <tr>
        <th>Meal Name</th>
        <th>Meal Desc</th>
        <th>Meal Ingredients</th>
        <th>Meal Category</th>
      </tr>
    );

    let pdata;
    if (this.state.displaysearchdata.length > 0) {
      pdata = this.state.displaysearchdata.map((meal, key) => (
        <tr key={key}>
          <td>{meal.mealName}</td>
          <td>{meal.mealDesc}</td>
          <td>{meal.mealIngredients}</td>
          <td>{meal.mealCategory}</td>
        </tr>
      ));
    } else {
      pdata = (
        <tr>
          <td colSpan="4">No result found for {this.state.keyword}, please try again.</td>
        </tr>
      );
    }

    return (
      <div>
        <main style={{margin: "0", padding: "0", height: "1500px"}}>
       







       
          <div className="container">
            
            <div style={{ backgroundColor: "white", paddingBottom: "19px", borderRadius: "20px", width: "42%", paddingTop: "19px", marginTop: "-20%"}}>
       
            <div className="search-box">
              <div className="search-icon">
                <i className="fa fa-search"></i>
              </div>
              <form className="search-form" onSubmit={this.searchMyData}>
                <input
                  type="text"
                  placeholder="Search"
                  id="search"
                  autoComplete="off"
                  onChange={this.changeOfInput}
                />
              </form>
              <svg
                className="search-border"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlnsa="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
                x="0px"
                y="0px"
                viewBox="0 0 671 111"
                style={{ enableBackground: "new 0 0 671 111" }}
                xmlSpace="preserve"
              >
                <path
                  className="border"
                  d="M335.5,108.5h-280c-29.3,0-53-23.7-53-53v0c0-29.3,23.7-53,53-53h280"
                />
                <path
                  className="border"
                  d="M335.5,108.5h280c29.3,0,53-23.7,53-53v0c0-29.3-23.7-53-53-53h-280"
                />
              </svg>
            </div>
            </div>
          </div>

          
        </main>
        <div className="search-results">
              <table className="table" border="1">
                <thead>{pheader}</thead>
                <tbody>{pdata}</tbody>
              </table>
            </div>
      </div>
    );
  }
}

export default Search;