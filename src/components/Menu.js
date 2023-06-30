import React, { Component, createRef  } from 'react';
import axios from 'axios';
import '../assets/css/menu.css';

class Menu extends Component{

    constructor(props) {
        super(props);
        this.tabRefs = {
          Featured: createRef(),
          Plant: createRef(),
          Meat: createRef()
        };
      }
    
      componentDidMount() {
        // Set the "Featured" tab as active initially
        const featuredTab = this.tabRefs['Featured'].current;
        const featuredTabButton = this.featuredbtn;
        featuredTab.style.display = 'block';
        featuredTabButton.classList.add('active');
      }
    
      openCity(evt, cityName) {
        // Get all elements with class="tabcontent" and hide them
        for (const key in this.tabRefs) {
          const tabRef = this.tabRefs[key].current;
          tabRef.style.display = 'none';
        }
    
        // Get all elements with class="tablinks" and remove the class "active"
        const tablinks = document.getElementsByClassName('tablinks');
        for (let i = 0; i < tablinks.length; i++) {
          tablinks[i].classList.remove('active');
        }
    
        // Show the current tab, and add an "active" class to the link that opened the tab
        const cityElement = this.tabRefs[cityName].current;
        cityElement.style.display = 'block';
        evt.currentTarget.classList.add('active');
      }
      
    render() {
        return (
            <div>
                <div className="tab">
                    <button classNameName="tablinks featuredbtn" onClick={(evt) => this.openCity(evt, 'Featured')} ref={(node) => (this.featuredbtn = node)}>Featured </button>
                    <button className="tablinks plantbtn"  onClick={(evt) => this.openCity(evt, 'Plant')} ref={(node) => (this.plantbtn = node)}>Plant-based</button>
                    <button className="tablinks meatbtn" onClick={(evt) => this.openCity(evt, 'Meat')} ref={(node) => (this.meatbtn = node)}>Meat-based</button>
                </div>
                
                <div id="Featured" className="tabcontent"  ref={this.tabRefs['Featured']}>
                    <div className="container">
                        <div className="filterdiv">
                            <h3 className="featuredhead">FEATURED</h3>
                        </div>

                        <div className=" featuredrow1">
                            <div className="featured1 featured">
                                <h1 className="featureTitle">Vegetable Stir-fry</h1>
                            </div>
                            <div className="featured2 featured">
                                <h1 className="featureTitle">Gazpacho</h1>
                            </div>
                        </div>
                        <div className=" featuredrow2">
                            <div className="featured3 featuredbottom ">
                                <h1 className="featuredsmall">Cold Soba Noodles</h1>
                            </div>
                            <div className="featured4 featuredbottom  ">
                                <h1 className="featuredsmall">Lemon Garlic Baked Fish</h1>
                            </div>
                            <div className="featured5 featuredbottom ">
                                <h1 className="featuredsmall">Frozen Chicken Enchiladas</h1>
                            </div>
                        </div>
                    </div>

                </div>
                
                <div id="Plant" className="tabcontent" ref={this.tabRefs['Plant']}>
                    <div className="container plantcont">
                        <div className="filterdiv">
                            <h3 className="featuredhead">Plant-Based Meals</h3>
                            <div className="dropdown">
                                <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Type
                                </button>
                                <ul className="dropdown-menu">
                                    <li className="typeli"><button className="dropdown-item" value="hot"><img src="assets/images/hot.png" className="foodtype" alt="..."/>    Hot Meals</button></li>
                                    <li className="typeli"><button className="dropdown-item"value="frozen"><img src="assets/images/frozen.png"  className="foodtype" alt="..."/>    Frozen Meals</button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="plantmenu">
                            <div className="card menu-card shadow">
                                <img src="assets/images/vegetable-stir-fry.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title mealname">Meal Name</h5>
                                    <p className="card-text mealdesc">This meal is for old people. Get them green old hag. Veggies and shit go brrr.</p>
                                    <button className="orderbtnmenu">Order</button>
                                </div>
                            </div>
                            <div className="card  menu-card shadow">
                                <img src="assets/images/vegetable-stir-fry.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title mealname">Meal Name</h5>
                                    <p className="card-text  mealdesc">This meal is for old people. Get them green old hag. Veggies and shit go brrr.</p>
                                    <button className="orderbtnmenu">Order</button>
                                </div>
                            </div>
                            <div className="card  menu-card shadow">
                                <img src="assets/images/vegetable-stir-fry.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body menubody">
                                    <h5 className="card-title mealname">Meal Name</h5>
                                    <p className="card-text mealdesc">This meal is for old people. Get them green old hag. Veggies and shit go brrr.</p>
                                    <button className="orderbtnmenu">Order</button>
                                </div>
                            </div>
                            <div className="card  menu-card shadow">
                                <img src="assets/images/vegetable-stir-fry.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body menubody">
                                    <h5 className="card-title mealname">Meal Name</h5>
                                    <p className="card-text mealdesc">This meal is for old people. Get them green old hag. Veggies and shit go brrr.</p>
                                    <button className="orderbtnmenu">Order</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
                <div id="Meat" className="tabcontent"  ref={this.tabRefs['Meat']}>
                    <div className="container plantcont">
                        <div className="filterdiv">
                            <h3 className="featuredhead">Meat-Based Meals</h3>
                            <div className="dropdown">
                                <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Type
                                </button>
                                <ul className="dropdown-menu">
                                    <li className="typeli"><button className="dropdown-item" value="hot"><img src="assets/images/hot.png" className="foodtype" alt="..."/>    Hot Meals</button></li>
                                    <li className="typeli"><button className="dropdown-item"value="frozen"><img src="assets/images/frozen.png"  className="foodtype" alt="..."/>    Frozen Meals</button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="plantmenu">
                            <div className="card menu-card  shadow">
                                <img src="assets/images/vegetable-stir-fry.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title mealname">Meal Name</h5>
                                    <p className="card-text mealdesc">This meal is for old people. Get them green old hag. Veggies and shit go brrr.</p>
                                    <button className="orderbtnmenu">Order</button>
                                </div>
                            </div>
                            <div className="card menu-card  shadow">
                                <img src="assets/images/vegetable-stir-fry.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title mealname">Meal Name</h5>
                                    <p className="card-text  mealdesc">This meal is for old people. Get them green old hag. Veggies and shit go brrr.</p>
                                    <button className="orderbtnmenu">Order</button>
                                </div>
                            </div>
                            <div className="card menu-card  shadow">
                                <img src="assets/images/vegetable-stir-fry.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body menubody">
                                    <h5 className="card-title mealname">Meal Name</h5>
                                    <p className="card-text mealdesc">This meal is for old people. Get them green old hag. Veggies and shit go brrr.</p>
                                    <button className="orderbtnmenu">Order</button>
                                </div>
                            </div>
                            <div className="card menu-card  shadow">
                                <img src="assets/images/vegetable-stir-fry.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body menubody">
                                    <h5 className="card-title mealname">Meal Name</h5>
                                    <p className="card-text mealdesc">This meal is for old people. Get them green old hag. Veggies and shit go brrr.</p>
                                    <button className="orderbtnmenu">Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;