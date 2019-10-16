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

  // function displayWeather(city) {
  //   var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  //   var token = '11669ba4faa83f11dfef243d15eace9f';
  //   var units = '&units=metric';
  //   $.get(url + token + units, function(data) {
  //   $('#current-temperature').text(data.main.temp);
  // })

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
  })

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp)
    })
  })

  // displayWeather('London');
  //
  // $('#select-city').submit(function(event) {
  //   event.preventDefault();
  //   var city = $('#current-city').val();
  //   displayWeather(city);
  // })

});
