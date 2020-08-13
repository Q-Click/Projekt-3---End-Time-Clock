import React, { Component } from "react";
import "./App.css";
import SwitchButton from "./SwitchButton";
import Cloud from "./Cloud";

class App extends Component {
  state = {
    time: 35,
    active: false,
    text: [
      "If You want to start the inevitable, press start.",
      "You started It.",
      "Let's begin.",
      "Are You not afraid?",
      "BOOM!",
      "Just kidding.",
      "It could be disastrous.",
      "Let's start over.",
      "One more time.",
      "For real.",
      "Did You know lemons contain more sugar than strawberries?",
      "Or that Koalas sleep around 18 hours a day?",
      "Just like me when I was doing it.",
      "Or You after hours spent here.",
      "Come on - go home.",
      "You still here?",
      "It's almost 3 minutes here.",
      "Respect.",
      "Don't You have some better work to do?",
      "I was serious - when it stops...",
      "...it will be end.",
      "Of the world.",
      "Or just time You have spent here.",
      "I'm impressed by your patience.",
      "From now on I'll show only BOOM.",
      "BOOM!",
      "BOOM!",
      "BOOM!",
      "BOOM!",
      "Wow, persistent, I like You.",
      "Still counting on something?",
      "Boomer.",
      "No one has ever endured that long.",
      // OR YOU JUST LOOKED INTO THAT CODE?!,
      "Naughty.",
    ],
    textIndex: 0,
  };

  handleClick = () => {
    const activatedClock = document.querySelector("p");
    const activatedText = document.querySelector(".cloud");
    if (this.state.active) {
      clearInterval(this.idInterval);
      clearInterval(this.idInterval2);
      activatedClock.classList.remove("active");
      activatedText.classList.remove("active");
    } else {
      this.idInterval = setInterval(() => this.removeSecond(), 1000);
      setTimeout(this.messageCloud, 5000);
      setTimeout(() => {
        this.idInterval2 = setInterval(() => this.messageCloud(), 10000);
      }, 5000);
      activatedClock.classList.add("active");
      activatedText.classList.add("active");
    }
    this.setState({
      active: !this.state.active,
    });
  };

  removeSecond = () => {
    if (this.state.time === 0) {
      this.setState({
        time: 35,
      });
    } else
      this.setState({
        time: this.state.time - 1,
      });
  };

  messageCloud = () => {
    this.setState({
      textIndex: this.state.textIndex + 1,
    });
  };

  render() {
    return (
      <div className="app">
        <p>{this.state.time}</p>
        <Cloud
          text={this.state.text}
          index={this.state.textIndex}
          active={this.state.active}
        />
        <SwitchButton click={this.handleClick} active={this.state.active} />
      </div>
    );
  }
}

export default App;
