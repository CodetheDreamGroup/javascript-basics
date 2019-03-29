var album = {
  name: "Pet Sounds",
  artist: "The Beach Boys",
  year: 1966,
  notes: "Considered the 2nd best album of all time by Rolling Stones Magazine",
};

var keys = Object.keys(album);

function printProperty(key) {
    var value = album[key];
    console.log(`${key}: ${value}`);
}

keys.forEach(printProperty);
