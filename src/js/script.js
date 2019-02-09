const helloBtn = document.getElementById('js-hello');
const landingPage = document.getElementById('js-landingpage');
const VerticalTabs = document.getElementById('js-tabs-info-wrapper');
const btnClose = document.getElementById('js-btn-close');
const contentBlock = document.getElementById('content-block');

const backgroundModal = document.getElementById('js-modal');
const closeModalBtn = document.getElementById('js-close-modal');

const portFolioContent = document.getElementById('js-wrapper-portfolio');

helloBtn.addEventListener('click', function () {
    landingPage.setAttribute('class', 'landingPageMoves');
    VerticalTabs.setAttribute('class', 'tabs-info-wrapper-showing');
    contentBlock.setAttribute('class', 'content-page-showing');
    portFolioContent.setAttribute('class', 'content-inside-wrapper-showing');
});

btnClose.addEventListener('click', function () {
    landingPage.setAttribute('class', 'landing-page-wrapper');
    VerticalTabs.setAttribute('class', 'tabs-info-wrapper-hidden');
    contentBlock.setAttribute('class', 'content-page-hidden');
    portFolioContent.setAttribute('class', 'content-inside-wrapper-hidden');
});

const imgPortArray = [
    imgPort1 = {
        src: '../img/canvas_game_port1.jpg',
        alt: 'canvas mini game picture',
    },
    imgPort2 = {
        src: '../img/derrota_palabra_port1.jpg',
        alt: 'derrota la palabra game picture',
    },
    imgPort3 = {
        src: '../img/tiny_one_port1.jpg',
        alt: 'tiny one picture',
    },
    imgPort4 = {
        src: '../img/folio_port1.jpg',
        alt: 'folio picture',
    },
    imgPort5 = {
        src: '../img/blaz_port1.jpg',
        alt: 'blaz game picture',
    },
    imgPort6 = {
        src: '../img/cuda_port1.jpg',
        alt: 'cuda game picture',
    },
];

closeModalBtn.addEventListener('click', function () {
    backgroundModal.setAttribute('class', 'modal-content-hide');
});

imgPortArray.forEach(element => {
    const elementSrc = element.src;
    const elementAlt = element.alt;
    const elementPort = document.createElement('img');
    elementPort.setAttribute('src', elementSrc);
    elementPort.setAttribute('alt', elementAlt);
    elementPort.setAttribute('class', 'gallery-port');
    elementPort.addEventListener('click', function () {

        const modalElement = document.createElement('img');

        modalElement.setAttribute('src', elementSrc);
        modalElement.setAttribute('class', 'modal-img-display');

        backgroundModal.setAttribute('class', 'modal-content-display');

        closeModalBtn.addEventListener('click', function () {
            backgroundModal.setAttribute('class', 'modal-content-hide');
        });
        
        backgroundModal.appendChild(modalElement);
    });
    portFolioContent.appendChild(elementPort);
});
