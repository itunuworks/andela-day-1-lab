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
    var primes = [];
    var i;

    if (number>1){
      primes.push(2);
      if (number>2){
        primes.push(3);
      }
      for (i=5; i<=number; i=i+2){
        var isPrime = true;
        var j = 0;
        while (isPrime && primes[j]<=Math.sqrt(i)){
          if (i%primes[j]==0){
            isPrime = false
          }
          j++;
        }
        if (isPrime){
          primes.push(i);
        }
      }
    }

    return primes;
  }, 
  

  Car: function(name, model, trailer){
    
    this.name = "General";
    this.model = "GM";
    this.numOfDoors = 4;
    this.numOfWheels = 4;
    this.speed = "0 km/h";ss
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
  }, 

  Person: function(firstName, lastName){

    this.firstName = firstName;
    this.lastName = lastName;
    this.mentionYourName = function(){
      return ("My name is " + this.firstName);
    }

  }

}