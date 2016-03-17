describe("typeOf", function() {
  describe("Возвращает тип аргумента", function() {

    it("Когда мы передали число 1", function() {
      expect(typeOf(1)).to.be.eq("number");
    });

    it("Когда мы передали число 5.0", function() {
      expect(typeOf(5.0)).to.be.eq("number");
    });

    it("Когда мы передали не инициализированную переменную", function() {
      var x;
      expect(typeOf(x)).to.be.eq("undefined");
    });

    it("Когда мы передали null", function() {
      expect(typeOf(null)).to.be.eq("null");
    });

    it("Когда мы передали строку", function() {
      expect(typeOf("VALUE")).to.be.eq("string");
    });

    it("Когда мы передали true", function() {
      expect(typeOf(true)).to.be.eq("boolean");
    });
  });
});
