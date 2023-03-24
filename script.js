let letterSearch = document.querySelector('.letter-search');
let letterContainer = document.querySelector('.letter-container');
let butt = document.querySelector('.butt');
let closeCont = document.querySelector('.close-cont');
let frontOuter, backOuter, cardOuter, card;
let letter = document.querySelectorAll('.letter');
let arr = [];
let play = document.querySelector('.play');
let colorsTab = document.querySelector('.colorsTab');
let menu = document.querySelector('.menu')

play.onclick = () => menu.style = 'visibility:hidden;opacity:0; ';
let currentColor = document.querySelector('.current-color');
let colorContainer = document.querySelector('.color-container');

let colors = ['GRAY', 'BLACK', 'DARKGRAY', 'LIGHTGRAY', 'WHITE', 'WHITESMOKE', 'SILVER', 'STEELBLUE', 'RED', 'ORANGE', 'GREEN', 'DARKORANGE', 'LIME', 'FORESTGREEN', 'HOTPINK', 'GOLD', 'BROWN', 'CYAN', 'CORAL', 'DARKCYAN', 'DARKORCHID', 'DARKMAGENTA', 'VIOLET', 'DEEPPINK', 'DEEPSKYBLUE', 'MAGENTA', 'YELLOW', 'OLIVE', 'NAVY', 'PERU', 'PLUM', 'SALMON', 'SNOW', 'TEAL', 'WHEAT', 'THISTLE', 'TAN', 'SIENNA', 'YELLOWGREEN', 'SADDLEBROWN', 'OLDLACE', 'MOCCASIN', 'MINTCREAM', 'LINEN', 'MAROON', 'AZURE', 'BISQUE', 'ALICEBLUE'];

let x = 0;

let gameOver = document.querySelector('.game-over');
let Try = document.querySelector('.try');
let palette = document.querySelector('.palette');
let AboutGame = document.querySelector('.about');
let AboutBlock = document.querySelector('.about-block');
let Closeblock = document.querySelector('.close-block');

colorsTab.onclick = () => colorContainer.style.display = 'grid'
closeCont.onclick = () => colorContainer.style.display = 'none'
let quit = document.querySelector('.quit');
AboutGame.onclick = () => AboutBlock.style.clipPath = 'circle(140.1% at 50% 50%)' 
Closeblock.onclick = () => AboutBlock.style.clipPath = 'circle(0.0% at 50% 50%)' 

quit.onclick = () => {
    window.close()
}
let stepPoint = 5;
step.innerHTML = `Step : ${stepPoint}`

function createDivColors() {
    colors.forEach(item => {
        let block = document.createElement('div');
        colorContainer.appendChild(block);
        block.className = 'block';
        let colorText = document.createElement('h2');
        colorText.className = 'colorText'
        block.appendChild(colorText);
        colorText.innerText = item;
        let colorBlock = document.createElement('div');
        colorBlock.className = 'colorBlock';
        block.appendChild(colorBlock);
        colorBlock.style.background = item;
    })
}

createDivColors()

function write() {
    for (i = 0; i < colors[x].length; i++) {
        card = document.createElement('div');
        card.className = 'card';
        let front = document.createElement('div');
        front.className = 'card-front';
        card.appendChild(front);
        let back = document.createElement('div');
        back.className = 'card-back'
        card.appendChild(back);
        back.innerText = colors[x][i]
        letterContainer.appendChild(card);
        currentColor.style.background = colors[x]
    }
    frontOuter = document.querySelectorAll('.card-front');
    backOuter = document.querySelectorAll('.card-back');
    card = document.querySelectorAll('.card');
    for (let i = 0; i < letter.length; i++) {
        letter[i].classList.remove('activeLetter');
    }
    palette.style.pointerEvents = 'unset';
    palette.style.filter = 'none';
}




letter.forEach((item, index) => {
    item.onclick = () => {
        if (colors[x].indexOf(item.innerText) == -1) {
            stepPoint--;
            step.innerText = `Step : ${stepPoint}`;
            if (stepPoint <= 0) {
                gameOver.style = 'visibility:visible; opacity: 1'
                Try.onclick = () => {
                    gameOver.style = 'visibility:hidden; opacity: 0'
                    arr = [];
                    letterContainer.innerHTML = '';
                    stepPoint = 5;
                    step.innerHTML = `Step : ${stepPoint}`
                    x = 0;
                    write()
                }
            }
        }

        item.classList.add('activeLetter')
        for (let i = 0; i < backOuter.length; i++) {
            if (item.innerText == backOuter[i].innerText) {
                backOuter[i].style.transform = 'perspective(500px) rotateY(360deg)'
                frontOuter[i].style.transform = 'perspective(500px) rotateY(180deg)'
                arr.push(backOuter[i]);
                if (arr.length == colors[x].length) {
                    x++;
                    arr = [];
                    setTimeout(() => {
                        letterContainer.style.opacity = 0
                    }, 2000)
                    setTimeout(() => {
                        letterContainer.innerHTML = '';
                        write();
                    }, 3000)
                    setTimeout(() => {
                        letterContainer.style.opacity = 1
                        letterContainer.style.filter = 'brightness(1)';
                        stepPoint = 5;
                        step.innerHTML = `Step : ${stepPoint}`
                    }, 4000)
                }
            }
            if (item.innerText == backOuter[0].innerText) {
                palette.style.pointerEvents = 'none';
                palette.style.filter = 'grayscale(100%)'
            }

        }
    }
})
write();

palette.onclick = () => {
    backOuter[0].style.transform = 'perspective(500px) rotateY(360deg)'
    frontOuter[0].style.transform = 'perspective(500px) rotateY(180deg)'
    arr.push(backOuter[0].innerText);
    palette.style.pointerEvents = 'none';
    palette.style.filter = 'grayscale(100%)'
}


//let baraban = document.querySelector('.baraban');
//let spin = document.querySelector('.spin');
//let spinRotate = Math.round(Math.random() * 720);
//let barabanPoint = document.querySelectorAll('.baraban-point');
//let arrow = document.querySelector('.arrow');
//baraban.onclick = e => {
//    baraban.style.transform = `rotate(${spinRotate}deg)`;
//    barabanPoint.forEach(item => {
//        let itemRect = item.getBoundingClientRect();
//        console.log(itemRect.left)
//        if (itemRect.top == baraban.offsetTop && itemRect.left > arrow.offsetLeft) {
//            console.log('+')
//        }
//    })
//}
