import React, { Component, createRef, useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/css/sb-admin-2.min.css';
import '../../assets/css/partner2.css';
import '../../assets/css/partner.css';
import '../../assets/vendor/fontawesome-free/css/all.min.css';
// import '../assets/js/sb-admin-2.min.js';
// import '../assets/js/demo/chart-area-demo.js';
// import '../assets/demo/chart-pie-demo.js';

import 'boxicons/css/boxicons.min.css';

class Partner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rider: []
        };
    }

    componentDidMount(){
        this.fetchRiders();
    }



    fetchRiders = () => {
        axios
            .get('/showRiders')
            .then((response) => {
                this.setState({
                    rider: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };



    render() {

        const ridersVar = this.state.rider;
        const riderList = ridersVar.map((rider, index) => (
            <div className='each-rider' key={index}>
                <img src="assets/images/rider-logo.png" alt="..." className='rider-logo' style={{ width: "50px", height: "50px" }}></img>
                <div className='rider-details'>
                    <h5 className='rider-name'>{rider.firstName} {rider.lastName}</h5>
                    <p className='rider-loc'>{rider.address}</p>
                </div>
            </div>
        ));

        return (
            <div id="page-top">


                <div id="wrapper" >

                    <ul class="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar" style={{ backgroundColor: '#F24C3D', widows: "100%" }}>

                        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                            <div class="sidebar-brand-icon rotate-n-15">
                                <i class="fas fa-laugh-wink"></i>
                            </div>
                            <div class="sidebar-brand-text mx-3">P Name</div>
                        </a>


                        <hr class="sidebar-divider my-0" />

                        <li class="nav-item active">
                            <a class="nav-link" href="index.html">
                                <i class="fas fa-fw fa-tachometer-alt"></i>
                                <span>Dashboard</span></a>
                        </li>

                        <hr class="sidebar-divider" />

                        <div class="sidebar-heading">
                            Addons
                        </div>


                        <li class="nav-item">
                            <a class="nav-link" href="#projects">
                                <i class="fa-solid fa-bowl-hot"></i>
                                <span>Meals</span></a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="tables.html">
                                <i class="fas fa-fw fa-table"></i>
                                <span>Orders</span></a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="tables.html">
                                <i class="fas fa-fw fa-table"></i>
                                <span>Partner</span></a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="tables.html">
                                <i class="fas fa-fw fa-table"></i>
                                <span>Rider</span></a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="tables.html">
                                <i class="fas fa-fw fa-table"></i>
                                <span>Donor</span></a>
                        </li>

                        <hr class="sidebar-divider d-none d-md-block" />

                        <div class="text-center d-none d-md-inline">
                            <button class="rounded-circle border-0" id="sidebarToggle"></button>
                        </div>


                    </ul>

                    <div id="content-wrapper" class="d-flex flex-column">

                        <div id="content">

                            <div class="container-fluid">

                                <div class="d-sm-flex align-items-center justify-content-left mb-4 mt-4">
                                    <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                                    
                                </div>

                                <div class="row">

                                    <div class="col-xl-3 col-md-6 mb-4">
                                        <div class="card border-left-danger shadow h-100 py-2">
                                            <div class="card-body">
                                                <div class="row no-gutters align-items-center">
                                                    <div class="col mr-2">
                                                        <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">
                                                            PENDING ORDERS</div>
                                                        <div class="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                                    </div>
                                                    <div class="col-auto">

                                                        <i class='bx bx-table fa-2x text-gray-300' ></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-md-6 mb-4">
                                        <div class="card border-left-success shadow h-100 py-2">
                                            <div class="card-body">
                                                <div class="row no-gutters align-items-center">
                                                    <div class="col mr-2">
                                                        <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Completed Orders
                                                        </div>
                                                        <div class="row no-gutters align-items-center">
                                                            <div class="col-auto">
                                                                <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="progress progress-sm mr-2">
                                                                    <div class="progress-bar progress-bar6 bg-success" role="progressbar"
                                                                        aria-valuenow="50" aria-valuemin="0"
                                                                        aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-auto">
                                                        <i class='bx bxs-bowl-hot fa-2x text-gray-300' ></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-md-6 mb-4">
                                        <div class="card border-left-warning shadow h-100 py-2">
                                            <div class="card-body">
                                                <div class="row no-gutters align-items-center">
                                                    <div class="col mr-2">
                                                        <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                            Riders</div>
                                                        <div class="h5 mb-0 font-weight-bold text-gray-800">7</div>
                                                    </div>
                                                    <div class="col-auto">
                                                        <i class='bx bxl-periscope  fa-2x text-gray-300' ></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-md-6 mb-4">
                                        <div class="card border-left-info shadow h-100 py-2">
                                            <div class="card-body">
                                                <div class="row no-gutters align-items-center">
                                                    <div class="col mr-2">
                                                        <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                            Donated Meals</div>
                                                        <div class="h5 mb-0 font-weight-bold text-gray-800">2075</div>
                                                    </div>
                                                    <div class="col-auto">
                                                        <i class='bx bx-table fa-2x text-gray-300' ></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="row">

                                    <div class="col-xl-9 col-lg-7">
                                        <div class="card shadow mb-4">
                                            <div
                                                class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 class="m-0 font-weight-bold text-dark">Pending Orders</h6>

                                            </div>
                                            <div class="card-body tableorder">
                                                <div class="chart-area">
                                                    <div className='table-responsive'>
                                                        <table class="table table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">#</th>
                                                                    <th scope="col">Meal ID</th>
                                                                    <th scope="col">Meal name</th>
                                                                    <th scope="col">Customer</th>
                                                                    <th scope="col">Status</th>
                                                                    <th scope="col">Rider</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody class="table-group-divider">
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>2</td>
                                                                    <td>Jollibee Chicken</td>
                                                                    <td>Jeanne Dominique Paloma</td>
                                                                    <td><p className='text-warning fw-bold' value="">Pending</p></td>
                                                                    <td>
                                                                        <div className="dropdown">
                                                                            <button className="dropdown-toggle assignbtn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                Assign
                                                                            </button>
                                                                            <ul className="dropdown-menu">
                                                                                <li className="typeli"><button className="dropdown-item" value="hot"><img src="assets/images/hot.png" className="foodtype" alt="..." />    Hot Meals</button></li>
                                                                                <li className="typeli"><button className="dropdown-item" value="frozen"><img src="assets/images/frozen.png" className="foodtype" alt="..." />    Frozen Meals</button></li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>7</td>
                                                                    <td>Mongos</td>
                                                                    <td>John Paul Inso</td>
                                                                    <td><p className='text-warning fw-bold' value="">Pending</p></td>
                                                                    <td>
                                                                        <div className="dropdown">
                                                                            <button className="dropdown-toggle assignbtn " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                Assign
                                                                            </button>
                                                                            <ul className="dropdown-menu">
                                                                                <li className="typeli"><button className="dropdown-item" value="hot"><img src="assets/images/hot.png" className="foodtype" alt="..." />    Hot Meals</button></li>
                                                                                <li className="typeli"><button className="dropdown-item" value="frozen"><img src="assets/images/frozen.png" className="foodtype" alt="..." />    Frozen Meals</button></li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>9</td>
                                                                    <td>Cat Grass</td>
                                                                    <td>Christian Sevilla</td>
                                                                    <td><p className='text-warning fw-bold' value="">Pending</p></td>
                                                                    <td>
                                                                        <div className="dropdown">
                                                                            <button className="dropdown-toggle assignbtn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                Assign
                                                                            </button>
                                                                            <ul className="dropdown-menu">
                                                                                <li className="typeli"><button className="dropdown-item" value="hot"><img src="assets/images/hot.png" className="foodtype" alt="..." />    Hot Meals</button></li>
                                                                                <li className="typeli"><button className="dropdown-item" value="frozen"><img src="assets/images/frozen.png" className="foodtype" alt="..." />    Frozen Meals</button></li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>10</td>
                                                                    <td>Init Sabaw</td>
                                                                    <td>JB Keer Ababon</td>
                                                                    <td><p className='text-warning fw-bold' value="">Pending</p></td>
                                                                    <td>
                                                                        <div className="dropdown">
                                                                            <button className="dropdown-toggle assignbtn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                Assign
                                                                            </button>
                                                                            <ul className="dropdown-menu">
                                                                                <li className="typeli"><button className="dropdown-item" value="hot"><img src="assets/images/hot.png" className="foodtype" alt="..." />    Hot Meals</button></li>
                                                                                <li className="typeli"><button className="dropdown-item" value="frozen"><img src="assets/images/frozen.png" className="foodtype" alt="..." />    Frozen Meals</button></li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>2</td>
                                                                    <td>Jollibee Chicken</td>
                                                                    <td>Jeanne Dominique Paloma</td>
                                                                    <td><p className='text-warning fw-bold' value="">Pending</p></td>
                                                                    <td>
                                                                        <div className="dropdown">
                                                                            <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                Assign
                                                                            </button>
                                                                            <ul className="dropdown-menu">
                                                                                <li className="typeli"><button className="dropdown-item" value="hot"><img src="assets/images/hot.png" className="foodtype" alt="..." />    Hot Meals</button></li>
                                                                                <li className="typeli"><button className="dropdown-item" value="frozen"><img src="assets/images/frozen.png" className="foodtype" alt="..." />    Frozen Meals</button></li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>2</td>
                                                                    <td>Jollibee Chicken</td>
                                                                    <td>Jeanne Dominique Paloma</td>
                                                                    <td><p className='text-warning fw-bold' value="">Pending</p></td>
                                                                    <td>
                                                                        <div className="dropdown">
                                                                            <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                Assign
                                                                            </button>
                                                                            <ul className="dropdown-menu">
                                                                                <li className="typeli"><button className="dropdown-item" value="hot"><img src="assets/images/hot.png" className="foodtype" alt="..." />    Hot Meals</button></li>
                                                                                <li className="typeli"><button className="dropdown-item" value="frozen"><img src="assets/images/frozen.png" className="foodtype" alt="..." />    Frozen Meals</button></li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>2</td>
                                                                    <td>Jollibee Chicken</td>
                                                                    <td>Jeanne Dominique Paloma</td>
                                                                    <td><p className='text-warning fw-bold' value="">Pending</p></td>
                                                                    <td>
                                                                        <div className="dropdown">
                                                                            <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                Assign
                                                                            </button>
                                                                            <ul className="dropdown-menu">
                                                                                <li className="typeli"><button className="dropdown-item" value="hot"><img src="assets/images/hot.png" className="foodtype" alt="..." />    Hot Meals</button></li>
                                                                                <li className="typeli"><button className="dropdown-item" value="frozen"><img src="assets/images/frozen.png" className="foodtype" alt="..." />    Frozen Meals</button></li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>2</td>
                                                                    <td>Jollibee Chicken</td>
                                                                    <td>Jeanne Dominique Paloma</td>
                                                                    <td><p className='text-warning fw-bold' value="">Pending</p></td>
                                                                    <td>
                                                                        <div className="dropdown">
                                                                            <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                Assign
                                                                            </button>
                                                                            <ul className="dropdown-menu">
                                                                                <li className="typeli"><button className="dropdown-item" value="hot"><img src="assets/images/hot.png" className="foodtype" alt="..." />    Hot Meals</button></li>
                                                                                <li className="typeli"><button className="dropdown-item" value="frozen"><img src="assets/images/frozen.png" className="foodtype" alt="..." />    Frozen Meals</button></li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-3 col-lg-5">
                                        <div class="card shadow mb-4">
                                            <div
                                                class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 class="m-0 font-weight-bold text-dark">Riders</h6>
                                            </div>

                                            <div class="card-body card-bodyrider">
                                                <div class="chart-pie pb-4">
                                                    <div className='each-rider'>
                                                        <img src="assets/images/rider-logo.png" alt="..." className='rider-logo' style={{ width: "50px", height: "50px" }}></img>
                                                        <div className='rider-details'>
                                                            <h5 className='rider-name'>Rider name</h5>
                                                            <p className='rider-loc'>Rider Location or Address</p>
                                                        </div>
                                                    </div>
                                                    {riderList}
                                                    <div className='each-rider'>
                                                        <img src="assets/images/rider-logo.png" alt="..." className='rider-logo' style={{ width: "50px", height: "50px" }}></img>
                                                        <div className='rider-details'>
                                                            <h5 className='rider-name'>Rider name</h5>
                                                            <p className='rider-loc'>Rider Location or Address</p>
                                                        </div>
                                                    </div>
                                                    <div className='each-rider'>
                                                        <img src="assets/images/rider-logo.png" alt="..." className='rider-logo' style={{ width: "50px", height: "50px" }}></img>
                                                        <div className='rider-details'>
                                                            <h5 className='rider-name'>Rider name</h5>
                                                            <p className='rider-loc'>Rider Location or Address</p>
                                                        </div>
                                                    </div>
                                                    <div className='each-rider'>
                                                        <img src="assets/images/rider-logo.png" alt="..." className='rider-logo' style={{ width: "50px", height: "50px" }}></img>
                                                        <div className='rider-details'>
                                                            <h5 className='rider-name'>Rider name</h5>
                                                            <p className='rider-loc'>Rider Location or Address</p>
                                                        </div>
                                                    </div>
                                                    <div className='each-rider'>
                                                        <img src="assets/images/rider-logo.png" alt="..." className='rider-logo' style={{ width: "50px", height: "50px" }}></img>
                                                        <div className='rider-details'>
                                                            <h5 className='rider-name'>Rider name</h5>
                                                            <p className='rider-loc'>Rider Location or Address</p>
                                                        </div>
                                                    </div>
                                                    <div className='each-rider' style={{ display: "flex", gap: "5px", alignItems: "center", justifySelf: "center", marginBottom: "5%" }}>
                                                        <img src="assets/images/rider-logo.png" alt="..." className='rider-logo' style={{ width: "50px", height: "50px" }}></img>
                                                        <div className='rider-details'>
                                                            <h5 className='rider-name'>Rider name</h5>
                                                            <p className='rider-loc'>Rider Location or Address</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">

                                    <div class="col-xl-12 col-lg-12">
                                        <div class="card shadow mb-4">
                                            <div
                                                class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 class="m-0 font-weight-bold text-dark">Ongoing Delivery</h6>

                                            </div>
                                            <div class="card-body tableorder">
                                                <div class="chart-area">
                                                    <div className='table-responsive'>
                                                        <table class="table table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">#</th>
                                                                    <th scope="col">Rider</th>
                                                                    <th scope="col">Meal name</th>
                                                                    <th scope="col">Customer</th>
                                                                    <th scope="col">Location</th>
                                                                    <th scope="col">Status</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody class="table-group-divider">
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>Kuya rider</td>
                                                                    <td>Jollibee Chicken</td>
                                                                    <td>Jeanne Dominique Paloma</td>
                                                                    <td>Purok Okra, Calero, Liloan, Cebu</td>
                                                                    <td>
                                                                        <p className='text-warning fw-bold' value="">On the way...</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>Manong Kuya</td>
                                                                    <td>Mongos</td>
                                                                    <td>John Paul Inso</td>
                                                                    <td>Bukid sa Bogo, Bogo City</td>
                                                                    <td>
                                                                        <p className='text-warning fw-bold' value="">On the way...</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>Bossing</td>
                                                                    <td>Cat Grass</td>
                                                                    <td>Christian Sevilla</td>
                                                                    <td>Address, Ni Christian, Cebu City</td>
                                                                    <td>
                                                                        <p className='text-warning fw-bold' value="">On the way...</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>Brader</td>
                                                                    <td>Init Sabaw</td>
                                                                    <td>JB Keer Ababon</td>
                                                                    <td>Pope John Paul Ave, Mabolo, Cebu City</td>
                                                                    <td>
                                                                        <p className='text-warning fw-bold' value="">On the way...</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>Yarider</td>
                                                                    <td>Jollibee Chicken</td>
                                                                    <td>Jeanne Dominique Paloma</td>
                                                                    <td>Bahak, Consolacion City</td>
                                                                    <td>
                                                                        <p className='text-warning fw-bold' value="">On the way...</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>Do Asaka</td>
                                                                    <td>Jollibee Chicken</td>
                                                                    <td>Jeanne Dominique Paloma</td>
                                                                    <td></td>
                                                                    <td>
                                                                        <div className="dropdown">
                                                                            <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                Assign
                                                                            </button>
                                                                            <ul className="dropdown-menu">
                                                                                <li className="typeli"><button className="dropdown-item" value="hot"><img src="assets/images/hot.png" className="foodtype" alt="..." />    Hot Meals</button></li>
                                                                                <li className="typeli"><button className="dropdown-item" value="frozen"><img src="assets/images/frozen.png" className="foodtype" alt="..." />    Frozen Meals</button></li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>2</td>
                                                                    <td>Jollibee Chicken</td>
                                                                    <td>Jeanne Dominique Paloma</td>
                                                                    <td><p className='text-warning fw-bold' value="">Pending</p></td>
                                                                    <td>
                                                                        <div className="dropdown">
                                                                            <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                Assign
                                                                            </button>
                                                                            <ul className="dropdown-menu">
                                                                                <li className="typeli"><button className="dropdown-item" value="hot"><img src="assets/images/hot.png" className="foodtype" alt="..." />    Hot Meals</button></li>
                                                                                <li className="typeli"><button className="dropdown-item" value="frozen"><img src="assets/images/frozen.png" className="foodtype" alt="..." />    Frozen Meals</button></li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>2</td>
                                                                    <td>Jollibee Chicken</td>
                                                                    <td>Jeanne Dominique Paloma</td>
                                                                    <td><p className='text-warning fw-bold' value="">Pending</p></td>
                                                                    <td>
                                                                        <div className="dropdown">
                                                                            <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                Assign
                                                                            </button>
                                                                            <ul className="dropdown-menu">
                                                                                <li className="typeli"><button className="dropdown-item" value="hot"><img src="assets/images/hot.png" className="foodtype" alt="..." />    Hot Meals</button></li>
                                                                                <li className="typeli"><button className="dropdown-item" value="frozen"><img src="assets/images/frozen.png" className="foodtype" alt="..." />    Frozen Meals</button></li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>

                        </div>

                        <footer class="sticky-footer bg-white">
                            <div class="container my-auto">
                                <div class="copyright text-center my-auto">
                                    <span>Copyright &copy; Your Website 2021</span>
                                </div>
                            </div>
                        </footer>

                    </div>

                </div>

                <a class="scroll-to-top rounded" href="#page-top">
                    <i class="fas fa-angle-up"></i>
                </a>

                <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                            <div class="modal-footer">
                                <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <a class="btn btn-primary" href="login.html">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        )
    }


}
export default Partner;