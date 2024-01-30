/* 

  let x: number = 1001;
  let y: string = "hello";

  y = 109;

  console.log(x + y);

  console.log(x); 
  
*/

/* 

  function greet(firstName: number) {
    console.log(`hello ${firstName}`);
  }

  greet(122); 

  const greet = (firstName:string) => {
  console.log(`hello ${firstName}`);
}

  greet("pranit")

*/

/* 
  const sum = (num1: number, num2: number) => {
    return num1 + num2;
  }

  console.log(sum(43, 50)) 
*/

/*   

  function printMessage(fn:(message:string)=>string) {
    setTimeout(() => {
      let x = fn("hello")
      console.log(x)
    },3000)
  }

  printMessage(function (message: string) {
    return message;
  }); 
  
*/

interface User {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
}

const user = {
  firstName: "pranit",
  lastName: "patil",
  age: 2,
  email: "patilpranit@gmail.com",
};

const isLegal = (user: User) => {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
};

console.log(isLegal(user));
