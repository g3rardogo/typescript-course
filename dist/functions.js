/** Funcion al estilo JS */
//Crear una foto
function createPicture(title, date, size) {
    //title
}
function createPicture2(title, date, size) {
    //Se crea la fotografia
    console.log("create picture using: ", title, date, size);
}
createPicture2("Sunset", "10/09/2001", "500x500");
/** Parametros opcionales en funciones */
function createPicture3(title, date, size) {
    //Se crea la fotografia
    console.log("create picture using: ", title, date, size);
}
createPicture3("Sunset", "10/09/2001");
/** Flat array functions (disponible a partir de ES6) */
var createPic = function (title, date, size) {
    return {
        title: title,
        date: date,
        size: size,
    };
};
var picture = createPic("Summer", "today");
console.log("Picture: ", picture);
