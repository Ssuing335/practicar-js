let valorAleatorio= Math.floor((Math.random()*37*5)+37*5);
valorRuleta=valorAleatorio%37;
test('0<=valorAleatorio<=36',()=>{
    expect(valorRuleta).toBeGreaterThanOrEqual(0);
    expect(valorRuleta).toBeLessThanOrEqual(36);});