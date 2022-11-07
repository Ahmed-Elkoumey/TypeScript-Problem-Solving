// ======== Exercise 5.1 ========
  // Goals:
  // • Add explicit parameter type to the greet method
  // • Add explicit return type to the greet method

  class MC {
    greet(event:string = 'party') :string {
      return `Welcome to the ${event}`;
    }
  }

  const mc = new MC();
  console.log('[Exercise 5.1]', mc.greet('show'));


  // ======== Exercise 5.2 ========
  // Goals:
  // • Add explicit parameter types to constructor
  // • Add typed parameters for storing values

  class Person {
    constructor(public name:string,public age : number) {
      this.name = name;
      this.age = age;
    }
  }

  const jane = new Person('Jane', 31);

  console.log('[Exercise 5.2]', `The new person's name is ${jane.name}.`);


  // ======== Exercise 5.3 ========
  // Goals:
  // • Explicitly make the title and salary properties publicly available
  // • Reduce class to three lines of code while maintaining functionality

  class Employee {
    
    constructor(public title: string,public salary: number) {
      this.title = title;
      this.salary = salary;
    }
  }

  const employee = new Employee('Engineer', 100000);

  console.log('[Exercise 5.3]', `The new employee's title is ${employee.title} and they earn $ ${employee.salary}.`);


  // ======== Exercise 5.4 ========
  // Goals:
  // • Add complete typing
  // • Make the Snake class inherit from Animal
  // • Make the Pony class inherit from Animal
  // • Make it so that the name member cannot be publicly accessed

  class Animal {
  protected  constructor(protected name:string) {
      this.name=name;
    }
    move( meters:number) :void {
      console.log(`${this.name} moved ${meters}m.`);
    }
  }

  class Snake extends Animal {
    constructor(protected name:string) {
      super(name);
      this.name=name;
    }
    move(meters:number = 5) {
      console.log('Slithering...');
      super.move(meters);
      // should call on parent's `move` method, w/ a default
      // slither of 5 meters
    }
  }
  

  class Pony extends Animal{
    constructor(protected name:string){
      super(name);
      this.name=name;
    }
    move(meters:number=60) {
      console.log('Galloping...');
      super.move(meters)
      // should call on parent's `move` method, w/ a default
      // gallop of 60 meters
    }
  }

  // The class Animal should not be instantiable.
  // Delete or comment out once the desired error is achieved.


  // const andrew = new Animal("Andrew the Animal");
  // andrew.move(5);

  const sammy = new Snake("Sammy the Snake");
  sammy.move();
  console.log(sammy.name); // Should return error

  const pokey = new Pony("Pokey the Pony");
  pokey.move(34);
  console.log(pokey.name); // Should return error



  

  // ======== Exercise 5.5 ========
  // Goals:
  // • Make it so that only the Desk and Chair classes can see the
  //   manufacturer member

  class Furniture {
   protected constructor(protected manufacturer: string = 'IKEA') {
    this.manufacturer=manufacturer;
   }
  }

  class Desk extends Furniture {
    constructor(protected manufacturer: string = 'IKEA') {
      super(manufacturer);
      this.manufacturer=manufacturer;
     }

    kind():void {
      console.log('[Exercise 5.5]', `This is a desk made by ${this.manufacturer}`);
    }
  }

  class Chair extends Furniture {
    constructor(protected manufacturer: string = 'IKEA') {
      super(manufacturer);
      this.manufacturer=manufacturer;
     }

    kind():void {
      console.log('[Exercise 5.5]', `This is a chair made by ${this.manufacturer}`);
    }
  }

  const desk = new Desk();
  desk.kind();
  desk.manufacturer; // Should return error

  const chair = new Chair();
  chair.kind();
  chair.manufacturer; // Should return error

 