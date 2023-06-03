// SpeechToText.js

import axios from "axios";

const API_KEY = "AIzaSyDfRRqQE89XYW080OShXwT80TisAJr-cpU";
const API_URL = `https://speech.googleapis.com/v1/speech:recognize?key=${API_KEY}`;

export const speechToText = (audioData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const data = {
    audio: {
      content: audioData,
    },
    config: {
      encoding: "LINEAR16",
      sampleRateHertz: 16000,
      languageCode: "en-US",
    },
  };

  return axios
    .post(API_URL, data, config)
    .then((response) => {
      const transcript = response.data.results[0].alternatives[0].transcript;
      return transcript;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
