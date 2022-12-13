// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here}
  if (typeof obj === 'number' || obj === true || obj === false) {
    return '' + obj;
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj) && obj.length === 0) {
    return '[]';
  }

  var result = [];
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      if (typeof obj[i] === 'boolean' || typeof obj[i] === 'number') {
        result.push(obj[i]);
      } else {
        result.push(stringifyJSON(obj[i]));
      }
    } return '[' + result + ']';
  }

  if (typeof obj === 'object') {
    var string = '';
    for (var key in obj) {
      if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
        continue;
      }
      string += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
    }
    if (string.length !== 0) {
      string = string.slice(0, -1);
    }
    return '{' + string + '}';
  }
};
