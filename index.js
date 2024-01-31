"use strict";
const bubbleMaker = () => {
    const bubble = document.createElement('span');
    bubble.classList.add('bubble');
    document.body.appendChild(bubble);
    // taille compris de la bulle entre 100 et 300
    const size = Math.random() * 200 + 100 + "px";
    console.log(size);
    bubble.style.height = size;
    bubble.style.width = size;
    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random() * 100 + "%";
    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    bubble.style.setProperty('--left', Math.random() * 100 * plusMinus + "%");
    setTimeout(() => {
        bubble.remove();
    }, 8000);
};
setInterval(bubbleMaker, 3000);
document.body.addEventListener('click', (e) => {
    let counter = 0;
    let p = document.createElement('p');
    e.target.remove();
    counter++;
    p = counter;
    document.body.appendChild(p);
    console.log(counter);
});
