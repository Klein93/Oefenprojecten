import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";

class Weatherdisplay extends React.Component {
    constructor() {
        super();

        this.state = {


        };
        this.convertTimestamp = this.convertTimestamp.bind(this)
        this.adaptBackground = this.adaptBackground.bind(this)
    }

    adaptBackground = (time) => {
        let timestamp = time;
        console.log(timestamp)
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

        fetch("https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=metric&appid=5c2a75f8a8321d1125734abeb8c3af37")

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
            <Container className="app">
                <Row>
                    <Col className="column" xs={12} lg={4}>
                        <h3>{this.state.country}</h3>
                        <h3>{this.state.time}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col className="column" xs={6} lg={2}>
                        <h1>{this.state.weather}</h1>
                    </Col>
                    <Col className="column" xs={6} lg={2}>
                        <img alt="" src={`http://openweathermap.org/img/w/${this.state.weathericonID}.png`}></img>
                    </Col>
                </Row>
                <Row>
                    <Col className="column" xs={12} lg={4}>
                        <h3 className="weatherDescription">{this.state.weatherdescription}</h3>
                        <ListGroup >
                            <ListGroupItem variant="primary">temperature: {this.state.temperature + "\xB0C"}</ListGroupItem>
                            <ListGroupItem variant="primary">feels like: {this.state.feelsLike + "\xB0C"}</ListGroupItem>
                            <ListGroupItem variant="primary">min temp: {this.state.minTemp + "\xB0C"}</ListGroupItem>
                            <ListGroupItem variant="primary">min temp: {this.state.minTemp + "\xB0C"}</ListGroupItem>
                            <ListGroupItem variant="primary">max temp: {this.state.maxTemp + "\xB0C"}</ListGroupItem>
                            <ListGroupItem variant="primary">windspeed: {this.state.windspeed} meter/sec</ListGroupItem>
                        </ListGroup>

                    </Col>
                </Row>
            </Container >
        )
    }
}

export default Weatherdisplay