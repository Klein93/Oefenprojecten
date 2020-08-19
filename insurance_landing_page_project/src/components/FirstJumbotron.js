import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";

function FirstJumbotron() {
    return (
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
    )
}

export default FirstJumbotron