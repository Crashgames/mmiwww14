let menuMetiers = document.getElementById('menu-metiers');
console.log(menuMetiers);
menuMetiers.style.display = 'none';
let bool = true;

menuMetiers.addEventListener('click', ouvrirMetiers, false) 
function ouvrirMetiers () {
        menuMetiers.style.display = 'block';
        console.log(ouvrirMetiers);
}

if (bool == false) {
    menuMetiers.addEventListener('click', fermerMetiers, false) 
    function fermerMetiers () {
    menuMetiers.style.display = 'block';
    console.log(fermerMetiers)
    b = true;
}
}