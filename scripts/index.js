let inputName = document.querySelector('.input__name');
let inputDate = document.querySelector('.input__date');

let previewName = document.querySelector('.preview__name--second');
let previewDate = document.querySelector('.preview__date');

inputName.addEventListener('keyup', () => {
    previewName.innerHTML = inputName.value;
});

inputDate.addEventListener('change', () => {
    previewDate.innerHTML = inputDate.value;
});