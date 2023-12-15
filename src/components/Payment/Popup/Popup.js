import React, { useState } from 'react'
import classes from './Popup.module.css'
import closeimg from '../../../assets/Payment/close.jpg';
import visa from '../../../assets/Payment/visa.jpg';
import mastercard from '../../../assets/Payment/master.jpg';
import americanexpress from '../../../assets/Payment/american.jpg';
import bajaj from '../../../assets/Payment/bajaj.jpg';
import rupay from '../../../assets/Payment/rupay.jpg';
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
    // Store data in local storage
    localStorage.setItem('cardData', JSON.stringify(cardData));
    // Optionally, you can also close the popup here
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
        <div className={classes.card_container}>
          <div className={classes.card_header}>
            <h1>Enter card details</h1>
            <img src={closeimg} alt='' className={classes.close_img} onClick={handleClosePopup} />
          </div>
          <div className={classes.card_body}>

          <div className={classes.col1}>
              <div className={classes.input_div}>
                <label>Card number</label>
                <input
                  type='number'
                  className={classes.popup_input}
                  onChange={(e) => handleInputChange(e, 'cardNumber')}
                />
              </div>

              <div className={`${classes.inputDiv} ${classes.inputDiv2}`}>
                <label>Nickname</label>
                <input
                  type='text'
                  className={classes.popup_input}
                  onChange={(e) => handleInputChange(e, 'nickname')}
                />
              </div>

              <div className={classes.popup_input_date}>
                <label>Expiry date</label>
                <input
                  type='number'
                  className={classes.date}
                  onChange={(e) => handleInputChange(e, 'expiryMonth')}
                />
                <input
                  type='number'
                  className={classes.date}
                  onChange={(e) => handleInputChange(e, 'expiryYear')}
                />
              </div>
        </div>

            <div className={classes.col2}>
              <p>Please ensure that you enable your card
                for online payments from your bank's app
              </p>
              <div className={classes.cards_img}>
                <img src={visa} alt='' />
                <img src={mastercard} alt='' />
                <img src={americanexpress} alt='' />
                <img src={bajaj} alt='' />
                <img src={rupay} alt='' />
              </div>
            </div>

          </div>
          <div className={classes.card_footer}>
            <button onClick={handleClosePopup}>Cancel</button>
            <button onClick={handleEnterCardDetails}>Enter card details</button>

          </div>
        </div>
      )}

    </>
  )
}

export default PopUp
