import React, {useState}from "react";
import NavCartButton from "./NavCartButton";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";
import classes from "./TheNavbar.module.css";
import UserLogo from "./UserForm/UserLogo";
import LoginPage from './UserForm/index';
import Logo from '../../assets/image/grocery-mart.jpg'



const TheNavbar = (props) => {

  const [showLogin, setShowLogin] = useState(false);

  const handleUserLogoClick = () => {
    setShowLogin(!showLogin);
  };
  //Layout and structure of the navbar to be passed to THENAV component
  return (
    <>
      <Navbar
        expand="xl"
        className={`${classes.navbar} fixed-top`}
        data-aos="fade-down"
        data-aos-easing="ease-out"
        data-aos-duration="2000"
      >
        <Navbar.Brand className={classes.navbar_brand}>
          <Link className={classes.main_head}  to="hero" spy={true} smooth={true} offset={-50} duration={500}>
            <p className={classes.head}>PS4</p>
            <img src={Logo} alt="My logo" className={classes.logo_image}></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={classes.toggle}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${classes.nav__linkgroup} ms-auto`}>
            <Nav.Link
              className={`${classes.nav__link} ${classes.firstnav__link} me-4`}
            >
              <Link
                activeClass={classes.active}
                to="hero"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className={`${classes.nav__link} me-4`}>
              <Link
                activeClass={classes.active}
                to="why"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Why choose us
              </Link>
            </Nav.Link>
            <Nav.Link className={`${classes.nav__link} me-4`}>
              <Link
                activeClass={classes.active}
                to="dishes"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Products
              </Link>
            </Nav.Link>
            <Nav.Link className={`${classes.nav__link} me-4`}>
              <Link
                activeClass={classes.active}
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                About us
              </Link>
            </Nav.Link>
            <Nav.Link href="#buttons" className={`${classes.nav__link}`}>
              <NavCartButton onClick={props.onShowCart} />
            </Nav.Link>
           
           <Link to="login">
           
            <UserLogo onClick={handleUserLogoClick} />
           </Link>
              

          
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {showLogin && <LoginPage onClose={() => setShowLogin(false)} />}
    </>
  );
  //ENDS
};

export default TheNavbar;
