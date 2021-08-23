import React, { Component } from "react";
import Questions from "../../components/questions/questions.component";
import Button from "../../components/button/button.component";

import "./home.styles.scss";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      showComponent: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
    this.addValue = this.addValue.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  hideComponent() {
    this.setState({ showComponent: !this.state.hideComponent });
  }

  addValue(e) {
    e.preventDefalut();
    if (this.state.value !== undefined) {
      alert("Select A or B");
    }
  }

  updateInput(e) {
    this.setState = { value: e.target.value };
  }

  render() {
    const { showComponent, hideComponent, addValue, updateInput } = this.state;
    return (
      <div className="home">
        <div className="home_container">
          <h1>FIND YOUR SOUL PLANT</h1>
          <div className="questions_main">
            <article>
              <input id="type" type="hidden" alue="COLOR" />
              <button
                className="start_btn"
                onClick={() => this.hideComponent("showComponent")}
              >
                Start
              </button>
            </article>
            <div>
              {showComponent && <Questions />}
              <div className="question_here">Questions here</div>
            </div>
            <div className="buttons">
              <Button id="btn_a">select A</Button>
              <Button id="btn_b">select B</Button>
            </div>

            <form onSubmit={this.addValue}>
              <input
                type="text"
                id="COLOR"
                value="0"
                onChange={this.updateInput}
              ></input>
              <input
                type="text"
                id="SIZE"
                value="0"
                onChange={this.updateInput}
              ></input>
              <input
                type="text"
                id="PET-FRIENDLY"
                value="0"
                onChange={this.updateInput}
              ></input>
              <input
                type="text"
                id="WATER"
                value="0"
                onChange={this.updateInput}
              ></input>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
