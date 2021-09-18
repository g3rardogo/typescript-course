/** Funcion al estilo JS */
//Crear una foto

function createPicture(title, date, size) {
  //title
}

/** Funcion con TS */

type SqaureSize = "100c100" | "500x500" | "1000x1000";

function createPicture2(title: string, date: string, size: SqaureSize): void {
  //Se crea la fotografia
  console.log("create picture using: ", title, date, size);
}

createPicture2("Sunset", "10/09/2001", "500x500");

/** Parametros opcionales en funciones */

function createPicture3(
  title?: string,
  date?: string,
  size?: SqaureSize
): void {
  //Se crea la fotografia
  console.log("create picture using: ", title, date, size);
}

createPicture3("Sunset", "10/09/2001");

/** Flat array functions (disponible a partir de ES6) */
let createPic = (title: string, date: string, size?: SqaureSize): object => {
  return {
    title,
    date,
    size,
  };
};

const picture = createPic("Summer", "today");
console.log("Picture: ", picture);
