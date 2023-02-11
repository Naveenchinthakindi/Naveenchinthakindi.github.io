// const slidePage = document.querySelector(".slide-page");
// const nextBtnFirst = document.querySelector(".firstNext");
// const prevBtnSec = document.querySelector(".prev-1");

// nextBtnFirst.addEventListener("click", function (event) {
//     event.preventDefault();
//     slidePage.style.marginLeft = "-25%";
//     bullet[current - 1].classList.add("active");
//     progressCheck[current - 1].classList.add("active");
//     progressText[current - 1].classList.add("active");
//     current += 1;
// });

let button = document.querySelector('.btnn');
let fname = document.querySelector('fname');
let lname = document.querySelector('lname');
let phone = document.querySelector('phone');
let email = document.querySelector('email');
let gender = document.querySelector('gender');
let dob = document.querySelector('dob');


button.addEventListener('onclick', myfunction);
function myfunction(e) {
    e.preventDefault();
    console.log(fname.innerHTML);
    console.log(lname.innerText);
}