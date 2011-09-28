var i = 0;

do {
    var userName = prompt("Please enter your name. Type exit to exit", "");
    alert("Hello, " + userName + ". You’ve ran run this " + ++i + " times.");   
} while (userName !== "exit");