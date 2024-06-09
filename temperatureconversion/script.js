function ctof(){
    let c = document.getElementById("input").value;
    let f = c*(9/5) + 32
    document.getElementById("output").textContent = f + " faranite"
}
function ftoc(){
    let f = document.getElementById("input").value;
    let c = (5/9)*(f-32)
    document.getElementById("output").textContent = c + " celsius"

}