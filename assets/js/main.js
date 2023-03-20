const containerEl = document.querySelector(".main_container")
const selectEl = document.querySelector("select")
const buttonEl = document.querySelector(".my_btn")
const arrayBomb = [];
const arrayCellGood = [];
let cellsGood = 0;

const easy = 100;
const medium = 81;
const hard = 49;


//Declare Function to create the grid

function difficulty(select_difficulty) {
    for (let i = 1; i <= select_difficulty; i++) {
        let classToAdd;
        if (selectEl.value == "easy_lv") {
            classToAdd = "cell";
        } else if (selectEl.value == "medium_lv") {
            classToAdd = "cell2";
        } else {
            classToAdd = "cell3";
        }
        containerEl.innerHTML += `<div class="single_cell fs-3 d-flex justify-content-center align-items-center ${classToAdd}">${i}</div>`;
        ;
    }
}
// ---------------------------- Other possibility of function

// function difficulty(select_difficulty) {
//     for (let i = 1; i <= select_difficulty; i++) {
//         let cell = `<div class="single_cell fs-3 d-flex justify-content-center align-items-center">${i}</div>`;
//         containerEl.innerHTML +=  cell;
//         let singleCellEl = document.querySelector(".single_cell:last-child");

//         if (selectEl.value == "easy_lv") {
//             singleCellEl.classList.add("cell");
//         } else if (selectEl.value == "medium_lv") {
//             singleCellEl.classList.add("cell2");
//         } else {
//             singleCellEl.classList.add("cell3");
//         }
//     }
// }
// ---------------------- Third possibility of function

// function difficulty(select_difficulty) {
//     for (let i = 1; i <= select_difficulty; i++) {
//         if (selectEl.value == "easy_lv") {
//             containerEl.innerHTML += `<div class="single_cell cell fs-3 d-flex justify-content-center align-items-center">${i}</div>`;
//         } else if (selectEl.value == "medium_lv") {
//             containerEl.innerHTML += `<div class="single_cell cell2 fs-3 d-flex justify-content-center align-items-center">${i}</div>`;
//         } else {
//             containerEl.innerHTML += `<div class="single_cell cell3 fs-3 d-flex justify-content-center align-items-center">${i}</div>`;
//         }
//     }}

// ----------------------------


//declair Function to add 16 bomb to arrayBomb

function arrayBombFunction(arrayBomb) {
    while (arrayBomb.length < 16) {
        let singleBomb;
        switch (selectEl.value) {
            case "easy_lv":
                singleBomb = Math.floor(Math.random() * 100) + 1;
                break;
            case "easy_medium":
                singleBomb = Math.floor(Math.random() * 81) + 1;
                break;
            default:
                singleBomb = Math.floor(Math.random() * 49) + 1;
        }
        if (!arrayBomb.includes(singleBomb)) {
            arrayBomb.push(singleBomb)
         }
    }
    console.log(arrayBomb)
}

//Event to link btn play to the creation of specific grids
buttonEl.addEventListener("click", function () {
    // I reset everything
    containerEl.innerHTML = "";
    arrayBomb.splice(0, 16);
    arrayCellGood.splice(0,100)
    cellsGood = 0;

    if (selectEl.value == "easy_lv") {
        difficulty(easy);
    } else if (selectEl.value == "medium_lv") {
        difficulty(medium);
    } else {
        difficulty(hard);
    }
    const arrayCell = document.querySelectorAll(".single_cell")
    changeBackground(arrayCell, arrayBomb,cellsGood)
    arrayBombFunction(arrayBomb);
    
    
})

//Declair Function to add addEventListener to cell of grid
function changeBackground(arrayElement,arrayBomb,cellsGood) {
    for (let i = 0; i < arrayElement.length; i++) {
        const singleCell = arrayElement[i]
        singleCell.addEventListener("click", function () {
            this.classList.add("click_background")
            console.log(this.innerText)
            console.log(arrayElement.length - arrayBomb.length);
                console.log(cellsGood);
            if(!arrayBomb.includes(Number(this.innerText)) && !arrayCellGood.includes(this.innerText)) {
                arrayCellGood.push(this.innerText);
                cellsGood++;
                console.log(cellsGood)
                console.log(arrayCellGood)
                if (cellsGood == arrayElement.length - arrayBomb.length) {
                const imageWin = `  <div class="bomb_you_lose">
                <img src="./assets/img/istockphoto-587803682-612x612.jpg" alt="artificere_you_win">
                <div class="text-white">YOU WIN</div>
                </div>`
                document.querySelector(".main_container").insertAdjacentHTML("beforeend", imageWin)}

            }  else if (arrayCellGood.includes(this.innerText) && !arrayBomb.includes(Number(this.innerText))) {}
            else {
                const imageBomb = `  <div class="bomb_you_lose">
                <img src="./assets/img/sasdad_preview_rev_1.png" alt=" bomba, you lose">
                <div class="text-white">YOU LOSE</div>
                </div>`
                document.querySelector(".main_container").insertAdjacentHTML("beforeend", imageBomb)

            }})
    }
}


//creo un array bombe vuoto
//creo una variabile vuota caselle buone
//creo 16 numeri casuali all'interno dell'array con un if range legato ai livelli
//nell'addvent listenr changecolor 
// aggiungo un if il numero cliccato è === ad un numero presente nell'array bombe gioco finito 
// aggiungo un unità alla array caselle buone seguo con un if (caselle tatali - 16 == variabile casselle buone you win ) 





// Animation explosion

const imgContainer = document.getElementById("img_container");

function getRandomPosition() {
    const x = window.innerWidth - 175;
    const randomX = Math.floor(Math.random() * x);
    return [randomX];
}

function showImage() {
    imgContainer.style.opacity = 1;
    const x = getRandomPosition();
    imgContainer.style.left = x + "px";
}

function hideImage() {
    imgContainer.style.opacity = 0;
}


let showInterval = setInterval(showImage, 3000);
let hideInterval = setInterval(hideImage, 2000);




