import React, { useState } from 'react';
import closeimg from '../../../assets/Payment/close.jpg';
import visa from '../../../assets/Payment/visa.jpg';
import mastercard from '../../../assets/Payment/master.jpg';
import americanexpress from '../../../assets/Payment/american.jpg';
import bajaj from '../../../assets/Payment/bajaj.jpg';
import rupay from '../../../assets/Payment/rupay.jpg';
import './Popup.css'
const PopUp = () => {
  const [isPopupOpen, setPopupOpen] = useState(true);

  const [cardData, setCardData] = useState({
    cardNumber: '',
    nickname: '',
    expiryMonth: '',
    expiryYear: '',
  });

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const handleEnterCardDetails = () => {
    localStorage.setItem('cardData', JSON.stringify(cardData));
    setPopupOpen(false);
  };

  const handleInputChange = (e, field) => {
    setCardData({
      ...cardData,
      [field]: e.target.value,
    });
  };

  return (
    <>
      {isPopupOpen && (
        <div className='container'>

        
        <div className="card_container">
          <div className="card_header">
            <h1 style={{fontSize:"20px", fontWeight:"600"}}>Enter card details</h1>
            <img src={closeimg} alt='' className="close_img" onClick={handleClosePopup} />
          </div>
          <div className='row'>
            <div className="col-12 col-md-6 col1">
              <div className="input_div">
                <label className='label'>Card number</label>
                <input
                  type='number'
                  className="popup_input_card popup_input"
                  onChange={(e) => handleInputChange(e, 'cardNumber')}
                />
              </div>
              <div className="inputDiv inputDiv2">
                <label className='label'>Nickname</label>
                <input
                  type='text'
                  className="popup_input_nick popup_input"
                  onChange={(e) => handleInputChange(e, 'nickname')}
                />
              </div>
              <div className="popup_input_date">
                <label className='label'>Expiry date</label>
                
                <input
                  type='number'
                  className="date"
                  onChange={(e) => handleInputChange(e, 'expiryMonth')}
                />
                <input
                  type='number'
                  className="date"
                  onChange={(e) => handleInputChange(e, 'expiryYear')}
                />
              </div>
            </div>
            
              <div className='col-12 col-md-6'>

              <p className='p-3'>Please ensure that you enable your card for online payments from your bank's app</p>
              <div className="cards_img">
                <img src={visa} alt='' />
                <img src={mastercard} alt='' />
                <img src={americanexpress} alt='' />
                <img src={bajaj} alt='' />
                <img src={rupay} alt='' />
              </div>
          </div>
          </div>
          <div className="card_footer">
            <button className='btn btn-danger ' onClick={handleClosePopup}>Cancel</button>
            <button className='btn btn-secondary' onClick={handleEnterCardDetails}>Enter card details</button>
          </div>
        </div>
        </div>
      )}
    </>
  );
}

export default PopUp;
