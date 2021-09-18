import { Album } from "./album";

export class User {
  private album: Album[];

  constructor(
    private id: number,
    private username: string,
    private firstName: string,
    private isPro: boolean
  ) {
    this.album = [];
  }

  addAlbum(album: Album) {
    this.album.push(album);
  }

  removeAlbum(album: Album): Album | undefined {
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
