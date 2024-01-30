"use strict";
/*

  let x: number = 1001;
  let y: string = "hello";

  y = 109;

  console.log(x + y);

  console.log(x);
  
*/
const user = {
    firstName: "pranit",
    lastName: "patil",
    age: 2,
    email: "patilpranit@gmail.com",
};
const isLegal = (user) => {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isLegal(user));
