//Void
//Tipo explicito
function showInfo(user: any) {
    console.log("User info: " ,user)
}

//Void en variable
let unusable: void;
unusable = null;
unusable = undefined;

//Never
function handleError(code: number, message: string): never {
    //Procesamiento de codigo
    //Generamos un mensaje
    throw new Error(`${message}. Code: ${code}`)
}

try {
    handleError(404, 'Not Found') 
} catch (error) {
    
}
