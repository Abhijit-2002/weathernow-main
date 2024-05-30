const api_key = "c8e64a01e57e3ffb3b05ce270533b0fd";

const makeIconURL = (iconID) =>
  `https://openweathermap.org/img/wn/${iconID}@2x.png`;

const getFormattedWeatherdata = async (city, units = "metric") => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=${units}`;
  const data = await fetch(url)
    .then((res) => res.json())
    .then((data) => data);

  const {
    weather,
    main: { temp , feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { country },
    name,
  } = data;

  const { description, icon } = weather[0];

  return {
    description,
    iconURL : makeIconURL(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name,
  };
};

export { getFormattedWeatherdata };
