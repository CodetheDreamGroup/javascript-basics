var wizard = {
    name: 'Harry',
    xp: 100,
    level: 1,
    characterClass: 'wizard',
    strength: 10
};

wizard.intelligence = 14;

function characterFactory(name, characterClass, xp, level, strength, intelligence) {
    var character = {
        name: name,
        xp: xp || 0,
        level: level || 1,
        characterClass: characterClass,
        strength: strength || 10,
        intelligence: intelligence || 10,
    };

    return character;
}

function Character(name, characterClass, xp, level, strength, intelligence) {
    this.name = name;
    this.xp = xp || 0;
    this.level = level || 1;
    this.characterClass = characterClass;
    this.strength = strength || 10;
    this.intelligence = intelligence || 10;
}

var conan = new Character('Conan', 'barbarian', 3000, 5, 19, 8);

var legolas = Object.create({}); // {}
legolas.name = 'Legolas';
legolas.characterClass = 'archer';
legolas.xp = 20000;
legolas.level = 12;
legolas.strength = 12;
legolas.intelligence = 12;

var temp = legolas;

var keys = Object.keys(temp);

function printProperty(key) {
    var value = temp[key];
    console.log(`${key}: ${value}`);
}

keys.forEach(printProperty);
