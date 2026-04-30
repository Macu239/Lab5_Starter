// explore.js

window.addEventListener("DOMContentLoaded", init);

function populateVoiceList() {
  const voicelist = speechSynthesis.getVoices();

  for (const voice of voicelist) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;

    if (voice.default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    document.getElementById("voice-select").appendChild(option);
  }
}

function init() {
  populateVoiceList();
  const speakButton = document.querySelector("button");
  const image = document.querySelector("img");
  speakButton.addEventListener("click", () => {
    const textInput = document.querySelector("#text-to-speak").value;
    const voiceSelect = document.querySelector("#voice-select");
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    const utterance = new SpeechSynthesisUtterance(textInput);
    const voices = speechSynthesis.getVoices();

    for (const voice of voices) {
      if (voice.name === selectedOption) {
        utterance.voice = voice;
        break;
      }
    }
    speechSynthesis.speak(utterance);

    utterance.onstart = () => {
      image.src = "assets/images/smiling-open.png";
    };
    utterance.onend = () => {
      image.src = "assets/images/smiling.png";
    };
  });
}

if (
  typeof speechSynthesis !== "undefined" &&
  speechSynthesis.onvoiceschanged !== undefined
) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
