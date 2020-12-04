import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import fire from 'firebase';

const handleLogout = () => {
  fire.auth().signOut();
};
const Home = () => {

    return(
        <section className="hero">
          <Router>
            <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootStrap.Navbar.Brand href="#home">Admin</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    <button className="button" onClick={handleLogout}>Log out</button>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
<label className="label justify-content-center">SELAMAT DATANG</label>
</Router>
        </section>
    )
}

export default Home;
