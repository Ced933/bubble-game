let counterDisplay:any = document.querySelector('h3')
let counter:number = 0;


const bubbleMaker = ()=>{

    const bubble = document.createElement('span');
    bubble.classList.add('bubble');
    document.body.appendChild(bubble);
    // Taille compris de la bulle entre 100 et 300
    const size:number | string = Math.random() * 200 + 100 + "px";
    // On veut que la bulle soit un carré et on lui rajoutera l'arrondi en css size est dynamique car on veut des bulles de toutes tailles
    bubble.style.height= size;
    bubble.style.width= size;
    // La position de bulle dans le body en top et en left 
    bubble.style.top = Math.random()*100 + 50 +"%";
    bubble.style.left = Math.random()*100+"%";
    // plusMinus va servir à avoir des chiffres positif et negatif pour fluctuer la direction des ballons à gauche ou à droite 
    const plusMinus = Math.random() > 0.5 ? 1 : -1
    bubble.style.setProperty('--left', Math.random()*100 * plusMinus +"%")

    setTimeout(()=>{
        // au bout de 8s(durée de l'animation ds le css) tu fais disparaître le balon créé 
        bubble.remove()
    },8000)

    bubble.addEventListener('click',()=>{
        // à chaque ballon cliqué tu le fais disparaître et tu rajoute +1 dans le counter  
        counter++;
        counterDisplay.textContent = counter
        bubble.remove();
    })
};



setInterval(bubbleMaker,3000);

