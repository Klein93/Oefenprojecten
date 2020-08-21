import React from "react"
import ListItem from "./ListItem"



function List(props) {
    const listItems = props.data.map(item =>
        <ListItem key={item.id} id={item.id} title={item.title} makeGroceryChecked={props.makeGroceryChecked} checked={item.checked} addItemtoShoppingList={props.addItemtoShoppingList} plusImg={props.plusImg} checkImg={props.checkImg} />)

    return (
        <ul>
            {listItems}
        </ul>
    )
}



export default List