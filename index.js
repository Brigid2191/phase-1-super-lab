// Base class: Tree
class Tree {
    constructor(species) {
      this.species = species;
    }
  
    // Static method providing a general definition of trees
    static definition() {
      return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
    }
  }
  
  // Deciduous class extends Tree
  class Deciduous extends Tree {
    constructor(species, name) {
      super(species); // Call parent constructor (Tree) to set species
      this.name = name;
    }
  
    // Static method extending the definition of trees
    static definition() {
      return `${super.definition()} Deciduous trees shed their leaves annually.`;
    }
  }
  
  // Evergreen class extends Tree
  class Evergreen extends Tree {
    constructor(species, name) {
      super(species); // Call parent constructor (Tree) to set species
      this.name = name;
    }
  
    // Static method extending the definition of trees
    static definition() {
      return `${super.definition()} Evergreens keep their leaves all year round.`;
    }
  }
  
  // Testing
  const oak = new Deciduous("Quercus", "Oak");
  console.log(oak.species); // Quercus
  console.log(oak.name); // Oak
  console.log(Deciduous.definition()); 
  // "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Deciduous trees shed their leaves annually."
  
  const pine = new Evergreen("Pinus", "Pine");
  console.log(pine.species); // Pinus
  console.log(pine.name); // Pine
  console.log(Evergreen.definition()); 
  // "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Evergreens keep their leaves all year round."
  
  module.exports = { Tree, Deciduous, Evergreen };
  