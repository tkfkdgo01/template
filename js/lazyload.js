document.addEventListener("DOMContentLoaded", function() {
    let lazyDivs = document.querySelectorAll('.lazy-bg');
    
    lazyDivs.forEach(function(div) {
        let img = new Image();
        img.onload = function() {
            div.style.backgroundImage = `url(${div.getAttribute('data-bg')})`;
            div.classList.add('loaded');
        };
        img.src = div.getAttribute('data-bg');
    });
});