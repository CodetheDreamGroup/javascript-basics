var album = {
  name: "Pet Sounds",
  artist: "The Beach Boys",
  year: 1966,
  notes: "Considered the 2nd best album of all time by Rolling Stones Magazine",
};

var keys = Object.keys(album);

for (var index = 0; index < keys.length; index++) {
    var propertyName = keys[index];
    var propertyValue = album[propertyName];
    console.log(`${propertyName}: ${propertyValue}`);
}
