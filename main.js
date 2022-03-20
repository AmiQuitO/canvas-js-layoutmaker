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
            map[i][j] = ["floor", "#252525", 0, null];
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
            let tile = document.querySelector(`#tile${x}`).value;

            // quality of life
            if(typeofoperation == 0 && tile == "wall")
                map[i][j][2] = 2;
            if(typeofoperation == 0 && tile == "void"){
                map[i][j][2] = 0;
                map[i][j][1] = "#222222";
            }

            // saveing different types of data
            if(!isNaN(tile)){
                tile = parseInt(tile);
            }
            if(tile === "null"){
                tile = null;
            }
            map[i][j][typeofoperation] = tile;
            x++;
        }
    }
}




document.querySelector("#finish").addEventListener("click", function (){
    saveBoard();
    savefile = document.querySelector("#saved_content");
    savefile.innerHTML = "";
    const FMAP = JSON.stringify(map);
    savefile.innerHTML = FMAP;
}, true);
