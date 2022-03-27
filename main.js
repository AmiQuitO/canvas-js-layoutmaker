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
    if(typeofoperation == 0){
        if(tile.value == "floor"){
            tile.value = "wall";
        }
        else    if(tile.value == "wall"){
            tile.value = "void";
        }
        else if(tile.value == "void"){
            tile.value= "floor";
        }
        return;
    }
    if(typeofoperation == 2){
        if(tile.value == 0){
            tile.value = "";
        }
        if(!tile.value == 0){
            tile.value = 0;
            return;
        }
    }
    tile.value = "";
}

function setBoard(){
    console.log(typeofoperation);
    console.log(map);
    BOARD.innerHTML = "";
    let x = 0;
    for(let i=0; i<h;i++){
        for(let j=0;j<w;j++){
            BOARD.innerHTML += `<input type='text' value='${map[i][j][typeofoperation]}' class='tiles' onclick='clearTile(this)' id='tile${x}'>`;
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
    savefile.innerHTML += "[";
    for(let i=0; i<h; i++){
        savefile.innerHTML += "[";
        for(let j=0; j<w; j++){
            console.log("sussy");
            savefile.innerHTML += "[";
            for(let k=0; k<4;k++){
                a = map[i][j][k];
                // if not a number put ""
                if(isNaN(a) && a != null && a != "null")
                    a = '"'+ a + '"';
                if(k == 3){
                    savefile.innerHTML += a;
                    continue;
                }
                savefile.innerHTML += a + ", ";
            }
            if(j == w-1){
                savefile.innerHTML += "]";
                continue;
            }
            savefile.innerHTML += "],";
        }
        if(i == h-1){
            savefile.innerHTML += "]";
            continue;
        }
        savefile.innerHTML += "],<br>";
    }
    savefile.innerHTML += "],";
}, true);
