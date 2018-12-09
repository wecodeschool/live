import React, { Component } from "react";
import axios from "axios";
import Search from "./Search";
import "./App.css";

class App extends Component {
  apiKey = "2245214ceb2645f12c0294af42eb858d";
  apiUrl = "https://api.openweathermap.org/data/2.5";
  apiPath = "weather";

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    this.refresh(this.props.city);
  }

  refresh = city => {
    let endpointUrl = `${this.apiUrl}/${this.apiPath}?q=${city}&appid=${
      this.apiKey
    }&units=metric`;
    axios.get(endpointUrl).then(response => {
      let now = new Date();
      this.setState({
        city: response.data.name,
        day: this.day(now),
        time: this.time(now),
        description: response.data.weather[0].main,
        imageSrc: this.iconUrl(response.data.weather[0].icon),
        temperature: Math.round(response.data.main.temp),
        humidity: response.data.main.humidity,
        wind: Math.round(response.data.wind.speed * 3.6)
      });
    });
  };

  iconUrl(icon) {
    return `http://openweathermap.org/img/w/${icon}.png`;
  }

  day(date) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    return days[date.getDay()];
  }

  time(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    if (hours > 12) {
      hours = `${hours - 12}:${minutes}PM`;
    } else if (hours === 0) {
      hours = `${hours}:${minutes}AM`;
    }
    return hours;
  }

  render() {
    if (this.state.city) {
      return (
        <div>
          <Search refresh={this.refresh} city={this.state.city} />
          <header>
            <h1>{this.state.city}</h1>
            <p>
              {this.state.day} {this.state.time}
            </p>
            <p>{this.state.description}</p>
          </header>
          <main className="clearfix">
            <div id="preview" className="clearfix">
              <img src={this.state.imageSrc} alt={this.state.description} />
              <h2>
                {this.state.temperature}
                <small>°C</small>
              </h2>
            </div>
            <div id="details">
              <ul>
                <li>
                  <p>Humidity: {this.state.humidity}%</p>
                </li>
                <li>
                  <p>Wind: {this.state.wind}km/h</p>
                </li>
              </ul>
            </div>
          </main>
        </div>
      );
    } else {
      return <div>Weather is loading</div>;
    }
  }
}

export default App;
