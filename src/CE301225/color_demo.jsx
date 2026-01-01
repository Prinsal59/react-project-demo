import React, { Component } from "react";

class ColorDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "white",     // for background
      textColor: "black",   // for text
      text: "Click any button",
    };
  }

  // First line → change ONLY text color
  changeTextColor = (color) => {
    this.setState({
      textColor: color,
      text: `Text Color: ${color.toUpperCase()}`,
    });
  };

  // Second line → change ONLY background color
  changeBgColor = (color) => {
    this.setState({ bgColor: color });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.bgColor,
          padding: "20px",
          minHeight: "100vh",
        }}
      >
        {/* FIRST LINE BUTTONS (TEXT COLOR CHANGE) */}
        <div>
          <button onClick={() => this.changeTextColor("green")}>Green</button>
          <button onClick={() => this.changeTextColor("blue")}>Blue</button>
          <button onClick={() => this.changeTextColor("red")}>Red</button>
          <button onClick={() => this.changeTextColor("yellow")}>Yellow</button>
        </div>

        {/* SECOND LINE BUTTONS (BACKGROUND COLOR CHANGE) */}
        <div style={{ marginTop: "10px" }}>
          <button onClick={() => this.changeBgColor("green")}>Green</button>
          <button onClick={() => this.changeBgColor("blue")}>Blue</button>
          <button onClick={() => this.changeBgColor("red")}>Red</button>
          <button onClick={() => this.changeBgColor("yellow")}>Yellow</button>
        </div>

        {/* TEXT OUTPUT */}
        <p
          style={{
            marginTop: "20px",
            fontSize: "20px",
            fontWeight: "bold",
            color: this.state.textColor,
          }}
        >
          {this.state.text}
        </p>
      </div>
    );
  }
}

export default ColorDemo;
