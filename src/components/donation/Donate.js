import React, { useState } from 'react';
import '../../assets/css/donor.css';

const Donation = () => {
  const [donationValue, setDonationValue] = useState('0.00');
  const [activeItem, setActiveItem] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleDonationChange = (e) => {
    const inputValue = e.target.value;
    setDonationValue(inputValue);
  };

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmitForm = () => {
    const message =
      'Name: ' +
      firstName +
      ' ' +
      lastName +
      '\nEmail: ' +
      email +
      '\nDonation Amount: $' +
      donationValue +
      '.00';

    alert(message);
  };

  return (
    <div className="donation">
      <img
        src="https://www.shape.com/thmb/JcrbGc202pJKNYGnOhlvfakghCg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/The-Beginners-Guide-to-Bodybuilding-Meal-Prep-And-Nutrition-GettyImages-1165063882-2000-8af6829097be497bb01570172859fa61.jpg"
        width="130px"
        alt="Food"
        style={{ verticalAlign: 'middle', marginRight: '10px', float: 'left' }}
      />
      <br />
      <p style={{ color: 'black', fontSize: '15px', lineHeight: '0px' }}>
        You're supporting <b>Merry Meal</b>
      </p>
      <p style={{ color: 'gray', fontSize: '15px' }}>
        This will benefit the <b>Meals on Wheels</b> program.
      </p>
      <br />
      <label htmlFor="donation-input">Enter donation amount:</label>
      <input
        type="text"
        id="donation-input"
        onChange={handleDonationChange}
        value={donationValue}
        required
        maxLength="5"
        autoComplete="off"
        inputMode="numeric"
        style={{ textAlign: 'left' }}
      />
      <p style={{ color: 'gray' }}>
        The funds raised will be directly utilized to source fresh ingredients, maintain food safety standards, and ensure
        timely delivery of hot nourishing meals to qualified adults.
      </p>
      <hr />
      <br />
      <b>Payment method</b>
      <body>
        <div className="container mt-2">
          <div className="accordion" id="accordionExample">
            <div className={`accordion-item${activeItem === 0 ? ' active' : ''}`}>
              <h2 className="accordion-header" id="paypal-heading">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#paypal-content"
                  aria-expanded={activeItem === 0 ? 'true' : 'false'}
                  aria-controls="paypal-content"
                  onClick={() => handleItemClick(0)}
                >
                  <img
                                        src="https://img.freepik.com/free-icon/paypal-logo_76823-2150.jpg?size=338c&ext=jpg"
                                        alt="PayPal"
                                        width="30px"
                                        style={{ marginRight: '10px', verticalAlign: 'middle' }}
                                      />
                                      PayPal
                                    </button>
                                  </h2>
                                  <div
                                    id="paypal-content"
                                    className={`accordion-collapse collapse${activeItem === 0 ? ' show' : ''}`}
                                    aria-labelledby="paypal-heading"
                                    data-bs-parent="#accordionExample"
                                  >
                                    <div className="accordion-body">
                                      <p>Make a secure donation via PayPal.</p>
                                    </div>
                                  </div>
                                </div>
                                <div className={`accordion-item${activeItem === 1 ? ' active' : ''}`}>
                                  <h2 className="accordion-header" id="credit-card-heading">
                                    <button
                                      className="accordion-button"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#credit-card-content"
                                      aria-expanded={activeItem === 1 ? 'true' : 'false'}
                                      aria-controls="credit-card-content"
                                      onClick={() => handleItemClick(1)}
                                    >
                                      <img
                                        src="https://img.icons8.com/color/452/credit-card.png"
                                        alt="Credit Card"
                                        width="30px"
                                        style={{ marginRight: '10px', verticalAlign: 'middle' }}
                                      />
                                      Credit Card
                                    </button>
                                  </h2>
                                  <div
                                    id="credit-card-content"
                                    className={`accordion-collapse collapse${activeItem === 1 ? ' show' : ''}`}
                                    aria-labelledby="credit-card-heading"
                                    data-bs-parent="#accordionExample"
                                  >
                                    <div className="accordion-body">
                                      <p>Make a secure donation using your credit card.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </body>
                          <hr />
                          <br />
                          <b>Personal Information</b>
                          <form>
                            <div className="form-group mt-2">
                              <label htmlFor="first-name">First Name:</label>
                              <input
                                type="text"
                                id="first-name"
                                value={firstName}
                                onChange={handleFirstNameChange}
                                required
                                autoComplete="off"
                                style={{ textAlign: 'left' }}
                              />
                            </div>
                            <div className="form-group mt-2">
                              <label htmlFor="last-name">Last Name:</label>
                              <input
                                type="text"
                                id="last-name"
                                value={lastName}
                                onChange={handleLastNameChange}
                                required
                                autoComplete="off"
                                style={{ textAlign: 'left' }}
                              />
                            </div>
                            <div className="form-group mt-2">
                              <label htmlFor="email">Email:</label>
                              <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                                autoComplete="off"
                                style={{ textAlign: 'left' }}
                              />
                            </div>
                          </form>
                          <br />
                          <button className="btn btn-primary" onClick={handleSubmitForm}>
                            Donate Now
                          </button>
                        </div>
                      );
                    };
                    
                    export default Donation;
                    