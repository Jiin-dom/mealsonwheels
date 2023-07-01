
import './App.css';
import Menu from './components/meal/Menu';
import Partner from './components/users/Partner';
import Home from './components/common/Home';
import Rider from './components/users/Rider';
import Location from './components/common/Location';
import Donor from './components/users/Donor';
import Funds from './components/donation/Dashboard';
import DonationForm from './components/donation/Donate';
import MealDetails from './components/meal/MealDetails';
import Login from './components/common/login';
import Registration from './components/common/register';
import Search from './components/common/Search';
import TC from './components/common/Terms&Conditions';
import Admin from './components/users/Admin'
import Header from './components/common/Header';
import Footer from './components/common/Header'
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.css';
import Dashboard from './components/donation/Dashboard';

function App() {
  return (
    <Router>

       
        
      <Header/>

      <Routes>
         <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Registration/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/partner" element={<Partner/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/menudetails" element={<MealDetails/>}></Route>
        <Route path="/rider" element={<Rider/>}></Route>
        <Route path="/donate" element={<DonationForm/>}></Route>
        <Route path="/donors" element={<Donor/>}></Route>
        <Route path="/funds" element={<Funds/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
        <Route path="/location" element={<Location/>}></Route>
        <Route path="/tc" element={<TC/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
      </Routes>

      <Footer></Footer>
     





      </Router>



  );
}

export default App;
