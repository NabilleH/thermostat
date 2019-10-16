$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  updateUsage();

  $('.up').click(function() {
    thermostat.up();
    updateTemperature();
    updateUsage();
  });

  $('.down').click(function() {
    thermostat.down();
    updateTemperature();
    updateUsage();
  });

  $('.reset').click(function() {
    thermostat.reset();
    updateTemperature();
    updateUsage();
  });

  $('.eco').click(function() {
    if ( thermostat.powerSavingMode === true ) {
      thermostat.switchOffPowerSaving();
    } else {
      thermostat.switchOnPowerSaving();
    }
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  };

  function updateUsage() {
    $('#usage').text( thermostat.energyStatus() );
    $('#usage').attr('class', thermostat.energyStatus());
  };

});
