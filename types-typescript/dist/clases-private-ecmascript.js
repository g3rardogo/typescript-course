"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Picture_id, _Picture_title, _Picture_orientation, _Album_id, _Album_title, _Album_pictures;
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
/** Haciendo uso de # */
class Picture {
    //Funcion especial para construir nuevos objetos
    //Debe incluir los atributos que deben ser necesarios
    constructor(id, title, orientation) {
        //Propiedades
        _Picture_id.set(this, void 0);
        _Picture_title.set(this, void 0);
        _Picture_orientation.set(this, void 0);
        __classPrivateFieldSet(this, _Picture_id, id, "f");
        __classPrivateFieldSet(this, _Picture_title, title, "f");
        __classPrivateFieldSet(this, _Picture_orientation, orientation, "f");
    }
    //Comportamiento
    toString() {
        return `[id: ${__classPrivateFieldGet(this, _Picture_id, "f")}, title: ${__classPrivateFieldGet(this, _Picture_title, "f")}, orientation: ${__classPrivateFieldGet(this, _Picture_orientation, "f")}]`;
    }
}
_Picture_id = new WeakMap(), _Picture_title = new WeakMap(), _Picture_orientation = new WeakMap();
class Album {
    constructor(id, title) {
        _Album_id.set(this, void 0);
        _Album_title.set(this, void 0);
        _Album_pictures.set(this, void 0);
        __classPrivateFieldSet(this, _Album_id, id, "f");
        __classPrivateFieldSet(this, _Album_title, title, "f");
        __classPrivateFieldSet(this, _Album_pictures, [], "f");
    }
    addPicture(picture) {
        __classPrivateFieldGet(this, _Album_pictures, "f").push(picture);
    }
}
_Album_id = new WeakMap(), _Album_title = new WeakMap(), _Album_pictures = new WeakMap();
const album = new Album(1, "Personal pictures");
const picture = new Picture(1, "Dogs photo", PhotoOrientation.Square);
album.addPicture(picture);
console.log("Album: ", album);
//** Accediendo a los miembros publicos */
// picture.id = 100; //#-> Error
// picture.title = "Another title"; //#-> Error
console.log("Album public: ", album);
