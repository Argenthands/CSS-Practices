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
const inputRange = document.getElementsByClassName('range')
console.log('range',inputRange)