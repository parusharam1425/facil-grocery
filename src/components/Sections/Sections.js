import React from "react";
import Banner from "./Banner";
import Choose from "./Choose";
import Products from "./Products";
import AboutUs from "./AboutUs";
import MobileApp from "./MobileApp";
import Testimonal from "./Testimonal";
import Subscribe from "./Subscribe";


const Sections = () => {
  //Rendering every of the section components
  return (
    <main>
      <Banner />
      <Choose />
      <Products />
      <AboutUs />
      <MobileApp />
      <Testimonal />
      <Subscribe />
    </main>
  );
  //END
};

export default Sections;
