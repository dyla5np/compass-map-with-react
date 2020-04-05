import React, {Component} from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: "",
      year: "",
      letter_month: "",
      month: "",
      week: "",
      day: "",
      hour: "",
      minute: "",
      second: "",
      letter_months: [
        "January",
        "Febuary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      letter_day: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    };
  }

  componentDidMount() {
    setInterval(() => {
      let time = new Date();
      this.setState({
        currentTime: time,
        year: time.getFullYear(),
        letter_month: this.state.letter_months[time.getMonth()],
        month: time.getMonth() + 1,
        week: time.getDay() + 1,
        day: time.getDate(),
        hour: time.getHours() - 1,
        minute: time.getMinutes() - 1,
        second: time.getSeconds(),
      });
    }, 1000);
  }
  //create an array from 1 -> array length
  array = (length) =>
    Array.from({length})
      .map((x, y) => y)
      .map((x) => x + 1);

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <div className='message'>
            <div className='year'>
              <p>
                Year - <span>{this.state.year}</span>
              </p>
            </div>
          </div>
          <div className='current-month'>{this.state.letter_month}</div>
          <div className='compass-clock'>
            {this.array(12).map((x, index) => {
              return (
                <div
                  className={`month item ${
                    index === this.state.month - 1 ? "active" : ""
                  }`}
                  style={{
                    transform: `rotate(${
                      index * 30 - 30 * (this.state.month - 1)
                    }deg)`,
                  }}
                  key={index}>{`${x} month`}</div>
              );
            })}
            {this.array(5).map((x, index) => {
              return (
                <div
                  className={`week item ${
                    index === this.state.week - 1 ? "active" : ""
                  }`}
                  style={{
                    transform: `rotate(${
                      index * (360 / 21) - (360 / 21) * (this.state.week - 1)
                    }deg)`,
                  }}
                  key={index}>{`${x} week`}</div>
              );
            })}
            {this.array(31).map((x, index) => {
              return (
                <div
                  className={`day item ${
                    index === this.state.day - 1 ? "active" : ""
                  }`}
                  style={{
                    transform: `rotate(${
                      index * 12 - 12 * (this.state.day - 1)
                    }deg)`,
                  }}
                  key={index}>{`day ${x}`}</div>
              );
            })}
            {/* {this.array(24).map((x, index) => {
              return (
                <div
                  className={`hour item ${
                    index === this.state.hour ? "active" : ""
                  }`}
                  style={{
                    transform: `rotate(${
                      index * (360 / 24) - (360 / 24) * (this.state.hour - 1)
                    }deg)`,
                  }}
                  key={index}>{`${x}h`}</div>
              );
            })} */}
            {/* {this.array(60).map((x, index) => {
            return (
              <div
                className={`minute item ${
                  index === this.state.minute ? "active" : ""
                }`}
                style={{
                  transform: `rotate(${
                    index * (360 / 60) - (360 / 60) * (this.state.minute - 1)
                  }deg)`,
                }}
                key={index}>{`${x} min`}</div>
            );
          })} */}
            {/* {this.array(60).map((x, index) => {
              return (
                <div
                  className={`second item ${
                    index === this.state.second ? "active" : ""
                  }`}
                  style={{
                    transform: `rotate(${
                      index * (360 / 60) - (360 / 60) * (this.state.second - 1)
                    }deg)`,
                  }}
                  key={index}>{`${x} sec`}</div>
              );
            })} */}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
