function getMonthName(index) {
    var months = [ "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December" ];
        
    return months[index];
}

function abbrName(text) {
    return text.substr(0, 3);
}

var date = new Date();

var messageParts = [
    "Hello, ",
    prompt("Please enter your name", "Please enter your name"),
    ". Today is ",
    abbrName(getMonthName(date.getMonth())),
    " ",
    date.getDate(),
    ", ",
    date.getFullYear()
];

alert( messageParts.join("") );