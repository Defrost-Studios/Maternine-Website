/*This part of the code assigns the elments to objects that are used in the functions*/
const track = document.getElementById('carouselTrack');
const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;

/*This updates the slides in the direction needed*/
function updateSlide(){
    console.log("Current index", currentIndex);
    console.log(track);
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}
/* This moves the slides in a direction, the input is negative for left and positive for right*/
function moveSlide(direction){
    /* This part of the code also wraps the images if it reaches the end 
    NOTE:This part may need to be tested*/
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    updateSlide();
}
/* This automatically scrolls right if there is no interaction*/
setInterval(() => {
    moveSlide(1);
},15000);
