'use strict'

const inputX = document.getElementById("input-x")
const inputY = document.getElementById("input-y")
const inputValueX = inputX.value;
const inputValueY = inputY.value;

function convertData(inputValueX, inputValueY){
    if(inputValueX && inputValueY == isNaN(inputValueX) && isNaN(inputValueY)){
        inputValueX /= 8;
        inputValueY /= 8;
        console.log(inputValueX, inputValueY)
    }else{
        console.log("no es un numero")
    }
}