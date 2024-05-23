//object Assignment 

//task#3

// Part 3: Colorful T-Shirts
// Challenge:
// 1. Design a type alias named Product to represent a T-shirt object with properties like name
// (string), price (number), and color (string).
// 2. Include a nested object named inventory within Product. This inventory object 
// should have two properties: 
// o stock (number): Represents the number of T-shirts available.
// o colorOptions (optional array of strings): Lists available colors (if any).
// 3. Inside the inventory object, define a function named changeColor. This function 
// accepts a new color string as an argument. When called, it should: 
// o Update the color property of the Product object.
// o Adjust the price based on the new color (implement your own logic, e.g., 
// increase by 10% for red, decrease by 5% for blue)

// Answer
// start code :
type Product = {
    name: string;
    price: number;
    color: string;
    inventory: {
      stock: number;
      colorOptions?: ["black","white","red","blue"];
      changeColor: (newColor: string) =>any ;
    };
  };
  
  let Tshirt:Product={
                
          name:"Karachi king",
          price:2000,
          color:"red",
  
  
        inventory:{
          stock:10,
          changeColor:(newColor :string)=>{
            Tshirt.color=newColor
            if(Tshirt.color==="black"){
              let ipercent20=Tshirt.price/100*20
              Tshirt.price+=ipercent20
            }
            else if(Tshirt.color==="white"){
              let dpercent10=Tshirt.price/100*10
              Tshirt.price-=dpercent10
            }
            else if(Tshirt.color==="red"){
              let ipercent5=Tshirt.price/100*5
              Tshirt.price+=ipercent5
            }
            else{
              return null;
            }
          }
        }
          }
          console.log(Tshirt);
          Tshirt.inventory.changeColor("black")
          console.log(Tshirt)
// end code 