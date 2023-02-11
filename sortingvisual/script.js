let bar = document.getElementById('bar');
let btnn = document.getElementById('btnn');
console.log(btnn)
for (let i = 0; i < 100; i++) {
    let box = document.createElement('p')
    box.className = 'boxClass';
    let hight = Math.floor(Math.random() * 500);
    box.style.height = hight + 'px';
    bar.appendChild(box);
    console.log(bar);
}
btnn.addEventListener('click', myfunction);
function myfunction(e) {
    e.preventDefault()
    for (let i = 0; i < 100; i++) {
        let box = document.querySelector('.boxClass');
        bar.removeChild(box);

    }
    // console.log(bars())
    for (let i = 0; i < 100; i++) {
        let box = document.createElement('p')
        box.className = 'boxClass';
        let hight = Math.floor(Math.random() * 500);
        box.style.height = hight + 'px';
        bar.appendChild(box);
        console.log(bar);
    }


}