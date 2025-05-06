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
 //cargar imagenes dinamicamente dependiendo de su data-type
  const circles = document.querySelectorAll('#projects .circle');

  circles.forEach(circle => {
    const type = circle.dataset.type;
    let imgSrc = '';
  
    switch(type) {
      case 'app':
        imgSrc = 'images/mobile.svg';
        break;
      case 'web':
        imgSrc = 'images/web.svg';
        break;
      case 'api':
        imgSrc = 'images/api-rest.svg';
        break;
    }
  
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = `Icono ${type}`;
    circle.appendChild(img);
  });

  ///actualizar contenedores en la url
  const sections = document.querySelectorAll('#home, div.container');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
          history.replaceState(null, null, `#${id}`);
      }
    });
  }, {
    threshold: 0.4 // Se actualiza cuando el 40% de la sección está visible
  });
  
  sections.forEach(section => {
    if (section.id) {
      observer.observe(section);
    }
  });
  


