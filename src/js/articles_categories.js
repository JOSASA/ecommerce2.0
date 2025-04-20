const abrirBtn = document.getElementById("abrirFiltros");
  const cerrarBtn = document.getElementById("cerrar-filtro");
  const panel = document.querySelector(".filter-panel");
  const miniBoton = document.querySelector(".filter-panel-closed");

  abrirBtn.addEventListener("click", () => {
    panel.classList.remove("hidden");
    miniBoton.classList.add("hidden");
  });

  cerrarBtn.addEventListener("click", () => {
    panel.classList.add("hidden");
    miniBoton.classList.remove("hidden");
  });

  const buttons = document.querySelectorAll(".pagina-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Aquí puedes cargar contenido dinámico si quieres
      // o hacer scroll a los artículos, etc.
    });
  });

  const filterButtons = document.querySelectorAll(".option-button");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
    });
  });
  
  
  