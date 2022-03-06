import KIWI from './kiwi.jpg';

function addImage() {

    const img = document.createElement('img');
    img.height = 300;
    img.src = KIWI;
    img.alt = 'kiwi';
    const body = document.querySelector('body');
    body.appendChild(img);

}

export default addImage;