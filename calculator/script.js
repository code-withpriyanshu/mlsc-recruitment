let display = document.getElementById("txt");
let num1;
let = operant ;
function numpad(n){
    display.textContent = display.textContent + n
}
function cls(){
    display.textContent = ""
}
function operation(op){
    num1 = Number(display.textContent)
    display.textContent = ""
    // console.log(typeof(num1) , num1); 
    operant = op    
}
function equal(){
    let num2 = Number(display.textContent)
    if(operant === '+'){
        display.textContent = num1 + num2;
        
    }
    else if(operant === '-'){
        
        display.textContent = num1 - num2;
    }
    else if(operant === 'x'){
        
        display.textContent = num1 * num2;
    }
    else if(operant === '/'){
        display.textContent = num1 / num2;

    }
}