'use strict';

function Thermostat() {
  this.maximum_tempature = 25;
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
  return this.temperature === this.maximum_tempature;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.isPowerSavingModeOn = function () {
  return this.powerSavingMode;
};

Thermostat.prototype.switchOffPowerSaving = function () {
  this.powerSavingMode = false;
  this.maximum_tempature = 32;

};

Thermostat.prototype.switchOnPowerSaving = function () {
  this.powerSavingMode = true;
  this.maximum_tempature = 25;
};

Thermostat.prototype.reset = function () {
  this.temperature = 20;
};

Thermostat.prototype.energyStatus = function () {
  if ( this.temperature < 18 ) {
    return 'low-usage'
  } else if ( this.temperature > 18 && this.temperature < 25 ) {
    return 'medium-usage'
  }
    return 'high-usage'
};
