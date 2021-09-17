"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.log("[title: " + picture.title + ",\n        date: " + picture.date + ",\n        orientation: " + picture.orientation + "]");
}
var myPicture = {
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
function generatePicture(config) {
    var picture = { title: "Default", date: "2020-03" };
    if (config.title) {
        picture.title = config.title;
    }
    if (config.date) {
        picture.date = config.date;
    }
    return picture;
}
var pictureGenerated = generatePicture({});
console.log("picture: ", pictureGenerated);
var picture = generatePicture({ title: "Travel pic" });
console.log("picture2: ", picture);
var user;
user = { id: 10, username: "ME", isPro: true };
// user.id = 20 //Error
console.log("User readonly: ", user);
