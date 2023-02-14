const slidePage = document.querySelector(".slidepage");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".previous1");
const nextBtnSec = document.querySelector(".next1");
const prevBtnThird = document.querySelector(".previous2");
const nextBtnThird = document.querySelector(".next2");
const prevBtnFourth = document.querySelector(".previous3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let text1 = document.getElementById('text1');
let phonenumber = document.getElementById('phonenumber');
let dob = document.getElementById('dob');
let inputt = document.getElementById('inputt');
let password1 = document.getElementById('password1');

let current = 1;

nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});

submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function(){
    alert(`${fname.value} 
            ${lname.value}
            ${text1.value}
            ${phonenumber.value}
            ${dob.value}
            ${inputt.value}
            ${password1.value}
            `)
    
    location.reload();
  },100);
    
   
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
