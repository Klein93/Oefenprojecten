import React from "react"

function CountryDisplay(props) {

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
                <img alt="" src={props.flagurl}></img>
            </div>
            <div>
                <h3>{props.countryName}</h3>
                <div>{props.population}</div>
                <div>{props.region}</div>
                <div>{props.capital}</div>
            </div>
        </div>
    )
}

export default CountryDisplay