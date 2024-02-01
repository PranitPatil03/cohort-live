interface Person {
  name: string;
  age: number;
  greet(message: string): void;
}

class Employee implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(message: string): void {
    console.log(`Hello ${message} ${this.name}`);
  }
}

const employee = new Employee("Pranit", 23);

employee.greet("welcome");
