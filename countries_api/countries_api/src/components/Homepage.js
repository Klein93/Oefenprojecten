import React from "react"
import Heading from "./Heading"
import Inputfield from "./Inputfield"
import CountryDisplays from "./CountryDisplays"




class Homepage extends React.Component {
    constructor(props) {
        super()
        this.state = {
            data: []
        }
        this.getAllCountryData = this.getAllCountryData.bind(this);
        this.searchCountryByName = this.searchCountryByName.bind(this);
        this.filterCountriesByRegion = this.filterCountriesByRegion.bind(this);
    }

    getAllCountryData = async function () {
        const url = "https://restcountries.eu/rest/v2/all";

        try {
            let result = await fetch(url, { method: "GET" })
            let countrydata = result.json()
            return countrydata
        } catch (error) {
            console.log(error)
        }

    }

    filterCountriesByRegion = async function (input) {
        let allData = await this.getAllCountryData();
        let filteredByRegion = allData.filter(country =>
            country.region === input
        )
        this.setState({
            data: filteredByRegion
        })
    }

    componentDidMount = async function () {
        let allData = await this.getAllCountryData()
        this.setState({
            data: allData
        })

    }

    searchCountryByName = async function (inputname) {
        let inputAsArray = inputname.split("");
        let uppercased = inputAsArray[0].toUpperCase();
        inputAsArray.shift();
        inputAsArray.unshift(uppercased);
        let newString = inputAsArray.join("");
        let allData = await this.getAllCountryData()
        let foundCountry = allData.filter(country =>
            country.name === newString
        )
        this.setState({ data: foundCountry })
    }

    render() {

        return (
            <div>
                <Heading moonimg={this.props.moonimg} />
                <Inputfield searchCountryByName={this.searchCountryByName} />
                <CountryDisplays countries={this.state.data} />
                {/* <h3>country info ul</h3> */}
            </div>
        )
    }
}

export default Homepage