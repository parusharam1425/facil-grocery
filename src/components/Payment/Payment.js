import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import classes from './Payment.module.css'
import PopUp from './Popup/Popup';

const Payment = () => {
  const [Cards, setCards] = useState(false);
  const [showNetBanking, setShowNetBanking] = useState(false);
  const [upiApp, setupiApp] = useState(false)
  const handleRadioClick = (option) => {
    setShowNetBanking('')
    setupiApp('')
    setCards(option);

  };

  const handleNetBanking = () => {
    setupiApp('');
    setCards('');
    setShowNetBanking(true);
  };

  const handleUPI = () => {
    setCards('');
    setShowNetBanking('');
    setupiApp(true);

  }

  const handleCashOnDelivery = () => {
    setCards('')
    setShowNetBanking('')
    setupiApp('')
  }
  return (
    <>

      <div>
        <div className={classes.main_container}>
          <h1>
            Your avaliable score
          </h1>
          <hr />
          <div className={classes.input_container}>
            <input type='text' />
            <button className={classes.button}>Apply</button>
          </div>
          <h1>
            Another Payment Method
          </h1>
          <hr />

          <div className="form-check">
            <input
              className="form-check-input p-2"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onChange={() => handleRadioClick('creditDebit')}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Credit card or debit card
            </label>
          </div>

          {Cards === 'creditDebit' && (
            <div>
              <Link to='/popup'>
              
              <p htmlFor="additionalInfo"> + Enter Card Details </p>
              </Link>
             
            </div>
          )}
        

        {/* add some debit  or credit cards */}
        {/* <img /> */}

        <div className="form-check">
          <input
            className="form-check-input p-2"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            onChange={handleNetBanking}
          />
          <div style={{ marginLeft: '1.4rem' }}>
            <h1 style={{ fontSize: '12px' }}>Net Banking</h1>
            {showNetBanking && (
              <select className={classes.net_banking_options}>
                <option>Choose an option</option>
                <option>HDFC Bank</option>
                <option>Axix Bank</option>
                <option>ICICI Bank</option>
                <option>SBI Bank</option>
                <option>Andra Bank</option>
              </select>
            )}
          </div>
        </div>


        <div class="form-check">
          <input
            className="form-check-input p-2"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault3"
            onChange={handleUPI}
          />
          <label class="form-check-label" for="flexRadioDefault3">
            Other UPI Apps
          </label>
        </div>

        {upiApp && (
          <div>
            <p htmlFor="additionalInfo"> Please Enter your  UPI ID </p>
            <input type="text" id="additionalInfo" name="additionalInfo"
              placeholder='Enter UPI ID'
            />
            <button className={classes.button}>Verify</button>

          </div>
        )}


        <div class="form-check">
          <input class="form-check-input p-2" type="radio" name="flexRadioDefault" id="flexRadioDefault4"
            onChange={handleCashOnDelivery}
          />
          <label class="form-check-label" for="flexRadioDefault4">
            Cash on delivery/Pay on delivery
            <br></br>
            <p >Cash, UPI and Cards accepted. <span className={classes.span}>Know More</span></p>
          </label>

        </div>

      </div>
      </div>


    </>
  )
}

export default Payment