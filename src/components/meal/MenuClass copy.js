import React, { Component, createRef } from 'react';
import axios from 'axios';
import '../../assets/css/menu.css';
import { Link } from "react-router-dom";

class MenuClass extends Component {

    constructor(props) {
        super(props);
        this.tabRefs = {
            Featured: createRef(),
            Plant: createRef(),
            Meat: createRef()
        };

        this.state = {
            menu: []
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



    componentDidMount() {
        axios
        .get("showMenu")
        .then((response) => {
            this.setState({
                menu: response.data,
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    plantMenu = () =>{
        axios
        .get('showMenu/plant')
        .then((response) => {
            this.setState({
                menu: response.data,
            });
        })
        .catch((error) => {
            console.log(error);
        });
    };

    meatMenu = () =>{
        axios
        .get('showMenu/meat')
        .then((response) => {
            this.setState({
                menu: response.data,
            });
        })
        .catch((error) => {
            console.log(error);
        });
    };

    hotPlantMenu = () =>{
        axios
        .get('showMenu/plant/hot')
        .then((response) => {
            this.setState({
                menu: response.data,
            });
        })
        .catch((error) => {
            console.log(error);
        });
    };

    coldPlantMenu = () =>{
        axios
        .get('showMenu/plant/cold')
        .then((response) => {
            this.setState({
                menu: response.data,
            });
        })
        .catch((error) => {
            console.log(error);
        });
    };

    hotMeatMenu = () =>{
        axios
        .get('showMenu/meat/hot')
        .then((response) => {
            this.setState({
                menu: response.data,
            });
        })
        .catch((error) => {
            console.log(error);
        });
    };

    coldMeatMenu = () =>{
        axios
        .get('showMenu/meat/cold')
        .then((response) => {
            this.setState({
                menu: response.data,
            });
        })
        .catch((error) => {
            console.log(error);
        });
    };







    render() {

        const data = this.state.menu;
        const menuData = data.map((meal, key) => (
            <div className="card menu-card shadow">
                <img src="assets/images/vegetable-stir-fry.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title mealname">{meal.meal_name}</h5>
                    <p className="card-text mealdesc">{meal.meal_desc}</p>
                    <Link to={`/mealdetails/${meal.meal_id}`}><button className="orderbtnmenu">View</button></Link>
                </div>
            </div>
        ));
        return (
            <div>
                <div className="tab">
                    <button className="tablinks featuredbtn" onClick={(evt) => this.openCity(evt, 'Featured')} ref={(node) => (this.featuredbtn = node)}>Featured </button>
                    {/* <button className="tablinks plantbtn" onClick={(evt) => this.openCity(evt, 'Plant')} ref={(node) => (this.plantbtn = node)}>Plant-based</button> */}
                    <button className="tablinks plantbtn" onClick={(evt) => { this.openCity(evt, 'Plant'); this.plantMenu(); }} ref={(node) => (this.plantbtn = node)}>Plant-based</button>
                    <button className="tablinks meatbtn" onClick={(evt) => { this.openCity(evt, 'Meat'); this.meatMenu(); }} ref={(node) => (this.meatbtn = node)}>Meat-based</button>
                </div>

                <div id="Featured" className="tabcontent" ref={this.tabRefs['Featured']}>
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
                    {/* {menuData} */}

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
                                    <li className="typeli"><button className="dropdown-item" onClick={this.hotPlantMenu} value="hot"><img src="assets/images/hot.png" className="foodtype" alt="..." />    Hot Meals</button></li>
                                    <li className="typeli"><button className="dropdown-item"  onClick={this.coldPlantMenu} value="frozen"><img src="assets/images/frozen.png" className="foodtype" alt="..." />    Frozen Meals</button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="plantmenu">

                            {menuData}
                        </div>
                    </div>

                </div>

                <div id="Meat" className="tabcontent" ref={this.tabRefs['Meat']}>
                    <div className="container plantcont">
                        <div className="filterdiv">
                            <h3 className="featuredhead">Meat-Based Meals</h3>
                            <div className="dropdown">
                                <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Type
                                </button>
                                <ul className="dropdown-menu">
                                    <li className="typeli"><button className="dropdown-item" onClick={this.hotMeatMenu} value="hot"><img src="assets/images/hot.png" className="foodtype" alt="..." />    Hot Meals</button></li>
                                    <li className="typeli"><button className="dropdown-item"  onClick={this.coldMeatMenu} value="frozen"><img src="assets/images/frozen.png" className="foodtype" alt="..." />    Frozen Meals</button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="plantmenu">

                            {menuData}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuClass;