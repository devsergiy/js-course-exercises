describe("typeOf", function() {
  describe("Возвращает тип аргумента", function() {

    it.skip("number когда мы передали целое число", function() {
      expect(typeOf(1)).to.be.eq("number");
    });

    it("number когда мы передали дробное число", function() {
      expect(typeOf(5.0)).to.be.eq("number");
    });

    it.skip("undefined когда мы передали не инициализированную переменную", function() {
      var x;
      expect(typeOf(x)).to.be.eq("undefined");
    });

    it.skip("null когда мы передали null", function() {
      expect(typeOf(null)).to.be.eq("null");
    });

    it.skip("string когда мы передали строку", function() {
      expect(typeOf("VALUE")).to.be.eq("string");
    });

    it("boolean когда мы передали true", function() {
      expect(typeOf(true)).to.be.eq("boolean");
    });

    it("boolean когда мы передали false", function() {
      expect(typeOf(false)).to.be.eq("boolean");
    });
  });
});
