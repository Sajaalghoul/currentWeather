//consts

//api consts
const apiKey = "299de72bd69c87f6832c29637d773442";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
//dom consts
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

//fetching dtat asynchronously using this function
async function checkweather(city) {
  const response = await fetch(apiUrl + city + `&apikey=${apiKey}`);
  //handling invalid city name  error
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    // console.log(data);//help in anlyzing object structure to reach them
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    const dataweather = data.weather[0].main.toLowerCase();
    weatherIcon.src = `images/${dataweather}.png`;
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
//handling the search click event
searchBtn.addEventListener("click", () => {
  checkweather(searchBox.value);
});
