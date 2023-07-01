import { Component, createRef } from "react";
// import meal from '../assets/images/potato-gratin-tarts.jpg';
// import 'bootstrap/dist/js/bootstrap.js';
// import 'boxicons/css/boxicons.min.css';
import '../../assets/css/menu.css';
import { Link } from "react-router-dom";

class MealDetails extends Component {

    // constructor(props) {
    //     super(props);
    //     this.tabRefs = {
    //       Featured: createRef(),
    //       Plant: createRef(),
    //       Meat: createRef()
    //     };
    //   }
    
    //   componentDidMount() {
    //     // Set the "Featured" tab as active initially
    //     const featuredTab = this.tabRefs['Featured'].current;
    //     const featuredTabButton = this.featuredbtn;
    //     featuredTab.style.display = 'block';
    //     featuredTabButton.classList.add('active');
    //   }
    
    //   openCity(evt, cityName) {
    //     // Get all elements with class="tabcontent" and hide them
    //     for (const key in this.tabRefs) {
    //       const tabRef = this.tabRefs[key].current;
    //       tabRef.style.display = 'none';
    //     }
    
    //     // Get all elements with class="tablinks" and remove the class "active"
    //     const tablinks = document.getElementsByClassName('tablinks');
    //     for (let i = 0; i < tablinks.length; i++) {
    //       tablinks[i].classList.remove('active');
    //     }
    
    //     // Show the current tab, and add an "active" class to the link that opened the tab
    //     const cityElement = this.tabRefs[cityName].current;
    //     cityElement.style.display = 'block';
    //     evt.currentTarget.classList.add('active');
    //   }

    render() {
        return (
            <div>
                <div className="tab">
                    <button classNameName="tablinks featuredbtn" onClick={(evt) => this.openCity(evt, 'Featured')} ref={(node) => (this.featuredbtn = node)}>Featured </button>
                    <button className="tablinks plantbtn"  onClick={(evt) => this.openCity(evt, 'Plant')} ref={(node) => (this.plantbtn = node)}>Plant-based</button>
                    <button className="tablinks meatbtn" onClick={(evt) => this.openCity(evt, 'Meat')} ref={(node) => (this.meatbtn = node)}>Meat-based</button>
                </div>
                <div className="container-fluid">
                    <div className="row mb-5"> {/* Meal Details */}
                        <div className="col-xl-5 col-lg-5 mb-4 mt-5">
                            <div  className="">

                            <img src='assets/images/potato.jpg' className="card-img-top rounded shadow h-100" alt="meal" />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 mt-5">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Potato Gratin Tarts</h5>
                                    <p className="card-text mt-3">Made simply with sliced potatoes, heavy cream,
                                        and grated cheese, potatoes au gratin is the ultimate comfort food.</p>
                                    <h6 className="card-subtitle text-muted mt-5">Nutritional Facts</h6>
                                    <p className="card-text text-muted row mt-2">
                                        <div className="col-5 ps-4">
                                            • Calories 711 <br></br>
                                            • Fat 53g<br></br>
                                            • Carbs 56g<br></br>
                                        </div>
                                        <div className="col-5">
                                            • Fiber 11g <br></br>
                                            • Sugar 2g <br></br>
                                            • Protein 9g
                                        </div>
                                    </p>
                                    <a href="add-meal" className="btn btn-block btn-warning mt-5 fw-bold">Order</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5"> {/* Allergen Declaration */}
                        <div class="accordion" id="accordionPanelsStayOpenExample">
                            <div class="accordion-item rounded-2 shadow">
                                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                    <button class="accordion-button text-white rounded-top-2 fw-bold" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne"
                                        aria-expanded="true" aria-controls="panelsStayOpen-collapseOne"
                                        style={{ backgroundColor: "#f24c3d" }}>
                                        Allergen Declaration
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
                                    aria-labelledby="panelsStayOpen-headingOne">
                                    <div class="accordion-body">
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