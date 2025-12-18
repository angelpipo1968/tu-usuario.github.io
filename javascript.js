// Reemplaza el código del formulario con:
document.getElementById('nexai-contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // Usa FormSubmit (gratis)
    const response = await fetch('https://formsubmit.co/tu@email.com', {
        method: 'POST',
        body: formData
    });
    
    if(response.ok) {
        alert('¡Mensaje enviado! NEXAI se pondrá en contacto contigo.');
        e.target.reset();
    }
});