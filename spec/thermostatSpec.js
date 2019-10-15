describe('Thermostat', function() {
  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('temperature', function() {

    it('defaults to 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20)
    });
  });

  describe('up', function() {
    it("should increase the temperature when selected", function() {
      thermostat.up;
      expect(thermostat.temperature).toEqual(21);
    });
  });

});
