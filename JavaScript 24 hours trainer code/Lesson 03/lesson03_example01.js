function getGreeting(firstName, lastName) {
    var greeting = "Hello, " + firstName + " " + lastName + "!";

    return greeting;
}

var message = getGreeting("John", "Doe");

alert(message);