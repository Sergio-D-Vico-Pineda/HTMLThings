document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("options-menu")
  const menu = document.getElementById("dropdown-menu")
  let isOpen = false

  button.addEventListener("click", () => {
    isOpen = !isOpen
    if (isOpen) {
      menu.classList.remove("hidden")
    } else {
      menu.classList.add("hidden")
    }
    button.setAttribute("aria-expanded", isOpen)
  })

  // Cerrar el menú si se hace clic fuera de él
  document.addEventListener("click", (event) => {
    if (!button.contains(event.target) && !menu.contains(event.target)) {
      menu.classList.add("hidden")
      isOpen = false
      button.setAttribute("aria-expanded", "false")
    }
  })
})

