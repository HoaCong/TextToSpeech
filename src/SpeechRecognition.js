// SpeechRecognition.js

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.continuous = true;

export const startSpeechRecognition = (onResult) => {
  recognition.onresult = (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript;
    onResult(transcript);
  };

  recognition.start();
};

export const stopSpeechRecognition = () => {
  recognition.stop();
};
