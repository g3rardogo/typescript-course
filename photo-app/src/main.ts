import { Album } from "./album";
import { PhotoOrientation } from "./photo-orientation";
import { Picture } from "./picture";
import { User } from "./user";

const user = new User(1, "Gerardo", "Luis", true);
const album = new Album(10, "Images");
const picture = new Picture(1, "Picture", "today", PhotoOrientation.Landscape);

//Creando relaciones
user.addAlbum(album);
album.addPicture(picture);
console.log("User: ", user);

//Borrando Album
user.removeAlbum(album);
console.log("user: ", user);
