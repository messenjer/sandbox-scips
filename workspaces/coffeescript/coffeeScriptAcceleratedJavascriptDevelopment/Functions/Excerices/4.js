// Generated by CoffeeScript 1.3.3
var f, y;

f = function(x) {
  return Math.pow(x, 2) + 1;
};

console.log("X² + 1 f (0) = " + f(0.));

console.log("X² + 1 f(1) = " + f(1));

console.log("X² + 1 f 2 = " + f(2));

y = function(x, a) {
  return Math.pow(x, 2) + a;
};

console.log("X² + a y(3,5) = " + y(3, 5));

console.log("X² + a y 4, 5 = " + y(4, 5));

console.log("X² + a y 4, 5 = " + y(4., 5));
