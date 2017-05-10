class Car{
  constructor(name,model){
    this.name = name ;
    this.model = model;
    this.numOfDoors = 4;
    
    if(this.name === "Porshe" || this.name === "Koenigsegg"){
      this.numOfDoors = 2;
      this.speed = '250 km/h';
    }

    if(this.name === undefined || this.model === undefined){
      this.name = "General";
      this.model = "GM";
    }
  }
}

module.exports = Car;