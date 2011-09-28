function createXHR() {
    if (typeof XMLHttpRequest !== "undefined") {
        return new XMLHttpRequest();
    } else {
        var versions = ["MSXML2.XmlHttp.6.0",
            "MSXML2.XmlHttp.3.0" ];

        for (var i = 0; i < versions.length; i++) {
            try {
                var xhr = new ActiveXObject(versions[i]);
                return xhr;
            } catch (error) {
                // do nothing
            }
        }
    }

    alert("Your browser does not support XmlHttp");

    return null;
}

var xhr = createXHR();

xhr.onreadystatechnage = function() {
    if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
            // code do something here
        } else {
            alert("Something went wrong");
        }
    }
};