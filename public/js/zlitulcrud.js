
// agregar p manejo 
/* css
.litul-btn {
  padding: 0.5em 1.2em;
  font-size: 1em;
  border-radius: 0.4em;
  margin: 0.2em;
  transition: opacity 0.2s ease;
}

.litul-btn.hidden {
  display: none;
}

.litul-btn.disabled {
  opacity: 0.5;
  pointer-events: none;
}
*/
function setEstadoPanel(activo, modo = "grisar") {
  const panel = document.getElementById("panel-abm");
  if (activo) {
    panel.classList.remove("litul-panel--inactivo", "grisar", "ocultar");
  } else {
    panel.classList.add("litul-panel--inactivo", modo);
  }
}


//Cuando cargás el panel, pasás permisos:
litulcrudRender({
  botones: [
    { id: "btnEditar", label: "Editar", accion: editarFila },
    { id: "btnExportar", label: "Exportar", accion: exportarTabla, permiso: "exportar" }
  ],
  permisosUsuario: ["ver", "editar"], // viene del login
  ...
});

//al renderizar:
botones.forEach(btn => {
  if (btn.permiso && !permisosUsuario.includes(btn.permiso)) {
    botonElemento.classList.add("hidden"); // o directamente ni lo insertás
  }
});


//panel
/*
.litul-panel--inactivo.ocultar {
  display: none;
}
.litul-panel--inactivo.grisar {
  opacity: 0.4;
  pointer-events: none;
}
*/
function setEstadoPanel(activo, modo = "grisar") {
  const panel = document.getElementById("panel-abm");
  if (activo) {
    panel.classList.remove("litul-panel--inactivo", "grisar", "ocultar");
  } else {
    panel.classList.add("litul-panel--inactivo", modo);
  }
}
