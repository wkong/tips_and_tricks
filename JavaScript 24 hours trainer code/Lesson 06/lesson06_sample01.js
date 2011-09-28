function shapeArea(base, height, shape) {
    var area = 0;
    
    function triangle() {
        area = (base * .5) * height;
    }
    
    function rectangle() {
        area = base * height;
    }

    switch (shape) {
        case "triangle":
            triangle();
            break;
        
        case "rectangle":
            rectangle();
            break;
        
        case "square":
            rectangle();
            break;
    }
    
    return area;
}