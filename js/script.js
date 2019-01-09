let menuMetiers = document.getElementById('menu-metiers');
let flech = document.getElementById('flech');
let fermer = document.getElementById('fermer');

console.log(menuMetiers);
menuMetiers.style.display = "none";

  flech.addEventListener('click', ouvrirMetiers, false)
  menuMetiers.style.display = "none";
  function ouvrirMetiers () {
          menuMetiers.style.display = 'block';
          console.log("bonjour");
            fermer.addEventListener('click', fermerMetiers, false)
          function fermerMetiers () {
              menuMetiers.style.display = "none";
          }
          }
