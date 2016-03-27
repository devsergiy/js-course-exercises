describe("Arrays", function() {
  
  describe("hasRepeatingElements", function() {
    
    it("в массиве без повторяющихся элементов результат false", function() {
      assert.isFalse(hasRepeatingElements([1,2,3,4,5,6]));
    });
  
    it("в массиве с одинаковыми элементами результат true", function() {
      assert.isTrue(hasRepeatingElements([1,1,1,1,1,1]));
    });
    
    it("в массиве с повторяющимися элементами в начале массива результат true", function() {
      assert.isTrue(hasRepeatingElements([1,1,1,4,2]));
    });
    
    it("в массиве с произвольно повторяющимися элементами результат true", function() {
      assert.isTrue(hasRepeatingElements([1,3,2,4,2]));
    });
  })
  
  describe("negativeElementsSum", function() {
    
    it("считает сумму всех отрицательных элементов после нулевого элемента", function() {
      assert.equal(negativeElementsSum([1,2,0,-1,2,-3]), -4);
    });
    
    it("считает сумму всех отрицательных элементов, если первый элемент массива равен 0", function() {
      assert.equal(negativeElementsSum([0,1,2,-3,-4]), -7);
    });
    
    it("возвращает 0, если в массиве нет отрицательных элементов", function() {
      assert.equal(negativeElementsSum([1,2,3,4,5]), 0);
    });
    
    it("игнорирует последующие нули в массиве, после первого встретившегося", function() {
      assert.equal(negativeElementsSum([0,-2,0,-1,0,-4,-5]), -12);
    });
    
    it("игнорирует отрицательные элементы в массиве перед 0", function() {
      assert.equal(negativeElementsSum([-1,-2,-3,0,-4,-5]), -9);
    });
  })
  
  describe("commonElements", function() {
    
    it("если в массивах нет одинаковых элементов возвращает пустой массив", function() {
      expect(commonElements([1,2,3], ['a','b','c'])).to.be.empty;
    });
    
    it("возвращает массив, содержащий одинаковые элементы из обоих входящих массивов", function() {
      expect(commonElements([1,'a',2,3], ['a','b',2,'c'])).to.include.members(['a',2]);
    });
  });
  
  describe("identityMatrix", function() {
    
    it("если заданный размер матрицы меньше 1 возвращает null", function() {
      assert.isNull(identityMatrix(0));
    });
    
    it("если заданный размер матрицы больше 10 возвращает null", function() {
      assert.isNull(identityMatrix(15));
    });
    
    it("возвращает единичную матрицу", function() {
      var matrix = identityMatrix(4);
      assert.equal(matrix[0].toString(), '1,0,0,0');
      assert.equal(matrix[1].toString(), '0,1,0,0');
      assert.equal(matrix[2].toString(), '0,0,1,0');
      assert.equal(matrix[3].toString(), '0,0,0,1');
    });
  });
});
