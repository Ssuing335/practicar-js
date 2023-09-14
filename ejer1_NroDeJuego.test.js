//Arrange
NroDeJuegoAnterior=4;
//act
NroDeJuegoActual=5;
//Assert
test('El numero de juego actual despues de hacer las vueltas',()=>{
    expect(NroDeJuegoActual).toBeGreaterThanOrEqual(1);
    expect(NroDeJuegoActual).toBeLessThanOrEqual(10);
    expect(NroDeJuegoActual).toBe(NroDeJuegoAnterior+1);
    expect(NroDeJuegoAnterior).toBe(NroDeJuegoActual-1);
})