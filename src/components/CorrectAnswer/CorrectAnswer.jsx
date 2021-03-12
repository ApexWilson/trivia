import React from "react";

export default function CorrectAnswer(props) {
  return (
    <div>
      <button>Click for the correct answer</button>
      {props.answer}
    </div>
  );
}
