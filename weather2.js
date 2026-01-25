function getWeather() {
  const city = document.getElementById("inputBox").value;
  const apiKey = "f680f04930827e20a8654fcbe287166b";
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(apiURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City Not Found");
      }
      return response.json();
    })

    .then((data) => {
      console.log(data);
      const weatherInfo = `<p><strong>${data.name}</strong> </p>
	  <p class = 'cloud'> <img src = "c:/Users/sneha/Downloads/cloud.png"><strong>${data.main.temp}°C</strong> </p>
      <p> <strong>${data.weather[0].description}</strong> </p>

	  <div class ="humidity-wind">
	  <p><img src = "c:/Users/sneha/Downloads/rain.png"> <strong>${data.main.humidity}%</strong> <br> humidity </p>
	  <p><img src = "c:/Users/sneha/Downloads/wind.png"> <strong>${data.wind.speed}%</strong> <br> wind-speed </p>
 </div>
 `;

      document.getElementById("weatherResult").innerHTML = weatherInfo;
    })

    .catch((error) => {
      document.getElementById("weatherResult").innerHTML =
        `<p>${error.message}</p>`;
      console.error("Error fetching weather data", error);
    });
}
