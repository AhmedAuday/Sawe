document.addEventListener('DOMContentLoaded', function () {
   const slides = document.querySelector('.slides');
   let currentIndex = 0;
   const totalSlides = slides.children.length;

   function showNextSlide() {
      currentIndex = (currentIndex + 5) % totalSlides;
      slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
   }

   setInterval(showNextSlide, 9000); // Change slide every 4 seconds
});