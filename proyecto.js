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

// Función para mostrar la fecha y hora actual
function displayDateTime() {
    const dateTimeElement = document.getElementById("date-time");
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedDateTime = now.toLocaleDateString('es-ES', options);
    dateTimeElement.textContent = formattedDateTime;
}

// Actualizar la fecha y hora cada segundo
setInterval(displayDateTime, 1000);

// Mostrar la fecha y hora actual cuando la página se carga por primera vez
displayDateTime();

