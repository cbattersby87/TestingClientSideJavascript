describe("Calculator", function() {
  var calc;

  beforeEach(function() {
    calc = new Calculator();

  });

  it("should add 2 numbers", function() {
    expect(calc.add(1, 1)).toBe(2);
  });

  it('should be able to divide 6 by 2', function(){
    expect(calc.divide(6,2)).toBe(3);
  });

  it('should be able to divde a rational number', function(){
    expect(calc.divide(1,3)).toBeGreaterThan(0.3);
    expect(calc.divide(1,3)).toBeLessThan(0.34);
  });

});