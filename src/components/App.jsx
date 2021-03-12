import React, { Component, useState } from "react";
import "../css/App.css";
import Answer from "./Answer/Answer";
import CorrectAnswer from "./CorrectAnswer/CorrectAnswer";
import NextQuestion from "./NextQuestion/NextQuestion";
import Question from "./Question/Question";
import data from "../sample_data.json";

function App() {
  var questionNumber = 0;
  var correctAnswerIndex =
    data[questionNumber]["question"]["correct_choice_index"];
  return (
    <div className="app">
      Trivia!
      <Question text={data[questionNumber]["question"]["text"]} />
      <div>
      <CorrectAnswer answer={data[questionNumber]["question"]["choices"][correctAnswerIndex]}/>
      </div>
      <NextQuestion />
    </div>
  );
}

export default App;
// BONUS: Add styling to your app.
  