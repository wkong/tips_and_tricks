var i = 0;
var userName = prompt("Please enter your name. Type exit to exit", "");

while (userName !== "exit") {
    alert("Hello, " + userName + ". You’ve ran run this " + ++i + " times.");

    userName = prompt("Please enter your name. Type exit to exit", "");
}

// execute down