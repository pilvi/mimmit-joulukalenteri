import React, { Component } from "react";
import Door from "./door";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24
      ]
    };
  }

  render() {
    return (
      <div className="calendar">
        {this.state.days.map(d => (
          <Door key={d} day={d} />
        ))}
      </div>
    );
  }
}

export default Calendar;
