const btnCong = document.getElementById('btn__add');
const btnTru = document.getElementById('btn__sub');
const inputNumber = document.getElementById('input__number');

console.log(btnCong, inputNumber, btnTru);

btnTru.addEventListener('click', () => {
    inputNumber.value = parseInt(inputNumber.value) - 1;
});

btnCong.addEventListener('click', () => {
    inputNumber.value = parseInt(inputNumber.value) + 1;
});