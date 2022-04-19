const btnIncrease = document.getElementById('btn-increase');
const btnReset = document.getElementById('btn-reset');
const btnDecrease = document.getElementById('btn-decrease');
const value = document.querySelector('.value ');
let count = 0;

btnIncrease.addEventListener('click', function () {

    count++;
    value.textContent = count;
    if (count > 0) {
        value.style.color = "green";
    }
});
btnDecrease.addEventListener('click', function () {
    count--;
    value.textContent = count;
    if (count < 0) {
        value.style.color = "red";
    }
});
btnReset.addEventListener('click', function () {
    count = 0;
    value.textContent = 0;
    value.style.color = "black";

});





