enum Weather {
  Sunny = "Sunny",
  Cloudy = "Cloudy,",
  Rainy = "Rainy",
}

interface IForecast {
  date: string;
  weather: Weather;
}

const forecast1: IForecast = { date: "2022-10-12", weather: Weather.Sunny };
const forecast2: IForecast = { date: "2022-10-13", weather: Weather.Rainy };

function getForecast(args: IForecast): void {
  console.log(`Date:${args.date} Weather : ${args.weather}`);
}

getForecast(forecast1); // Date: 2022-10-12, Weather: Sunny
getForecast(forecast2); // Date: 2022-10-13, Weather: Rainy
