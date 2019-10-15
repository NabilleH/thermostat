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

    it("should not increase the temperature beyond 25 when power saving mode is on", function() {
      for ( var i = 0; i < 6; i++ ) {
      thermostat.up();
     }
     expect(thermostat.getCurrentTemperature()).toEqual(25);
    });

    it("should not increase the temperature beyond 32 when power saving mode is off", function() {
      thermostat.switchOffPowerSaving();
      for ( var i = 0; i < 13; i++ ) {
      thermostat.up();
     }
     expect(thermostat.getCurrentTemperature()).toEqual(32);
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

    it('should not decrease the temperature below 10', function() {
      for ( var i = 0; i < 11; i++ ) {
      thermostat.down();
     }
      expect(thermostat.getCurrentTemperature()).toEqual(10)
    });
  });

  describe('isPowerSavingModeOn', function() {
    it('should show the power saving status to be true', function() {
      expect(thermostat.isPowerSavingModeOn()).toBe(true)
    });
  });

  describe('switchOffPowerSaving', function () {
    it('turns power saving mode off', function () {
      thermostat.switchOffPowerSaving();
      expect(thermostat.isPowerSavingModeOn()).toBe(false)
    });
  });
  describe('switchOnPowerSaving', function () {
    it('turns power saving mode on', function () {
      thermostat.switchOffPowerSaving();
      thermostat.switchOnPowerSaving();
      expect(thermostat.isPowerSavingModeOn()).toBe(true)
    });
  });
  describe('reset', function () {
    it('resets temperature to 20', function () {
      thermostat.up();
      thermostat.up();
      thermostat.reset();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });

  describe('energyStatus', function () {
    it('should show the current enery usage as being low when below 18', function () {
      thermostat.down();
      thermostat.down();
      thermostat.down();
      expect(thermostat.energyStatus()).toEqual("low-usage");
    });

    it('should show the current enery usage as being medium when between 18 and 25', function () {
      expect(thermostat.energyStatus()).toEqual("medium-usage");
    });

    it('should show the current enery usage as being high when 25 and above', function () {
      for ( var i = 0; i < 6; i++ ) {
      thermostat.up();
     }
      expect(thermostat.energyStatus()).toEqual("high-usage");
    });

    

  });
});
