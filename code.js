

function start(){
  // writes to console
  console.log("start button pushed");
  // this disables the start button after it is pushed
  document.getElementById("startButton").disabled = true;
  // this enables the stop button after start button is pushed
  document.getElementById("stopButton").disabled = false;
  // this writes reading data to portray it is loading
  document.getElementById("data").rows["seconds"].innerHTML = "Reading Data";
  index = 0; 
  timer = setInterval(updateDisplay, time_interval); 


}

function stop(){
  //writes to console
  
  clearInterval(timer); 

  console.log("stop button pushed")
  document.getElementById("stopButton").disabled = true
  document.getElementById("startButton").disabled = false

  
}

// this function writes the elements to the table for each row when it is called
function dataRow(legend, value, units){
  msg = "<td>"; 
  msg += legend; 
  msg += ": </td><td>";
  msg += value; 
  msg += " " + units; 
  msg += "</td>"; 
  return msg;
}

// this function fetches data for the the rows
function getData(){
  var loadedData = loadData(); 
  return loadedData; 
}



// this class holds the data
class InputData {
  constructor (
    time_seconds, 
    latitude, 
    longitude, 
    gps_altitude,
    bmpSensor_altitude,
    bmpSensor_pressure, 
    bmpSensor_temp,
    digSensor_temp, 
    cssSensor_temp,
    cssSensor_eCO2,
    cssSensor_TVOC, 
    UV,
    accelX,
    accelY,
    accelZ,
    magneticX, 
    magneticY,
    magneticZ,
    gyroX,
    gyroY,
    gyroZ
  ) {
    this.time_seconds = time_seconds;
    this.latitude = latitude; 
    this.longitude = longitude; 
    this.gps_altitude = gps_altitude; 
    this.bmpSensor_altitude = bmpSensor_altitude; 
    this.bmpSensor_pressure = bmpSensor_pressure; 
    this.bmpSensor_temp = bmpSensor_temp; 
    this.digSensor_temp = digSensor_temp; 
    this.cssSensor_temp = cssSensor_temp;
    this.cssSensor_eCO2 = cssSensor_eCO2; 
    this.cssSensor_TVOC = cssSensor_TVOC; 
    this.UV = UV; 
    this.accelX = accelX;
    this.accelY = accelY; 
    this.accelZ = accelZ; 
    this.magneticX = magneticX; 
    this.magneticY = magneticY;
    this.magneticZ = magneticZ; 
    this.gyroX = gyroX;
    this.gyroY = gyroY; 
    this.gyroZ = gyroZ; 

  }

}



