describe('App', () => {
    it('Should be 30', () => {
        // Arrange - Preparar la prueba
        const num1 = 10;
        const num2 = 20;

        // Act - Estimulos
         const result = num1 + num2;

        // Assert - probar el resultado

        expect(result).toBe(30);

    })
})