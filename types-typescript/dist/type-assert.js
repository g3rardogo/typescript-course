"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** <tipo> Angle Bracket */
let username;
username = "Luis";
//Tenemos una cadena, TS confia en mi!
let message = username.length > 5
    ? `Welcome ${username}`
    : `Username is too short`;
console.log("message: ", message);
let usernameWithId = "Gerardo 1";
//Como obtener el username?
username = usernameWithId.substring(0, 7);
console.log("username sin id: ", username);
/**Sintaxis as */
message =
    username.length > 5
        ? `Welcome ${username}`
        : `Username is too short`;
console.log("message: ", message);
