import React from "react"

class Inputfield extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ""
        }
        this.changeInput = this.changeInput.bind(this)
        this.submitChangedInput = this.submitChangedInput.bind(this)

    }

    changeInput(event) {
        this.setState({
            input: event.target.value
        })
    }
    submitChangedInput(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.input)
        this.setState({
            input: ""
        });
    };
    render() {
        return (
            <form onSubmit={this.submitChangedInput}>
                <input className="inputfield" type="text" onChange={this.changeInput} value={this.state.input}>
                </input>
                <input type="submit" value="Add grocery"></input>
            </form>

        )

    }

}
export default Inputfield