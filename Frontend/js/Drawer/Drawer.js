export function initializeDrawer() {
  const drawer = document.getElementById("left-sidebar");
  const button = document.getElementById("drawer-toggle");

  button.addEventListener("click", () => {
    drawer.classList.toggle("open");

    if (drawer.classList.contains("open")) {
      button.textContent = "←";
    } else {
      button.textContent = "☰";
    }
  });
}
