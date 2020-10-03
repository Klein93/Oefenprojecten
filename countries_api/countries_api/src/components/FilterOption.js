import React from "react"

function FilterOption(props) {



    return (
        <option value={props.region}>{props.region}</option>
    )
}

export default FilterOption