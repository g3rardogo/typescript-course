"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var photo_app_1 = require("./photo-app");
var user = new photo_app_1.User(1, "Gerardo", "Luis", true);
var album = new photo_app_1.Album(10, "Images");
var picture = new photo_app_1.Picture(1, "Picture", "today", photo_app_1.PhotoOrientation.Landscape);
user.addAlbum(album);
album.addPicture(picture);
console.log("User: ", user);
