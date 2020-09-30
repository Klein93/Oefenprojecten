import React from "react"


class Inputfield extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>img/button</div>
                <input type="input" placeholder="Search for a country" size="50"
                    style={{ height: "45px" }}></input>

            </div>
        )
    }
}

export default Inputfield