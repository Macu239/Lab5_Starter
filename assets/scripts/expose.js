// expose.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  const audio = document.querySelector("audio");
  const dropdown = document.querySelector("#horn-select");

  dropdown.addEventListener("change", () => {
    const image = document.querySelector("img");
    image.src = `assets/images/${dropdown.value}.svg`;
    audio.src = `assets/audio/${dropdown.value}.mp3`;
  });

  const volumeControl = document.querySelector("#volume-controls input");

  volumeControl.addEventListener("input", () => {
    const horn = document.querySelector("#volume-controls img");

    if (volumeControl.value == 0) {
      horn.src = "assets/icons/volume-level-0.svg";
    } else if (volumeControl.value < 33) {
      horn.src = "assets/icons/volume-level-1.svg";
    } else if (volumeControl.value < 67) {
      horn.src = "assets/icons/volume-level-2.svg";
    } else {
      horn.src = "assets/icons/volume-level-3.svg";
    }
    audio.volume = volumeControl.value / 100;
  });

  const playButton = document.querySelector("button");

  playButton.addEventListener("click", () => {
    audio.play();
    if (dropdown.value == "party-horn") {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}
