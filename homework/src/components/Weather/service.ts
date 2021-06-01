import { HttpClient } from "../httpClient/index";

class WeatherService extends HttpClient {
  constructor() {
    super("http://api.openweathermap.org");
  }

  getWeather(params: {}) {
    return this.get("data/2.5/weather/", params);
  }
}

export const weatherService = new WeatherService();
