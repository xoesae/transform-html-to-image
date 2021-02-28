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

let btnGenerate = document.querySelector('.generate-image');
let btnDownload = document.querySelector('.download');

btnGenerate.addEventListener('click', () =>  {
    html2canvas(document.querySelector(".preview")).then(canvas => {
        btnDownload.href = canvas.toDataURL('image/png');
        btnDownload.download =  'minha-imagem';
        btnDownload.click();
    })
});