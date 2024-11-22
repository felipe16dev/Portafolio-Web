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


/* =============== FORMULARIO CONTACTO =============== */
const $form = document.querySelector('#form');

$form.addEventListener('submit',handleSubmit);

async function handleSubmit(e){
    e.preventDefault();

    const form = new FormData(this);
    const response = await fetch(this.action,{
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if(response.ok){
        this.reset()
        alert('Gracias por contactarme, te escribiré pronto :D')
    }
}