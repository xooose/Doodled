function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function displayName() {
    const name = getQueryParam('name') || 'Guest';

    const nameDisplayOverlay = document.getElementById('nameDisplayOverlay');
    const nameDisplayHeader = document.getElementById('nameDisplayHeader');

    if (nameDisplayOverlay) {
        nameDisplayOverlay.textContent = name;
    }

    if (nameDisplayHeader) {
        nameDisplayHeader.textContent = name;
    }
}

window.addEventListener('load', displayName);
