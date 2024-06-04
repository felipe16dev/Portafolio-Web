document.addEventListener('DOMContentLoaded', function() {
    var checkboxMenu = document.getElementById('open-menu');
    var enlacesMenu = document.querySelectorAll('.nav-link');
    
    // Desactivar el checkbox cuando se hace clic en un enlace del menú
    enlacesMenu.forEach(function(enlace) {
        enlace.addEventListener('click', function() {
            checkboxMenu.checked = false;
        });
    });
});
