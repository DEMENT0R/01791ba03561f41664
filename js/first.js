// This class takes a name string and greeting string in
// the constructor. Here are some examples of how this should work:
//
// g = new Greeter()
// g.greet() # => "Hello, Anonymous!"
//
// g = new Greeter("What's up", "Dog")
// g.greet() # => "What's up, Dog!"
//
// g = new Greeter("Hola")
// g.greet() # => "Hola, Anonymous!"
 
// Unfortunately, this code isn't quite working.
// Can you spot at least 2 bugs?
 
class Greeter {
  constructor(greeting, name) {
    this.name = name;
    this.greeting = greeting;
  }
   
  greet() {
    var name = this.name;
    var greeting = this.greeting;
   
    if (!name) {
      name = "Anonymous";
    }
    console.log("greeting = " + greeting);
    if (greeting == undefined) {          // = -> ==
      greeting = "Hello";
    }
    console.log("name = " + name);
    return (greeting + ", " + name + "!");
  }
}
 
g = new Greeter("Hi");
console.log(g.greet());