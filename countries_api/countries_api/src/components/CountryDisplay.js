import React from "react"
import { Link } from "react-router-dom"

function CountryDisplay(props) {

    return (
        <Link to="/singleCountry" >
            <div style={{ backgroundColor: "white", width: "250px" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img alt="" src={props.flagurl} style={{ height: "150px", width: "250px" }}></img>
                </div>
                <div>
                    <h3 style={{ display: "flex", justifyContent: "center" }}>{props.countryName}</h3>
                    <div style={{ display: "flex", justifyContent: "center" }}><div style={{ fontWeight: "bold" }}>Population:</div><div>{props.population}</div></div>
                    <div style={{ display: "flex", justifyContent: "center" }}><div style={{ fontWeight: "bold" }}>Region:</div><div>{props.region}</div></div>
                    <div style={{ display: "flex", justifyContent: "center" }}><div style={{ fontWeight: "bold" }}>Capital:</div><div>{props.capital}</div></div>
                </div>
            </div>
        </Link>
    )
}

export default CountryDisplay