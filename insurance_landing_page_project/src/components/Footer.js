import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

function Footer(props) {
    return (
        <Jumbotron style={{ backgroundColor: "#f2f2f2", backgroundImage: `url(${props.footerImg})`, backgroundRepeat: "no-repeat", backgroundPosition: "left top" }}>
            <Container>
                <Row>
                    <Col lg={3} style={{ color: "#300c3a", fontSize: "x-large", fontWeight: "850" }}>INSURE
    </Col>
                    <Col lg={6}></Col>
                    <Col lg={3}>
                        <Row>
                            <Col><img alt="" src={props.facebookIcon}></img></Col>
                            <Col><img alt="" src={props.twitterIcon}></img></Col>
                            <Col><img alt="" src={props.pinterestIcon}></img></Col>
                            <Col><img alt="" src={props.instagramIcon}></img></Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        <div style={{ paddingTop: "5%", paddingBottom: "2%" }}>
                            <h5 className="footerHeading" >Our company</h5>
                        </div>
                        <div className="footerText">
                            <p><a className="footerLink">How we work</a></p>
                            <p><a className="footerLink">Why Insure ?</a></p>
                            <p><a className="footerLink">View Plans</a></p>
                            <p><a className="footerLink">Reviews</a></p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div style={{ paddingTop: "5%", paddingBottom: "2%" }}>
                            <h5 className="footerHeading" >Help me</h5>
                        </div>
                        <div className="footerText">
                            <p><a className="footerLink" >FAQ</a></p>
                            <p><a className="footerLink" >Terms of use</a></p>
                            <p><a className="footerLink" >Privacy policy</a></p>
                            <p><a className="footerLink" >Cookies</a></p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div style={{ paddingTop: "5%", paddingBottom: "2%" }}>
                            <h5 className="footerHeading" >Contact</h5>
                        </div>
                        <div className="footerText">
                            <p><a className="footerLink" >Sales</a></p>
                            <p><a className="footerLink" >Support</a></p>
                            <p><a className="footerLink" >Live chat</a></p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div style={{ paddingTop: "5%", paddingBottom: "2%" }}>
                            <h5 className="footerHeading" >Others</h5>
                        </div>
                        <div className="footerText">
                            <p><a className="footerLink" >Careers</a></p>
                            <p><a className="footerLink"> Press</a></p>
                            <p><a className="footerLink" >Licenses</a></p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </Jumbotron>
    )
}

export default Footer