import { Component, createRef, useState, useEffect, useRef } from "react";
// import meal from '../assets/images/potato-gratin-tarts.jpg';
// import 'bootstrap/dist/js/bootstrap.js';
// import 'boxicons/css/boxicons.min.css';
import '../../assets/css/menu.css';
import { Link, useParams, withRouter } from "react-router-dom";
import axios from 'axios';

class MealDetails extends Component {
    constructor(props) {
        super(props);
        this.tabRefs = {
            Featured: createRef(),
            Plant: createRef(),
            Meat: createRef()
        };

        this.state = {
            meal: {
                meal_name: "",
                meal_desc: "",
                meal_nutri: ""
              }
        };
    }

    // const { id } = useParams();

    // useEffect(() => {
    //     loadMeal();
    // }, []);

    componentDidMount() {
        this.loadMeal();
    }

    loadMeal = async () => {
        const id = this.props.match.params.id;
        const result = await axios.get(`/mealdetails/${id}`);
        this.setState({ meal: result.data });
    };


    render(){
        const { meal } = this.state;

        return (
            <div>
                <div className="tab">
                     <button classNameName="tablinks featuredbtn" onClick={(evt) => this.openCity(evt, 'Featured')} ref={(node) => (this.featuredbtn = node)}>Featured </button>
                     <button className="tablinks plantbtn" onClick={(evt) => this.openCity(evt, 'Plant')} ref={(node) => (this.plantbtn = node)}>Plant-based</button>
                     <button className="tablinks meatbtn" onClick={(evt) => this.openCity(evt, 'Meat')} ref={(node) => (this.meatbtn = node)}>Meat-based</button>
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
   

}

export default MealDetails;