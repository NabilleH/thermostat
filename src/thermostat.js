'use strict';

function Thermostat() {
  this.max_temp = 25;
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
  this.powerSavingMode = true;
}

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  };
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function() {
  return this.temperature === this.MAXIMUM_TEMPERATURE;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.isPowerSavingModeOn = function () {
  return this.powerSavingMode;
};

Thermostat.prototype.switchOffPowerSaving = function () {
  this.powerSavingMode = false;
  this.MAXIMUM_TEMPERATURE = 32;

};

Thermostat.prototype.switchOnPowerSaving = function () {
  this.powerSavingMode = true;
  this.MAXIMUM_TEMPERATURE = 25;
}
