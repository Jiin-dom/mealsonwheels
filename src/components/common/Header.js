import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg fixed-top text-uppercase custom-font-header " id="mainNav">
          <div className="container">
            <Link className="navbar-brand d-flex align-items-center" to="/">
              <img src="assets/images/merryOnwheels (2).png" alt="Know Your Neighborhood Logo" className="me-2" style={{ width: '150px', height: 'auto' }}></img>
            </Link>
            <button
              className="navbar-toggler text-uppercase font-weight-bold bg-white text-white rounded"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                <>
                  <li className="nav-item mx-0 mx-lg-1">
                    <Link to="/home" className="nav-link py-3 px-0 px-lg-3 rounded text-white">
                      {/* <i className="fa fa-home" aria-hidden="true"></i> Home */}
                      Home
                    </Link>
                  </li>
                  <li className="nav-item mx-0 mx-lg-1">
                    <Link to="/menu" className="nav-link py-3 px-0 px-lg-3 rounded text-white">
                      {/* <i className="fa fa-plus" aria-hidden="true"></i> Menu */}
                      Menu
                    </Link>
                  </li>
                  <li className="nav-item mx-0 mx-lg-1">
                    <Link to="/search" className="nav-link py-3 px-0 px-lg-3 rounded text-white">
                      {/* <i className="fa fa-server" aria-hidden="true"></i> Search */}
                      Search
                    </Link>
                  </li>
                  <li className="nav-item mx-0 mx-lg-1">
                    <Link to="/funds" className="nav-link py-3 px-0 px-lg-3 rounded text-white">
                      {/* <i className="fa fa-users" aria-hidden="true"></i> Donate */}
                      Donate
                    </Link>
                  </li>
                  <li className="nav-item mx-0 mx-lg-1">
                    <Link to="/location" className="nav-link py-3 px-0 px-lg-3 rounded text-white">
                      {/* <i className="fa fa-users" aria-hidden="true"></i> Donate */}
                      Location
                    </Link>
                  </li>
                  <li className="nav-item mx-0 mx-lg-1">
                    <Link to="/tc" className="nav-link py-3 px-0 px-lg-3 rounded text-white">
                      {/* <i className="fa fa-users" aria-hidden="true"></i> Donate */}
                      TC
                    </Link>
                  </li>
                  <li className="nav-item mx-0 mx-lg-1">
                    <Link to="/admin" className="nav-link py-3 px-0 px-lg-3 rounded text-white">
                      {/* <i className="fa fa-users" aria-hidden="true"></i> Donate */}
                     Admin
                    </Link>
                  </li>
                  <li className="nav-item mx-0 mx-lg-1">
                    <button className="nav-link btn border-0 mt-2 px-0 px-lg-3 rounded text-uppercase text-white">Logout</button>
                  </li>
                </>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;