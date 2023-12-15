import React from 'react'
import classes from './Popup.module.css'
import closeimg from '../../../assets/Payment/close.jpg';
import visa from '../../../assets/Payment/visa.jpg';
import mastercard from '../../../assets/Payment/master.jpg';
import americanexpress from '../../../assets/Payment/american.jpg';
import bajaj from '../../../assets/Payment/bajaj.jpg';
import rupay from '../../../assets/Payment/rupay.jpg';
const PopUp = () => {
  return (
    <div className={classes.card_container}>
       <div className={classes.card_header}>
          <h1>Enter card details</h1>
          <img src={closeimg} alt='' className={classes.close_img}/>
       </div>
       <div className={classes.card_body}>

        <div className={classes.col1}>
            <div className={classes.input_div}>
            <label>Card number</label>
            <input type='number' className={classes.popup_input}/>
            </div>

            <div className={`${classes.inputDiv} ${classes.inputDiv2}`}>

             <label>Nickname</label>
             <input type='text' className={classes.popup_input}/>
            </div>
          
            <div className={classes.popup_input_date}>
              <label>Expiry date</label>
               <input type='number' className={classes.date} />
               <input type='number' className={classes.date} />
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
         <button>Cancel</button>
         <button>Enter card details</button>
       </div>
    </div>
  )
}

export default PopUp
