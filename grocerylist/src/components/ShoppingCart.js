import React from "react"
import ListCart from "./ListCart"

function ShoppingCart(props) {
    return (
        <div>
            <ListCart data={props.data} />
            <button type="button" onClick={() => props.emptyCart()}>Empty Cart</button>
        </div>
    )
}


export default ShoppingCart