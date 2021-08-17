import React from "react";

import "./home.styles.scss";

import Questions from "../questions/questions.component";

const Home = () => (
  <div className="home">
    <h1>FIND YOUR SOUL PLANT</h1>
    <Questions />
  </div>
);

export default Home;
