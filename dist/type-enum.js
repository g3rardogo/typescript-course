//Orientacion para fotos
//JS
/*
const landscape = 0;
const portrait = 1;
const sqaure = 2;
*/
//TS
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
})(PhotoOrientation || (PhotoOrientation = {}));
var landscape = PhotoOrientation.Landscape;
console.log("Landscape: ", landscape);
//Ver estado o cadena
console.log("Landscape: ", PhotoOrientation[0]);
//Personalizar los enum
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["Landscape"] = 10] = "Landscape";
    PictureOrientation[PictureOrientation["Portrait"] = 11] = "Portrait";
    PictureOrientation[PictureOrientation["Square"] = 12] = "Square";
})(PictureOrientation || (PictureOrientation = {}));
console.log("Portrait: ", PictureOrientation.Portrait);
var Country;
(function (Country) {
    Country["Bolivia"] = "bol";
    Country["Espana"] = "esp";
    Country["Mexico"] = "mex";
    Country["EEUU"] = "usa";
})(Country || (Country = {}));
var mexico = Country.Mexico;
console.log("Country: ", mexico);
