import React from "react"
import CountryDisplay from "./CountryDisplay"

function CountryDisplays(props) {
    const countrydisplays = props.countries.map(country =>
        // <div>{country.name}</div>
        <CountryDisplay key={country.id} countryName={country.name} population={country.population}
            region={country.region} capital={country.capital} flagurl={country.flag} />


    )

    return (
        <div>
            {countrydisplays}
        </div>
    )

}

export default CountryDisplays