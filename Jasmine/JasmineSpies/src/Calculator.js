function Calculator(element) {
  this.el = element;
}

Calculator.prototype.add = function(a, b) {
  return a + b;
};

Calculator.prototype.divide = function(a, b) {
  return a / b;
};
