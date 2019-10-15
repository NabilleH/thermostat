'use strict';

describe('Thermostat', function() {
  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('up', function() {
    it("should increase the temperature when selected", function() {
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });
  });

  describe('getCurrentTemperature', function () {
    it('gets the current thermostat temperature', function () {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });

  describe('down', function () {
    it('decresease temperature', function () {
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19)
    });
  });
});
