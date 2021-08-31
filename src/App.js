import "./styles.css";
import React, { useState } from "react";

var emojiDatabase = {
  "😀": "Grinning Face",
  "😁": "Grinning face with smilling eyes",
  "😂": "FACE WITH TEARS OF JOY",
  "😃": "SMILING FACE WITH OPEN MOUTH",
  "😄": "SMILING FACE WITH OPEN MOUTH AND SMILING EYES",
  "😅": "SMILING FACE WITH OPEN MOUTH AND COLD SWEAT",
  "😆": "SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES",
  "😇": "SMILING FACE WITH HALO",
  "😈": "SMILING FACE WITH HORNS",
  "😘": "Face Throwing a Kiss!"
};

var emojiArray = Object.keys(emojiDatabase);

export default function App() {
  var [meaning, setMeaning] = useState(" ");

  function emojiHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDatabase[userInput];

    if (meaning === undefined) {
      meaning = "Error/ Emoji not found! ";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDatabase[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>

      <input
        onChange={emojiHandler}
        placeholder={
          "Paste your  emoji or Click one of the following emoji below"
        }
      />

      <h2>
        {" "}
        <div style={{ fontWeight: "bolder" }}> {meaning} </div>{" "}
      </h2>

      <h4>
        {" "}
        Emojis we have <small>(click on the emoji)</small>
      </h4>
      {emojiArray.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "0rem 0.5rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
