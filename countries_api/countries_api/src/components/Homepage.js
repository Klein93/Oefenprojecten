import React from "react"
import Heading from "./Heading"
import Inputfield from "./Inputfield"
import CountryDisplays from "./CountryDisplays"
import Filtermenu from "./Filtermenu"

class Homepage extends React.Component {
    constructor(props) {
        super()
        this.state = {
            data: [],
            selectedCountries: []
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

    filterCountriesByRegion = function (event) {

        let filteredByRegion = this.state.data.filter(country =>
            country.region === event.target.value
        )
        this.setState({
            selectedCountries: filteredByRegion
        })
    }

    componentDidMount = async function () {
        let allData = await this.getAllCountryData()
        let i;
        for (i = 0; i < allData.length; i++) {
            allData[i].id = i + 1

        }

        this.setState({
            data: allData,
            selectedCountries: allData
        })

    }

    searchCountryByName = function (inputname) {

        let inputAsArray = inputname.split("");
        let uppercased = inputAsArray[0].toUpperCase();
        inputAsArray.shift();
        inputAsArray.unshift(uppercased);
        let newString = inputAsArray.join("");
        let allData = this.state.data;
        let foundCountry = allData.filter(country =>
            country.name === newString
        )
        console.log(foundCountry)
        this.setState({ selectedCountries: foundCountry })
    }

    render() {

        return (
            <div >
                <Heading moonimg={this.props.moonimg} />
                <Inputfield searchCountryByName={this.searchCountryByName} lupeimg={this.props.lupeimg} />
                <Filtermenu countries={this.state.data} filterRegions={this.filterCountriesByRegion} />
                <CountryDisplays countries={this.state.selectedCountries} />

            </div>
        )
    }
}

export default Homepage