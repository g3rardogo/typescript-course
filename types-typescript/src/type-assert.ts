export {};
/** <tipo> Angle Bracket */

let username: any;
username = "Luis";

//Tenemos una cadena, TS confia en mi!
let message: string =
  (<string>username).length > 5
    ? `Welcome ${username}`
    : `Username is too short`;

console.log("message: ", message);

let usernameWithId: any = "Gerardo 1";
//Como obtener el username?
username = (<string>usernameWithId).substring(0, 7);
console.log("username sin id: ", username);

/**Sintaxis as */
message =
  (username as string).length > 5
    ? `Welcome ${username}`
    : `Username is too short`;
console.log("message: ", message);
