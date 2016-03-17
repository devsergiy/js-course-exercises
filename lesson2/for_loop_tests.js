describe("for loop tasks", function() {
  describe("numberGenerator", function() {
    var spy;

    beforeEach(function() {
      // runs before all tests in this block
      spy = sinon.spy(console, "log");
      numberGenerator();
    });

    afterEach(function() {
      // runs after all tests in this block
      console.log.restore();
    });

    describe('Когда число нечетное', function () {
      before(function() {
        sinon.stub(Math, "random").returns(0.1);
      });

      after(function() {
        Math.random.restore()
      });

      it('возвращает результат - нечетное', function () {
        expect(spy.calledWith('3 нечетное')).to.be.true
      });

      it("Выводит результат 5 раз", function() {
        expect(spy.callCount).to.be.eq(5);
      });
    });

    describe('Когда число четное', function () {
      before(function() {
        sinon.stub(Math, "random").returns(0.55);
      });

      after(function() {
        Math.random.restore()
      });

      it('возвращает результат - четное', function () {
        expect(spy.calledWith('12 четное')).to.be.true
      });

      it("Выводит результат 5 раз", function() {
        expect(spy.callCount).to.be.eq(5);
      });
    });
  });

  describe("multiplicationTable", function() {
    var spy;

    before(function() {
      // runs before all tests in this block
      spy = sinon.spy(console, "log");
      multiplicationTable();
    });

    after(function() {
      // runs after all tests in this block
      console.log.restore();
    });

    it("Выводит таблицу" , function() {
      var resultString;
      for (var i = 1; i <= 10; i++) {
        for (var j = 1; j <= 10; j++) {
          resultString = i + ' * ' + j + ' = ' + (i * j);

          expect(spy.calledWithExactly(resultString)).to.be.true;
        }
      }
    });

    it("Выводит результат 100 раз", function() {
        expect(spy.callCount).to.be.eq(100);
    });
  });

  describe("checkAssignGrade", function() {
    var spy;

    before(function() {
      // runs before all tests in this block
      spy = sinon.spy(console, "log");
      checkAssignGrade();
    });

    after(function() {
      // runs after all tests in this block
      console.log.restore();
    });

    it("Выводит правильные результаты" , function() {
      var resultString;

      resultString = 'Для i=80 оценка 4';
      expect(spy.calledWithExactly(resultString)).to.be.true;

      for (var i = 81; i <= 100; i++) {
         resultString = 'Для i=' + i + ' оценка ' + 5;
         expect(spy.calledWithExactly(resultString)).to.be.true;
      }
    });
  });
});
