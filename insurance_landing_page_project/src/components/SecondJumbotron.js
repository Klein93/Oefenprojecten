import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Image, Jumbotron, Button, Container, Row, Col } from "react-bootstrap";

function SecondJumbotron(props) {
    return (
        <Jumbotron fluid style={{ backgroundColor: "white", color: "#300c3a" }}>
            <Container>
                <Row>
                    <Col className="column" lg={6}><h1>We're different</h1></Col>
                </Row>
                <Row>
                    <Col className="column" lg={4}>
                        <Image className="icon" src={props.snappyProcessImage} rounded />
                        <h4>Snappy process</h4>
                        <p>
                            Our application process can be completed in minutes, not hours.
                            Don’t get stuck filling in tedious forms.
              </p>
                    </Col>
                    <Col className="column" lg={4}>
                        <Image className="icon" src={props.affordablePricesImage} rounded />
                        <h4>Affordable Prices</h4>
                        <p>We don’t want you worrying about high monthly costs.
                        Our prices may be low,
                but we still offer the best coverage possible.</p>
                    </Col>
                    <Col className="column" lg={4}>
                        <Image className="icon" src={props.peopleFirstImage} rounded />
                        <h4>People First</h4>
                        <p>
                            Our plans aren’t full of conditions and clauses to prevent payouts.
                            We make sure you’re covered when you need it.
              </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card style={{ backgroundColor: "#300c3a", backgroundImage: `url(${props.cardBackground})`, backgroundRepeat: "no-repeat", backgroundPosition: "right" }}>
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
    )
}
export default SecondJumbotron