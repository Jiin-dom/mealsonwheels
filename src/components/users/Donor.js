import React, { Component, createRef  } from 'react';
import axios from 'axios';
import '../../assets/css/sb-admin-2.min.css';
import '../../assets/css/partner2.css';
import '../../assets/vendor/fontawesome-free/css/all.min.css'
import '../../assets/css/donor.css';
import 'boxicons/css/boxicons.min.css';

class Donor extends Component{
    render(){
        return(
            <div id="page-top">
                

            <div id="wrapper" >


            <ul class="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar" style={{backgroundColor: '#F24C3D', widows: "100%"}}>

                <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div class="sidebar-brand-icon rotate-n-15">
                        <i class="fas fa-laugh-wink"></i>
                    </div>
                    <div class="sidebar-brand-text mx-3">Donor List</div>
                </a>


                <hr class="sidebar-divider my-0"/>

                <li class="nav-item active">
                    <a class="nav-link" href="index.html">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>

                <hr class="sidebar-divider"/>

                <div class="sidebar-heading">
                    Addons
                </div>


                <li class="nav-item">
                    <a class="nav-link" href="#projects">
                    <i class='bx bxs-bowl-hot fa-2x text-gray-300' ></i>
                        <span>Meals</span></a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="tables.html">
                    <i class="fas fa-fw fa-chart-area"></i>
                        <span>Orders</span></a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="tables.html">
                        <i class="fas fa-fw fa-user"></i>
                        <span>Partner</span></a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="tables.html">
                    <i class='bx bxl-periscope' ></i>
                        <span>Rider</span></a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="tables.html">
                        <i class="fas fa-fw fa-user"></i>
                        <span>Donor</span></a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="tables.html">
                    <i class='bx bx-right-arrow-circle'></i>
                        <span>Logout</span></a>
                </li>
                <hr class="sidebar-divider d-none d-md-block"/>

                <div class="text-center d-none d-md-inline">
                    <button class="rounded-circle border-0" id="sidebarToggle"></button>
                </div>


            </ul>

            <div id="content-wrapper" class="d-flex flex-column">

                <div id="content">

                    <div class="container-fluid">

                        <div class="d-sm-flex align-items-center justify-content-left mb-4 mt-4">
                            <h1 class="h3 mb-0 text-gray-800" style={{ position: ""}}>Recent Donors</h1>
                        </div>

                        <div class="row">

                            <div class="col-xl-3 col-md-6 mb-4">
                                <div class="card border-left-danger shadow h-100 py-2">
                                    <div class="card-body">
                                        <div class="row no-gutters align-items-center">
                                            <div class="col mr-2">
                                                <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">
                                                    Jeanne Dominique Paloma</div>
                                                <div class="h5 mb-0 font-weight-bold text-gray-800">$5</div>
                                            </div>
                                            <div class="col-auto">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512">
  <style>{`svg { fill: #dddfeb; }`}</style>
  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
</svg>

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
                                                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">John Paul Inso
                                                </div>
                                                <div class="row no-gutters align-items-center">
                                                    <div class="col-auto">
                                                        <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">$100</div>
                                                    </div>
                                    
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512">
  <style>{`svg { fill: #dddfeb; }`}</style>
  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
</svg>
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
                                                Christian Sevilla</div>
                                                <div class="h5 mb-0 font-weight-bold text-gray-800">$170</div>
                                            </div>
                                            <div class="col-auto">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512">
  <style>{`svg { fill: #dddfeb; }`}</style>
  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
</svg>
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
                                                <div class="text-xs font-weight-bold text-warning text-uppercase mb-1" style={{ justifyContent: "left"}}>
                                                   JB Keer Ababon</div>
                                                <div class="h5 mb-0 font-weight-bold text-gray-800" style={{ justifyContent: "left"}}>$200</div>
                                            </div>
                                            <div class="col-auto">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512">
  <style>{`svg { fill: #dddfeb; }`}</style>
  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
</svg>
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
                                        <h6 class="m-0 font-weight-bold text-dark">Donation History</h6>
                        
                                    </div>
                                    <div class="card-body tableorder">
                                        <div class="chart-area">
                                        <div className='table-responsive'>
                                            <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Donor Name</th>
                                                        <th scope="col">Donation</th>
                                                        <th scope="col">Date Donated</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="table-group-divider">
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Jeanne Dominique Paloma</td>
                                                        <td>$5</td>
                                                        <td>01-20-2023</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>John Paul Inso</td>
                                                        <td>$100</td>
                                                        <td>02-11-2023</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Christian Sevilla</td>
                                                        <td>$170</td>
                                                        <td>03-15-2023</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">4</th>
                                                        <td>JB Keer Ababon</td>
                                                        <td>$200</td>
                                                        <td>04-26-2023</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">5</th>
                                                        <td>Paul Cahilig</td>
                                                        <td>$218</td>
                                                        <td>05-16-2023</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">6</th>
                                                        <td>JB Keer Ababon</td>
                                                        <td>$200</td>
                                                        <td>04-26-2023</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">7</th>
                                                        <td>Paul Cahilig</td>
                                                        <td>$218</td>
                                                        <td>05-16-2023</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">8</th>
                                                        <td>Christian Sevilla</td>
                                                        <td>$170</td>
                                                        <td>03-15-2023</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-5">
  <div className="card shadow mb-4">
    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
      <h6 className="m-0 font-weight-bold text-dark">Raised Funds</h6>
    </div>

    <div className="card-body card-bodyrider">
      <div className="chart-pie pb-4" style={{ height: "calc(6.7rem - 7px)", important: true }}>
        <div className="each-rider">
          <div className="rider-details">
            <h5 className="rider-name" style={{ alignItems: "center", fontSize: "56px" }}>$10000</h5>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="card shadow mb-4">
    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
      <h6 className="m-0 font-weight-bold text-dark">Total Donors</h6>
    </div>

    <div className="card-body card-bodyrider">
      <div className="chart-pie pb-4" style={{ height: "calc(6.7rem - 7px)", important: true }}>
        <div className="each-rider">
          <div className="rider-details">
            <h5 className="rider-name" style={{ alignItems: "center", fontSize: "56px" }}>20</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

                            
                        </div>

                      

                    </div>

                </div>

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
export default Donor;