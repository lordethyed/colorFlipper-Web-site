const colors = ['green','red', 'rgba(132,122,200)', '#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
        const randomNumber = getRundomNumber();
        document.body.style.backgroundColor = colors[randomNumber];
        color.textContent = colors[randomNumber];
    })

function getRundomNumber() {
    return Math.floor(Math.random() * colors.length);
}