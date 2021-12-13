export class Mongoose{
  constructor(name, color, gender, weight){
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
  }
}

let maddox = new Mongoose("Maddox", "tan", "M", "9")