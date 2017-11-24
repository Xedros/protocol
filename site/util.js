'use strict';

module.exports = {
    scrollToHash,
};

function scrollToHash(hash) {
    if (!hash) {
        return;
    }
    setTimeout(() => {
        try {
            const el = document.querySelector(hash);
            if (el) {
                el.scrollIntoView();
            }
        } catch (err) {}
    }, 0);
}
