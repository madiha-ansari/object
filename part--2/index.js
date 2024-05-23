"use strict";
//OBJECT ASSIGNMENT
Object.defineProperty(exports, "__esModule", { value: true });
let myCar = {
    engine: {
        horsepower: 300,
    },
    getHorsepower() {
        return this.engine.horsepower;
    },
};
console.log(myCar.getHorsepower());
// end code
