// App.js

import React, { useState } from "react";
import {
  startSpeechRecognition,
  stopSpeechRecognition,
} from "./SpeechRecognition";
import { speak } from "./TextToSpeech";
import { speechToText } from "./SpeechToText";

function App() {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);

  const handleListen = () => {
    if (listening) {
      stopSpeechRecognition();
      setListening(false);
    } else {
      startSpeechRecognition((transcript) => {
        setText(transcript);
      });
      setListening(true);
    }
  };

  const handleSpeak = () => {
    speak(text);
  };

  const handleSpeechToText = () => {
    speechToText(text).then((transcript) => {
      setText(transcript);
    });
  };

  return (
    <div className="iphone">
      <div className="container">
        <header>
          <h1>Chuyển đổi chữ và giọng nói</h1>
        </header>

        <textarea
          id="output-text spacing"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Kết quả..."
          readonly
        ></textarea>
        <div className="buttons">
          <button id="clear-button" onClick={handleSpeak}>
            Nói
          </button>
          <button id="record-button" onClick={handleListen}>
            {listening ? "Dừng" : "Thu"}
          </button>
          {/* <button id="translate-button" onClick={handleSpeechToText}>
            Viết
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
