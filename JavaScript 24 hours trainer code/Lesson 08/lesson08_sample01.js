function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function() {
        return this.firstName + " " + this.lastName;
    };

    this.greet = function(person) {
        alert("Hello, " + person.getFullName());
    };
}

var person1 = new Person("Jeremy", "McPeak");
var person2 = new Person("John", "Doe");

person1.greet(person2);