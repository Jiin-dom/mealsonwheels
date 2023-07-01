import { Component } from 'react';
import '../../assets/css/admin.css';
import '../../assets/css/sb-admin-2.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import logoPartner from "../../assets/images/logo-partner-2.png";
import { Link } from 'react-router-dom';

class Admin extends Component {

    render() {

        return(
        <>
        <div id="wrapper">
        <ul className="navbar-nav bg-secondary-color sidebar sidebar-dark accordion satoshi" id="accordionSidebar">
        {/* Sidebar - Brand */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="admin">
            <div className="sidebar-brand-icon">
            <i className="fas fa-user-plus fs-4"></i>
            </div>
            <div className="sidebar-brand-text mx-1 satoshi-bold">Administrator</div>
        </a>

        {/* Divider */}
        <hr className="sidebar-divider my-0" />

        {/* Nav Item - Pending Orders */}
        <li className="nav-item active">
            <a className="nav-link" href="#dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span >Dashboard</span>
            </a>
        </li>

        {/* Nav Item - Partners */}
        <li className="nav-item">
            <a className="nav-link" href="#orders">
            <i className="fas fa-fw fa-table"></i>
            <span>Orders</span>
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#partners">
            <i className="fas fa-fw fa-table"></i>
            <span>Partners</span>
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#meals">
            <i className="fas fa-fw fa-table"></i>
            <span>Meals</span>
            </a>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/add-meal">
            <i className="fas fa-plus"></i>
            <span> Add a Meal</span>
            </Link>
        </li>
        </ul>
        <div className='container-fluid pt-3'>
        <div className="row satoshi">{/* CARDS */}
        <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-danger shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-danger text-uppercase mb-1"
                                id='orders'>PENDING ORDERS</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">6</div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-calendar fa-2x text-gray-300"></i>
                            <i className="fa-duotone fa-pan-food fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Assigned Orders
                            </div>
                            <div className="row no-gutters align-items-center">
                                <div className="col-auto">
                                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">16.67%</div>
                                </div>
                                <div className="col">
                                    <div className="progress progress-sm mr-2">
                                        <div className="progress-bar progress-bar6 bg-success" role="progressbar"
                                                aria-valuenow="50" aria-valuemin="0"
                                            aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                Partners</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">6</div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-users fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-info shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                Donated Meals</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">2075</div>
                        </div>
                        <div className="col-auto">
                            <i className="fa-solid fa-bowl-food fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div className='row satoshi'>
        <div className='col-xl-9 col-lg-8 mb-4'> {/* PENDING ORDERS */}
        <div className='card overflow-auto shadow' style={{height: "420px"}}>
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-black" id='orders'>Pending Orders</h6>
        </div>
        <div className="table-responsive p-3">
        <table className="table table-responsive-md table-striped table-hover">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Meal ID</th>
            <th scope="col">Member ID</th>
            <th scope="col">Status</th>
            <th scope="col">Date</th>
            <th scope="col">Partner</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>1</td>
            <td>1</td>
            <td className='text-warning satoshi-bold'>Pending</td> 
            <td>2023-06-01</td>
            <td>
            <div className="dropdown">
            <button className="btn dropdown-toggle py-1 text-white" style={{backgroundColor: "#22a699"}} type="button" 
                id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Assign
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="facebook.com">UC Main</a></li>
                <li><a className="dropdown-item" href="facebook.com">UC METC</a></li>
                <li><a className="dropdown-item" href="facebook.com">UC Pardo</a></li>
                <li><a className="dropdown-item" href="facebook.com">UC Banilad</a></li>
                <li><a className="dropdown-item" href="facebook.com">UC LapuLapu</a></li>
            </ul>
            </div>
            </td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>2</td>
            <td>2</td>
            <td className='satoshi-bold text-orange'>Preparing</td> 
            <td>2023-06-20</td>
            <td>
            <div className="dropdown">
            <button className="btn dropdown-toggle py-1 text-white" style={{backgroundColor: "#22a699"}} type="button" 
                id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Assign
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="facebook.com">UC Main</a></li>
                <li><a className="dropdown-item" href="facebook.com">UC METC</a></li>
                <li><a className="dropdown-item" href="facebook.com">UC Pardo</a></li>
                <li><a className="dropdown-item" href="facebook.com">UC Banilad</a></li>
                <li><a className="dropdown-item" href="facebook.com">UC LapuLapu</a></li>
            </ul>
            </div>
            </td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>3</td>
            <td>3</td>
            <td className='text-warning satoshi-bold'>Pending</td> 
            <td>2023-06-25</td>
            <td>
            <div className="dropdown">
            <button className="btn dropdown-toggle py-1 text-white" style={{backgroundColor: "#22a699"}} type="button" 
                id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Assign
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="facebook.com">UC Main</a></li>
                <li><a className="dropdown-item" href="facebook.com">UC METC</a></li>
                <li><a className="dropdown-item" href="facebook.com">UC Pardo</a></li>
                <li><a className="dropdown-item" href="facebook.com">UC Banilad</a></li>
                <li><a className="dropdown-item" href="facebook.com">UC LapuLapu</a></li>
            </ul>
            </div>
            </td>
            </tr>
            <tr>
            <th scope="row">4</th>
            <td>4</td>
            <td>4</td>
            <td className='text-warning satoshi-bold'>Pending</td> 
            <td>2023-06-29</td>
            <td>
            <div className="dropdown">
            <button className="btn dropdown-toggle py-1 text-white" style={{backgroundColor: "#22a699"}} type="button" 
                id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Assign
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="facebook.com">UC Main</a></li>
                <li><a className="dropdown-item" href="facebook.com">UC METC</a></li>
                <li><a className="dropdown-item" href="facebook.com">UC Pardo</a></li>
                <li><a className="dropdown-item" href="facebook.com">UC Banilad</a></li>
                <li><a className="dropdown-item" href="facebook.com">UC LapuLapu</a></li>
            </ul>
            </div>
            </td>
            </tr>
            <tr>
            <th scope="row">5</th>
            <td>5</td>
            <td>5</td>
            <td className='text-warning satoshi-bold'>Pending</td> 
            <td>2023-06-30</td>
            <td>
            <div className="dropdown">
            <button className="btn dropdown-toggle py-1 text-white" style={{backgroundColor: "#22a699"}} type="button" 
                id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Assign
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="facebook.com">UC Main</a></li>
                <li><a className="dropdown-item" href="facebook.com">UC METC</a></li>
                <li><a className="dropdown-item" href="facebook.com">UC Pardo</a></li>
                <li><a className="dropdown-item" href="facebook.com">UC Banilad</a></li>
                <li><a className="dropdown-item" href="facebook.com">UC LapuLapu</a></li>
            </ul>
            </div>
            </td>
            </tr>
            <tr>
            <th scope="row">6</th>
            <td>6</td>
            <td>6</td>
            <td className='text-warning satoshi-bold'>Pending</td> 
            <td>2023-07-1</td>
            <td>
            <div className="dropdown">
            <button className="btn dropdown-toggle py-1 text-white" style={{backgroundColor: "#22a699"}} type="button" 
                id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Assign
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="facebook.com">UC Main</a></li>
                <li><a className="dropdown-item" href="facebook.com">UC METC</a></li>
                <li><a className="dropdown-item" href="facebook.com">UC Pardo</a></li>
                <li><a className="dropdown-item" href="facebook.com">UC Banilad</a></li>
                <li><a className="dropdown-item" href="facebook.com">UC LapuLapu</a></li>
            </ul>
            </div>
            </td>
            </tr>
        </tbody>
        </table>
        </div>
        </div>
        </div>
        <div className='col-xl-3 col-lg-4 mb-4'> {/* PARTNERS */}
        <div className='card shadow'>
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-black">Partners</h6>
        </div>
        <div className="table-responsive">
        <table className="table table-responsive-md table-striped table-hover">
        <div className='p-3'>
            <div className='d-flex'>
                <div className='p-0'><img src={logoPartner} style={{width: "50px", height: "50px"}} alt='partner logo'/></div>
                <div>
                    <span className='satoshi-bold'>UC Main</span>
                    <br></br>
                    <span className='small'>Sanciangko St, Cebu City</span>
                </div>
            </div>
            <div className='d-flex'>
                <div className='p-0'><img src={logoPartner} style={{width: "50px", height: "50px"}} alt='partner logo'/></div>
                <div>
                    <span className='satoshi-bold'>UC METC</span>
                    <br></br>
                    <span className='small'>Alumnos St, Cebu City</span>
                </div>
            </div>
            <div className='d-flex'>
                <div className='p-0'><img src={logoPartner} style={{width: "50px", height: "50px"}} alt='partner logo'/></div>
                <div>
                    <span className='satoshi-bold'>UC Pardo</span>
                    <br></br>
                    <span className='small'>Natalio B. Bacalso Ave, Cebu</span>
                </div>
            </div>
            <div className='d-flex'>
                <div className='p-0'><img src={logoPartner} style={{width: "50px", height: "50px"}} alt='partner logo'/></div>
                <div>
                    <span className='satoshi-bold'>UC Banilad</span>
                    <br></br>
                    <span className='small'>Gov. M. Cuenco Ave, Cebu</span>
                </div>
            </div>
            <div className='d-flex'>
                <div className='p-0'><img src={logoPartner} style={{width: "50px", height: "50px"}} alt='partner logo'/></div>
                <div>
                    <span className='satoshi-bold'>UC Lapu-Lapu</span>
                    <br></br>
                    <span className='small'>Cortes Ave, Mandaue City</span>
                </div>
            </div>
        </div>
        </table>
        </div>
        </div>
        </div>
        </div>
        <div className='row satoshi'>
        <div className='col-xl-12 col-lg-12 mb-4'> {/* MENU */}
        <div className='card overflow-auto shadow'>
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-black" id='meals'>Menu</h6>
        </div>
        <div className="table-responsive p-3">
        <table className="table table-responsive-md table-striped table-hover">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Meal Name</th>
            <th scope="col">Meal Description</th>
            <th scope="col" className='pe-5'>Category</th>
            <th scope="col">Type</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Potato Gratin Tarts</td>
            <td>Made simply with sliced potatoes, heavy cream, 
            and grated cheese, potatoes au gratin is the ultimate comfort food.</td>
            <td>Plant Based</td> 
            <td>Hot</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Banana Coffee Cake Muffins</td>
            <td>Moist banana muffins with a buttery crumb topping
             spiced with the perfect amount of cinnamon and drizzled with a creamy vanilla glaze. </td>
            <td>Plant Based</td> 
            <td>Frozen</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>Pesto Turkey Pinwheels</td>
            <td>Perfect for lunchboxes or picnics, these bite-sized treats are 
            sure to be a hit with the whole crowd!</td>
            <td>Meat Based</td> 
            <td>Frozen</td>
            </tr>
            <tr>
            <th scope="row">4</th>
            <td>Turkey Taco Bowls</td>
            <td>These flavor-packed bowls are perfect for busy bees looking 
            to spice up their meal prep game.</td>
            <td>Meat Based</td> 
            <td>Hot</td>
            </tr>
            <tr>
            <th scope="row">5</th>
            <td>Pesto Chicken & Veggies</td>
            <td>Tender chicken breasts, green beans and tomatoes are coated 
            in a delicious basil pesto. </td>
            <td>Meat Based</td> 
            <td>Hot</td>
            </tr>
            <tr>
            <th scope="row">6</th>
            <td>Crunchy Avocado Tuna Wraps</td>
            <td>These light and refreshing wraps are filled with a blend of 
            tuna, avocado, and crunchy veggies, then wrapped in lettuce leaves for a 
            healthy lunch or snack.</td>
            <td>Meat Based</td> 
            <td>Hot</td>
            </tr>
        </tbody>
        </table>
        </div>
        </div>
        </div>
        </div>
        <div className='row satoshi'>
        <div className='col-xl-3 col-lg-4 mb-4'> {/* ADMINS */}
        <div className='card shadow'>
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-black">Administrators</h6>
        </div>
        <div className="table-responsive p-3 shadow">
        <table className="table table-responsive-md table-striped table-hover">
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Jhon Rhey Belciña</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jeanne Dominique Paloma</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>John Paul Inso</td>
            </tr>
            <tr>
            <th scope="row">4</th>
            <td>Johnberl Keer Ababon</td>
            </tr>
            <tr>
            <th scope="row">5</th>
            <td>Christian Roy Sevilla</td>
            </tr>
            <tr>
            <th scope="row">6</th>
            <td>Paul Cahilig</td>
            </tr>
            <tr>
            <th scope="row">7</th>
            <td>Sorceror Supreme</td>
            </tr>
        </tbody>
        </table>
        </div>
        </div>
        </div>
        <div className='col-xl-9 col-lg-8 mb-4'> {/* MEMBERS */}
        <div className='card shadow'>
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-black">Members</h6>
        </div>
        <div className="table-responsive p-3">
        <table className="table table-responsive-md table-striped table-hover">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Joanna the Pal</td>
            <td>Address, Ni Joanna, Cebu City</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jeane Rey</td>
            <td>Liloan, Cebu City</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>Jeanne Pear</td>
            <td>Bukid sa Bogo, Bogo City</td>
            </tr>
            <tr>
            <th scope="row">4</th>
            <td>Johan Barr</td>
            <td>Mabolo, Cebu City</td>
            </tr>
            <tr>
            <th scope="row">5</th>
            <td>Sianne Ria</td>
            <td>Address, Ni Sianne, Cebu City</td>
            </tr>
            <tr>
            <th scope="row">6</th>
            <td>Paula</td>
            <td>Address, Ni Paula, Cebu City</td>
            </tr>
        </tbody>
        </table>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </>
        )
    }
}

export default Admin;