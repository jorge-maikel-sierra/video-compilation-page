// Menú toggle para móvil
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Filtros para categorías de video
const filterTabs = document.querySelectorAll(".filter-tab");
const videoCards = document.querySelectorAll(".video-card");

filterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remover clase activa de todos los tabs
    filterTabs.forEach((item) => item.classList.remove("active"));
    // Añadir clase activa al tab clickeado
    tab.classList.add("active");

    const filterValue = tab.getAttribute("data-filter");

    videoCards.forEach((card) => {
      if (
        filterValue === "all" ||
        card.getAttribute("data-category") === filterValue
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Toggle modo oscuro
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;
const icon = darkModeToggle.querySelector("i");

// Verificar si hay una preferencia guardada
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  icon.classList.replace("fa-moon", "fa-sun");
}

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    icon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("darkMode", "enabled");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("darkMode", "disabled");
  }
});

// Animación suave para navegación
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 100,
      behavior: "smooth",
    });

    // Cerrar menú móvil al hacer clic en un enlace
    navMenu.classList.remove("active");
  });
});
