var calculator = require('./calculator');


test('Should add a number to another',()=>{
    //Arrange y Act
    var sum = calculator.add(2,3);
    //Assert
    expect(sum).toBe(5);
})