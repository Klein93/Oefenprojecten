import React from "react"

function CountryDisplay(props) {

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
                <img alt="" src={props.flagurl} style={{ height: "150px", width: "200px" }}></img>
            </div>
            <div>
                <h3>{props.countryName}</h3>
                <div>Population:{props.population}</div>
                <div>Region:{props.region}</div>
                <div>Capital:{props.capital}</div>
            </div>
        </div>
    )
}

export default CountryDisplay