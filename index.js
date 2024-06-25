"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
let num01 = parseInt(prompt("digite seu primeiro número: "));
let num02 = parseInt(prompt("digite seu segundo número: "));
let op = prompt("escolha uma operadora ( +, -, *, /): ");
if (op == "+") {
    console.log(`O valor é ${num01 + num02}`);
}
else if (op == "-") {
    console.log(`O valor é ${num01 + num02}`);
}
else if (op == "+") {
    console.log(`O valor é ${num01 + num02}`);
}
else if (op == "*") {
    console.log(`O valor é ${num01 + num02}`);
}
else if (op == "/") {
    console.log(`O valor é ${num01 + num02}`);
}
else {
    console.log("escolha uma operadora válida");
}
