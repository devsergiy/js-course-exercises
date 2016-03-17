describe("if/else/switch tasks", function() {
  describe("greaterNum", function() {
    describe("Возвращает результат", function() {
      it("10 когда мы передали 10 и 1", function() {
        expect(greaterNum(10, 1)).to.be.eq(10);
      });

      it("100 когда мы передали 57 и 100", function() {
        expect(greaterNum(57, 100)).to.be.eq(100);
      });

      it("100 когда мы передали 100 и 100 (равные значения)", function() {
        expect(greaterNum(100, 100)).to.be.eq(100);
      });

      it("-57 когда мы передали -57 и -100", function() {
        expect(greaterNum(-57, -100)).to.be.eq(-57);
      });
    });
  });

  describe("helloWorld", function() {
    describe("Возвращает результат", function() {
      var result, input;

      result = 'Hello';
      input  = 'en';
      it(result + " когда мы передали " + input, function() {
        expect(helloWorld(input)).to.be.eq(result);
      });

      result = 'Hola';
      input  = 'es';
      it(result + " когда мы передали " + input, function() {
        expect(helloWorld(input)).to.be.eq(result);
      });

      result = 'Привет';
      input  = 'ru';
      it(result + " когда мы передали " + input, function() {
        expect(helloWorld(input)).to.be.eq(result);
      });

      input  = 'de';
      it(result + " когда мы передали " + input, function() {
        expect(helloWorld(input)).to.be.eq(result);
      });
    });
  });

  describe("assignGrade", function() {
    describe("Возвращает результат", function() {
      it("1 когда мы передали 10", function() {
        expect(assignGrade(10)).to.be.eq(1);
      });

      it("1 когда мы передали 20", function() {
        expect(assignGrade(20)).to.be.eq(1);
      });

      it("2 когда мы передали 25", function() {
        expect(assignGrade(25)).to.be.eq(2);
      });

      it("3 когда мы передали 45", function() {
        expect(assignGrade(45)).to.be.eq(3);
      });

      it("4 когда мы передали 63", function() {
        expect(assignGrade(63)).to.be.eq(4);
      });

      it("5 когда мы передали 100", function() {
        expect(assignGrade(100)).to.be.eq(5);
      });
    });

    describe("Сгенерированный тест на проверку всех возможных случаев", function() {
      var score, expected;
      for (var i = 0; i < 5; i++) {
        for (var j = 1; j <= 20; j+=7) {
          score = i*20 + j;
          expected = i + 1;
          it("возвращает " + expected + " когда score=" + score , function() {
            expect(assignGrade(score)).to.be.eq(expected);
          });
        }
      }
    });
  });
});
