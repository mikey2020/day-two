class Car{
  constructor(name,model){
    this.name = name ;
    this.model = model;
    this.numOfDoors = 4;
    if(this.name === "Porsche" || this.name === "Koenigsegg"){
      this.numOfDoors = 2;
      this.speed = '250 km/h';
    }
  }
}

module.exports = Car;