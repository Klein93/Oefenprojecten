
import React from "react"


function Heading(props) {
    return (
        <div className="heading">
            <div style={{ fontWeight: "bold", paddingLeft: "10px" }} className="headingText">Where in the world?</div>
            <div style={{ width: "100px", paddingRight: "10px", display: "flex", justifyContent: "space-between" }}>
                <div><img alt="" src={props.moonimg}></img></div>
                <div>Dark Mode</div>
            </div>

        </div>
    )
}

export default Heading