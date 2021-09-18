export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

//Clase conocida en herencia como Superclase
abstract class Item {
  protected readonly _id: number;
  protected _title: string;

  constructor(id: number, title: string) {
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

  set title(title: string) {
    this._title = title;
  }
}

class Picture extends Item {
  public static PhotoOrientation = PhotoOrientation;
  //Propiedades
  private _orientation: PhotoOrientation;

  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    super(id, title); //Constructor de superclase
    this._orientation = orientation;
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

class Album extends Item {
  private _pictures: Picture[];

  public constructor(id: number, title: string) {
    super(id, title); //Constructor de superclase
    this._pictures = [];
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
//picture.id = 100; //Readonly
picture.title = "Another title"; //Private
console.log("Album public: ", album);

// Probando el miembro estatico de clase Picture
// Accediendo via el nombre de la clase
console.log("PhotoOrientation", Picture.PhotoOrientation.Landscape);
