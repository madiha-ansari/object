//object Assignment
//task#1

//  Part 1: Employee Data
// Challenge:
// 1. Design a type alias named Employee to represent an employee object with properties like 
// name (string), department (string), and role (string).
// 2. Include an optional nested object named contact to hold phone and email information (if 
// provided).
// 3. Employ a union type for the role property to restrict it to "Manager", "Engineer", or 
// "Intern".
// 4. Make the skills property an optional array of strings for listing an employee's skills (if 
// any) 

// ANSWER 
// start code

type Employees={
    name:string;
    department:string;
    contact?:{
      phone:number;
      email:string;
    };
    role:"Manager"|"Engineer"|"inter";
    skills:string[]
  }
  
  let employees :Employees={
       name:"Madiha",
       department:"Record management",
      role: "Manager",
       skills:["inventory","indexing","scanning","client services"]
  };

  let employees1= {
    name:"Huzaifa",     
    department:"pharmacy",
    role: "Manager",
    skills:["manage employee data","data entry","making salary","client services"],
    
    contact:{
    Phone:+9229860,
    email:"madihaansari123.com",
    }  
  };
  // end code
  