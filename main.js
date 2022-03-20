document.onload = () => {
    const BOARD = document.querySelector("#board");
}

document.querySelector("#generate").addEventListener("click", function (){
    a = document.querySelector("#a").value;
    b = document.querySelector("#b").value;
    board.innerHTML = "";
    for(let i=0; i<a*b;i++){
        board.innerHTML += "<input type='text' value='13' class='tiles'>"
        if((i+1)%a == 0 && i != 0){
            board.innerHTML += "<br>";
        }
    }   
}, true);

document.querySelector("#save").addEventListener("click", function (){
    let result = [];
    tiles = document.querySelectorAll(".tiles");
    savefile = document.querySelector("#saved_content");
    let x = 0;
    savefile.innerHTML += "[";
    savefile.innerHTML += "<br>";
    for(let i=0; i<b; i++){
        savefile.innerHTML += "[";
        result[i] = [];
        for(let j=0; j<a; j++){
            console.log("sussy")
            tile = tiles[x].value;
            if(tile < 10 && tile > -1){
                tile = " " + tile;
            }
            savefile.innerHTML += tile + ",";
            result[i][j] = tile;
            x++;
        }
        savefile.innerHTML += "],";
        savefile.innerHTML += "<br>";
    }
    savefile.innerHTML += "],";
}, true);
