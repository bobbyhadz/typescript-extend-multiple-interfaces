export { };

// EXAMPLE 1 - Extend an interface in TypeScript

interface Animal {
  name: string;
  age: number;
}
interface Dog extends Animal {
  run(): void;
}

const dog1: Dog = {
  name: 'Tom',
  age: 3,
  run() {
    console.log('the dog runs...');
  },
};
console.log(dog1);

// ---------------------------------------------------

// // EXAMPLE 2 - Extend multiple interfaces in TypeScript

// interface Person {
//   name: string;
// }

// interface Employee {
//   id: number;
//   salary: number;
// }

// interface Developer extends Person, Employee {
//   language: string;
// }

// const dev: Developer = {
//   id: 1,
//   name: 'Bobby Hadz',
//   salary: 100,
//   language: 'TypeScript',
// };

// console.log(dev);

// ---------------------------------------------------

// // EXAMPLE 3 - Extending an interface with an existing Type Alias

// type Dog = {
//   name: string;
//   age: number;
// };

// interface Shepherd {
//   guardian: boolean;
// }
// interface Animal extends Dog, Shepherd { }

// const animal1: Animal = {
//   name: 'Tom',
//   age: 3,
//   guardian: true,
// };

// ---------------------------------------------------

// // EXAMPLE 4 - Extend an Interface excluding a Property in TypeScript

// interface Employee {
//   id: number;
//   name: string;
//   salary: number;
//   tasks: string[];
// }

// // ✅ 1. Exclude 1 property
// // 👇️ type WithoutTasks = {
// //     id: number;
// //     name: string;
// //     salary: number;
// // }
// type WithoutTasks = Omit<Employee, 'tasks'>;

// ---------------------------------------------------

// // EXAMPLE 5 - Overriding a property from an interface while extending it

// interface Employee {
//   id: number;
//   name: string;
//   salary: number;
// }

// // for multiple use - Omit<Employee, 'id' | 'salary'>
// interface Developer extends Omit<Employee, 'id'> {
//   id: string; // 👈️ override type of id
//   language: string;
// }

// const dev: Developer = {
//   id: 'dev-1',
//   name: 'Bobby Hadz',
//   salary: 100,
//   language: 'TypeScript',
// };
// console.log(dev);

// ---------------------------------------------------

// // EXAMPLE 6 - Override the Type of multiple Interface properties

// interface Coords {
//   address: string;
//   x: number;
//   y: number;
// }

// interface SpecificLocation extends Omit<Coords, 'address' | 'x' | 'y'> {
//   address: {
//     country: string;
//     city: string;
//     street: string;
//   };
//   x: string;
//   y: string;
// }

// const address: SpecificLocation = {
//   x: '5',
//   y: '10',
//   address: {
//     country: 'Chile',
//     city: 'Santiago',
//     street: 'Example street 123',
//   },
// };

// ---------------------------------------------------

// // EXAMPLE 7 - Omit multiple properties before extending an interface

// interface Employee {
//   id: number;
//   name: string;
//   salary: number;
// }

// // 👇️ omit `id` and `salary`
// interface Developer extends Omit<Employee, 'id' | 'salary'> {
//   id: string; // 👈️ override type of id
//   salary: string; // 👈️ override type of salary
//   language: string;
// }

// const dev: Developer = {
//   id: 'dev-1',
//   name: 'Bobby Hadz',
//   salary: '30 K',
//   language: 'TypeScript',
// };

// ---------------------------------------------------

// // EXAMPLE 8 - Specifying a more narrow type for the same property name

// interface Employee {
//   id: number | string; // 👈️ number OR string (wide)
//   name: string;
//   salary: number;
// }

// interface Developer extends Employee {
//   id: string; // 👈️ only string (narrow)
//   language: string;
// }

// const dev: Developer = {
//   id: 'dev-1', // 👈️ can only be string now
//   name: 'Bobby hadz',
//   salary: 100,
//   language: 'TypeScript',
// };
// console.log(dev);

// ---------------------------------------------------

// // EXAMPLE 9 - Extend an interface as not Required in TypeScript

// interface Address {
//   address: string;
// }

// interface SpecificLocation extends Partial<Address> {
//   x: number;
//   y: number;
// }

// const example: SpecificLocation = {
//   x: 5,
//   y: 10,
// };
// console.log(example);

// ---------------------------------------------------

// // EXAMPLE 10 - Only set some of the properties of an interface to optional when extending

// interface Address {
//   address: string;
//   country: string;
// }

// interface SpecificLocation
//   extends Omit<Address, 'address'>,
//   Partial<Pick<Address, 'address'>> {
//   x: number;
//   y: number;
// }

// const example: SpecificLocation = {
//   country: 'Chile',
//   x: 5,
//   y: 10,
// };
// console.log(example);

// ---------------------------------------------------

// // EXAMPLE 11 - Enforcing that a class satisfies one or more interfaces

// interface Dog {
//   name: string;
//   run(): void;
// }

// interface Shepherd extends Dog {
//   guardian: boolean;
// }

// class Animal implements Shepherd {
//   name = 'Tom';
//   guardian = true;

//   run() {
//     console.log('The animal runs');
//   }
// }

