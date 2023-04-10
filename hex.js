const colors = ['#E9F1FA','#323232', '#DDD0C8', '#f15025'];

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