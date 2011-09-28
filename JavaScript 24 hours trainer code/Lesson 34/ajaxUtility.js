var ajaxUtility = {
    createXHR : function() {
        if (typeof XMLHttpRequest !== "undefined") {
            return new XMLHttpRequest();
        } else {
            var versions = [ "MSXML2.XmlHttp.6.0",
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
    },

    makeGetRequest : function(url, callback) {
        var xhr = this.createXHR();

        xhr.open("GET", url);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                var status = xhr.status;

                if ((status >= 200 && status < 300) || status === 304) {
                    callback(xhr.responseText);
                } else {
                    alert("An error occurred");
                }
            }
        };

        xhr.send(null);
    },

    getRequestBody : function(form) {
        var pieces = [];
        var elements = form.elements;

        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var name = encodeURIComponent(element.name);
            var value = encodeURIComponent(element.value);
            
            pieces.push(name + "=" + value);
        }

        return pieces.join("&");
    },

    postFromForm : function(url, form, callback) {
        var xhr = this.createXHR();
        var data = this.getRequestBody(form);

        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                var status = xhr.status;

                if ((status >= 200 && status < 300) || status === 304) {
                    callback(xhr.responseText);
                } else {
                    alert("An error occurred");
                }
            }
        };

        xhr.send(data);
    }
};