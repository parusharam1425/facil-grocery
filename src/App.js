import React, { useState } from "react";

import {Routes,Route} from 'react-router-dom'
// import TheNav from "./components/Header/TheNav";
// import Sections from "./components/Sections/Sections";
// import Cart from "./components/Cart/Cart";
// import CartProvider from "./components/store/CartProvider";
// import TheFooter from "./components/Footer/TheFooter";
import Swal from "sweetalert2";
import Payment from "./components/Payment/Payment";
import PopUp from "./components/Payment/Popup/Popup";


const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  //Managing the state of the cart component using useState
  const onShowCartHandler = () => {
    setCartIsShown(true);
  };

  const onCloseCartHandler = () => {
    setCartIsShown(false);
    
  };
  // //END

  //EVent to occur on Order
  const onOrderHandler = () => {
    setCartIsShown(false);

    Swal.fire({
      title: "Successful!",
      text: "Your order is on the way",
      icon: "success",
    });
  };

  //END

  //Rendering the cart and all the sections
  return (
      <>
    {/* <CartProvider>
      {cartIsShown && (
        <Cart onCloseCart={onCloseCartHandler} onOrder={onOrderHandler} />
      )}
      <TheNav onShowCart={onShowCartHandler} />
      <Sections />
      <TheFooter />
    </CartProvider> */}
    <Routes>
      <Route path='/popup' element={<PopUp/>}/>
    </Routes>

<Payment />

    </>
  );
  //END
};

export default App;
