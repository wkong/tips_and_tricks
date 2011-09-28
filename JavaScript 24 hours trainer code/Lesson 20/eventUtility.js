var eventUtility = {
    addEvent : (function() {
        if (typeof addEventListener !== "undefined") {
            return function(obj, evt, fn) {
                obj.addEventListener(evt, fn, false);
            };
        } else {
            return function(obj, evt, fn) {
                obj.attachEvent("on" + evt, fn);
            };
        }
    }()),
    removeEvent : (function() {
        if (typeof removeEventListener !== "undefined") {
            return function(obj, evt, fn) {
                obj.removeEventListener(evt, fn, false);
            };
        } else {
            return function(obj, evt, fn) {
                obj.detachEvent("on" + evt, fn);
            };
        }
    }())
};
