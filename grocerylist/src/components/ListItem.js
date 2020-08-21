import React from "react"
import { Container, Row, Col } from "react-bootstrap";

function ListItem(props) {

    return (
        <Container>
            <Row>
                <Col className="column" lg={6}>
                    <div
                        className={props.checked ? "striped" : ""}
                        onClick={() => props.addItemtoShoppingList(props.title)}
                    >{props.title}</div>
                </Col>
                <Col className="column" lg={6}>
                    <div>
                        <button type="button" className="checkbutton" onClick={() => props.makeGroceryChecked(props.id)} style={{ backgroundImage: `url(${props.checked ? props.plusImg : props.checkImg})`, backgroundRepeat: "no-repeat" }}></button>
                    </div>
                </Col>
            </Row>

        </Container>

    )

}
export default ListItem

