import React from "react";
import Answer from "../Answer/Answer";

export default function Question(props) {
  return (
    <div>
      {props.text}
      <Answer choices={[48, 13, 52, 50]} />
    </div>
  );
}
