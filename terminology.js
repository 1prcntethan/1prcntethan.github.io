

let Fbutton = document.getElementById("F-difficulty");
let Dbutton = document.getElementById("D-difficulty");
let Cbutton = document.getElementById("C-difficulty");
let Bbutton = document.getElementById("B-difficulty");
let Abutton = document.getElementById("A-difficulty");
let Sbutton = document.getElementById("S-difficulty");
let SSbutton = document.getElementById("SS-difficulty");

let Fcontent = document.getElementById("difficulty-explanation-F");
let Dcontent = document.getElementById("difficulty-explanation-D");
let Ccontent = document.getElementById("difficulty-explanation-C");
let Bcontent = document.getElementById("difficulty-explanation-B");
let Acontent = document.getElementById("difficulty-explanation-A");
let Scontent = document.getElementById("difficulty-explanation-S");
let SScontent = document.getElementById("difficulty-explanation-SS");


function showF() {
    Fbutton.style.backgroundColor = "#232323"
    Dbutton.style.backgroundColor = "#1B1B1B"
    Cbutton.style.backgroundColor = "#1B1B1B"
    Bbutton.style.backgroundColor = "#1B1B1B"
    Abutton.style.backgroundColor = "#1B1B1B"
    Sbutton.style.backgroundColor = "#1B1B1B"
    SSbutton.style.backgroundColor = "#1B1B1B"

    Fcontent.style.display = "flex";
    Dcontent.style.display = "none";
    Ccontent.style.display = "none";
    Bcontent.style.display = "none";
    Acontent.style.display = "none";
    Scontent.style.display = "none";
    SScontent.style.display = "none";
}

function showD() {
    Fbutton.style.backgroundColor = "#1B1B1B"
    Dbutton.style.backgroundColor = "#232323"
    Cbutton.style.backgroundColor = "#1B1B1B"
    Bbutton.style.backgroundColor = "#1B1B1B"
    Abutton.style.backgroundColor = "#1B1B1B"
    Sbutton.style.backgroundColor = "#1B1B1B"
    SSbutton.style.backgroundColor = "#1B1B1B"

    Fcontent.style.display = "none";
    Dcontent.style.display = "flex";
    Ccontent.style.display = "none";
    Bcontent.style.display = "none";
    Acontent.style.display = "none";
    Scontent.style.display = "none";
    SScontent.style.display = "none";
}

function showC() {
    Fbutton.style.backgroundColor = "#1B1B1B"
    Dbutton.style.backgroundColor = "#1B1B1B"
    Cbutton.style.backgroundColor = "#232323"
    Bbutton.style.backgroundColor = "#1B1B1B"
    Abutton.style.backgroundColor = "#1B1B1B"
    Sbutton.style.backgroundColor = "#1B1B1B"
    SSbutton.style.backgroundColor = "#1B1B1B"

    Fcontent.style.display = "none";
    Dcontent.style.display = "none";
    Ccontent.style.display = "flex";
    Bcontent.style.display = "none";
    Acontent.style.display = "none";
    Scontent.style.display = "none";
    SScontent.style.display = "none";
}

function showB() {
    Fbutton.style.backgroundColor = "#1B1B1B"
    Dbutton.style.backgroundColor = "#1B1B1B"
    Cbutton.style.backgroundColor = "#1B1B1B"
    Bbutton.style.backgroundColor = "#232323"
    Abutton.style.backgroundColor = "#1B1B1B"
    Sbutton.style.backgroundColor = "#1B1B1B"
    SSbutton.style.backgroundColor = "#1B1B1B"

    Fcontent.style.display = "none";
    Dcontent.style.display = "none";
    Ccontent.style.display = "none";
    Bcontent.style.display = "flex";
    Acontent.style.display = "none";
    Scontent.style.display = "none";
    SScontent.style.display = "none";
}
function showA() {
    Fbutton.style.backgroundColor = "#1B1B1B"
    Dbutton.style.backgroundColor = "#1B1B1B"
    Cbutton.style.backgroundColor = "#1B1B1B"
    Bbutton.style.backgroundColor = "#1B1B1B"
    Abutton.style.backgroundColor = "#232323"
    Sbutton.style.backgroundColor = "#1B1B1B"
    SSbutton.style.backgroundColor = "#1B1B1B"

    Fcontent.style.display = "none";
    Dcontent.style.display = "none";
    Ccontent.style.display = "none";
    Bcontent.style.display = "none";
    Acontent.style.display = "flex";
    Scontent.style.display = "none";
    SScontent.style.display = "none";
}
function showS() {
    Fbutton.style.backgroundColor = "#1B1B1B"
    Dbutton.style.backgroundColor = "#1B1B1B"
    Cbutton.style.backgroundColor = "#1B1B1B"
    Bbutton.style.backgroundColor = "#1B1B1B"
    Abutton.style.backgroundColor = "#1B1B1B"
    Sbutton.style.backgroundColor = "#232323"
    SSbutton.style.backgroundColor = "#1B1B1B"
    
    Fcontent.style.display = "none";
    Dcontent.style.display = "none";
    Ccontent.style.display = "none";
    Bcontent.style.display = "none";
    Acontent.style.display = "none";
    Scontent.style.display = "flex";
    SScontent.style.display = "none";
}
function showSS() {
    Fbutton.style.backgroundColor = "#1B1B1B"
    Dbutton.style.backgroundColor = "#1B1B1B"
    Cbutton.style.backgroundColor = "#1B1B1B"
    Bbutton.style.backgroundColor = "#1B1B1B"
    Abutton.style.backgroundColor = "#1B1B1B"
    Sbutton.style.backgroundColor = "#1B1B1B"
    SSbutton.style.backgroundColor = "#232323"

    Fcontent.style.display = "none";
    Dcontent.style.display = "none";
    Ccontent.style.display = "none";
    Bcontent.style.display = "none";
    Acontent.style.display = "none";
    Scontent.style.display = "none";
    SScontent.style.display = "flex";
}



