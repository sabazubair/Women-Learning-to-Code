$(document).ready(function () {
  $("form").on("submit", function (event) {
    // Recall: Form's submit. They do not listen to clicks.
    // Always remember to call preventDefault to stop page from refreshing.
    event.preventDefault();

    let userSearch = $("input[type=text]").val();

    getWeather(userSearch);
    $("input[type=text]").val(" ");
  });

  getWeather = (query) => {
    const response = $.ajax({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${APIKEY}`,
      method: "GET",
      dataType: "json",
    });
    console.log(response);
  };

  displayWeatherCard = (results) => {
    let icon = results.weather[0].icon;
    let iconURL = `http://openweathermap.org/img/wn/${icon}.png`;
    $("#content").append(
      `
    <div class="col-12">
      <div class="card-deck">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <img src="${iconURL}"/>
            <h6 class="card-title">City: ${results.name}</p>
            <p class="card-text">Temp: ${results.main.temp}°C</p>
            <p class="card-text">Feels like: ${results.main.feels_like}°C</p>
            <p class="card-text">Description: ${results.weather[0].description}</p>
          </div>
        </div>
      </div>
    </div>
    `
    );
  };
});
