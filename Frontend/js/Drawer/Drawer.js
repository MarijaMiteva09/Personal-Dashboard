export function initializeDrawer() {
  const drawer = document.getElementById("left-sidebar");
  const button = document.getElementById("drawer-toggle");
  const content = document.getElementById("content");

  button.addEventListener("click", () => {
    const isOpen = drawer.classList.toggle("open");

    content.classList.toggle("drawer-open", isOpen);
    button.classList.toggle("drawer-open", isOpen);

    button.textContent = isOpen ? "←" : "☰";
  });
}
