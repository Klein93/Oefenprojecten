import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

class Weatherdisplay extends React.Component {
    constructor() {
        super();

        this.state = {


        };
        this.convertTimestamp = this.convertTimestamp.bind(this)
    }

    convertTimestamp = (timestamp) => {
        let date = new Date(timestamp * 1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let seconds = "0" + date.getSeconds();
        let displayedTime = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
        return displayedTime
    };

    componentDidMount() {

        fetch("https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=metric")

            .then(response => response.json())
            .then(res => this.setState({
                country: res.sys.country,
                time: this.convertTimestamp(res.dt),
                weather: res.weather[0].main,
                weatherdescription: res.weather[0].description,
                temperature: res.main.temp,
                feelsLike: res.main.feels_like,
                minTemp: res.main.temp_min,
                maxTemp: res.main.temp_max,
                weathericonID: res.weather[0].icon,
                windspeed: res.wind.speed
            }))

    };
    render() {
        return (
            <Container>
                <Row>
                    <Col className="column" xs={12}>
                        <h1>{this.state.country}</h1>
                        <h1>{this.state.time}</h1>
                    </Col>
                </Row>

                <div className="weatherHeadline">
                    <h1>{this.state.weather}</h1>
                    <img alt="" src={`http://openweathermap.org/img/w/${this.state.weathericonID}.png`}></img>
                </div>
                <h2 className="weatherDescription">{this.state.weatherdescription}</h2>
                <p>temperature: {this.state.temperature + "\xB0C"}</p>
                <p>feels like: {this.state.feelsLike + "\xB0C"}</p>
                <p>min temp: {this.state.minTemp + "\xB0C"}</p>
                <p>max temp: {this.state.maxTemp + "\xB0C"}</p>
                <p>windspeed: {this.state.windspeed} meter/sec</p>

            </Container >
        )
    }
}

export default Weatherdisplay
