const music = document.getElementById("music");
const button = document.getElementById("musicBtn");

let playing = false;

button.addEventListener("click", () => {
  if (!playing) {
    music.play();
    button.textContent = "⏸ Pausar música";
  } else {
    music.pause();
    button.textContent = "🎵 Tocar música";
  }
  playing = !playing;
});
