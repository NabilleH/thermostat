require 'sinatra'
require 'json'
require 'pg'

  get "/update" do
    headers 'Access-Control-Allow-Origin' => '*'
    load_temp.to_json
  end

  post "/retrieve" do
    headers 'Access-Control-Allow-Origin' => '*'
    save_temp(temperature: params[:temperature])
  end

  def save_temp(temperature:)
    connection = PG.connect(dbname: "thermostat")
    connection.exec("TRUNCATE TABLE state;")
    connection.exec("INSERT INTO state (temperature) VALUES(#{temperature});")
  end

  def load_temp
    connection = PG.connect(dbname: "thermostat")
    temp = connection.exec("SELECT temperature FROM state;").first
    temp["temperature"].to_i
  end
