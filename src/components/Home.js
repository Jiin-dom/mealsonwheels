import React, { Component, createRef  } from 'react';
import axios from 'axios';
import '../assets/css/home.css';

class Home extends Component{
    render(){
        return(
            <div style={{backgroundColor: '#f2f2f2'}}>
                <div className='homebanner'>
                    <div className='container bannerdivouter'>
                        <div className='bannerdiv'>
                            <h1 className='bannerMaintext'>Nourishing Communities With Every Penny</h1>
                            <div>
                                <button className='btn'>Donate</button>
                                <button className='btn'>Order</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='bannerbelow'>
                        <div  className='bannerbelow1 bannerbelowchild'>
                            <p className='bannerbelowhead'>Total Funds Raised</p>
                            <h3 className='bannerbelowtext'>$400,000</h3>
                        </div>
                        <div  className='bannerbelow2  bannerbelowchild'>
                            <p className='bannerbelowhead'>With over Donors</p>
                            <h3 className='bannerbelowtext'>1,200+</h3>
                        </div>
                        <div  className='bannerbelow3 bannerbelowchild'>
                            <p className='bannerbelowhead'>Fed Adults</p>
                            <h3 className='bannerbelowtext'>10,000+</h3>
                        </div>
                    </div>
                </div>

                <div className='container mealsonwheelscont'>
                    <div className='mealsonwheels'>
                        <div className='mealsonwheels1'>
                            <img src="assets/images/home1.png" className='homeimg1'/>
                            <div>
                                <h1 className='mealsonwheelsHead'>MerryMeals</h1>
                                <p className='mealsonwheelsDesc'>Welcome to MerryMeal, a compassionate organization dedicated to nourishing the lives of adults in need. Our mission is to deliver hot, nutritious meals to those unable to cook or maintain their nutrition due to age, disease, or disability. We understand the challenges they face and are committed to making a positive impact.</p>
                                <button className='btn readmorebtn '>Read More</button>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className='row '>
                    <div className='container'>
                        <div className='col-3 piccol1'>
                            <img  src="assets/images/home2.png" className='homepic1'></img>
                            
                        </div>
                        <div className='col-3 piccol1'>
                            <img  src="assets/images/home3.png" className='homepic1'></img>
                            
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Home;