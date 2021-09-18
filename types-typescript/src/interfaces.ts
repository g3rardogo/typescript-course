//Funcion para mostrar una fotografia
export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

interface Picture {
  title: string;
  date: string;
  orientation: PhotoOrientation;
}

function showPicture(picture: Picture) {
  console.log(`[title: ${picture.title},
        date: ${picture.date},
        orientation: ${picture.orientation}]`);
}

let myPicture = {
  title: "Test title",
  date: "today",
  orientation: PhotoOrientation.Landscape,
};

showPicture(myPicture);
showPicture({
  title: "Sunset",
  date: "las month",
  orientation: PhotoOrientation.Portrait,
});

/** Propiedades opcionales */

interface PictureConfig {
  title?: string;
  date?: string;
  orientation?: PhotoOrientation;
}

function generatePicture(config: PictureConfig) {
  const picture = { title: "Default", date: "2020-03" };
  if (config.title) {
    picture.title = config.title;
  }
  if (config.date) {
    picture.date = config.date;
  }
  return picture;
}

let pictureGenerated = generatePicture({});
console.log("picture: ", pictureGenerated);
let picture = generatePicture({ title: "Travel pic" });
console.log("picture2: ", picture);

/** Propiedades solo de lectura */
interface User {
  readonly id: number; //solo de lectura
  username: string;
  isPro: true;
}

let user: User;
user = { id: 10, username: "ME", isPro: true };
// user.id = 20 //Error
console.log("User readonly: ", user);
