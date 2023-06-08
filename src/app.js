
/*
* File: app.js
* Author: Zsiga Gergely
* Copyright: 2023, Zsiga Gergely
* Group: Szoft1/2/E
* Date: 20230608
* Github: https://github.com/zsi-ga/med.git
* Licenc: GNU GPL
*/


const doc = {
    heightInput: document.querySelector('#height'),
    widthInput: document.querySelector('#width'),
    lengthInput: document.querySelector('#length'),
    volumeInput: document.querySelector('#volume'),
    calcButton: document.querySelector('#calcButton')
};

const state = {
    volume: 0
};

window.addEventListener('load', ()=> {
    init();
});

function init(){
        if(doc.calcButton){
            doc.calcButton.addEventListener('click', ()=>{
               
                startCalc();
        });
        }
          }

function startCalc(){
    let height = doc.heightInput.value;
    let width = doc.widthInput.value;
    let length = doc.lengthInput.value;
    console.log("Magasság 0-nál nagyobb szám: ", checkInput(height));
    console.log("Szélesség 0-nál nagyobb szám: ", checkInput(width));
    console.log("Hosszúság 0-nál nagyobb szám: ", checkInput(length));
    if (checkInput(height) && checkInput(width) && checkInput(length)){
        state.volume = calcVolume(height, width, length);
        doc.volumeInput.value = state.volume;
    } else {
        doc.volumeInput.value = "Hiba az inputban!"
    }
}

function calcVolume(height, width, length){
    return (height-0.1) * width * length;
}
function checkInput(input){
    let inputStr = String(input);
    let inputNum = Number(input);
    if(inputStr.match(/^[0-9.]+$/)) { 
        if(inputNum >0) {
            return true;
        }else {
            return false;
        }  
    } else {return false;
    }
}