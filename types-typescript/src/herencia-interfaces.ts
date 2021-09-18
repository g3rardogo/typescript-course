export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

/** Herencia con interfaces */
interface Entity {
  id: number;
  title: string;
}

//Album y Picture comparten atributos
interface Album extends Entity {
  //copia de los atributos Entity
  description: string;
}

interface Picture extends Entity {
  //Tambien heredando el id y title
  orientation: PhotoOrientation;
}

const album: Album = {
  id: 1,
  title: "Test",
  description: "Test description",
};
