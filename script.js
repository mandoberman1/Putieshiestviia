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

let luk1 = document.querySelector('.luk-feedback1')
let jes = document.querySelector('.jes-feedback')
let luk2 = document.querySelector('.luk-feedback2')

let currentPage = location.pathname.split('/').pop();

if (luk1.getAttribute("href") === currentPage) {
    luk1.classList.add("active");
    luk1.classList.remove("noactive");
} else {
    luk1.classList.remove("active");
    luk1.classList.add("noactive");
}

if (jes.getAttribute("href") === currentPage) {
    jes.classList.add("active");
    jes.classList.remove("noactive");
} else {
    jes.classList.remove("active");
    jes.classList.add("noactive");
}

if (luk2.getAttribute("href") === currentPage) {
    luk2.classList.add("active");
    luk2.classList.remove("noactive");
} else {
    luk2.classList.remove("active");
    luk2.classList.add("noactive");
}