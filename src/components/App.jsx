import React, { Component, useState } from "react";
import "../css/App.css";
import Answer from "./Answer/Answer";
import NextQuestion from "./NextQuestion/NextQuestion";
import Question from "./Question/Question";
import data from "../sample_data.json";

function App() {
  var questionNumber = 0;
  return (
    <div className="app">
      Trivia!
      <Question text={data[questionNumber]["question"]["text"]} />
      <NextQuestion />
    </div>
  );
}

export default App;
// BONUS: Add styling to your app.
