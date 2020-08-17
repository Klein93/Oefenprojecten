import React from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
//import logo from "./images/bg-pattern-intro-left-desktop.svg";
import { Navbar, Card, Nav, Image, Jumbotron, Button, Container, Row, Col } from "react-bootstrap";
import snappyProcessImage from "./images/icon-snappy-process.svg";
import affordablePricesImage from "./images/icon-affordable-prices.svg";
import peopleFirstImage from "./images/icon-people-first.svg";
import cardBackground from "./images/bg-pattern-how-we-work-desktop.svg";
import familyImage from "./images/image-intro-desktop.jpg";
import introRight from "./images/bg-pattern-intro-right-desktop.svg";
import introLeft from "./images/bg-pattern-intro-left-desktop.svg";
import facebookIcon from "./images/icon-facebook.svg";
import instagramIcon from "./images/icon-instagram.svg";
import twitterIcon from "./images/icon-twitter.svg";
import pinterestIcon from "./images/icon-pinterest.svg";
import footerImg from "./images/bg-pattern-footer-desktop.svg";
import { Link } from 'react-router-dom';


function App() {
  return (
    <div style={{ position: "relative" }}>
      <img src={introLeft} className="introImgLeft" style={{ position: "absolute" }}></img>
      <img src={familyImage} className="familyImg" style={{ position: "absolute" }}></img>

      <Navbar collapseOnSelect expand="lg" >
        <Navbar.Brand style={{ color: "#300c3a", fontSize: "x-large", fontWeight: "850", paddingLeft: "60px" }}>INSURE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">

          </Nav>
          <Nav >
            <Nav.Link href="#howwework" className="link">How we Work</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#account">Account</Nav.Link>
            <Nav.Link href="viewplans">View Plans</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <img src={introRight} className="introImgRight" style={{ position: "absolute", marginLeft: "65%" }}></img>
      <Jumbotron fluid style={{ backgroundColor: "#300c3a", color: "white" }}>

        <Container>

          <Row>
            <Col lg={6}><h1>Humanizing your insurance</h1></Col>
          </Row>
          <Row>
            <Col lg={6}><p>
              Get your life insurance coverage easier and faster.We blend our expertise
              and technology to help you find the plan that’s right for you.Ensure you
              and your loved ones are protected.
  </p></Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Button variant="outline-light" >View Plans</Button>{''}
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Jumbotron fluid style={{ backgroundColor: "white", color: "#300c3a" }}>
        <Container>
          <Row>
            <Col className="column" lg={6}><h1>We're different</h1></Col>
          </Row>
          <Row>
            <Col className="column" lg={4}>
              <Image className="icon" src={snappyProcessImage} rounded />
              <h4>Snappy process</h4>
              <p>
                Our application process can be completed in minutes, not hours.
                Don’t get stuck filling in tedious forms.
              </p>
            </Col>
            <Col className="column" lg={4}>
              <Image className="icon" src={affordablePricesImage} rounded />
              <h4>Affordable Prices</h4>
              <p>We don’t want you worrying about high monthly costs.
              Our prices may be low,
                but we still offer the best coverage possible.</p>
            </Col>
            <Col className="column" lg={4}>
              <Image className="icon" src={peopleFirstImage} rounded />
              <h4>People First</h4>
              <p>
                Our plans aren’t full of conditions and clauses to prevent payouts.
                We make sure you’re covered when you need it.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card style={{ backgroundColor: "#300c3a", backgroundImage: `url(${cardBackground})`, backgroundRepeat: "no-repeat", backgroundPosition: "right" }}>
                <Card.Body>
                  <Row>
                    <Col lg={4}>
                      <Card.Text style={{ color: "white" }}>
                        <h2>Find out more about how we work</h2>
                      </Card.Text>
                    </Col>
                    <Col lg={6}></Col>
                    <Col lg={2} style={{ paddingTop: "2%", paddingBottom: "2%" }} >

                      <Button variant="outline-light">How we Work</Button>{''}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Jumbotron style={{ backgroundColor: "#f2f2f2", backgroundImage: `url(${footerImg})`, backgroundRepeat: "no-repeat", backgroundPosition: "left top" }}>
        <Container>
          <Row>
            <Col lg={3} style={{ color: "#300c3a", fontSize: "x-large", fontWeight: "850" }}>INSURE
    </Col>
            <Col lg={6}></Col>
            <Col lg={3}>
              <Row>
                <Col><img src={facebookIcon}></img></Col>
                <Col><img src={twitterIcon}></img></Col>
                <Col><img src={pinterestIcon}></img></Col>
                <Col><img src={instagramIcon}></img></Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
              <div style={{ paddingTop: "5%", paddingBottom: "2%" }}>
                <h5 className="footerHeading" >Our company</h5>
              </div>
              <div className="footerText">
                <p><a href="#" className="footerLink">How we work</a></p>
                <p><a href="#" className="footerLink">Why Insure ?</a></p>
                <p><a href="#" className="footerLink">View Plans</a></p>
                <p><a href="#" className="footerLink">Reviews</a></p>
              </div>
            </Col>
            <Col lg={3}>
              <div style={{ paddingTop: "5%", paddingBottom: "2%" }}>
                <h5 className="footerHeading" >Help me</h5>
              </div>
              <div className="footerText">
                <p><a href="#" className="footerLink" >FAQ</a></p>
                <p><a href="#" className="footerLink" >Terms of use</a></p>
                <p><a href="#" className="footerLink" >Privacy policy</a></p>
                <p><a href="#" className="footerLink" >Cookies</a></p>
              </div>
            </Col>
            <Col lg={3}>
              <div style={{ paddingTop: "5%", paddingBottom: "2%" }}>
                <h5 className="footerHeading" >Contact</h5>
              </div>
              <div className="footerText">
                <p><a href="#" className="footerLink" >Sales</a></p>
                <p><a href="#" className="footerLink" >Support</a></p>
                <p><a href="#" className="footerLink" >Live chat</a></p>
              </div>
            </Col>
            <Col lg={3}>
              <div style={{ paddingTop: "5%", paddingBottom: "2%" }}>
                <h5 className="footerHeading" >Others</h5>
              </div>
              <div className="footerText">
                <p><a href="#" className="footerLink" >Careers</a></p>
                <p><a href="#" className="footerLink"> Press</a></p>
                <p><a href="#" className="footerLink" >Licenses</a></p>
              </div>
            </Col>
          </Row>
        </Container>

      </Jumbotron>

    </div >

    //     < div class="attribution" >
    //       Challenge by < a href="https://www.frontendmentor.io?ref=challenge" target="_blank" > Frontend Mentor</a >.
    //   Coded by < a href="#" > Your Name Here</a >.
    //   </div >
    //     </div >

  );
}

export default App;
