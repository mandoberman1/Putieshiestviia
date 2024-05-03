(function(d, w, c) {
    w.ChatraID = 'iGhDBX3PuGuvfaGbW';
    var s = d.createElement('script');
    w[c] = w[c] || function() {
        (w[c].q = w[c].q || []).push(arguments);
    };
    s.async = true;
    s.src = 'https://call.chatra.io/chatra.js';
    if (d.head) d.head.appendChild(s);
})(document, window, 'Chatra');

let luk = document.querySelector('.luk-feedback')
let jes = document.querySelector('.jes-feedback')
let rom = document.querySelector('.rom-feedback')

let currentPage = location.pathname.split('/').pop();

if (luk.getAttribute("href") === currentPage) {
luk.classList.add("active");
} else {
luk.classList.remove("active");
}

if (jes.getAttribute("href") === currentPage) {
jes.classList.add("active");
} else {
jes.classList.remove("active");
}

if (rom.getAttribute("href") === currentPage) {
rom.classList.add("active");
} else {
rom.classList.remove("active");
}
