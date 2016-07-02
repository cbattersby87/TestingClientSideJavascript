describe("Calculator", function() {
  var calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  it("should add 2 numbers", function() {
    var result = calculator.add(1, 1);
    expect(result).toBe(2);
  });
});
