var imgURL = 'https://www.webempresa.com/foro/wp-content/uploads/wpforo/attachments/3200/318277=80538-Sin_imagen_disponible.jpg';

function cambiarImagenPerfil() {
    
    fetch(imgURL)
        .then(function(response) {
            return response.blob();
        })
        .then(function(blob) {
            var formData = new FormData();
            formData.append('profile_pic', blob, 'new_profile.jpg');

            return fetch('/profile', {
                method: 'POST',
                body: formData,
                credentials: 'include'  
            });
        })
        .then(function() {
            console.log('Imagen de perfil cambiada con éxito.');
        })
        .catch(function(error) {
            console.error('Error al cambiar la imagen de perfil:', error);
        });
}

cambiarImagenPerfil();

