function menuHide(){
    let hamMenu = document.getElementById("menu")
    console.log(hamMenu)
    hamMenu.classList.toggle("hidden")
}

let currentSlide = 1;
let slides = document.getElementsByClassName("slide");
showSlide(1);


function plusSlides(index){
    showSlide(currentSlide+=index);
    console.log("interval");
}
function showSlide(index){
    if(index > slides.length){
        currentSlide = 1
    }
    if(index < 1){
        currentSlide = slides.length;
    }
    for(let i = 0; i < slides.length; ++i){
        slides[i].style.display = 'none';
    }
    slides[currentSlide - 1].style.display = 'block';
}

const interval = setInterval(function(){
    plusSlides(1)
}, 5000)