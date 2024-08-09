document.addEventListener('DOMContentLoaded', function() {
    const words = ["student", "developer", "problem solver", "dreamer", "software engineer", "great guy", "leader", "gamer"];
    let i = 0;
    let timer;

    function typingEffect() {
        let word = words[i].split("");
        let loopTyping = function() {
            if (word.length > 0) {
                document.getElementById('changing-text').innerHTML += word.shift();
            } else {
                setTimeout(deletingEffect, 1500);
                return false;
            }
            timer = setTimeout(loopTyping, 200);
        };
        loopTyping();
    }

    function deletingEffect() {
        let word = words[i].split("");
        let loopDeleting = function() {
            if (word.length > 0) {
                word.pop();
                document.getElementById('changing-text').innerHTML = word.join("");
            } else {
                if (words.length > (i + 1)) {
                    i++;
                } else {
                    i = 0;
                }
                setTimeout(typingEffect, 500);
                return false;
            }
            timer = setTimeout(loopDeleting, 100);
        };
        loopDeleting();
    }

    typingEffect();
});





document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('#carouselExampleCaptions');
    const prevArrow = document.querySelector('.carousel-control-prev-icon');
    const nextArrow = document.querySelector('.carousel-control-next-icon');
    const indicators = document.querySelectorAll('.carousel-indicators button');

    if (!carousel) {
        console.error('Carousel element not found');
        return;
    }

    carousel.addEventListener('slid.bs.carousel', function () {
        const activeSlide = carousel.querySelector('.carousel-item.active');
        const isSecondSlide = activeSlide === carousel.querySelectorAll('.carousel-item')[1];
        const isFirstSlide = activeSlide === carousel.querySelectorAll('.carousel-item')[0];
        const isDarkSlide = activeSlide.classList.contains('dark-slide');

        // Apply transition to arrows
        prevArrow.style.transition = 'filter 0.5s ease';
        nextArrow.style.transition = 'filter 0.5s ease';

        if (isFirstSlide) {
            prevArrow.style.filter = 'invert(1)';
            nextArrow.style.filter = 'invert(1)';
        } else if (isDarkSlide) {
            prevArrow.style.filter = 'invert(0)';
            nextArrow.style.filter = 'invert(0)';
        } else {
            prevArrow.style.filter = 'invert(0)';
            nextArrow.style.filter = 'invert(0)';
        }

        indicators.forEach(indicator => {
            indicator.style.transition = 'filter 0.5s ease';
            if (isSecondSlide) {
                indicator.classList.add('no-filter');
            } else {
                indicator.classList.remove('no-filter');
            }
        });
    });
});






