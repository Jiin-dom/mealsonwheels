import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import '../../assets/css/menu.css';
import { Link } from "react-router-dom";

const Menu = () => {
    const tabRefs = {
        Featured: useRef(),
        Plant: useRef(),
        Meat: useRef()
    };
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        // Set the "Featured" tab as active initially
        const featuredTab = tabRefs['Featured'].current;
        // const featuredTabButton = featuredbtn;
        const featuredTabButton = tabRefs['Featured'].current;
        featuredTab.style.display = 'block';
        featuredTabButton.classList.add('active');
    }, []);

    const openCity = (evt, cityName) => {
        // Get all elements with class="tabcontent" and hide them
        for (const key in tabRefs) {
            const tabRef = tabRefs[key].current;
            tabRef.style.display = 'none';
        }

        // Get all elements with class="tablinks" and remove the class "active"
        const tablinks = document.getElementsByClassName('tablinks');
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove('active');
        }

        // Show the current tab, and add an "active" class to the link that opened the tab
        const cityElement = tabRefs[cityName].current;
        cityElement.style.display = 'block';
        evt.currentTarget.classList.add('active');
    };



    // Get all meal
    useEffect(() => {
        axios
            .get('showMenu')
            .then((res) => {
                setMenu(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);




    const menuResults = menu.map((meal, key) => (
        <div className="card menu-card shadow">
            <img src="assets/images/vegetable-stir-fry.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title mealname">{meal.meal_name}</h5>
                <p className="card-text mealdesc">{meal.menu_desc}</p>
                <Link to="/menudetails"><button className="orderbtnmenu">Order</button></Link>
            </div>
        </div>
    ));


    return (
        <div>
            <div className="tab">
                <button className="tablinks featuredbtn" onClick={(evt) => openCity(evt, 'Featured')} ref={(node) => (this.featuredbtn = node)}>Featured </button>
                <button className="tablinks plantbtn" onClick={(evt) => openCity(evt, 'Plant')} ref={(node) => (this.plantbtn = node)}>Plant-based</button>
                <button className="tablinks meatbtn" onClick={(evt) => openCity(evt, 'Meat')} ref={(node) => (this.meatbtn = node)}>Meat-based</button>
            </div>

            <div id="Featured" className="tabcontent" ref={tabRefs['Featured']}>
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

            <div id="Plant" className="tabcontent" ref={tabRefs['Plant']}>
                <div className="container plantcont">
                    <div className="filterdiv">
                        <h3 className="featuredhead">Plant-Based Meals</h3>
                        <div className="dropdown">
                            <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Type
                            </button>
                            <ul className="dropdown-menu">
                                <li className="typeli"><button className="dropdown-item" value="hot"><img src="assets/images/hot.png" className="foodtype" alt="..." />    Hot Meals</button></li>
                                <li className="typeli"><button className="dropdown-item" value="frozen"><img src="assets/images/frozen.png" className="foodtype" alt="..." />    Frozen Meals</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="plantmenu">
                        {menuResults}
                    </div>
                </div>
            </div>

            <div id="Meat" className="tabcontent" ref={tabRefs['Meat']}>
                <div className="container plantcont">
                    <div className="filterdiv">
                        <h3 className="featuredhead">Meat-Based Meals</h3>
                        <div className="dropdown">
                            <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Type
                            </button>
                            <ul className="dropdown-menu">
                                <li className="typeli"><button className="dropdown-item" value="hot"><img src="assets/images/hot.png" className="foodtype" alt="..." />    Hot Meals</button></li>
                                <li className="typeli"><button className="dropdown-item" value="frozen"><img src="assets/images/frozen.png" className="foodtype" alt="..." />    Frozen Meals</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="plantmenu">
                        {menuResults}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
