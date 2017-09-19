
exports.rectangle = function(width, height, depth) {
    return width*height*depth;
}

exports.sphere = function(radius) {
    return 4/3*Math.PI*radius*radius*radius
}


exports.cube = function(width) {
    return exports.rectangle(width, width, width);
}