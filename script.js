

/*----------- Função para mover o carrossel-------------*/
function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    
    currentIndex += step;

   
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

 
    document.querySelector('.carousel-images').style.transform = `translateX(-${currentIndex * 600}px)`;
}

/*-----------------Função para mostrar a notificação------------------------*/
       function showNotification() {
        document.getElementById('notification').style.display = 'block';
    }
 /* --------Evento para capturar o envio do formulário----------*/
    document.getElementById('cadastroForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        showNotification(); 
    });


 
