import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./Products.module.css";
import dish1 from "../../assets/image/brocolli (1).jpg";
import dish2 from "../../assets/image/tomato (2).jpeg";
import dish3 from "../../assets/image/beans (1).png";
import dish4 from "../../assets/image/ladies finger (1).jpg";
import dish5 from "../../assets/image/potato (1).jpg";
import dish6 from "../../assets/image/brinjal (1).jpg";
import ProductContent from "../SectionComponents/ProductContent";

//Data objects to be used in the HeroThree section for rendering dishes information
const dummyListone = [
  {
    id: "d1",
    src: dish1,
    name: "Brocolli",
    price: 120,
  },

  {
    id: "d2",
    src: dish2,
    name: "Tomato",
    price: 60,
  },

  {
    id: "d3",
    src: dish3,
    name: "Beans",
    price: 55,
  },
];

const dummyListtwo = [
  {
    id: "d4",
    src: dish4,
    name: "Ladies Finger",
    price: 75,
  },

  {
    id: "d5",
    src: dish5,
    name: "Potato",
    price: 86,
  },

  {
    id: "d6",
    src: dish6,
    name: "Brinjal",
    price: 40,
  },
];
//END

const Products = () => {
  //Mapping the data from the object above and storing them in a variable
  const dishList1 = dummyListone.map((dish) => (
    <Col lg={4} className={classes.dish_col}>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-duration="700"
      >
        <ProductContent
          key={dish.id}
          id={dish.id}
          name={dish.name}
          src={dish.src}
          price={dish.price}
        />
      </div>
      
    </Col>
  ));

  const dishList2 = dummyListtwo.map((dish) => (
    <Col lg={4} className={classes.dish_col}>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-duration="700"
      >
        <ProductContent
          key={dish.id}
          id={dish.id}
          name={dish.name}
          src={dish.src}
          price={dish.price}
        />
      </div>
    </Col>


  ));


  //Rendering the Hero Three section
  return (
    <section id="dishes">
      <Container>
        <Row
          className={`${classes.row} mx-auto`}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Our daily Vegetables</h2>
              <p>Check out recommended vegetables of your choice</p>
            </div>
          </Col>
        </Row>

        <Row className={classes.row_dish}>{dishList1}</Row>

        <Row className={classes.row_dish}>{dishList2}</Row>
      </Container>
      <hr/>
    </section>
  );

};

export default Products;
