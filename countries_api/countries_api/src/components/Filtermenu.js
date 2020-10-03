import React from "react"
import FilterOption from "./FilterOption"

function Filtermenu(props) {

    let allRegions = [];
    let regionWithIds = [];
    props.countries.map(country => {

        if (!allRegions.includes(country.region) && (country.region !== "")) {

            allRegions.push(country.region)

        }
    })

    allRegions.map(item => {
        regionWithIds.push({
            region: item,
            id: regionWithIds.length + 1
        })
    })

    const filteroptions = regionWithIds.map(item =>
        <FilterOption region={item.region} key={item.id} />
    )

    return (
        <select onChange={props.filterRegions}>
            <option value="">--select region--</option>
            {filteroptions}
        </select>
    )
}

export default Filtermenu