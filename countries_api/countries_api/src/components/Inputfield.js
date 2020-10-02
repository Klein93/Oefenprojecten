import React from "react"


class Inputfield extends React.Component {
    constructor(props) {
        super()
        this.state = {
            input: ""
        }
        this.changeInputState = this.changeInputState.bind(this)
        this.submitInput = this.submitInput.bind(this)
    }

    changeInputState(event) {
        this.setState({ input: event.target.value })
    }

    submitInput() {
        this.props.searchCountryByName(this.state.input)
        this.setState({ input: "" })
    }
    render() {
        return (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div><button onClick={this.submitInput}></button></div>
                <input type="text" value={this.state.input} onChange={this.changeInputState} placeholder="Search for a country" size="50"
                    style={{ height: "45px" }}></input>

            </div>
        )
    }
}

export default Inputfield