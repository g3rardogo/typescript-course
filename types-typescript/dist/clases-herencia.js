"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
//Clase conocida en herencia como Superclase
class Item {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    get id() {
        return this._id;
    }
    //  Error: solo lectura
    //   set id(id: number) {
    //     this._id = id;
    //   }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}
class Picture extends Item {
    constructor(id, title, orientation) {
        super(id, title); //Constructor de superclase
        this._orientation = orientation;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(orientation) {
        this.orientation = orientation;
    }
    //Comportamiento
    toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
}
Picture.PhotoOrientation = PhotoOrientation;
class Album extends Item {
    constructor(id, title) {
        super(id, title); //Constructor de superclase
        this._pictures = [];
    }
    addPicture(picture) {
        this._pictures.push(picture);
    }
}
const album = new Album(1, "Personal pictures");
const picture = new Picture(1, "Dogs photo", PhotoOrientation.Square);
album.addPicture(picture);
console.log("Album: ", album);
//** Accediendo a los miembros privados */
/* En este caso, TypeScript utiliza de forma interna
    los metodos get y set anteriormente definidos */
//picture.id = 100; //Readonly
picture.title = "Another title"; //Private
console.log("Album public: ", album);
// Probando el miembro estatico de clase Picture
// Accediendo via el nombre de la clase
console.log("PhotoOrientation", Picture.PhotoOrientation.Landscape);
