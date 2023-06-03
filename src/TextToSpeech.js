// TextToSpeech.js

export const speak = (text) => {
  const speechSynthesis = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);

  speechSynthesis.speak(utterance);
};
