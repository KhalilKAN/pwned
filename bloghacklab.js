var imgURL = 'https://chl-d8ec59b9-1c66-4864-9d89-f9e178064508-blog-hacklab.softwareseguro.com.ar/static/uploads/93628e27ea067070.jpg';

fetch(imgURL)
  .then(response => response.blob())
  .then(blob => {
    var formData = new FormData();
    formData.append('profile_pic', blob, 'newprofile.jpg');

    return fetch('/profile', {
      method: 'POST',
      body: formData,
      credentials: 'include'
    });
  })
  .then(response => {
    if (response.ok) {
      console.log('Imagen de perfil actualizada con éxito.');
    } else {
      console.error('Error al subir la imagen.');
    }
  })
  .catch(error => console.error('Error:', error));