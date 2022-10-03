let pupil = document.querySelector('.pupil');
let eye = document.querySelector('.eye');

document.onmousemove = (event) => {
    let x = event.clientX * 100 / window.innerWidth + "%";
    let y = event.clientY * 100 / window.innerHeight + "%";
    pupil.style.left = x;
    pupil.style.top = y;
    pupil.style.transform = "translate(-" + x + ",-" + y + ")";
}