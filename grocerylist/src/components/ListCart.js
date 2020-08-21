import React from "react"
import ListItemCart from "./ListItemCart"

function ListCart(props) {
    const listItems = props.data.map(item =>
        //console.log(item))
        <ListItemCart key={item.id} title={item.title} amount={item.amount} />)

    return (
        <ul>
            {listItems}
        </ul>
    )
}


export default ListCart