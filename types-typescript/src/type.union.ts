// /* Para corregir el error de variable duplicada se
// exporta un objeto vacio como solucion temporal*/
export {};

// // 10, '10'
// let idUser: number | string;
// idUser = 10;
// idUser = "10";

// //Buscar username dado un ID
// function getUsernameById(id: number | string) {
//     //Logica de la funcion
//     return 'username'
// }

// getUsernameById(10)
// getUsernameById("10")

/** Alias de tipos */

type IdUser = number | string;
//Variable de tipo IdUser
let idUser: IdUser;
idUser = 10;
idUser = "10";

//Buscar username dado un ID
function getUsernameById(id: IdUser) {
  //Logica de la funcion
  return "username";
}

getUsernameById(10);
getUsernameById("10");

/** Tipos literales */

//Adimitiendo 100x100, 500x500, 1000x1000
type SquareSize = "100x100" | "500x500" | "1000x1000";
// let smallPicture: SquareSize = "200x200" //Error
let smallPicture: SquareSize = "100x100";
