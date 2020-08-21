import React from "react"

function ListItemCart(props) {
    return (
        <li
            value={props.title}
        >{props.title} {props.amount}
        </li>

    )
}


export default ListItemCart