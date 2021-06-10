

// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

var apiKey = "38b93489d4d6cdd8414ebebd8b9f8f4f";


$(document).ready(function(){


function latLot(cityName) {
    $.ajax({
        url:`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}` ,
        method: "GET"
    }).then(function(res){
       var latitude = res.coord.lat;
       var longitude = res.coord.lon;
       allData(cityName, latitude, longitude)
    })

}
latLot("seattle")
function allData(cityName, latitude, longitude) {
    $.ajax({
        url:`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&&exclude=minutely&appid=${apiKey}`,
        method:"GET"
    }).then(function(res){
        console.log(res)
        var uviIndex = res.current.uvi
        $("#humidity").text("humidity: " + res.current.humidity)
        $("#temperature").text("temperature: " + res.current.temp)
        $("#uvi").text("uvi: " + uviIndex)
        $("#wind-speed").text("wind-speed: " + res.current.wind_speed)
    
        if (uviIndex < 3) {
            $("#uvi").addClass("low")
        } 
        else if (uviIndex >= 3 && uviIndex < 8) {
            $("#uvi").addClass("medium")

        } else {
            $("#uvi").addClass("high")
        }

    })
}
})




latLot("seattle")
function allData(cityName, latitude, longitude) {
    $.ajax({
        url:`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&&exclude=minutely&appid=${apiKey}`,
        method:"GET"
    }).then(function(res){
        console.log(res)
        $("#humidity1").text("humidity: " + res.daily[0].humidity)
        $("#temperature1").text("temperature: " + res.daily[0].temp.max)
    })
}
latLot("seattle")
function allData(cityName, latitude, longitude) {
    $.ajax({
        url:`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&&exclude=minutely&appid=${apiKey}`,
        method:"GET"
    }).then(function(res){
        console.log(res)
        $("#humidity2").text("humidity: " + res.daily[1].humidity)
        $("#temperature2").text("temperature: " + res.daily[1].temp.max)
    })
}
latLot("seattle")
function allData(cityName, latitude, longitude) {
    $.ajax({
        url:`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&&exclude=minutely&appid=${apiKey}`,
        method:"GET"
    }).then(function(res){
        console.log(res)
        $("#humidity3").text("humidity: " + res.daily[2].humidity)
        $("#temperature3").text("temperature: " + res.daily[2].temp.max)
    })
}
latLot("seattle")
function allData(cityName, latitude, longitude) {
    $.ajax({
        url:`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&&exclude=minutely&appid=${apiKey}`,
        method:"GET"
    }).then(function(res){
        console.log(res)
        $("#humidity4").text("humidity: " + res.daily[3].humidity)
        $("#temperature4").text("temperature: " + res.daily[3].temp.max)
    })
}
latLot("seattle")
function allData(cityName, latitude, longitude) {
    $.ajax({
        url:`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&&exclude=minutely&appid=${apiKey}`,
        method:"GET"
    }).then(function(res){
        console.log(res)
        $("#humidity5").text("humidity: " + res.daily[4].humidity)
        $("#temperature5").text("temperature: " + res.daily[4].temp.max)
    })
}

