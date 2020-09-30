import React from "react"
import Heading from "./Heading"
import Inputfield from "./Inputfield"

function Homepage(props) {
    return (
        <div>
            <Heading moonimg={props.moonimg} />
            <Inputfield />
            <h3>filter by region</h3>
            <h3>country info ul</h3>
        </div>
    )
}

export default Homepage