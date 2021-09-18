console.log("Hello from main")

//Tipo: Number
//Explicito
let phone: number;
phone = 54234567;

//Inferido
let phoneNumber = 524654;

//Valores disponibles a partir de es6 o ECMASCRIPT2015
let hexadecimal: number = 0xf00d;
let binario: number = 0b1010;
let octal: number = 0o744;

//Tipo: Boolean
let isPro: boolean;
isPro = true;

//Tipo: String
let username: String = 'Gerardo Ramirez';

//Template String
// Uso de back-tick
let userInfo: String = `
    User Info:
    username: ${username}
    firstName: ${username + 'es usuario'}
`

console.log('userInfo', userInfo);