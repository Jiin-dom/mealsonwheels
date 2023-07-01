import React, { Component, createRef  } from 'react';
import axios from 'axios';
import '../../assets/css/home.css';


class Home extends Component{
    render(){
        return(
            <div style={{backgroundColor: '#f2f2f2'}}>
                <div className='homebanner'>
                    <div className='container bannerdivouter'>
                        <div className='bannerdiv'>
                            <h1 className='bannerMaintext'>Nourishing Hearts, One MerryMeal At A Time</h1>
                            {/* <div>
                                <button className='btn'>Donate</button>
                                <button className='btn'>Order</button>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='bannerbelow'>
                        <div  className='bannerbelow1 bannerbelowchild shadow'>
                            <p className='bannerbelowhead'>Total Funds Raised</p>
                            <h3 className='bannerbelowtext'>$400,000</h3>
                        </div>
                        <div  className='bannerbelow2  bannerbelowchild shadow'>
                            <p className='bannerbelowhead'>With over Donors</p>
                            <h3 className='bannerbelowtext'>1,200+</h3>
                        </div>
                        <div  className='bannerbelow3 bannerbelowchild shadow'>
                            <p className='bannerbelowhead'>Fed Adults</p>
                            <h3 className='bannerbelowtext'>10,000+</h3>
                        </div>
                    </div>
                </div>

                <div className='container choicesCont'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='choice1 shadow-lg'>
                                <h3 className='choiceName choiceName1'>Donate Now</h3>
                            </div>
                        </div>
                        <div className='col-4'>
                        <div className='choice2 shadow-lg'>
                                <h3 className='choiceName choiceName2'>Order Now</h3>
                            </div>
                        </div>
                        <div className='col-4'>
                        <div className='choice3 shadow-lg'>
                                <h3 className='choiceName choiceName3'>Be a Volunteer</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container mealsonwheelscont'>
                    <div className='mealsonwheels'>
                        <div className='mealsonwheels1'>
                            <img src="assets/images/home1.png" className='homeimg1 shadow'/>
                            <div>
                                <h1 className='mealsonwheelsHead'>MerryMeals</h1>
                                <p className='mealsonwheelsDesc mb-4'>Welcome to MerryMeal, a compassionate organization dedicated to nourishing the lives of adults in need. Our mission is to deliver hot, nutritious meals to those unable to cook or maintain their nutrition due to age, disease, or disability. We understand the challenges they face and are committed to making a positive impact.</p>
                                <button className='btn readmorebtn '>Read More</button>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className='container homerow2  '>
                    <div className='row'>
                       
                        <div className='col-6'>
                            <h1 className='text-right nourish2'>Nourishing Communities with Every Penny</h1>
                        </div>
                         <div className='col-3 piccol1 piccol11'>
                            <img  src="assets/images/home2 (1).png" className='homepic1'></img>
                            
                        </div>
                        <div className='col-3 piccol1 piccol12'>
                            <img  src="assets/images/home3 (1).png" className='homepic2'></img>
                            
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Home;