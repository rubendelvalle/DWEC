document.getElementById('obtenerRespuesta').addEventListener('click', function() {
    const apiUrl = 'https://yesno.wtf/api';
    
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const answer = data.answer;
        const imageUrl = data.image;
  
        document.getElementById('respuestaContainer').innerText = '';
  
        document.getElementById('respuestaContainer').innerText = 'Respuesta: ' + answer;
  
        document.body.style.backgroundImage = 'url(' + imageUrl + ')';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundAttachment = 'fixed';
      })
      .catch(error => console.error('Error:', error));
  });
  