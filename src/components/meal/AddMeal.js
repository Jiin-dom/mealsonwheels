import '../App.css';
import { Component } from 'react';
import mealBanner from '../assets/images/add-meal-banner.jpg';
import { Link } from 'react-router-dom';

class AddMeal extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
          uploadedImage: '',
        };
      }
    
      handleFileUpload = (event) => {
        const file = event.target.files[0];
    
        if (file) {
          const reader = new FileReader();
    
          reader.onload = (e) => {
            this.setState({ uploadedImage: e.target.result });
          };
    
          reader.readAsDataURL(file);
        }
      };
    
    render() {
        const uploadedImage = this.state.uploadedImage;
        return(
        <div>
        <div className='row p-0 satoshi'>
        <div className='col-2 mx-0'>
        <ul className="navbar-nav bg-secondary-color sidebar sidebar-dark accordion" id="accordionSidebar">
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
            <Link className="nav-link" to="/admin">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
            </Link>
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
        </div>
        <div className='col-10 px-0 mx-0 my-auto'>
        <div className='card mx-auto rounded-top-4 rounded-bottom-4' style={{minWidth: "480px", maxWidth: "600px"}}>
        <img class="card-img-top rounded-top-4 bottom-top-4" src={mealBanner} 
            alt="Add meal banner" 
            style={{height: "200px",  objectFit: "cover", objectPosition: "center"}}/>
        <form onSubmit={this.addStore} className="validated px-4 satoshi">
            <h3 className=" card-title text-center mx-auto mt-3 satoshi-bold">Add a meal</h3>
            <p className="text-center">
            Please fill in the form below to insert a new meal in the menu.</p>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Meal name" required/>
            </div>
            <div className="mb-3">
                <textarea className="form-control" placeholder="Meal details" rows="3" required/>
            </div>
            <div className="mb-3">
                <textarea className="form-control" placeholder="Meal nutrients" rows="2" required/>
            </div>
            <div className="mb-3 justify-content-center">
                <p className="form-label">Select an image:</p>
                <input className="form-control mb-3" type="file" accept="image/*" id="formFile"
                     onChange={this.handleFileUpload} required/>
                {uploadedImage && (
                <div className='d-flex justify-content-center'>
                <img src={uploadedImage} className='rounded' alt="preview" 
                    style={{ maxWidth: '300px', height: 'auto' }}/>
                </div>
                )}
            </div>
            <div className="mx-auto text-center mt-5 mb-3">
                <input type="submit" value="Submit" className="btn-add-meal p-2 px-5 satoshi-bold text-center mb-3"/> 
            </div>
        </form>
        </div>
        </div>
        </div>
        </div>
        )
    }
}

export default AddMeal;