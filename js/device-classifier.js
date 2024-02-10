window.addEventListener('load', function () {
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        document.body.classList.add('_touch');
    } else {
        document.body.classList.add('_pc');
    }
});