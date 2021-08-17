import React from "react";

import "./questions.styles.scss";

const Questions = () => (
  <div className="questions">
    <div>
      <p>Your interior?</p>

      <label for="cars">Choose a car:</label>
      <select name="cars" id="cars" form="carform">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  </div>
);

export default Questions;
