var farmer = {
    name: "John Doe",
    class: "farmer",
    xp: 0,
    level: 1,
    strength: 10,
    intelligence: 10,
    greetings: function() {
        console.log(`My name is ${this.name}. I am a happy ${this.class}.`);
    }
};

var oldMac = Object.create(farmer);
oldMac.name = 'Old MacDonald';
oldMac.greetings();

var animal = {
    sound: '',
    speak: function () {
        return this.sound;
    }
};

var pig = Object.create(animal);
pig.name = 'pig';
pig.sound = 'oink';

var cow = Object.create(animal);
cow.name = 'cow';
cow.sound = 'moo';

var farm = {
    farmer: oldMac,
    animals: [pig, cow],
    song: function () {
        // sing the Old MacDonald song
    }
};