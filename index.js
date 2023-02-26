

const $ = selector => document.querySelector(selector);

const resultado = $('#resultado')
const tabla = $("#myTable");

let oneOperation = false;
let equal = false
let num = false;


// atrapar click de botones
const clickSelector = (value) => {
    if(oneOperation && equal){
        return
    }
    if(typeof value == 'number'){
        addValue(value)
        num = true;
        return   
    }
    if(typeof value == 'string' && !oneOperation && value !== '=' && num){
        console.log('valido')
        addValue(value)
        oneOperation = true
        return
    }
    if(value == '=' && oneOperation && !equal){
        const result =  getValues($('#resultado').innerText)
        addValue(value)
        addValue(result)
        addRow(resultado.innerText)
        console.log('igual')
        equal = true
        return
    }
}


// agregar valor al span del resultado
const addValue = (value) => {
    isNaN( value )
    ? resultado.innerText += ` ${value} `
    : resultado.innerText += value
}


// limpiar el estado
const clearValues = () => {
  resultado.innerText = ''
  oneOperation = false;
  equal = false;
  num = false;
}

// extrar los valores y hacer la operacion
const getValues = (value) => {
  const arr = value.replace(/\s/g, "").split(/(\+|\-|\*|\/)/)
  console.log(arr)
  const [ number1, operator, number2 ] = arr;
  return operation(parseInt(number1), parseInt(number2), operator)
}


// a;adir al historial
const  addRow = (value) => {
    let fila = tabla.insertRow();
    let celda1 = fila.insertCell();
    celda1.innerText = value;
}

// filtrar operaciones
const operation = (value1, value2, operator) => {
  switch (operator) {
    case '+':
        return value1 + value2;
    case '/':
        return value1 / value2;
    case '*': 
        return value1 * value2;
    case '-':
        return value1 - value2;
    default:
        alert('no valido')
        return 0;
  }
}


// boton borrar un caracter
const erase = () => {
    if(!equal){
        resultado.innerText = resultado.innerText.slice(0, -1);
    }
}