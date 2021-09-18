"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, username, firstName, isPro) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.isPro = isPro;
        this.album = [];
    }
    addAlbum(album) {
        this.album.push(album);
    }
    removeAlbum(album) {
        //Buscar album
        const position = this.album.findIndex((a) => a.id === album.id);
        let deletedAlbum;
        if (position >= 0) {
            //Eliminando album
            deletedAlbum = this.album[position];
            this.album.splice(position, 1);
        }
        return deletedAlbum;
    }
}
exports.User = User;
