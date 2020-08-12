$(document).ready(function () {
  const getWeather = (search) => {
    console.log(search);
    const response = $.ajax({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=eb6572b343471e038cfe2ab51b4a24c4`,
      method: "GET",
      dataType: "json",
    }).done(function (results) {
      displayWeatherCard(results);
    });
  };
  const displayWeatherCard = (results) => {
    let icon = results.weather[0].icon;
    let iconURL = `http://openweathermap.org/img/wn/${icon}.png`;
    $("#content").append(
      `
        <div class="card-deck">
          <div class="card-body">
            <img src="${iconURL}"/>
            <h4 class="card-title">City: ${results.name}</h4>
            <p class="card-text">Temp: ${results.main.temp}°C</p>
            <p class="card-text">Feels like: ${results.main.feels_like}°C</p>
            <p class="card-text">Description: ${results.weather[0].description}</p>
          </div>
        </div>
    `
    );
  };

  $("form").on("submit", function (event) {
    // Recall: Form's submit. They do not listen to clicks.
    // Always remember to call preventDefault to stop page from refreshing.
    event.preventDefault();
    // Create variable userSearch and assign it to jQuery selector, retrieving it's value.
    let userSearch = $("input[type=text]").val();
    // Call on getWeather function, feeding it in argument userSearch
    getWeather(userSearch);
    // Clear input field upon submission.
    $("input[type=text]").val(" ");
  });
});
