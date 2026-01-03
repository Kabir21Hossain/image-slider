const slides=document.getElementById("slides");
const images=slides.children;
const dotsContainer=document.getElementById("dots");
const counter=document.getElementById("counter");
const slider=document.getElementById("slider");

let index=0;
let interval;

const total=images.length;

for(let i = 0 ; i < total ; i++){
    const dot=document.createElement("span");
    dot.classList.add("dot");
    dot.onclick=()=>goToSlide(i);
    dotsContainer.appendChild(dot);

}

function updateSlider(){
    slides.style.transform=`translateX(-${index*100}%)`;
    updateDots();
    counter.textContent=`${index+1}/${total}`;

}

function updateDots(){
    document.querySelectorAll(".dot").forEach((dot,i)=>{
        dot.classList.toggle("active",i===index);
    });
}

function nextSlide(){
    index=(index+1)%total;
    updateSlider();
}

function prevSlide(){
    index=(index-1+total)%total;
    updateSlider();

}

function goToSlide(i){
    index=i;
    updateSlider();
}

function startAutoSlide(){
    interval=setInterval(nextSlide,2000);
}

function stopSlide(){
    clearInterval(interval);
}

slider.addEventListener("mouseenter",stopAutoSlide);
slider.addEventListener("mouseleave",startAutoSlide);

document.addEventListener("keydown",e=>{
    if(e.key==="ArrowRight")nextSlide();
    if(e.key==="ArrowLeft")prevSlide();
});


updateSlider();
startAutoSlide();