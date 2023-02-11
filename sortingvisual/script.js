let bar = document.getElementById('bar');

for (let i = 0; i < 100; i++) {
    let box = document.createElement('p')
    box.className = 'boxClass';
    // box.innerText = "box";
    let hight = Math.floor(Math.random() * 500);
    // let height = Math.floor(Math.random() * 100) + 100;
    box.style.height = hight + 'px';
    // box.style.height = '550px';
    bar.appendChild(box);
}