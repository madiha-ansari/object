//OBJECT ASSIGNMENT

//task#2
// Part 2: Car Details
// Challenge:
// 1. Design a type alias named Car to represent a car object.
// 2. Include a nested object named engine within Car, containing a property named 
// horsepower (number).
// 3. Define a function named getHorsepower directly within the Car type alias to retrieve the 
// engine's horsepower.

// Answer
// start code

type car ={
  engine :{
      horsepower:number,
  }
getHorsepower:()=> number,
};

let myCar:car= {

   engine:{
       horsepower:300,
   },
   getHorsepower(){ 
       return this .engine.horsepower ;
   },
};
console.log(myCar.getHorsepower());
// end code