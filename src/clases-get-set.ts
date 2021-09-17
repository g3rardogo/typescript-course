export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

class Picture {
  //Propiedades
  private _id: number;
  private _title: string;
  private _orientation: PhotoOrientation;

  //Funcion especial para construir nuevos objetos
  //Debe incluir los atributos que deben ser necesarios
  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    this._id = id;
    this._title = title;
    this._orientation = orientation;
  }

  get id() {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get title() {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get orientation() {
    return this._orientation;
  }

  set orientation(orientation: PhotoOrientation) {
    this.orientation = orientation;
  }

  //Comportamiento
  public toString() {
    return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
  }
}

class Album {
  private _id: number;
  private _title: string;
  private _pictures: Picture[];

  public constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
    this._pictures = [];
  }

  get id() {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get title() {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  public addPicture(picture: Picture) {
    this._pictures.push(picture);
  }
}

const album: Album = new Album(1, "Personal pictures");
const picture: Picture = new Picture(1, "Dogs photo", PhotoOrientation.Square);
album.addPicture(picture);

console.log("Album: ", album);

//** Accediendo a los miembros privados */
/* En este caso, TypeScript utiliza de forma interna
    los metodos get y set anteriormente definidos */
picture.id = 100; //Private
picture.title = "Another title"; //Private
console.log("Album public: ", album);
