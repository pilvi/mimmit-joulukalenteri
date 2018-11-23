import React, { Component } from "react";
import fetchGiph from "./gifSearchUtil";

const keywords = [
  "Jack Skellington",
  "Mrs. Claus",
  "Rudolph reindeer",
  "Santa Claus",
  "Christmas elf"
];

const doorImgUrl =
  "https://uploads.codesandbox.io/uploads/user/6a519f90-f347-4996-9834-926d26f2b92a/YFBD-Screenshot%202018-11-20%20at%2022.12.08.png";

class Door extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      opened: false,
      gifUrl: ""
    };
  }

  async componentDidMount() {
    const { day } = this.props;
    const keyword = keywords[(day - 1) % keywords.length];
    const gifUrl = await fetchGiph(keyword);

    this.setState({ keyword, gifUrl });
  }

  open() {
    this.setState({ opened: true });
  }

  close() {
    this.setState({ opened: false });
  }

  renderDoor() {
    const { keyword, opened, gifUrl } = this.state;

    if (opened)
      return (
        <div className="door-opened" onClick={this.close.bind(this)}>
          <img src={this.state.gifUrl} alt={keyword} />
        </div>
      );
    else
      return (
        <div className="door-closed" onClick={this.open.bind(this)}>
          <img src={doorImgUrl} alt="door closed" />
        </div>
      );
  }

  render() {
    return (
      <div className="door">
        <div className="day">{this.props.day}</div>
        {this.renderDoor()}
      </div>
    );
  }
}

export default Door;
