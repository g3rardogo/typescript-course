export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

/** Haciendo uso de # */

class Picture {
  //Propiedades
  #id: number;
  #title: string;
  #orientation: PhotoOrientation;

  //Funcion especial para construir nuevos objetos
  //Debe incluir los atributos que deben ser necesarios
  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    this.#id = id;
    this.#title = title;
    this.#orientation = orientation;
  }
  //Comportamiento
  public toString() {
    return `[id: ${this.#id}, title: ${this.#title}, orientation: ${
      this.#orientation
    }]`;
  }
}

class Album {
  #id: number;
  #title: string;
  #pictures: Picture[];

  public constructor(id: number, title: string) {
    this.#id = id;
    this.#title = title;
    this.#pictures = [];
  }

  public addPicture(picture: Picture) {
    this.#pictures.push(picture);
  }
}

const album: Album = new Album(1, "Personal pictures");
const picture: Picture = new Picture(1, "Dogs photo", PhotoOrientation.Square);
album.addPicture(picture);

console.log("Album: ", album);

//** Accediendo a los miembros publicos */
// picture.id = 100; //#-> Error
// picture.title = "Another title"; //#-> Error
console.log("Album public: ", album);
