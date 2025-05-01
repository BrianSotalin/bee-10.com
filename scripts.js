const btn = document.getElementById('btnUp');
  // Detecta el evento de desplazamiento
  window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add("scrolled"); // Añade la clase "scrolled" al hacer scroll
    } else {
      navbar.classList.remove("scrolled"); // Elimina la clase cuando no hay scroll
    }
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.style.display = 'flex';
    } else {
      btn.style.display = 'none';
    }
  };
 


