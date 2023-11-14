document.addEventListener('DOMContentLoaded', function() {
    const reproductor = document.getElementById('reproductor');
  
    reproductor.onplay = function() {
      console.log('Reproduciendo...');
    };
  
    reproductor.onpause = function() {
      console.log('Pausado.');
    };
  
    reproductor.onended = function() {
      console.log('Reproducción finalizada.');
    };
  
    reproductor.onerror = function() {
      console.log('Error al reproducir el archivo.');
    };
  });
  