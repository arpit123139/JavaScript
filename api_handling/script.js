document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherbtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const tempDisplay = document.getElementById("temperature");
  const descDisplay = document.getElementById("description");
  const errorDisplay = document.getElementById("error-message");
  const API_KEY = "2f8e17fd2407856f744cf2424b537b24";

  getWeatherbtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    //web Request

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });

  //   function fetchWeatherData(city) {
  //     return new Promise((resolve, reject) => {
  //       try {
  //         const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  //         const response = fetch(URL);

  //         console.log("Fetched Data");
  //         resolve(response);
  //       } catch (error) {
  //         reject();
  //       }
  //     });
  //   }
  /**
   *
   * fetch method internally handles the Promise implementation like above
   */
  async function fetchWeatherData(city) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(URL);

    if (!response.ok) throw new Error("City Not Found");

    const data = await response.json(); //It is also a promise implementation so need to give await to catch the states of the promise
    return data;
  }

  function displayWeatherData(data) {
    const { name, main, weather } = data;
    cityNameDisplay.textContent = name;

    weatherInfo.classList.remove("hidden");
    errorDisplay.classList.add("hidden");

    tempDisplay.textContent = `Temperature : ${main.temp}`;
    descDisplay.textContent = `Weather ${weather[0].description}`;
  }

  function showError() {
    weatherInfo.classList.add("hidden");
    errorDisplay.classList.remove("hidden");
  }
});
