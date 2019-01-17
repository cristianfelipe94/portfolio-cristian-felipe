const helloBtn = document.getElementById('js-hello');
const landingPage = document.getElementById('js-landingpage');
const VerticalTabs = document.getElementById('js-tabs-info-wrapper');
const btnClose = document.getElementById('js-btn-close');

helloBtn.addEventListener('click', function () {
    landingPage.setAttribute('class', 'landingPageMoves');
    VerticalTabs.setAttribute('class', 'tabs-info-wrapper-showing');
});

btnClose.addEventListener('click', function () {
    console.log('closing');
    landingPage.setAttribute('class', 'landing-page-wrapper');
    VerticalTabs.setAttribute('class', 'tabs-info-wrapper-hidden');
});

const varSwump = new Swump();
