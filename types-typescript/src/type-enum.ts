//Orientacion para fotos

//JS

/* 
const landscape = 0;
const portrait = 1;
const sqaure = 2;
*/

//TS
enum PhotoOrientation {
  Landscape, //0
  Portrait, //1
  Square, //2
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log("Landscape: ", landscape);
//Ver estado o cadena
console.log("Landscape: ", PhotoOrientation[0]);

//Personalizar los enum
enum PictureOrientation {
  Landscape = 10, //10
  Portrait, //11
  Square, //12
}

console.log("Portrait: ", PictureOrientation.Portrait);

enum Country {
  Bolivia = "bol",
  Espana = "esp",
  Mexico = "mex",
  EEUU = "usa",
}

const mexico: Country = Country.Mexico;
console.log("Country: ", mexico);
