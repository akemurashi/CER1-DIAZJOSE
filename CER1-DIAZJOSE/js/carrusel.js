const images = document.querySelectorAll('.carousel-image'); //busca las imagenes que tengan esa clase
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');//se buscan los botones que tengan esa clase para poder usar el addEventListener
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

prevBtn.addEventListener('click', () => { //addEventListener funciona al hacer click
    currentIndex = (currentIndex - 1 + images.length) % images.length; //calculo el cual permite que si se esta en el indice 0, y apretamos el boton, el nuevo indice sea la ultima imagen del array images
    showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; //mismo calculo pero para el boton siguiente, si estamos en la ultima imagen y apretamos el boton, el nuevo indice sera 0 pues usamos el modulo
    showImage(currentIndex);
});

// Inicializa el carrusel mostrando la primera imagen
showImage(currentIndex);