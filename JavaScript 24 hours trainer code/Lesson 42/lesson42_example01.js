(function() {

var ajaxUtility = js24Hour.ajaxUtility;
var eventUtility = js24Hour.eventUtility;


function submitForm(event) {
    var data = ajaxUtility.getRequestBody(document.theForm);

    ajaxUtility.makeGetRequest("car_dealership.php?" + data, processResponse);

    eventUtility.preventDefault(event);
}

function getCarString(carObj) {
    return [carObj.year, carObj.make, carObj.model].join(" ");
}

//{
//    "searchedCar" : {
//        "make" : "value",
//        "model" : "value",
//        "year" : numericValue
//    },
//    "isFound" : booleanValue,
//    "results" : [
//        {
//            "make" : "value",
//            "model" : "value",
//            "year" : numericValue
//        },
//        // more object structures if necessary
//    ]
//}

function processResponse(data) {
    var result = JSON.parse(data);
    var messageDiv = document.getElementById("divSearchMessage");
    var resultsDiv = document.getElementById("divSearchResults");
    var message = "";
    var results = [];
    var length = result.results.length;
    var carStr = getCarString(result.searchedCar);

    if (result.isFound) {
        message = "We found " + length + " matches for " + carStr;
    } else {
        message = "We could not find " + carStr + ". You might like: ";

        for (var i = 0; i < length; i++) {
            results.push(getCarString(result.results[i]));
        }

        resultsDiv.innerHTML = results.join("<br/>");
    }

    messageDiv.innerHTML = message;
}

eventUtility.addEvent(document.forms[0], "submit", submitForm);
}());