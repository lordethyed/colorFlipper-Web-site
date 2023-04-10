const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
        const randomNumber = getRundomNumber();
        const randomCode = '#' + randomNumber.toString(16);
        document.body.style.backgroundColor = randomCode;
        color.textContent = randomCode;
    })

function getRundomNumber() {
    return Math.floor(Math.random() * 10000);
}