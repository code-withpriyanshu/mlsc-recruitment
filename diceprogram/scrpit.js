// function roll(){
//     let rtime = document.getElementById("input").textContent
//     let ptag = document.getElementById("output")
//     ptag.textContent = '';
//     for(let i = 0 ; i < rtime ; i ++){
//         let random = Math.floor((Math.random()*6)+1);
//         ptag.textContent += random + ' ';
//     }
// }

function roll(){
    let rtime = document.getElementById("input").value;
    let ptag = document.getElementById("output");
    let diceimg = document.getElementById("diceimg")
    let number = []
    let img = []
    for(let i = 0; i < rtime; i++){
        let random = Math.floor((Math.random() * 6) + 1);
        number.push(random)
        img.push(`<img src = "/diceprogram/pictues/${random}.png">`);
    }
    ptag.textContent = `dice: ${number.join(", ")}`
    diceimg.innerHTML = img.join();

}