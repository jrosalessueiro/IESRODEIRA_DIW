// Mostrar el modal cuando se carga la página
window.onload = function() {
    const contactModal = document.getElementById('contactModal');
    contactModal.style.display = 'flex'; // Mostrar el modal
};

// Cerrar el modal cuando se hace clic en el botón de cerrar
const closeModal = document.getElementById('closeModal');
closeModal.addEventListener('click', function() {
    const contactModal = document.getElementById('contactModal');
    contactModal.style.display = 'none'; // Ocultar el modal
});