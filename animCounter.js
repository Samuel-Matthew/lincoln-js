function animateCounter(id, target) {
  const element = document.getElementById(id);
  let count = 0;

  const interval = setInterval(function () {
    count++;

    element.textContent = count;

    if (count >= target) {
      clearInterval(interval);
    }
  }, 20);
}

animateCounter("services", 250);
animateCounter("people", 100);
animateCounter("projects", 120);

