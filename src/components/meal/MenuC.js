import React, { useEffect, useState  } from 'react';
import '../../assets/css/menu.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


const MenuC = () => {
    useEffect(() => {
        // Set the "Featured" tab as active initially
        document.getElementById('Featured').style.display = 'block';
        document.querySelector('.tablinks').classList.add('active');
    }, []);

    const openCity = (evt, cityName) => {
        // Declare all variables
        let i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName('tabcontent');
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = 'none';
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName('tablinks');
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(' active', '');
        }

        // Show the current tab, and add an "active" class to the link that opened the tab
        document.getElementById(cityName).style.display = 'block';
        evt.currentTarget.className += ' active';
    };

    const [menu, setMenu] = useState(null);

    useEffect(() => {
      fetchMenuData('showMenu');
    }, []);
  
    const fetchMenuData = (url) => {
      axios
        .get(url)
        .then((response) => {
          setMenu(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    const plantMenu = () => {
      fetchMenuData('showMenu/plant');
    };
  
    const meatMenu = () => {
      fetchMenuData('showMenu/meat');
    };
  
    const hotPlantMenu = () => {
      fetchMenuData('showMenu/plant/hot');
    };
  
    const coldPlantMenu = () => {
      fetchMenuData('showMenu/plant/cold');
    };
  
    const hotMeatMenu = () => {
      fetchMenuData('showMenu/meat/hot');
    };
  
    const coldMeatMenu = () => {
      fetchMenuData('showMenu/meat/cold');
    };


    const menuData = menu ? (
        menu.map((meal, key) => (
          <div className="card menu-card shadow" key={key}>
            <img src="assets/images/vegetable-stir-fry.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title mealname">{meal.meal_name}</h5>
              <p className="card-text mealdesc">{meal.meal_desc}</p>
              <Link to={`/mealdetails/${meal.meal_id}`}>
                <button className="orderbtnmenu">View</button>
              </Link>
            </div>
          </div>
        ))
      ) : null;

    return (
        <div>
            <div className="tab">
                <button className="tablinks featuredbtn" onClick={(event) => openCity(event, 'Featured')}>
                    Featured
                </button>
                <button className="tablinks plantbtn" onClick={(event) => {openCity(event, 'Plant'); coldPlantMenu();}}>
                    Plant-based
                </button>
                <button className="tablinks meatbtn" onClick={(event) => {openCity(event, 'Meat');  meatMenu();}}>
                    Meat-based
                </button>
            </div>

            <div id="Featured" className="tabcontent">
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

            <div id="Plant" className="tabcontent">
                <div className="container plantcont">
                    <div className="filterdiv">
                        <h3 className="featuredhead">Plant-Based Meals</h3>
                        <div className="dropdown">
                            <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Type
                            </button>
                            <ul className="dropdown-menu">
                                <li className="typeli"><button onClick={hotPlantMenu()} className="dropdown-item" value="hot"><img src="assets/images/hot.png" className="foodtype" alt="..." />    Hot Meals</button></li>
                                <li className="typeli"><button className="dropdown-item"  value="frozen"><img src="assets/images/frozen.png" className="foodtype" alt="..." />    Frozen Meals</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="plantmenu">
                        {menuData}

                    </div>
                </div>
            </div>

            <div id="Meat" className="tabcontent">
                <div className="container plantcont">
                    <div className="filterdiv">
                        <h3 className="featuredhead">Meat-Based Meals</h3>
                        <div className="dropdown">
                            <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Type
                            </button>
                            <ul className="dropdown-menu">
                                <li className="typeli"><button className="dropdown-item"  value="hot"><img src="assets/images/hot.png" className="foodtype" alt="..." />    Hot Meals</button></li>
                                <li className="typeli"><button className="dropdown-item"  value="frozen"><img src="assets/images/frozen.png" className="foodtype" alt="..." />    Frozen Meals</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="plantmenu">
                        {menuData}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuC;
