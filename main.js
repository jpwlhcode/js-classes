// CLASSES //

class Fish {
  constructor(name, color) {
    this._name = name;
    this._color = color;
    this._eyes = 2;
  }
  get name() {
    return this._name;
  }
  get color() {
    return this._color;
  }

  get eyes() {
    return this._eyes;
  }

  set eyes(eyes) {
    this._eyes = eyes;
  }

  blub() {
    document.write("<br>Blub blub blub!");
  }
}

let bream = new Fish("bream", "brown");
document.write(bream.name + " " + bream.color + " " + bream.eyes);
bream.blub();

let carp = new Fish("carp", "golden");
document.write("<br>" + carp.name);
carp.blub();
carp.eyes = 4;
document.write(carp.eyes);

class Eel extends Fish {
  constructor(name, color) {
    super(name, color);
    this._legs = 0;
  }
}

let congar = new Eel("congar", "black");
document.write("<br>" + congar.color);
congar.blub();
congar.eyes = 20;
document.write(congar.eyes);
