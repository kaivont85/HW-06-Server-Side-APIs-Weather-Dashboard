// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

var apiKey = "38b93489d4d6cdd8414ebebd8b9f8f4f";

$(document).ready(function () {
  function latLot(cityName) {
    $.ajax({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`,
      method: "GET",
    }).then(function (res) {
      var latitude = res.coord.lat;
      var longitude = res.coord.lon;
      allData(cityName, latitude, longitude);
    });
  }

  function allData(cityName, latitude, longitude) {
    $.ajax({
      url: `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&&exclude=minutely&appid=${apiKey}`,
      method: "GET",
    }).then(function (res) {
      console.log(res);
      var uviIndex = res.current.uvi;
      var imageIcon = res.current.weather[0].icon;
       var imageIcon1 = res.daily[1].weather[0].icon;
      var imageIcon2 = res.daily[2].weather[0].icon;
      var imageIcon3 = res.daily[3].weather[0].icon;
      var imageIcon4 = res.daily[4].weather[0].icon;
      var imageIcon5 = res.daily[5].weather[0].icon;
      var imageUrl = `https://openweathermap.org/img/w/${imageIcon}.png`;
      var imageUrl1 = `https://openweathermap.org/img/w/${imageIcon1}.png`;
      var imageUrl2 = `https://openweathermap.org/img/w/${imageIcon2}.png`;
      var imageUrl3 = `https://openweathermap.org/img/w/${imageIcon3}.png`;
      var imageUrl4 = `https://openweathermap.org/img/w/${imageIcon4}.png`;
      var imageUrl5 = `https://openweathermap.org/img/w/${imageIcon5}.png`;
      $(".icon").attr("src", imageUrl);
      $(".present-date").text(cityName + " " + moment.unix(res.current.dt).format("MM-DD-YYYY"))
      $("#humidity").text("humidity: " + res.current.humidity);
      $("#temperature").text("temperature: " + res.current.temp);
      $("#uvi").text("uvi: " + uviIndex);
      $("#wind-speed").text("wind-speed: " + res.current.wind_speed);

      if (uviIndex < 3) {
        $("#uvi").addClass("low");
      } else if (uviIndex >= 3 && uviIndex < 8) {
        $("#uvi").addClass("medium");
      } else {
        $("#uvi").addClass("high");
      }

      $(".icon1").attr("src", imageUrl1);
      $(".icon2").attr("src", imageUrl2);
      $(".icon3").attr("src", imageUrl3);
      $(".icon4").attr("src", imageUrl4);
      $(".icon5").attr("src", imageUrl5);
      $(".date1").text(moment.unix(res.daily[1].dt).format("MM-DD-YYYY"));
      $(".date2").text(moment.unix(res.daily[2].dt).format("MM-DD-YYYY"));
      $(".date3").text(moment.unix(res.daily[3].dt).format("MM-DD-YYYY"));
      $(".date4").text(moment.unix(res.daily[4].dt).format("MM-DD-YYYY"));
      $(".date5").text(moment.unix(res.daily[5].dt).format("MM-DD-YYYY"));
      $("#humidity1").text("humidity: " + res.daily[1].humidity);
      $("#temperature1").text("temperature: " + res.daily[1].temp.max);
      $("#humidity2").text("humidity: " + res.daily[2].humidity);
      $("#temperature2").text("temperature: " + res.daily[2].temp.max);
      $("#humidity3").text("humidity: " + res.daily[3].humidity);
      $("#temperature3").text("temperature: " + res.daily[3].temp.max);
      $("#humidity4").text("humidity: " + res.daily[4].humidity);
      $("#temperature4").text("temperature: " + res.daily[4].temp.max);
      $("#humidity5").text("humidity: " + res.daily[5].humidity);
      $("#temperature5").text("temperature: " + res.daily[5].temp.max);
    });
  }

  $(".search-button").on("click", function() {
      var cityName = $("#city-input").val();
      latLot(cityName)
  })
});




