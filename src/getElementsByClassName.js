// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here
  var result = [];
  (function innerFunction (node) {
    if (node.classList && node.classList.contains(className)) {
      result.push(node);
    }
    for (var i = 0; i < node.children.length; i++) {
      innerFunction(node.children[i]);
    }
  })(document.body);
  return result;
};