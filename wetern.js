//for img
console.log("hello world");
const slides = document.querySelectorAll(".slide");
console.log(slides);
let counter = 0;
slides.forEach (
    (slide,index) => {
        slide.style.left = `${index * 100}%`;
    }
)
const GoPrev = () => {
    if(counter!=0){
        counter--;
        SlideImage();
    }
}
const GoNext = () => {
    if(counter<slides.length-1){
        counter++;
        SlideImage();
    }
}
const SlideImage = () => {
    slides.forEach(
        (slide) => {
        slide.style.transform = `TranslateX(-${counter * 100}%)`;
        }
    )
}
//for divs
const Sweeps = document.querySelectorAll(".sweep");
console.log(Sweeps);
let count = 0;
Sweeps.forEach(
    (sweep,index) => {
        sweep.style.left = `${index * 100}%`
    }
)
const SweepPrev = () => {
    if(count!=0){
        count--;
        // alert("hii");
        SweepDiv();
    }
}
const SweepNext = () => {
    if (count<Sweeps.length-1){
        count++;
        // alert("hiii")
        SweepDiv();
    }
}
const SweepDiv = () => {
    Sweeps.forEach(
        (sweep) => {
            sweep.style.transform = `TranslateX(-${count * 100}%)` 
        }
    )
}
//lightmode

let lightmode = localStorage.getItem('lightmode');
const themeSwitch = document.getElementById('theme-switch');

const enableLightmode = () => {
    document.body.classList.add('lightmode');
    localStorage.setItem('lightmode','active');
}
const disableLightmode = () => {
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode',null);
}
if(lightmode==="active") enableLightmode()

themeSwitch.addEventListener("click", () => {
    lightmode = localStorage.getItem('lightmode');
    lightmode !== "active" ? enableLightmode() : disableLightmode()
})
