"use strict";
//object Assignment 
Object.defineProperty(exports, "__esModule", { value: true });
let Tshirt = {
    name: "Karachi king",
    price: 2000,
    color: "red",
    inventory: {
        stock: 10,
        changeColor: (newColor) => {
            Tshirt.color = newColor;
            if (Tshirt.color === "black") {
                let ipercent20 = Tshirt.price / 100 * 20;
                Tshirt.price += ipercent20;
            }
            else if (Tshirt.color === "white") {
                let dpercent10 = Tshirt.price / 100 * 10;
                Tshirt.price -= dpercent10;
            }
            else if (Tshirt.color === "red") {
                let ipercent5 = Tshirt.price / 100 * 5;
                Tshirt.price += ipercent5;
            }
            else {
                return null;
            }
        }
    }
};
console.log(Tshirt);
Tshirt.inventory.changeColor("black");
console.log(Tshirt);
// end code 
