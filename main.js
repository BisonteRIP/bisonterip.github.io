'use strict'
function dividirNumeros(){

    let inputX = document.getElementById("input-x").value
    let inputY = document.getElementById("input-y").value

    if(isNaN(inputX) || isNaN(inputY)){
        alert("Por favor, ingresa solo numeros en ambos campos.");
        return;
    }else if(inputX === "" || inputY === ""){
        alert("No has definido una coordenada.")
        return;
    }
    const num1 = parseFloat(inputX);
    const num2 = parseFloat(inputY);

    const resultado1 =  Math.round(num1 / 8);
    const resultado2 =  Math.round(num2 / 8);

    const divReturnData = document.getElementById('return-data');
    divReturnData.classList.add('result');
    
    const lista = document.createElement('ul');
    const elementList = document.createElement('li');
    elementList.textContent = `X: ${resultado1}  Y: ${resultado2}`;
    lista.appendChild(elementList);

    divReturnData.appendChild(lista);
    divReturnData.style.display = 'block'
    
}

//
