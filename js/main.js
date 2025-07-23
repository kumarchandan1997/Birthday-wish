// Background music toggle
const music = document.getElementById('bg-music');
const toggle = document.getElementById('toggleMusic');
let isPlaying = true;

toggle.onclick = () => {
  if (isPlaying) {
    music.pause();
    toggle.textContent = '🔇';
  } else {
    music.play();
    toggle.textContent = '🔊';
  }
  isPlaying = !isPlaying;
};

// Countdown to surprise (e.g., 3 days from now)
const countdown = document.getElementById("countdown");
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 3);

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdown.innerHTML = "🎉 It's Surprise Time!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `⏳ ${days}d ${hours}h ${mins}m ${secs}s until your surprise!`;
}

setInterval(updateCountdown, 1000);


document.getElementById("seeMoreBtn").addEventListener("click", function () {
    const hiddenCards = document.querySelectorAll(".memory-card.d-none");
    hiddenCards.forEach(card => card.classList.remove("d-none"));
    this.style.display = "none"; // Hide the button after showing all
});
