// slider js

let slideIndex = 1;
showSlides(slideIndex);

// next and previous controls

// thumbnails images controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for( i = 0; i < slides.length; i++ ) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
    
}