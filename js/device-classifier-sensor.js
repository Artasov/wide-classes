window.addEventListener('load', function () {
    let hasTouchScreen = false;
    if ("maxTouchPoints" in navigator) {
        hasTouchScreen = navigator.maxTouchPoints > 0;
    } else if ("msMaxTouchPoints" in navigator) {
        hasTouchScreen = navigator.msMaxTouchPoints > 0;
    } else {
        let mQ = window.matchMedia && matchMedia("(pointer:coarse)");
        if (mQ && mQ.media === "(pointer:coarse)") {
            hasTouchScreen = !!mQ.matches;
        } else if ('ontouchstart' in window) {
            hasTouchScreen = true;
        } else if (window.DocumentTouch && document instanceof DocumentTouch) {
            hasTouchScreen = true;
        } else if (window.navigator.msPointerEnabled) {
            hasTouchScreen = true;
        }
    }
    if (hasTouchScreen) {
        document.body.classList.add('_touch');
    } else {
        document.body.classList.add('_pc');
    }
});
