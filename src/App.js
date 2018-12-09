import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Lisbon</h1>
          <p>Sunday 1:00PM</p>
          <p>Sunny</p>
        </header>
        <main className="clearfix">
          <div id="preview" class="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt=""
            />
            <h2>
              18<small>°C</small>
            </h2>
          </div>
          <div id="details">
            <ul>
              <li>
                <p>Precipitation: 0%</p>
              </li>
              <li>
                <p>Humidity:55%</p>
              </li>
              <li>
                <p>Wind: 11km/h</p>
              </li>
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
