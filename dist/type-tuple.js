"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// [1, 'user']
let user;
user = [1, "Gerardo"];
console.log("user", user);
//Tuplas con varios valores
//id, username, isProp
let userInfo;
userInfo = [2, "Gerar", true];
//Arreglo de tuplas
let array = [];
array.push([1, "luis"]);
array.push([2, "alex"]);
console.log("Array: ", array);
//Uso de funciones Array
// alex -> alex500
array[1][1] = array[1][1].concat("500"); //alex500
console.log("New Array: ", array);
