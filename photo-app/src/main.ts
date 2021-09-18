import { Album, PhotoOrientation, Picture, User } from "./photo-app";

const user = new User(1, "Gerardo", "Luis", true);
const album = new Album(10, "Images");
const picture = new Picture(1, "Picture", "today", PhotoOrientation.Landscape);

user.addAlbum(album);
album.addPicture(picture);

console.log("User: ", user);
