import React from "react"
import List from "./List"
//import Inputfield from "./Inputfield"


function GroceryList(props) {

    return (
        <div>

            <List data={props.data} addItemtoShoppingList={props.addItemtoShoppingList} makeGroceryChecked={props.makeGroceryChecked} plusImg={props.plusImg} checkImg={props.checkImg} />
        </div>
    )
}

export default GroceryList