document.addEventListener('DOMContentLoaded', function() {
    const words = ["student", "developer", "programmer", "enthusiast"];
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

