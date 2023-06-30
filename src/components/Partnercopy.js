import React, { Component, createRef  } from 'react';
import axios from 'axios';
import '../assets/css/partner.css';

class Partnercopy extends Component{
    render(){
        return(
            <div className='partnerBody'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-9 table-div  table-responsive card shadow'>
                            <table class="table">
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
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>2</td>
                                        <td>Jollibee Chicken</td>
                                        <td>Jeanne Dominique Paloma</td>
                                        <td>Preparing</td>
                                        <td>
                                            <div className="dropdown">
                                                <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Assign
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li className="typeli"><button className="dropdown-item" value="hot"><img src="assets/images/hot.png" className="foodtype" alt="..."/>    Hot Meals</button></li>
                                                    <li className="typeli"><button className="dropdown-item"value="frozen"><img src="assets/images/frozen.png"  className="foodtype" alt="..."/>    Frozen Meals</button></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>2</td>
                                        <td>Jollibee Chicken</td>
                                        <td>Jeanne Dominique Paloma</td>
                                        <td>Preparing</td>
                                        <td>
                                            <div className="dropdown">
                                                <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Assign
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li className="typeli"><button className="dropdown-item" value="hot"><img src="assets/images/hot.png" className="foodtype" alt="..."/>    Hot Meals</button></li>
                                                    <li className="typeli"><button className="dropdown-item"value="frozen"><img src="assets/images/frozen.png"  className="foodtype" alt="..."/>    Frozen Meals</button></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>2</td>
                                        <td>Jollibee Chicken</td>
                                        <td>Jeanne Dominique Paloma</td>
                                        <td>Preparing</td>
                                        <td>
                                            <div className="dropdown">
                                                <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Assign
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li className="typeli"><button className="dropdown-item" value="hot"><img src="assets/images/hot.png" className="foodtype" alt="..."/>    Hot Meals</button></li>
                                                    <li className="typeli"><button className="dropdown-item"value="frozen"><img src="assets/images/frozen.png"  className="foodtype" alt="..."/>    Frozen Meals</button></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>2</td>
                                        <td>Jollibee Chicken</td>
                                        <td>Jeanne Dominique Paloma</td>
                                        <td>Preparing</td>
                                        <td>
                                            <div className="dropdown">
                                                <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Assign
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li className="typeli"><button className="dropdown-item" value="hot"><img src="assets/images/hot.png" className="foodtype" alt="..."/>    Hot Meals</button></li>
                                                    <li className="typeli"><button className="dropdown-item"value="frozen"><img src="assets/images/frozen.png"  className="foodtype" alt="..."/>    Frozen Meals</button></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                       

                       <div className='col-3'>
                            <div className='card ridercard shadow'>
                                <div className='card-header rider-header'>Riders</div>
                                <div className='card-body ridercard-body'>
                                    <div className='each-rider'>
                                        <img src="assets/images/rider-logo.png" alt="..." className='rider-logo'></img>
                                        <div  className='rider-details'>
                                            <h5 className='rider-name'>Rider name</h5>
                                            <p className='rider-loc'>Rider Location or Address</p>
                                        </div>
                                    </div>
                                    <div className='each-rider'>
                                        <img src="assets/images/rider-logo.png" alt="..." className='rider-logo'></img>
                                        <div  className='rider-details'>
                                            <h5 className='rider-name'>Rider name</h5>
                                            <p className='rider-loc'>Rider Location or Address</p>
                                        </div>
                                    </div>
                                    <div className='each-rider'>
                                        <img src="assets/images/rider-logo.png" alt="..." className='rider-logo'></img>
                                        <div  className='rider-details'>
                                            <h5 className='rider-name'>Rider name</h5>
                                            <p className='rider-loc'>Rider Location or Address</p>
                                        </div>
                                    </div>
                                    <div className='each-rider'>
                                        <img src="assets/images/rider-logo.png" alt="..." className='rider-logo'></img>
                                        <div  className='rider-details'>
                                            <h5 className='rider-name'>Rider name</h5>
                                            <p className='rider-loc'>Rider Location or Address</p>
                                        </div>
                                    </div>
                                    <div className='each-rider'>
                                        <img src="assets/images/rider-logo.png" alt="..." className='rider-logo'></img>
                                        <div  className='rider-details'>
                                            <h5 className='rider-name'>Rider name</h5>
                                            <p className='rider-loc'>Rider Location or Address</p>
                                        </div>
                                    </div>
                                    <div className='each-rider'>
                                        <img src="assets/images/rider-logo.png" alt="..." className='rider-logo'></img>
                                        <div  className='rider-details'>
                                            <h5 className='rider-name'>Rider name</h5>
                                            <p className='rider-loc'>Rider Location or Address</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                       </div>
                    </div>



                    <div className='row partnerrow2'>
                        <div className='col-2 totalorder-col'>
                            <div className='card totalorder-card shadow'>
                                <h5 className='ongoingorder-head'>Ongoing Orders</h5>
                                <p className='ordernumber'>14</p>
                                <a href="#">View Orders</a>
                            </div>
                        </div>

                        <div className='col-10'>
                            <div>
                                <div>

                                </div>
                            </div>

                        </div>
                    </div>


                </div>



            </div>
        )
    }
}
export default Partnercopy;