//Object
let user = {};
user = {
    id: 1,
    userName: "Gerardo",
    isPro: true,
};
console.log("user: ", user);
//Accediendo a una propiedad
/*Con el tipo de valor object no se puede acceder a las propiedades del objeto: */
//console.log("userName: ", user.userName); //Error
/* Object vs object (Clase JS vs Tipo TS)*/
//TypeScript define por defecto a esta variable como una instancia de la clase Object
const myObj = {
    id: 1,
    userName: "Gerardo",
    isPro: true,
};
const instance = myObj instanceof Object;
console.log("Is instance: ", instance); //true
console.log("user.userName", myObj.userName);
