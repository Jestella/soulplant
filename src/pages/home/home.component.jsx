import React, { Component } from "react";

import "./home.styles.scss";

import Questions from "../questions/questions.component";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      showComponent: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent() {
    this.setState({ showComponent: !this.state.hideComponent });
  }

  render() {
    const { showComponent, hideComponent } = this.state;
    return (
      <div className="home">
        <div className="home_container">
          <h1>FIND YOUR SOUL PLANT</h1>
          <div className="questions_main">
            <article>
              <p>What type of plant suits you?</p>
              <button onClick={() => this.hideComponent("showComponent")}>
                Start
              </button>
            </article>

            <div>{showComponent && <Questions />}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
