import { Component, createRef, useState, useEffect, useRef } from "react";
// import meal from '../assets/images/potato-gratin-tarts.jpg';
// import 'bootstrap/dist/js/bootstrap.js';
// import 'boxicons/css/boxicons.min.css';
import '../../assets/css/menu.css';
import { Link, useParams, withRouter } from "react-router-dom";
import axios from 'axios';

function MealDetailsFunction() {
    const tabRefs = useRef({
        Featured: useRef(),
        Plant: useRef(),
        Meat: useRef()
    });

    let featuredbtn = useRef(null);
    let plantbtn = useRef(null);
    let meatbtn = useRef(null);

    const [meal, setMeal] = useState({
        meal_name: "",
        meal_desc: "",
        meal_nutri: ""
    });

    const [menu, setMenu] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadMeal();
    }, []);


    const loadMeal = async () => {
        const result = await axios.get(`/mealdetails/${id}`);
        setMeal(result.data);
    };


    useEffect(() => {
        // Set the "Featured" tab as active initially
        const featuredTab = tabRefs.current['Featured'].current;
        const featuredTabButton = featuredbtn;
        featuredTab.style.display = 'block';
        featuredTabButton.classList.add('active');
    }, []);

    // const openCity = (evt, cityName) => {
    //     // Get all elements with class="tabcontent" and hide them
    //     for (const key in tabRefs.current) {
    //         const tabRef = tabRefs.current[key]?.current;
    //         if (tabRef) {
    //           tabRef.style.display = 'none';
    //         }
    //       }

    //     // Get all elements with class="tablinks" and remove the class "active"
    //     const tablinks = document.getElementsByClassName('tablinks');
    //     for (let i = 0; i < tablinks.length; i++) {
    //       tablinks[i].classList.remove('active');
    //     }

    //     // Show the current tab, and add an "active" class to the link that opened the tab
    //     const cityElement = tabRefs.current[cityName]?.current;
    //     if (cityElement) {
    //       cityElement.style.display = 'block';
    //       evt.currentTarget.classList.add('active');
    //     }
    // };


    const openCity = (evt, cityName) => {
        // Hide all elements with class="tabcontent"
        for (const key in tabRefs.current) {
          const tabRef = tabRefs.current[key]?.current;
          if (tabRef) {
            tabRef.classList.remove('active');
          }
        }
      
        // Remove the "active" class from all elements with class="tablinks"
        const tablinks = document.getElementsByClassName('tablinks');
        for (let i = 0; i < tablinks.length; i++) {
          tablinks[i].classList.remove('active');
        }
      
        // Show the current tab and add the "active" class
        const cityElement = tabRefs.current[cityName]?.current;
        if (cityElement) {
          cityElement.classList.add('active');
          evt.currentTarget.classList.add('active');
        }
      };
      
      // ...
      
      useEffect(() => {
        // Call the openCity function after the component has rendered
        openCity();
      
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    useEffect(() => {
        axios
        .get("showMenu")
        .then((response) => {
            setMenu(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    const plantMenu = () =>{
        axios
        .get('showMenu/plant')
        .then((response) => {
            setMenu(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const meatMenu = () =>{
        axios
        .get('showMenu/meat')
        .then((response) => {
            setMenu(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const hotPlantMenu = () =>{
        axios
        .get('showMenu/plant/hot')
        .then((response) => {
            setMenu(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const coldPlantMenu = () =>{
        axios
        .get('showMenu/plant/cold')
        .then((response) => {
            setMenu(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const hotMeatMenu = () =>{
        axios
        .get('showMenu/meat/hot')
        .then((response) => {
            setMenu(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const coldMeatMenu = () =>{
        axios
        .get('showMenu/meat/cold')
        .then((response) => {
            setMenu(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };
    

    return (
        <div>
            <div className="tab">
                <button className="tablinks featuredbtn" onClick={(evt) => openCity(evt, 'Featured')} ref={(node) => (featuredbtn = node)}>Featured </button>
                <button className="tablinks plantbtn" onClick={(evt) => { openCity(evt, 'Plant'); plantMenu(); }} ref={(node) => (plantbtn = node)}>Plant-based</button>
                <button className="tablinks meatbtn" onClick={(evt) => { openCity(evt, 'Meat'); meatMenu(); }} ref={(node) => (meatbtn = node)}>Meat-based</button>
            </div>
            <div className="container-fluid">
                <div className="row mb-5"> {/* Meal Details */}
                    <div className="col-xl-5 col-lg-5 mb-4 mt-5">
                        <div className="">

                            <img src='assets/images/potato.jpg' className="card-img-top rounded shadow h-100" alt="meal" />
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 mt-5">
                        <div className="card shadow">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">{meal.meal_name}</h5>
                                <p className="card-text mt-3">{meal.meal_desc}</p>
                                <h6 className="card-subtitle text-muted mt-5">Nutritional Facts</h6>
                                <p className="card-text text-muted row mt-2">
                                    <span className="col-5 ps-4">
                                        {meal.meal_nutri}
                                    </span>
                                    {/* <div className="col-5 ps-4">
                                            • Calories 711 <br></br>
                                            • Fat 53g<br></br>
                                            • Carbs 56g<br></br>
                                        </div> */}
                                    {/* <div className="col-5">
                                            • Fiber 11g <br></br>
                                            • Sugar 2g <br></br>
                                            • Protein 9g
                                        </div> */}
                                </p>
                                <a href="add-meal" className="btn btn-block btn-warning mt-5 fw-bold">Order</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-5"> {/* Allergen Declaration */}
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item rounded-2 shadow">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <button className="accordion-button text-white rounded-top-2 fw-bold" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne"
                                    aria-expanded="true" aria-controls="panelsStayOpen-collapseOne"
                                    style={{ backgroundColor: "#f24c3d" }}>
                                    Allergen Declaration
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
                                aria-labelledby="panelsStayOpen-headingOne">
                                <div className="accordion-body">
                                    MerryMeals' manufacturing and kitchen operations involve the utilization of shared
                                    cooking equipment, preparation areas, tools, and utensils that may come into contact
                                    with or contain allergens. Consequently, we are unable to provide a guarantee that a
                                    food ingredient or product is completely free from a specific allergen, as there is
                                    a possibility of allergen cross-contact between different products.
                                    <br></br>
                                    <br></br>
                                    The allergen information presented in this document is based on data provided by our
                                    suppliers. MerryMeals, along with its directors, officers, employees, subsidiaries,
                                    and franchisees, cannot be held responsible for the accuracy and reliability of the
                                    provided allergen information.
                                    <br></br>
                                    <br></br>
                                    The listing is periodically updated in an effort to accurately represent the allergen content;
                                    however, variations may occur due to ongoing product improvements. Additionally, non-permanent
                                    products such as test items and limited-time offerings may not be included in this document.
                                    <br></br>
                                    <br></br>
                                    The allergen information provided in this document is meant to be a general guide and does
                                    not constitute legal or medical advice. Customers should seek separate medical or legal
                                    advice relevant to their specific circumstances. MerryMeals, along with its directors,
                                    employees, subsidiaries, and franchisees, disclaims any liability for any loss, costs,
                                    or damages incurred by users who rely on this document.
                                    <br></br>
                                    <br></br>

                                    This information is specific to MerryMeals stores operating within the Philippines and
                                    does not pertain to stores located outside the Philippines.
                                    <br></br>
                                    <br></br>
                                    Current as of: June 13, 2023
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default MealDetailsFunction;