import React, { useContext } from "react";
import classes from "./ProductContent.module.css";
import Count from "./Count";
import CartContext from "../store/cartcontext";

const ProductContent = (props) => {
  // Using useContext hooks
  const cartCtx = useContext(CartContext);

  //Converting prices to two decimal places

  const price = `₹ ${props.price.toFixed(2)}`;

  //Adding data values to be managed to the useContext
  const onAddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      src: props.src,
    });
  };
  //Layout and structure of the Hero three (Third section) content
  return (
    <div className={classes.dish_content}>
      <div className={classes.dish_image_div}>
        <img src={props.src} alt="Dish" style={{borderRadius:'50%'}} className="p-img" />
      </div>
      <div className={classes.dish_text_div}>
        <p>{props.name}</p>
      </div>
      <div className={classes.dish_price_div}>
        <p className="my-auto">{price}</p>
        <Count onAddToCart={onAddToCartHandler} />
      </div>
    </div>
  );
};

export default ProductContent;
