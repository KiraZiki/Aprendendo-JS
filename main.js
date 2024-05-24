document.querySelector("form").addEventListener("submit",(e) => e.preventDefault())

function Add(num1, num2){
    return num1 + num2
}

function Sub(num1, num2){
    return num1 - num2
}

function Mult(num1, num2){
    return num1 * num2
}

function Div(num1, num2){
    return num1 / num2
}

function calcular(){
    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)
    let select = document.getElementById('selectF').value
    let result

    switch(select){
        case "Add":
            result = Add(num1, num2)
            break;
        case "Sub":
            result = Sub(num1, num2)
            break;
        case "Mult":
            result = Mult(num1, num2)
            break;
        case "Div":
            result = Div(num1, num2)
            break;
        
    }

    console.log(num1)
    console.log(num2)
    console.log(select)
    console.log(result)
    document.getElementById('resultado').innerText = result
}