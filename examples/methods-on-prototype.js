function Character(name, characterClass, xp, level, strength, intelligence) {
    this.name = name;
    this.xp = xp || 0;
    this.level = level || 1;
    this.characterClass = characterClass;
    this.strength = strength || 10;
    this.intelligence = intelligence || 10;
}

var conan = new Character('Conan', 'barbarian', 0, 1, 19, 8);

Character.prototype.greetings = function() {
    console.log(`My name is ${this.name}. I am a powerful ${this.characterClass}.`);
}


Character.prototype.gainExperience = function(xp) {
    this.xp = this.xp + xp;
    var xpToLevelUp = 1000 * this.level;

    if (this.xp > xpToLevelUp) {
      this.level++;
      this.xp = this.xp - xpToLevelUp;
      console.log(`Congratulations ${this.name}, you are now level ${this.level}`);
    } else {
      console.log(`You are ${xpToLevelUp - this.xp} experience points away from level ${this.level + 1}`);
    }
}


conan.greetings();
conan.gainExperience(100);
conan.gainExperience(200);
conan.gainExperience(800);


var legolas = Object.create({}); // {}
legolas.name = 'Legolas';
legolas.characterClass = 'archer';
legolas.xp = 20000;
legolas.level = 12;
legolas.strength = 12;
legolas.intelligence = 12;

// var temp = legolas;

// var keys = Object.keys(temp);

// function printProperty(key) {
//     var value = temp[key];
//     console.log(`${key}: ${value}`);
// }

// keys.forEach(printProperty);
