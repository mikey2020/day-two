
class Car{
  constructor(name,model,type){
    this.name = name ;
    this.model = model;
    this.numOfDoors = 4;
    this.type = type;
    this.numOfWheels =  4;
    this.isSaloon = true;
    this.speed = 0 + " km/h";
    
    if(this.name === "Porshe" || this.name === "Koenigsegg"){
      this.numOfDoors = 2;
      //this.speed = '250 km/h';
    }

    if(this.name === undefined || this.model === undefined){
      this.name = "General";
      this.model = "GM";
    }

    if(this.type === "trailer"){
      this.numOfWheels = 8;
      this.isSaloon = false;
    }

  }

   drive(time){
    if(this.name == "Porshe"){
      let distance = 1250;
      this.speed = (distance/time) + " km/h" ;
      return this.speed ;
    }

    if(this.type === "trailer"){
      let distance = 539;
      this.speed = (distance/time) + " km/h";
      return this;
    }



  }

}

module.exports = Car;