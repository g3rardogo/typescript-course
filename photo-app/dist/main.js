"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const album_1 = require("./album");
const photo_orientation_1 = require("./photo-orientation");
const picture_1 = require("./picture");
const user_1 = require("./user");
const user = new user_1.User(1, "Gerardo", "Luis", true);
const album = new album_1.Album(10, "Images");
const picture = new picture_1.Picture(1, "Picture", "today", photo_orientation_1.PhotoOrientation.Landscape);
//Creando relaciones
user.addAlbum(album);
album.addPicture(picture);
console.log("User: ", user);
//Borrando Album
user.removeAlbum(album);
console.log("user: ", user);
