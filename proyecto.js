// JavaScript para cambiar entre secciones al hacer clic en los enlaces del menú de navegación
document.getElementById("home-link").addEventListener("click", function() {
    showSection("home");
});

document.getElementById("about-link").addEventListener("click", function() {
    showSection("about");
});

document.getElementById("services-link").addEventListener("click", function() {
    showSection("services");
});

document.getElementById("contact-link").addEventListener("click", function() {
    showSection("contact");
});

function showSection(sectionId) {
    // Oculta todas las secciones
    document.querySelectorAll("section").forEach(function(section) {
        section.style.display = "none";
    });
    // Muestra la sección especificada
    document.getElementById(sectionId).style.display = "block";
}

// JavaScript para mostrar la fecha y hora actual en el pie de página
function updateDateTime() {
    var now = new Date();
    var datetimeElement = document.getElementById("datetime");
    datetimeElement.textContent = "Fecha y hora actual: " + now.toLocaleString();
}

// Actualiza la fecha y hora cada segundo
setInterval(updateDateTime, 1000);
