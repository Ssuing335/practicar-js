CanMin=5;
ValorRnd=(Math.random()*37*5)+37*5;
test('37*5<=ValorRnd<=37*10', () => {
    expect(ValorRnd).toBeGreaterThanOrEqual(37*5);
    expect(ValorRnd).toBeLessThanOrEqual(37*10);
  });