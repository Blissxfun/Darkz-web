fetch("commands.json")
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById("comandos-container");
        data.forEach(cmd => {
            const div = document.createElement("div");
            div.classList.add("command-card");
            div.innerHTML = `<h3>/${cmd.name}</h3><p>${cmd.description}</p>`;
            container.appendChild(div);
        });
    });
