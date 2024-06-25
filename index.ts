import promptSync from "prompt-sync"

let prompt = promptSync ()
let num01 =  parseInt(prompt("digite seu primeiro número: "))
let num02 =  parseInt(prompt("digite seu segundo número: "))

let op = prompt("escolha uma operadora ( +, -, *, /): ")

if (op == "+") {
    console.log(`O valor é ${num01 + num02}`);

} else if (op == "-") {
    console.log(`O valor é ${num01 + num02}`);

} else if (op == "+") {
    console.log(`O valor é ${num01 + num02}`);

} else if (op == "*") {
    console.log(`O valor é ${num01 + num02}`);

} else if (op == "/") {
    console.log(`O valor é ${num01 + num02}`);

} else {
    console.log("escolha uma operadora válida" );

}

 



