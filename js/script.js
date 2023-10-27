//Impostiamo come variabili globali i dati che dovrebbero essere indispensabili per tutto il programma
const options = document.getElementById("difficult");
const difficult = options.selectedIndex;
console.log(difficult);

const btnStart = document.getElementById("start");
console.log(btnStart);

//Richiamiamo la funziona per creare la griglia
btnStart.addEventListener("click", makeGrid(difficult));

//Funzione per creare la nostra griglia
function makeGrid(difficult)
{
    if(difficult === 1)
    {
        const square = document.querySelector(".row");
        console.log(square);

        let number;
        let grid = "";

        for(let i = 0; i < 100; i++)
        {
            number = i + 1;

            grid += `<div class="ms_square-100"><button id="choice-cell">${number}</button></div>`;
        }

        square.innerHTML = grid;
    } else if (difficult === 2)
    {
        const square = document.querySelector(".row");
        console.log(square);

        let number;
        let grid = "";

        for(let i = 0; i < 81; i++)
        {
            number = i + 1;

            grid += `<div class="ms_square-81"><button id="choice-cell">${number}</button></div>`;
        }

        square.innerHTML = grid;
    } else if (difficult === 3)
    {
        const square = document.querySelector(".row");
        console.log(square);

        let number;
        let grid = "";

        for(let i = 0; i < 49; i++)
        {
            number = i + 1;

            grid += `<div class="ms_square-49"><button id="choice-cell">${number}</button></div>`;
        }

        square.innerHTML = grid;
    }

};




