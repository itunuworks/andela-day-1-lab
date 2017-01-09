'use strict'

module.exports = {

  dataTypes: function(inputArgument){
    var output = undefined;
    switch (typeof inputArgument){
      case "string":
        output = inputArgument.length;
        break;
      case "boolean":
        output = inputArgument;
        break;
      case "number":
        output = "equal to 100";
        if (inputArgument>100){
          output = "more than 100";
        }
        else if (inputArgument<100){
          output = "less than 100";
        }
        break;
      case "function":
        output = inputArgument(true);
        break;
      case "undefined":
        output = "no value";
        break;
      default:
        if (inputArgument == null){
          output = "no value";
        }
        else if (inputArgument.length>2){
          output = inputArgument[2];
        }
        break;
    }

    return output;
  },

  getPrimes: function(number){

  }, 

  Car: function(name, model, trailer){
    
    this.name = "General";
    this.model = "GM";
    this.numOfDoors = 4;
    this.numOfWheels = 4;
    this.speed = "0 km/h";
    this.isSaloon = true;

    if (name != undefined){
      this.name = name;
      this.model = model;
      if (name === "Porshe" || name === "Koenigsegg"){
        this.numOfDoors = 2;
      }
      else if (trailer === "trailer"){
        this.numOfWheels = 8;
        this.isSaloon = false;
      }
    }

    this.drive = function(speed){
      if (speed == 5){this.speed = "250 km/h"}
      else if (speed = 7){this.speed = "77 km/h"};
      return this;
    }
  }
}