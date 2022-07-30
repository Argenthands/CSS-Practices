const preferedColorScheme = window.matchMedia(
    '(prefers-color-scheme: dark)'
).matches ? 'dark' : 'light';
//console.log(preferedColorScheme)
const slider = document.getElementById('slider');

const setThheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

slider.addEventListener('click', () => {
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setThheme(switchToTheme);
})

setThheme(localStorage.getItem('theme') || preferedColorScheme);

/* Script input range value*/
function changeRangeValue(value) {
    document.getElementById('range-value').innerHTML = value;
}
document.getElementsByClassName('range')[0].addEventListener('input', function () {
    changeRangeValue(this.value);
}, false);

//const rangeValue = document.getElementsByClassName('range')[0].value;
