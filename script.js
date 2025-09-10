// Cargar comandos dinámicamente
fetch("commands.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("comandos-container");
    container.innerHTML = "";

    data.forEach(cmd => {
      const div = document.createElement("div");
      div.classList.add("command-card");
      div.setAttribute("data-tooltip", `Uso: /${cmd.name} | ${cmd.usage || "Sin ejemplo"} | Permisos: ${cmd.permission || "Ninguno"}`);
      div.innerHTML = `
        <h3>/${cmd.name}</h3>
        <p>${cmd.description}</p>
      `;
      container.appendChild(div);

      // Animación suave de aparición
      div.style.opacity = 0;
      div.style.transform = "translateY(20px)";
      setTimeout(() => {
        div.style.transition = "all 0.6s ease-out";
        div.style.opacity = 1;
        div.style.transform = "translateY(0)";
      }, 100);
    });
  })
  .catch(err => console.error("Error al cargar comandos:", err));

// Fondo de partículas morado
tsParticles.load("tsparticles", {
  background: { color: { value: "#0a001f" } },
  fpsLimit: 60,
  particles: {
    color: { value: "#b76efc" },
    links: { enable: true, color: "#b76efc", distance: 120, opacity: 0.5 },
    move: { enable: true, speed: 2 },
    number: { value: 80 },
    opacity: { value: 0.7 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } }
  },
  detectRetina: true
});
