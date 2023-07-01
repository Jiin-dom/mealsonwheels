import React, { Component, createRef } from 'react';
import axios from 'axios';
import '../../assets/css/sb-admin-2.min.css';
import '../../assets/css/partner2.css';
import '../../assets/css/rider.css';

import '../../assets/vendor/fontawesome-free/css/all.min.css';


class Rider extends Component {
    render() {
        return (
            <div id="page-top">


                <div id="wrapper" >


                    <ul class="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar" style={{ backgroundColor: '#F24C3D' }}>

                        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                            <div class="sidebar-brand-icon rotate-n-15">
                                <i class="fas fa-laugh-wink"></i>
                            </div>
                            <div class="sidebar-brand-text mx-3">R name</div>
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
                                <i class="fas fa-fw fa-chart-area"></i>
                                <span>Orders</span></a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="tables.html">
                                <i class="fas fa-fw fa-table"></i>
                                <span>Riders</span></a>
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
                                    {/* <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                    class="fas fa-download fa-sm text-white-50"></i> Generate Report</a> */}
                                </div>


                                <div class="row">

                                    <div class="col-xl-12 col-lg-12">
                                        <div class="card shadow mb-4">
                                            <div
                                                class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 class="m-0 font-weight-bold text-dark">Pending Delivery</h6>

                                            </div>
                                            <div class="card-body tableorder">
                                                <div class="chart-area">
                                                    <div className='table-responsive'>
                                                        <table class="table table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">#</th>
                                                                    <th scope="col">Recipient</th>
                                                                    <th scope="col">Contact</th>

                                                                    <th scope="col">Meal name</th>
                                                                    <th scope="col">Location</th>
                                                                    <th scope="col">Status</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody class="table-group-divider">
                                                                <tr>
                                                                    <th scope="row">1</th>

                                                                    <td>Jeanne Dominique Paloma</td>
                                                                    <td>+63 918 567 8901</td>

                                                                    <td>Jollibee Chicken</td>
                                                                    <td>Purok Okra, Calero, Liloan, Cebu</td>
                                                                    <td>
                                                                        <button className='confirmdeliverybtn' type='button'>Confirm Delivery</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">1</th>

                                                                    <td>John Paul Inso</td>
                                                                    <td>+63 933 876 5432</td>

                                                                    <td>Mongos</td>
                                                                    <td>Bukid sa Bogo, Bogo City</td>
                                                                    <td>
                                                                        <button className='confirmdeliverybtn' type='button'>Confirm Delivery</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>Christian Sevilla</td>
                                                                    <td>+63 915 678 4321</td>

                                                                    <td>Cat Grass</td>
                                                                    <td>Address, Ni Christian, Cebu City</td>
                                                                    <td>
                                                                        <button className='confirmdeliverybtn' type='button'>Confirm Delivery</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>JB Keer Ababon</td>
                                                                    <td>+63 977 654 3210</td>
                                                                    <td>Init Sabaw</td>
                                                                    <td>Pope John Paul Ave, Mabolo, Cebu City</td>
                                                                    <td>
                                                                        <button className='confirmdeliverybtn' type='button'>Confirm Delivery</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>Jeanne Dominique Paloma</td>
                                                                    <td>+63 912 345 6789</td>
                                                                    <td>Jollibee Chicken</td>
                                                                    <td>Bahak, Consolacion City</td>
                                                                    <td>
                                                                        <button className='confirmdeliverybtn' type='button'>Confirm Delivery</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>Jollibee Chicken</td>
                                                                    <td>Jeanne Dominique Paloma</td>
                                                                    <td></td>
                                                                    <td>
                                                                        <button className='confirmdeliverybtn' type='button'>Confirm Delivery</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>2</td>
                                                                    <td>Jollibee Chicken</td>
                                                                    <td>Jeanne Dominique Paloma</td>
                                                                    <td><p className='text-warning fw-bold' value="">Pending</p></td>
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


                                <div class="row">

                                    <div class="col-xl-9 col-lg-7">
                                        <div class="card shadow mb-4">
                                            <div
                                                class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 class="m-0 font-weight-bold text-dark">Delivery History</h6>

                                            </div>
                                            <div class="card-body tableorder">
                                                <div class="chart-area">
                                                    <div className='table-responsive'>
                                                        <table class="table table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Recipient</th>
                                                                    <th scope="col">Contact</th>
                                                                    <th scope="col">Meal name</th>
                                                                    <th scope="col">Location</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody class="table-group-divider">
                                                                <tr>

                                                                    <td>Jeanne Dominique Paloma</td>
                                                                    <td>+63 918 567 8901</td>

                                                                    <td>Jollibee Chicken</td>
                                                                    <td>Purok Okra, Calero, Liloan, Cebu</td>

                                                                </tr>
                                                                <tr>
                                                                    <td>Christian Sevilla</td>
                                                                    <td>+63 915 678 4321</td>
                                                                    <td>Cat Grass</td>
                                                                    <td>Address, Ni Christian, Cebu City</td>

                                                                </tr>
                                                                <tr>
                                                                    <td>JB Keer Ababon</td>
                                                                    <td>+63 977 654 3210</td>
                                                                    <td>Init Sabaw</td>
                                                                    <td>Pope John Paul Ave, Mabolo, Cebu City</td>

                                                                </tr>
                                                                <tr>
                                                                    <td>John Paul Inso</td>
                                                                    <td>+63 933 876 5432</td>
                                                                    <td>Mongos</td>
                                                                    <td>Bukid sa Bogo, Bogo City</td>

                                                                </tr>
                                                                <tr>
                                                                    <td>Seth Escarro</td>
                                                                    <td>+63 097 876 5432</td>
                                                                    <td>Drinks</td>
                                                                    <td>SM Seaside</td>

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Jollibee Chicken</td>
                                                                    <td>Jeanne Dominique Paloma</td>
                                                                    <td><p className='text-warning fw-bold' value="">Pending</p></td>

                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Jollibee Chicken</td>
                                                                    <td>Jeanne Dominique Paloma</td>
                                                                    <td><p className='text-warning fw-bold' value="">Pending</p></td>

                                                                </tr>

                                                                <tr>

                                                                    <td>2</td>
                                                                    <td>Jollibee Chicken</td>
                                                                    <td>Jeanne Dominique Paloma</td>
                                                                    <td><p className='text-warning fw-bold' value="">Pending</p></td>

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
                                                <h6 class="m-0 font-weight-bold text-dark">Total Delivered</h6>
                                            </div>

                                            <div class="card-body card-bodyrider">
                                                <div class="chart-pie totaldelivered pb-4">
                                                    
                                                    <h1 className='totaldeliverednum'>48</h1>
                                                </div>
                                                <div class="mt-4 text-center small">
                                            <span class="mr-2">
                                                <i class="fas fa-circle text-primary"></i> 
                                            </span>
                                            <span class="mr-2">
                                                <i class="fas fa-circle text-success"></i> 
                                            </span>
                                            <span class="mr-2">
                                                <i class="fas fa-circle text-info"></i> 
                                            </span>
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
                                    <span>Copyright &copy; Meals on Wheels 2023</span>
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
export default Rider;