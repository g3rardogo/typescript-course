//Void
//Tipo explicito
function showInfo(user) {
    console.log("User info: ", user);
}
//Void en variable
var unusable;
unusable = null;
unusable = undefined;
//Never
function handleError(code, message) {
    //Procesamiento de codigo
    //Generamos un mensaje
    throw new Error(message + ". Code: " + code);
}
try {
    handleError(404, 'Not Found');
}
catch (error) {
}
