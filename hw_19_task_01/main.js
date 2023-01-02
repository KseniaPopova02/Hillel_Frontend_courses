const URL =
  "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19";
// const getData = async () => {
//   try {
//     const res = await fetch(URL);
//     const data = await res.json();

//     console.log(data);
//   } catch (error) {
//     console.log("error", e);
//   }
// };
// getData();

const convertDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const day = "0" + date.getDate();
  const month = "0" + (date.getMonth() + 1);
  const year = date.getFullYear();
  return `${day.substr(-2)}.${month.substr(-2)}.${year} `;
};

const convertTimestamp = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  let formattedTime = hours + ":" + minutes.substr(-2);
  return formattedTime;
};

const render = (data) => {
  // renderDate(data.dt);
  // renderHumidity(data.main.humidity);
  renderWeatherField(".weatherLeft__current-date", convertDate(data.dt));
  renderWeatherField(".weatherLeft__current-time", convertTimestamp(data.dt));
  renderWeatherField(".weatherLeft__humidity-span", `${data.main.humidity}%`);
  renderWeatherField(
    ".weatherLeft__pressure-span",
    `${data.main.pressure} hPa`
  );

  renderWeatherField(".weatherLeft__wind-span", `${data.wind.speed} km/h`);

  document.querySelector(
    ".weatherRight__icon"
  ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"></img>`;

  renderWeatherField(
    ".weatherRight__temperature-span",
    `${Math.ceil(data.main.temp)}°С`
  );
  renderWeatherField(".weatherRight__current-span", data.weather[0].main);
  renderWeatherField(".weather__city", data.name);
};

const renderWeatherField = (selector, value) => {
  const field = document.querySelector(selector);
  field.textContent = value;
};

// const renderDate = (date) => {
//   const currentDate = document.querySelector(".weatherLeft__current-date");
//   currentDate.textContent = convertTimestamp(date);
// };

// const renderHumidity = (humidity) => {
//   const currentHumidity = document.querySelector(".weatherLeft__humidity");
//   currentHumidity.textContent = `${humidity}%`;
// };

const getWeatherForecast = () => {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => render(data))
    .catch((e) => console.log("error", e));
};
getWeatherForecast();
