let timer,
  currentSecs = 0;

function resetTimer() {
  /* Clear previous interval */
  clearInterval(timer);

  /* Reset seconds of timer */
  currentSecs = 0;

  /* Set a new interval */
  timer = setInterval(startIdleTimer, 1000);
}

// Define events to reset timer
window.onload = resetTimer;
window.onmousemove = resetTimer;
window.onmousedown = resetTimer;
window.ontouchstart = resetTimer;
window.onclick = resetTimer;
window.onkeypress = resetTimer;

function startIdleTimer() {
  /* Increment the
    timer seconds */
  currentSecs++;
  if (currentSecs > 120) {
    logOut();
  }
}

const logOut = async () => {
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to logout!");
    console.error(error);
  }
};

document.querySelector("#logout").addEventListener("click", logOut);
