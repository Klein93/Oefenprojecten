import React from 'react';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
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
import Navigation from "./components/Navigation";
import FirstJumbotron from "./components/FirstJumbotron";
import SecondJumbotron from "./components/SecondJumbotron";
import Footer from "./components/Footer";



function App() {
  return (
    <div style={{ position: "relative" }}>
      <img alt="" src={introLeft} className="introImgLeft" style={{ position: "absolute" }}></img>
      <img alt="" src={familyImage} className="familyImg" style={{ position: "absolute" }}></img>
      <Navigation />
      <img alt="" src={introRight} className="introImgRight" style={{ position: "absolute", marginLeft: "65%" }}></img>
      <FirstJumbotron />
      <SecondJumbotron snappyProcessImage={snappyProcessImage} affordablePricesImage={affordablePricesImage} peopleFirstImage={peopleFirstImage} cardBackground={cardBackground} />
      <Footer footerImg={footerImg} pinterestIcon={pinterestIcon} twitterIcon={twitterIcon} instagramIcon={instagramIcon} facebookIcon={facebookIcon} />
    </div >

  );
}

export default App;
