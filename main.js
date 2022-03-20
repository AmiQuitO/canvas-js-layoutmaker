const BOARD = document.querySelector("#board");

// types = void, floor, wall
// colors = whatever you want!
// height = make staris!
// props = chest, crate, enemy, npc...

let map;

let typeofoperation = 0;

document.querySelector("#begin").addEventListener("click", function (){
    w = document.querySelector("#w").value;
    h = document.querySelector("#h").value;
    BOARD.innerHTML = "<p>STARTED<br> choose operation</p>";
    map = [];
    for(let i=0; i<h; i++){
        map[i] = [];
        for(let j=0; j<w; j++){
            map[i][j] = ["floor", "#252525", 0, undefined];
        }
    }
    setBoard();
}, true);

document.querySelector("#type").addEventListener("click", function(){
    saveBoard();
    typeofoperation = 0;
    setBoard();
}, true);
document.querySelector("#color").addEventListener("click", function(){
    saveBoard();
    typeofoperation = 1;
    setBoard();
}, true);
document.querySelector("#height").addEventListener("click", function(){
    saveBoard();
    typeofoperation = 2;
    setBoard();
}, true);
document.querySelector("#prop").addEventListener("click", function(){
    saveBoard();
    typeofoperation = 3;
    setBoard();
}, true);

function clearTile(tile){
    tile.value = "";
}

function setBoard(){
    console.log(typeofoperation);
    console.log(map);
    BOARD.innerHTML = "";
    let x = 0;
    for(let i=0; i<h;i++){
        for(let j=0;j<w;j++){
            BOARD.innerHTML += `<input type='text' value='${map[i][j][typeofoperation]}' class='tiles' onfocus='clearTile(this)' id='tile${x}'>`;
            x++;
        }
        BOARD.innerHTML += "<br>";
    }   
}

function saveBoard(){
    let x = 0;
    for(let i=0; i<h;i++){
        for(let j=0;j<w;j++){
            map[i][j][typeofoperation] = document.querySelector(`#tile${x}`).value;
            x++;
        }
    }
}




document.querySelector("#finish").addEventListener("click", function (){
    saveBoard();
    savefile = document.querySelector("#saved_content");
    let x = 0;
    savefile.innerHTML += "[<br>";
    for(let i=0; i<h; i++){
        savefile.innerHTML += "[<br>";
        for(let j=0; j<w; j++){
            console.log("sussy");
            savefile.innerHTML += "[";
            for(let k=0; k<4;k++){
                a = map[i][j][k];
                // if not a number put ""
                if(isNaN(a) && a != undefined && a != "undefined")
                    a = '"'+ a + '"';
                savefile.innerHTML += a + ", ";
            } 
            savefile.innerHTML += "],<br>";
            x++;
        }
        savefile.innerHTML += "],";
        savefile.innerHTML += "<br>";
    }
    savefile.innerHTML += "],";
}, true);
