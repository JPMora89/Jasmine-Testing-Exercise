
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({'amount':15000, 'years': 30, 'rate':8})).toEqual('110.06');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({ "amount": 100000, "years": 30, "rate": 8 })).toEqual("733.76", 2);
});


