import React from "react"
import GroceryList from "./GroceryList"
import ShoppingCart from "./ShoppingCart"
import { Container, Row, Col } from "react-bootstrap";
import Inputfield from "./Inputfield"


class Listcontainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            groceryItems: [
                { id: 1, title: "afwasmiddel", checked: false },
                { id: 2, title: "scheerschuim", checked: false },

            ],

            shoppingListItems: [

            ]
        }
        this.addGroceryItem = this.addGroceryItem.bind(this)
        this.addItemtoShoppingList = this.addItemtoShoppingList.bind(this)
        this.emptyCart = this.emptyCart.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
        this.makeGroceryChecked = this.makeGroceryChecked.bind(this)
    }

    submitHandler(event) {
        event.preventDefault();
    }

    addItemtoShoppingList(grocery) {
        const item = {
            id: this.state.shoppingListItems.length + 1,
            title: grocery,
            amount: 1
        };

        let currentShoppingcart = this.state.shoppingListItems;
        if (currentShoppingcart.filter(item => item.title === grocery).length > 0) {

            let newShoppingcart = currentShoppingcart.map(item => {
                if (item.title === grocery) {
                    return { id: item.id, title: item.title, amount: item.amount + 1 }
                } else {
                    return item
                }
            })

            this.setState({
                shoppingListItems: newShoppingcart
            })

        } else if (currentShoppingcart.filter(item => item.title === grocery).length === 0) {

            this.setState({
                shoppingListItems: this.state.shoppingListItems.concat(item)
            })
        }
    }

    emptyCart() {
        this.setState({
            shoppingListItems: []
        })
    }

    makeGroceryChecked(itemId) {
        let newGrocerylist = this.state.groceryItems.map((item) => {
            if (item.id == itemId) {
                return { id: item.id, title: item.title, checked: !item.checked }
            } else {
                return item
            }
        })
        this.setState({
            groceryItems: newGrocerylist
        })
    }


    addGroceryItem(grocery) {
        const item = {
            id: this.state.groceryItems.length + 1,
            title: grocery
        };
        this.setState({
            groceryItems: this.state.groceryItems.concat(item)
        });
    }
    render() {

        return (
            <Container>
                <Row>
                    <Col className="column" lg={6}><h2>GroceryList</h2></Col>
                    <Col className="column" lg={6}><h2>Shopping Cart</h2></Col>
                </Row>
                <Row>
                    <Col className="column" lg={6}>
                        <Inputfield onSubmit={this.addGroceryItem} submitHandler={this.submitHandler} />
                    </Col>
                </Row>
                <Row>
                    <Col className="column" lg={6}>
                        <GroceryList data={this.state.groceryItems}
                            addItemtoShoppingList={this.addItemtoShoppingList} makeGroceryChecked={this.makeGroceryChecked} plusImg={this.props.plusImg} checkImg={this.props.checkImg} />
                    </Col>
                    <ShoppingCart data={this.state.shoppingListItems} emptyCart={this.emptyCart} />

                    <Col className="column" lg={6}></Col>
                </Row>
                {/* <h2>GroceryList</h2>
                <GroceryList data={this.state.groceryItems} submitHandler={this.submitHandler} addGroceryItem={this.addGroceryItem}
                    addItemtoShoppingList={this.addItemtoShoppingList} makeGroceryChecked={this.makeGroceryChecked} plusImg={this.props.plusImg} checkImg={this.props.checkImg} />
                <h2>Shopping Cart</h2>
                <ShoppingCart data={this.state.shoppingListItems} emptyCart={this.emptyCart} /> */}

            </Container>
        )
    }
}
export default Listcontainer