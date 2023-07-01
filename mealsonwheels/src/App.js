import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './component/users/login/login';
import Register from './component/users/register/register';
import TermsAndConditions from './component/T&C/Terms&Conditions';
import Header from './component/common/header';
import Footer from './component/common/footer';
class App extends Component {
  render() {
    return (
      <div className="App">
<Router>
  <Routes>
  <Route exact path="/login" element={<Login/>} />
  <Route exact path="/register" element={<Register/>} />
  {/* <Route exact path="/termsandconditions" element={<TermsAndConditions/>} /> */}
  </Routes>
  {/* <Header/> */}
  <Routes>
  <Route exact path="/termsandconditions" element={<TermsAndConditions/>} />
  </Routes>
  {/* <Footer/> */}
</Router>
      </div>
    );
  }
}

export default App;
