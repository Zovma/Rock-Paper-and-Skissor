window.onload = function () {
    document.getElementById('butn').onclick = changeClassName
}
let p = 0;
let c = 0;


function changePng() {
    let pngL = document.getElementById("leftPng");
    let pngR = document.getElementById("rightPng");
    let randomMathPlayer = getRandomIntInclusive(0, 2)
    let randomMathComputer = getRandomIntInclusive(0, 2)


    switch (randomMathPlayer) {
        case 0:
            pngL.innerHTML = "<img src='./svg/rock.png' width = '200em'>"
            break;
        case 1:
            pngL.innerHTML = "<img src='./svg/paper.png' width = '200em'>"
            break;
        case 2:
            pngL.innerHTML = "<img src='./svg/skissor.jpg' width = '200em'>"
            break;
    }

    switch (randomMathComputer) {
        case 0:
            pngR.innerHTML = "<img src='./svg/rock.png' width = '200em'>"
            break;
        case 1:
            pngR.innerHTML = "<img src='./svg/paper.png' width = '200em'>"
            break;
        case 2:
            pngR.innerHTML = "<img src='./svg/skissor.jpg' width = '200em'>"
            break;
    }
    // 0 = rock
    // 1 = paper
    // 2 = skissor
    if (randomMathPlayer == 0 && randomMathComputer == 1) {
        p++
        document.querySelector("#countC").innerHTML = p
    }
    else if (randomMathPlayer == 0 && randomMathComputer == 2) {
        c++
        document.querySelector("#countC").innerHTML = c
    }
    else if (randomMathPlayer == 1 && randomMathComputer == 0) {
        c++
        document.querySelector("#countC").innerHTML = c
    }
    else if (randomMathPlayer == 1 && randomMathComputer == 2) {
        p++
        document.querySelector("#countP").innerHTML = p
    }
    else if (randomMathPlayer == 2 && randomMathComputer == 0) {
        p++
        document.querySelector("#countP").innerHTML = p
    }
    else if (randomMathPlayer == 2 && randomMathComputer == 1) {
        c++
        document.querySelector("#countC").innerHTML = c
    }
}

let e = document.getElementById("leftPng");
e.addEventListener("animationend", listener, false);

function listener() {
    changePng()
    deleteClassName()
    changeValueButton()

}

function changeClassName() {
    let l = document.getElementById('leftPng')
    let r = document.getElementById('rightPng')
    l.className = 'runAnimation';
    r.className = 'runAnimation';
    let pngL = document.getElementById("leftPng");
    let pngR = document.getElementById("rightPng");
    pngL.innerHTML = "<img src='./svg/vopros.png' width = '200em'>"
    pngR.innerHTML = "<img src='./svg/vopros.png' width = '200em'>"


}
function deleteClassName() {
    let l = document.getElementById('leftPng')
    let r = document.getElementById('rightPng')
    l.classList.remove('runAnimation')
    r.classList.remove('runAnimation')

}

function changeValueButton() {
    document.getElementById('butn').value = 'Play again'
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function pageWidth() {
    let pageWidth = document.documentElement.scrollWidth
    if (pageWidth < 1080) {
        document.getElementById('leftPng').style.left = '7%'
        document.getElementById('rightPng').style.right = '18%'
    }
    if (pageWidth < 650) {
        document.getElementById('leftPng').style.left = '2%'
        document.getElementById('rightPng').style.right = '22%'
        document.getElementById('butn').style.top = '80%'

    }
}


setTimeout(pageWidth, 100)

// function openNextGame() {
//     // первый параметр - html страница, которая будет загружена в новом окне.
//     // второй параметр - имя окна
//     // третий параметр - список дополнительных параметров (необязательный)
//     button = document.createElement('input')
//     button.type = 'button';
//     button.value = 'Next game';

//     button.addEventListener('click', function () {
//         window.open("buttonRun.html", "buttonRun");
//     }, false);
//     document.querySelector('#nextGame').appendChild(button)
// }


// setTimeout(openNextGame, 3000)

// setTimeout(WH, 100);

// function WH() {
//     let element = document.createElement('p')
//     let width = document.documentElement.scrollWidth
//     let height = document.documentElement.scrollHeight
//     element.innerHTML = width + ' X ' + height  
//     document.body.appendChild(element);
// }