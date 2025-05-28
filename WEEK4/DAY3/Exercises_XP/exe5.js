
//constructeur permettra d'étendre la Dogclasse avec succès ?
/*
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};
*/

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Labrador extends Dog {
  constructor(name, size) {
    super(name); // Appelle le constructeur de Dog avec le paramètre 'name'
    this.size = size; // Initialise la nouvelle propriété 'color'
  }
}
