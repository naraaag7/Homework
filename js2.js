document.addEventListener("mousemove", function(event) {
  const coords = `X: ${event.clientX}, Y: ${event.clientY}`;
  document.getElementById("coordinates").textContent = coords;
});